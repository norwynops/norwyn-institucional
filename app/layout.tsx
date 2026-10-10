import type { Metadata, Viewport } from 'next';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import './globals.css';

const description = 'Conectamos dados, processos e tecnologia para transformar operações complexas em decisões claras, ações inteligentes e resultados mensuráveis.';
const base = process.env.SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3100');
export const metadata: Metadata = {
  metadataBase: new URL(base), title: 'Norwyn | Informação em direção', description,
  robots: { index: false, follow: false },
  openGraph: {title:'Norwyn | Informação em direção',description,locale:'pt_BR',type:'website',images:[{url:'/brand/social.jpg',width:1200,height:630,alt:'Logotipo oficial da Norwyn'}]},
  twitter: {card:'summary_large_image',title:'Norwyn | Informação em direção',description,images:['/brand/social.jpg']},
  icons: {icon:'/icon.png',apple:'/apple-touch-icon.png'}
};
export const viewport: Viewport = {themeColor:'#0D1117'};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
