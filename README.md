# asett.io

## 法則

### ゴールの法則 / Gall's Law

> 正常に動作する複雑なシステムは、例外なく正常に動作する単純なシステムから発展したものである。
> ゼロから作り出された複雑なシステムが正常に動作することはなく、またそれを修正して動作させるようにもできない。正常に動作する単純なシステムから構築を始めなければならない。
> _John Gall_

## 開発の原則 / Principles

このプロジェクトでは以下の原則を重視します。

### KISS原則 / Keep It Simple, Stupid

- コードは常に単純に保ち、過度な複雑さを避ける。
- 1つの関数・コンポーネントの役割は1つにする（目安: 50行以内）。

### YAGNI原則 / You Ain't Gonna Neet It

- 今必要のない機能は作らない。予測に基づいた実装は避ける。
- 後で使うかも」という理由で作らない、残さない。

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
