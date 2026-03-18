# Croatá Tour - Pontos Turísticos

[![Next.js](https://img.shields.io/badge/Next.js-16-black.svg)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-blue.svg)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue.svg)](https://typescriptlang.org)

**Croatá Tour** é um site moderno e responsivo para promover os principais pontos turísticos do município de Croatá, Ceará. Com design dark theme elegante, cards interativos e links para mais informações.

## 🎯 Pontos Turísticos Destacados
- **Igreja Matriz Nossa Senhora das Dores** - Turismo religioso
- **Mirante Toca da Onça** - Natureza intocada
- **Encontro dos Rios** - Espetáculo natural (Rio Piaus + Inhuçu)
- **Entre outros**

## 🚀 Tecnologias
- **Next.js 16** + Turbopack (rápido HMR)
- **Tailwind CSS v4** com tema custom (azul #0439b6, verde #179600, amarelo #ffc725)
- **TypeScript 5**
- **Shadcn/UI** components customizados
- **Geist Font**

## 📱 Funcionalidades
- Design responsivo (mobile-first)
- Cards com imagens, badges e botões link (target="_blank")
- Tema dark global com variáveis CSS
- Favicon oficial de Croatá

## 🛠️ Como Rodar

```bash
# Instalar dependências
pnpm install

# Development
pnpm dev

# Build
pnpm build

# Start production
pnpm start
```

Abra [http://localhost:3000](http://localhost:3000).

## 📁 Estrutura
```
src/
├── app/           # App Router
├── components/ui/ # Shadcn-like buttons, cards, badges
└── components/features/ # TouristCard
```

## 🎨 Customizações
- **Cores**: Definidas em `globals.css` (@theme)
- **Buttons**: Links externos abrem em nova aba
- **Cards**: Imagens oficiais Croatá.ce.gov.br

## 🚀 Deploy
[Croatá-Tour](https://croata-tour.vercel.app)

## 📚 Case de Estudo Técnico
Este projeto é um **case de estudo técnico** focado em **Design System** moderno:
- Tailwind v4 com @theme custom
- Componentes reutilizáveis (Shadcn/UI)
- Next.js 16 + Turbopack
- TypeScript rigoroso + acessibilidade
- Tema dark responsivo

**Feito por Bandeira Dev** 👨‍💻




