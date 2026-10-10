import { chromium } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const base=process.env.BASE_URL || 'http://localhost:3100';
await mkdir('qa',{recursive:true});
const browser=await chromium.launch({headless:true});
const report=[];
try {
  for (const width of [375,390,768,1440]) {
    const page=await browser.newPage({viewport:{width,height:900},reducedMotion:'reduce'});
    const errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    await page.goto(base,{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    const result=await page.evaluate(()=>({
      overflow:document.documentElement.scrollWidth>window.innerWidth,
      brokenImages:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src),
      missingTargets:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.querySelector(a.getAttribute('href'))).map(a=>a.textContent),
      h1:document.querySelectorAll('h1').length,
      mail:document.querySelector('a[href="mailto:norwyn.ops@gmail.com"]')!==null
    }));
    assert.equal(result.overflow,false,`Horizontal overflow at ${width}`);
    assert.deepEqual(result.brokenImages,[]);
    assert.deepEqual(result.missingTargets,[]);
    assert.equal(result.h1,1);assert.equal(result.mail,true);
    await page.getByRole('button',{name:'Entrar',exact:true}).click();
    await page.getByText('Portal em preparação',{exact:true}).waitFor({state:'visible'});
    await page.keyboard.press('Escape');
    await page.getByText('Portal em preparação',{exact:true}).waitFor({state:'hidden'});
    if(width<=900){await page.getByRole('button',{name:'Abrir menu'}).click();await page.getByRole('navigation',{name:'Principal',exact:true}).getByRole('link',{name:'Soluções',exact:true}).click();assert.equal(await page.getByRole('button',{name:'Abrir menu'}).getAttribute('aria-expanded'),'false');}
    await page.goto(base,{waitUntil:'networkidle'});
    await page.screenshot({path:`qa/${width}.png`,fullPage:true});
    assert.deepEqual(errors,[]);
    report.push({width,...result,errors});await page.close();
  }
  const page=await browser.newPage();
  const response=await page.goto(new URL('/pagina-inexistente',base).href);
  assert.equal(response.status(),404);
  await page.getByRole('heading',{name:'Página não encontrada.'}).waitFor();
  await writeFile('qa/report.json',JSON.stringify({base,viewports:report,notFound:404},null,2));
  console.log(JSON.stringify({base,viewports:report,notFound:404},null,2));
} finally {await browser.close();}
