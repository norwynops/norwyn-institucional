# Norwyn Institucional V1

Site institucional independente da Norwyn. Next.js, TypeScript, Inter local e exportacao estatica, sem banco de dados, credenciais ou backend de formularios.

## Desenvolvimento

Requer Node.js 20.9 ou superior.

```sh
npm ci
npm run assets
npm run dev -- --port 3100
npm run check
npm run build
npm run verify
```

`npm run verify` usa o servidor em `http://localhost:3100` ou `BASE_URL` para validar os viewports 375, 390, 768 e 1440, menu, portal, imagens, links e overflow. Instale o navegador com `npx playwright install chromium` quando necessario. Capturas ficam em `qa/` (ignorado).

## Destino autorizado

- GitHub: `norwynops/norwyn-institucional`, conta `norwyn.ops@gmail.com`.
- Vercel: `norwynops-8012's projects`, `team_tLWLTjKk3LQCE9J6mxZ3EVHb`.
- Projeto: `norwyn-institucional`.
- Supabase nao e utilizado.

Nenhum dominio personalizado deve ser adicionado nesta etapa. O projeto experimental `prj_paRixfclzSp7vLIsBAy8KQRsdwmG` permanece fora do escopo.

## Identidade

Sete JPGs originais em `brand/originals/`, com hashes SHA-256 em `brand/originals-manifest.json`. Derivados em `public/brand/`: cena oficial do simbolo, logotipo claro, recortes do simbolo e lettering escuros e imagem social. Icones PNG derivados do simbolo original. O script faz recortes e compressao, sem redesenhar a marca. Lettering Norwyn e raster oficial; Inter e a fonte de apoio local. O mockup HTML enviado permanece apenas na copia local, excluido do repositorio publico por conter referencias a outra operacao.

Paleta do manual: #0B1F3A, #D0DEE8, #D4A64A, #0D1117, #222831, #667280, #F2F4F7. Os recortes pequenos do manual sao destinados ao header/footer, nunca ampliados como imagem principal.

## Estados e publicacao

Contato real via `mailto:norwyn.ops@gmail.com`. Portal apenas informa preparacao e destino futuro `app.norwyn.com.br`. Solucoes e iniciativas nao sao apresentadas como produtos prontos ou cases de clientes. Privacidade e termos aparecem como em preparacao, sem documentos ficticios.

Esta versao temporaria usa `noindex` e robots com bloqueio de rastreamento. O sitemap e metadados usam `SITE_URL`, ou `VERCEL_URL` no build. Na futura publicacao oficial: aprovar conteudo e documentos juridicos, configurar `SITE_URL`, habilitar indexacao e canonical, validar producao e somente entao planejar o dominio em uma entrega separada.
