# Slack-antonio

Slack clone built with Next.js and Convex

## Next.js

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Development

Run first the backend with:

```bash
npx convex dev
```

Run the frontend with:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Manage the Convex project slack-antonio at [https://dashboard.convex.dev/t/thomas-chappel/slack-antonio](https://dashboard.convex.dev/t/thomas-chappel/slack-antonio).

## Authentication

Authentication is done with [Convex Auth, App Router with SSA](https://labs.convex.dev/auth/setup).

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## TODOs

- implement better password authentication (verify email, reset password, etc.);
- delete account;
- add tests;
