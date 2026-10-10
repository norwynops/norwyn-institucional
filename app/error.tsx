'use client';
export default function ErrorPage({reset}:{reset:()=>void}){return <main className="error-page"><p className="eyebrow">NORWYN</p><h1>Não foi possível carregar esta página.</h1><button className="button button-gold" onClick={reset}>Tentar novamente</button></main>;}
