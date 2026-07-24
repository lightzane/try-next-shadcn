# Try Next.js and shadcn/ui

## How this project was created

See also `git log` for commits history.

### Next.js from scratch

```bash
pnpm create next-app@latest

✔ What is your project named? … try-next-shadcn
✔ Would you like to use the recommended Next.js defaults? › Yes, use recommended defaults
Creating a new Next.js app in ...

Using pnpm.

Initializing project with template: app-tw
```

> This project was updated to use a `src` folder.
> Thus, moving `app` folder within `src` folder

Observe `pnpm-workspace.yaml` and change to `false` on unnecessary builds to allow

### Add shadcn/ui

1. Go to https://ui.shadcn.com/create
2. Customize your UI (e.g. style: **Luma**)
3. Click **Get Code** and select with **Next.js** _template_ and **Radix UI** as _base_.
4. Use pointer on buttons
5. Then copy command (example below)

```bash
pnpm dlx shadcn@latest init --preset b0 --base radix --template next --pointer
```

Observe the generated [components.json](./components.json),
this will be used as a reference by Shadcn CLI
or commands such as `pnpm dlx shadcn@latest add dropdown-menu`.

#### Inter font feature settings

- Check [app/globals.css](./src/app/globals.css#L54) for `--default-font-feature-settings`
- Check [app/layout.tsx](./src/app/layout.tsx#L33) for `<head>`

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

#### Dark Theme

Reference: https://ui.shadcn.com/docs/dark-mode/next

#### Adding components

Search for the desired components in: https://ui.shadcn.com/docs/components

```bash
pnpm dlx shadcn@latest add dropdown-menu
```

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
