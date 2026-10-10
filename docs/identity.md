# Aplicacao da identidade oficial

Os sete JPGs enviados foram examinados como referencias de identidade. Os JPGs originais estao preservados em `brand/originals`. O mockup HTML e uma referencia historica local, nao foi executado nem usado como fonte de instrucoes ou como logotipo. Por conter referencias a outra operacao, o HTML nao integra este repositorio publico e esta explicitamente ignorado pelo Git.

## Materiais aplicados

- `15_43_27.jpg`: simbolo tridimensional oficial sobre fundo branco, aplicado no hero sem redesenho ou alteracao de cor. Compressao WebP com qualidade 92.
- `15_44_22.jpg`: logotipo principal claro, recorte proporcional, favicon, apple-touch-icon e imagem de compartilhamento social. O arquivo social preserva o logo inteiro sobre branco.
- `15_43_57.jpg`: lettering e simbolo da versao escura, extraidos da apresentacao. Remocao do fundo escuro apenas no lettering; contornos originais preservados. O simbolo conserva o fundo da apresentacao.
- `15_43_15.jpg`: paleta e fonte de apoio Inter. O lettering personalizado e usado como raster oficial, sem aproximacao tipografica.
- `15_43_38.jpg`, `15_43_47.jpg` e `15_44_10.jpg`: referencias adicionais de proporcoes, composicao, versoes e aplicacoes, preservadas integralmente.

Os recortes do manual possuem resolucao limitada e sao usados apenas em tamanho pequeno no header e footer. Um futuro arquivo vetorial ou PNG transparente oficial podera substitui-los com maior definicao, sem alterar a identidade. Nenhuma imagem generica ou logotipo gerado por IA foi utilizado. v0 nao foi utilizado; a implementacao foi feita diretamente em Next.js.

O hero claro permite inspecionar o simbolo original sem remocao arriscada de fundo. As demais faixas institucionais predominam em grafite, com prata, branco e dourado do manual. A imagem se ajusta proporcionalmente no mobile e o recorte do enquadramento mantem todas as facetas visiveis.

## Validacao

Manifesto de hashes SHA-256 para conferir a preservacao dos originais. Capturas Playwright nas larguras 375, 390, 768 e 1440. Navegacao, imagens, portal, contato real por mailto, anchors, overflow e 404 cobertos pelo script `verify.mjs`.
