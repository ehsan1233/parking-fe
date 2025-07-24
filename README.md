# Parking-Frontend

This project is the **frontend** of a [parking spot availability app](https://github.com/ehsan1233/parking).

Built with **Vue 3**, this app uses the user's geolocation to display free parking spots within a 500-meter radius on a map powered by **Leaflet** and **OpenStreetMap** tiles. Users can also report newly discovered free parking spots.


Development was speeded up using [**Junie**](https://www.jetbrains.com/junie/), [**Continue.dev**](https://continue.dev/), and [**Ollama**](https://ollama.com/), enabling AI-assisted workflows and local language models directly in the IDE.

## 🚀 Features

- Detects a user's current location
- Displays free parking spots within a 500-meter radius using custom icons
- Uses real-time geolocation API and REST integration

## 🧩 Tech Stack

- [Vue 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/) – state management
- [Vite](https://vitejs.dev/) – build tool
- [TypeScript](https://www.typescriptlang.org/)
- [Leaflet](https://leafletjs.com/) – interactive maps
- [Vuetify](https://vuetifyjs.com/) – Material Design components
- [ESLint](https://eslint.org/) – linting and code standards
- [Vitest](https://vitest.dev/) – unit testing
- [Cypress](https://www.cypress.io/) – E2E testing

## 🧑‍💻 Recommended IDE Setup

Use [**WebStorm**](https://www.jetbrains.com/webstorm/) with:

- ✅ Built-in support for Vue 3 and TypeScript
- 🧠 [**Junie**](https://www.jetbrains.com/junie/) or [**Continue.dev**](https://continue.dev/) for AI-assisted development
- ⚙️ [**Ollama**](https://ollama.com/) running locally to support Continue.dev in your IDE

> 💡 Make sure WebStorm's JavaScript and TypeScript plugins are enabled for the best Vue + TypeScript experience.
## 🛠 Project Setup

```bash
pnpm install       # Install dependencies
pnpm dev           # Start the dev server
```