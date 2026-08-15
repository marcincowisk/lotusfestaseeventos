# Lótus Festas e Eventos — novo site

Redesenho completo do site institucional da Lótus Festas e Eventos (Next.js 14, App Router, TypeScript, Tailwind CSS). Ver [docs/STRATEGY.md](docs/STRATEGY.md) para a auditoria do site anterior, sitemap, wireframe da home, direção visual e design system que guiaram esta implementação.

## ⚠️ Antes de rodar: este ambiente de desenvolvimento não tinha Node.js/npm

Todo o código deste projeto foi escrito à mão, arquivo por arquivo, sem poder rodar `npm install`, `next dev`, `next build`, `tsc --noEmit` ou o Lighthouse aqui para validar automaticamente. Revisei manualmente imports, tipos e convenções do Next 14 com cuidado redobrado, mas **o primeiro passo obrigatório é rodar isso localmente** antes de considerar qualquer página "pronta":

```bash
npm install
npm run typecheck
npm run lint
npm run dev
```

Se algo não compilar, é o próximo passo a corrigir — avise para eu ajustar.

## Setup

1. `npm install`
2. Copie `.env.example` para `.env.local` e preencha o que for possível (ver seção abaixo — vários campos são `TODO` de propósito).
3. `npm run dev` e acesse `http://localhost:3000`.

## O que está marcado como `TODO` (de propósito — nada foi inventado)

O site atual (`lotusfestaseeventos.com.br`) não publica telefone, e-mail ou depoimentos em texto pesquisável, e não há portfólio de eventos reais disponível. Seguindo a regra de nunca inventar informação, este projeto fica **intencionalmente incompleto** nestes pontos até receber os dados oficiais:

| Onde | O que falta | Como preencher |
|---|---|---|
| `data/site.ts` | `NEXT_PUBLIC_WHATSAPP_NUMBER` | Já tem um fallback real (`551238834446`, achado na sinalização do site atual) — **confirme com o cliente** se é o número certo/habilitado como WhatsApp Business. Definir a env var sobrescreve o fallback. |
| `.env.local` | `CONTACT_RECEIVER_EMAIL` + `RESEND_API_KEY` | Para o formulário de orçamento enviar e-mail de verdade (ver `app/contato/actions.ts`). Sem isso, o formulário valida e mostra um erro honesto orientando o WhatsApp como alternativa. |
| `data/events.ts` | Eventos reais do portfólio | Array vazio de propósito — formato de exemplo comentado no próprio arquivo. |
| `data/before-after.ts` | Fotos reais de antes/depois | Array vazio — a seção só aparece na home quando houver itens aqui. |
| Todo o site | Fotografia e vídeo reais | Usamos `<ImagePlaceholder />` (`components/ui/ImagePlaceholder.tsx`) no lugar de banco de imagens genérico — cada placeholder já indica a legenda exata da foto que deve entrar ali. Trocar por `next/image` apontando para o arquivo real. |
| `app/layout.tsx` (schema) / `data/site.ts` | Áreas de atuação exatas, telefone, endereço completo | Confirmar com o cliente antes de publicar como fato. |

Busque `TODO` no projeto para encontrar todos os pontos:

```bash
grep -rn "TODO" app components data lib --include="*.ts*"
```

## Estrutura

```
/app                    Rotas (App Router) — cada pasta é uma página/rota
/components/ui          Primitivas de design system (Button, Container, SectionHeader...)
/components/layout      Header, MobileMenu, Footer, WhatsAppButton
/components/sections    Blocos de página (Hero, SolutionsShowcase, EventsGrid...)
/components/forms       ContactForm
/data                   Conteúdo estruturado (services, equipment, events, process, site config)
/lib                     Utilitários, validação (zod), WhatsApp, Schema.org
/types                   Tipos compartilhados
/hooks                   useReveal (scroll-reveal via IntersectionObserver)
```

`/data` foi desenhado para ser trocado por um CMS no futuro sem reescrever a UI — os componentes só consomem os tipos em `/types`, nunca a fonte dos dados diretamente.

## Stack e decisões técnicas

- **Next.js 14 App Router + TypeScript + Tailwind** — conforme solicitado.
- **Sem Framer Motion**: as animações de scroll-reveal usam `IntersectionObserver` puro (`hooks/useReveal.ts`) + CSS (`.reveal` em `app/globals.css`), respeitando `prefers-reduced-motion` automaticamente. Isso evita uma dependência de runtime só para fades — se quiser transições de página mais elaboradas depois, Framer Motion pode entrar de forma pontual.
- **Formulário de contato**: Server Action (`app/contato/actions.ts`) com validação Zod server-side, honeypot anti-spam, e chamada direta via `useTransition` no client (evitei `useFormState`/`useFormStatus` do `react-dom` por dependerem de uma build canary do React — `useTransition` é 100% estável no React 18).
- **Nenhuma secret no client**: `RESEND_API_KEY` só é lida dentro do módulo `"use server"`. `data/site.ts` (importado por componentes client) só lê variáveis `NEXT_PUBLIC_*`.
- **SEO**: `app/sitemap.ts`, `app/robots.ts`, metadata por página, JSON-LD (`LocalBusiness`, `Service`, `BreadcrumbList`) em `lib/schema.ts` — sem `AggregateRating`/avaliações inventadas.
- **Ícones**: SVGs inline em `components/ui/icons.tsx` em vez de uma lib de ícones, para manter o bundle enxuto.

## Próximos passos recomendados

1. Rodar `npm install && npm run dev` e revisar visualmente em 375px, 768px, 1280px e 1920px.
2. Preencher `.env.local` com WhatsApp e e-mail oficiais.
3. Substituir os `ImagePlaceholder` por fotos/vídeos reais (ver legendas de cada um).
4. Popular `data/events.ts` com os primeiros cases reais.
5. Rodar Lighthouse (`npm run build && npm run start`) e ajustar conforme as metas do briefing (Performance/Acessibilidade/SEO > 90-95).
6. Configurar GA4/GTM/Meta Pixel só após decidir a estratégia de consentimento de cookies (ver `app/politica-de-privacidade`).
