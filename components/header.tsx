'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
const links = [['Sobre','#sobre'],['Soluções','#solucoes'],['Como trabalhamos','#metodo'],['Ecossistema','#ecossistema'],['Contato','#contato']];
export function Brand({light=false}: {light?:boolean}) {
  return <a className={`brand${light?' brand-light':''}`} href="#inicio" aria-label="Norwyn, início"><img src="/brand/symbol-dark.webp" alt="" width="36" height="38"/><img className="wordmark" src="/brand/wordmark-dark.webp" alt="Norwyn" width="162" height="21"/></a>;
}
export default function Header() {
  const [open,setOpen] = useState(false);
  const menu = useRef<HTMLButtonElement>(null);
  useEffect(()=>{
    const close = (event:KeyboardEvent)=>{if(event.key==='Escape'){if(open){setOpen(false);menu.current?.focus();}}};
    window.addEventListener('keydown',close);
    return ()=>window.removeEventListener('keydown',close);
  },[open]);
  return <header className="site-header"><div className="header-inner"><Brand/><nav aria-label="Principal" className={open?'navigation is-open':'navigation'} id="navigation">{links.map(([label,href])=><a key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav><div className="header-actions"><div className="portal-wrap"><a className="portal-button" href="https://app.norwyn.com.br">Entrar <ArrowUpRight size={15}/></a></div><button ref={menu} className="menu-button" aria-label={open?'Fechar menu':'Abrir menu'} aria-expanded={open} aria-controls="navigation" onClick={()=>setOpen(!open)}>{open?<X size={23}/>:<Menu size={23}/>}</button></div></div></header>;
}
