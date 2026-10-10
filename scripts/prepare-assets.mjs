import sharp from 'sharp';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
const original = 'brand/originals';
const target = 'public/brand';
await mkdir(target, { recursive: true });
const source = (time) => path.join(original, `Imagem do ChatGPT 10 de out. de 2026, ${time}.jpg`);
await sharp(source('15_43_27')).webp({quality:92}).toFile(`${target}/symbol-scene.webp`);
await sharp(source('15_44_22')).extract({left:350,top:140,width:830,height:570}).resize(1000).webp({quality:94}).toFile(`${target}/logo-light.webp`);
await sharp(source('15_44_22')).resize(1200,630,{fit:'contain',background:'#ffffff'}).jpeg({quality:92}).toFile(`${target}/social.jpg`);
// These crops retain the official raster shapes; no paths or letters are redrawn.
const { data: letters, info } = await sharp(source('15_43_57')).extract({left:923,top:110,width:281,height:45}).ensureAlpha().raw().toBuffer({resolveWithObject:true});
for(let i=0;i<letters.length;i+=4){const brightness=Math.max(letters[i],letters[i+1],letters[i+2]);letters[i+3]=Math.round(Math.max(0,Math.min(255,(brightness-100)*255/100)));}
await sharp(letters,{raw:info}).webp({lossless:true}).toFile(`${target}/wordmark-dark.webp`);
await sharp(source('15_43_57')).extract({left:765,top:49,width:139,height:140}).webp({quality:96}).toFile(`${target}/symbol-dark.webp`);
await sharp(source('15_44_22')).extract({left:580,top:140,width:390,height:425}).resize(180,180,{fit:'contain',background:'#fff'}).png().toFile('public/apple-touch-icon.png');
await sharp(source('15_44_22')).extract({left:580,top:140,width:390,height:425}).resize(48,48,{fit:'contain',background:'#fff'}).png().toFile('public/icon.png');
const manifest = [];
for (const name of await readdir(original)) {
  if (!name.endsWith('.jpg')) continue;
  const bytes = await readFile(path.join(original,name));
  manifest.push({file:name,bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')});
}
await writeFile('brand/originals-manifest.json', JSON.stringify(manifest,null,2)+'\n');
console.log('Official assets prepared. Originals preserved; SHA-256 manifest written.');
