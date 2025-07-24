# motorbike-frontend

This project is the **frontend** of the full-stack application [motorbike-shop-backend-nodejs](https://github.com/salvador-lopez/motorbike-shop-backend-nodejs), which provides the backend API for managing a motorbike e-commerce platform.

Built with **Vue 3**, this frontend is developed with a strong focus on accessibility, modern developer experience, and scalability. The project uses **Vite**, **Pinia** for state management, **Storybook** for UI documentation, and includes a thorough ESLint setup.

## 🚀 Goals

- Deliver an accessible, modern, and responsive UI
- Promote reusability and maintainability with component-driven design
- Align tightly with the backend architecture for seamless integration

## 🧩 Tech Stack
- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/)
- [Cypress](https://www.cypress.io/)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
pnpm test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
pnpm build
pnpm test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```
# parking-fe
