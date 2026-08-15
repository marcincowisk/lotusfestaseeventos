# Estratégia — Redesenho Lótus Festas e Eventos

## 0. Atualização de conteúdo (rodada 2)

A auditoria inicial (seção 1) usou raspagem automática de texto do site atual, que não capturou o carrossel de slides da home nem sub-seções renderizadas via imagem. O cliente enviou prints desses slides depois, revelando dados reais adicionais que foram incorporados:

- **WhatsApp/telefone**: `12 3883 4446` (aparece com ícone do WhatsApp na sinalização "Atendimento: segunda a sexta, das 9h às 17h"). Usado como fallback em `data/site.ts` — **confirmar com o cliente** se está habilitado como WhatsApp Business antes de divulgar amplamente.
- **3 categorias de solução que faltavam**: Shows (produção de banda/DJ ao vivo, com lista real de artistas atendidos), Audiovisual (Painel de LED P3 4K + projeção Epson Laser até 200"), Pista de dança iluminada em LED — a categoria "Shows" foi absorvida por "Som", a pista por "Estruturas", e "Audiovisual" virou uma 6ª categoria própria.
- **Especificações reais de gerador**: HIMOINSA trifásico, 65kVA–160kVA, modos Stand By e Full Time (10h/12h).
- **Prova social real**: lista de artistas/bandas já atendidos (Maneva, Nando Reis, Marcelo Falcão, Planta e Raiz, Bruninho e David, Turma do Pagode, Di Propósito, Amado Batista, Latino, Henrique e Diego) — publicada na página da solução "Som".

## 1. Auditoria do site atual

Site analisado diretamente em produção: `lotusfestaseeventos.com.br` — SPA de página única, navegação por âncora (`#inicio`, `#sobre`, `#solucoes`, `#equipamentos`, `#contato`).

**Dados reais confirmados** (únicos usados como fato no novo site — o resto é `TODO`):
- Fundada em 2011, por Denys; sediada em Caraguatatuba, Litoral Norte de São Paulo; foco em casamentos na praia e eventos da região.
- Serviços: coberturas/estruturas Box Truss, pisos, palcos, geradores, sonorização, iluminação para DJ/bandas, luz cênica, sonorização de cerimônia, toldo para pista de dança.
- 16 equipamentos de locação (varal de lâmpadas, globo espelhado, máquina de bolhas, haze, fog, gelo seco, ParLed, COB, Brute, Set LED, Par 38, Pin Beam, Move Beam, B-Eye/Beam Wash, Strobo LED, canhão seguidor).
- Único canal social confirmado: Instagram `@lotusfestaseeventos`.
- **Não publicado em nenhum lugar do site**: telefone, WhatsApp, e-mail, endereço completo, depoimentos, número de eventos/clientes, avaliações.

**Problemas identificados:**

| Área | Problema |
|---|---|
| UX/Hierarquia | "Missão/Visão/Valores" abre a seção institucional — burocrático; nenhuma prova visual de eventos reais protagoniza a página |
| Navegação | Página única com âncoras — sem URLs indexáveis por serviço/evento, sem breadcrumbs, sem páginas de equipamento individuais |
| Conversão | Único CTA é formulário genérico (Nome/E-mail/Local) via GET, sem WhatsApp, sem qualificação de lead |
| Portfólio | Inexistente — slider genérico, sem cases, local ou serviços prestados |
| Conteúdo | Linguagem vende "equipamento" em vez de resultado/atmosfera; "5 vantagens" em lista burocrática |
| Mobile | Sem estratégia mobile-first aparente |
| SEO | Meta description truncada listando keywords; sem Schema.org, sitemap ou páginas por cidade/serviço |
| Visual | Identidade genérica de "locadora" — não comunica tecnologia, cinema ou sofisticação |

**Mantido:** essência da história (2011, Caraguatatuba, casamentos na praia), catálogo técnico completo, lista real de equipamentos.
**Removido:** Missão/Visão/Valores como abertura institucional, lista numerada de "vantagens", formulário GET simplista.
**Reorganizado:** equipamentos → catálogo técnico em página própria; serviços → 6 categorias (Estruturas, Som, Iluminação, Energia, Audiovisual, Experiências) na home — ver seção 0 sobre a categoria Audiovisual, adicionada numa segunda rodada de conteúdo.

## 2. Sitemap

```
/                          Home
/solucoes                  Visão geral das 6 categorias
/solucoes/estruturas
/solucoes/som
/solucoes/iluminacao
/solucoes/energia
/solucoes/audiovisual
/solucoes/efeitos
/eventos                   Portfólio editorial
/eventos/[slug]             Case individual
/equipamentos               Catálogo técnico filtrável
/casamentos                 Landing dedicada (alta intenção comercial)
/sobre
/contato
/politica-de-privacidade
```

Jornada principal: **Home → Soluções ou Eventos (prova) → Contato/WhatsApp**.

## 3. Wireframe da Home

1. Header transparente → sólido com blur no scroll
2. Hero fullscreen (vídeo/placeholder editorial), headline + 2 CTAs, indicador de scroll
3. Prova de experiência ("Desde 2011...", sem números inventados)
4. Soluções — 6 categorias em showcase editorial (não grid genérico)
5. Seção editorial de impacto (frase de posicionamento fullbleed)
6. Eventos — grid assimétrico estilo magazine (estado vazio elegante até haver cases reais)
7. Antes/Depois — só renderiza quando houver material real (`data/before-after.ts`)
8. Casamentos — seção dedicada com CTA próprio
9. Processo — 6 passos
10. Formulário de contato — qualificação completa do lead
11. Footer minimalista, só com dados confirmados

## 4. Direção visual e Design System

**Paleta** — extraída da identidade real da Lótus (logo enviado pelo cliente: preto, vermelho e branco). O vermelho de tela não é o hex exato do logo; foi calibrado para passar WCAG AA tanto como texto sobre o fundo preto quanto como fundo de botão com texto branco (contraste ≈ 4.5–4.7:1 nos dois sentidos):

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#0A0A0A` | fundo base (preto do logo) |
| `--color-surface` | `#140F0F` | seções alternadas |
| `--color-primary` | `#E12622` | acentos, CTAs, botões (vermelho da marca) |
| `--color-accent` | `#B01D1A` | hover de botões/links (vermelho mais escuro) |
| `--color-text` | `#F7F6F3` | texto principal (branco do logo) |
| `--color-muted` | `#A6A29D` | texto secundário |
| `--color-success` | `#5E8C6A` | feedback positivo de formulário |
| `--color-error` | `#D2572E` | feedback de erro — deliberadamente um âmbar/terracota, não o vermelho de marca, para não confundir "erro" com o CTA principal |

**Tipografia:** `Fraunces` (display serifado editorial) + `Inter` (sans, UI/corpo). Escala fluida via `clamp()` (ver `tailwind.config.ts`).
**Espaçamento:** base 4/8px, seções com `py-24` a `py-40` em desktop.
**Radius:** mínimo (0–4px).
**Sombra:** quase inexistente — profundidade por contraste de fundo.
**Movimento:** fade + reveal on-scroll via IntersectionObserver, sem scroll-jacking, respeitando `prefers-reduced-motion`.

## 5. Estratégia mobile

Mobile-first: hero com fallback estático em conexões lentas; menu fullscreen com CTA de orçamento e WhatsApp fixos; showcase de soluções em lista vertical (sem depender de hover); formulário com campos claros; CTA de WhatsApp flutuante que recolhe ao rolar para baixo.

## 6. Estratégia de conversão (CRO)

- Dois CTAs sempre visíveis: **Solicitar orçamento** (formulário rico) e **WhatsApp** (conversa imediata).
- Formulário qualifica o lead (tipo de evento, data, cidade, convidados, serviços de interesse).
- Prova social via portfólio real (nunca depoimentos inventados).
- Mensagem de WhatsApp pré-preenchida contextual (`lib/whatsapp.ts`).

## 7. Nota técnica

O ambiente onde este projeto foi implementado não tinha Node.js/npm instalados — o código foi escrito à mão e não pôde ser compilado/testado automaticamente aqui. Ver [README.md](../README.md) para os comandos de setup e validação local.
