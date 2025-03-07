# bookclub-management-ui
UI for book club management system. Create your club, add members, books, ratings.

This project built with a [Next.js](https://nextjs.org) framework bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

After cloning this repository, you can run the app locally or in the cloud using either [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers) or the traditional setup method:

## Setup

### 🚢 **Dev Containers (Recommended)**

Why use Dev Containers? Because you can never fully trust any code downloaded from the internet before reviewing it — even if it’s open-source. But now there is no need to review every line before running the app with a risk of missing something. Instead, run it in an isolated environment for safety and peace of mind!

First, make sure Docker Desktop is installed and running.

1.  Open the repository in VS Code.
2.  When prompted, **"Reopen in Container"** to automatically set up the development environment.

### 🔧 **Manual Setup**

1.  Ensure **Node.js v22** or later is installed.
2.  Install or update **Corepack** and **pnpm**:

```
npm install -g corepack@latest && corepack enable
```

## Commands

```bash
pnpm dev # dev mode
pnpm build
pnpm start # prod mode, run it after build step
pnpm lint
```

Default port is `3000`.
