# Área 71 · IEADAM — Visão & Projetos 2027

Portal estratégico interativo construído com arquitetura **Motion Design** para apresentação, alinhamento ministerial e acompanhamento dos projetos de 2027 da **Área 71 · IEADAM (Rede Norte · Núcleo 17)**.

## Destaques da Estrutura

- **11 Capítulos Integrados:** Visão Geral, As 12 Portas, Escola Afiando o Machado, 5 Redes Geracionais (Mulheres, Jovens, Homens, Geração 60+ e Kids & Famílias), Seminário de Louvor, Células & Evangelismo e Ensino, Oração & Vigília.
- **Bússola Orbital 360° das 12 Portas:** Navegação radial interativa pelos 12 meses de 2027, datas fixas e marcos.
- **Motor de Motion:** Canvas vivo de aurora + partículas reativas, smooth scroll (Lenis), animações sincronizadas no scroll (GSAP + ScrollTrigger), spotlight tracking, micro 3D tilt, botões magnéticos e cortina cinematográfica entre capítulos.
- **Modo Palco / Keynote (`P`):** Visual limpo para projetor e telão, navegação por setas (`←` `→`) e troca de fases (`1`–`4`).
- **Command Palette (`Ctrl + K`)** e **Índice em Tela Cheia (`M`)** com preview ao vivo.
- **Checklists com persistência local** (`localStorage`) e tema dual (**Obsidiana Cinematográfica** e **Alabastro Editorial**).

## Estrutura de Arquivos

| Arquivo | Função |
| --- | --- |
| `index.html` | Estrutura principal e carregamento das bibliotecas |
| `data.js` | **Todos os textos, títulos, versículos, datas, 12 Portas, fases e checklists** |
| `styles.css` | Design system, temas claro/escuro e responsividade |
| `motion.js` | Motor de animações, canvas vivo, física de ponteiro e transições |
| `app.js` | Lógica de navegação, componentes interativos e persistência |

## Como Editar os Textos

Todo o conteúdo editorial está concentrado em `data.js`. Para atualizar textos, datas, versículos ou itens de checklist, edite apenas esse arquivo — a estrutura visual e as animações permanecem intactas.

## Como Visualizar Localmente

- **Direto no navegador:** dê duplo clique em `index.html`.
- **Ou via servidor local:** rode `npx serve` na pasta do projeto e acesse a URL exibida.

## Publicação Rápida (GitHub Pages)

1. No repositório do GitHub, acesse **Settings → Pages**.
2. Em **Source**, selecione **Deploy from a branch**.
3. Escolha a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
4. Em poucos instantes o portal estará no ar com link público!
