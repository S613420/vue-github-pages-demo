# Vue GitHub Pages Demo

A simple Vue.js 3 application demonstrating CI/CD deployment to GitHub Pages using GitHub Actions.

## 🚀 Features

- Vue 3 with Vite build system
- Automated deployment to GitHub Pages
- CI/CD pipeline with GitHub Actions
- Clean, educational codebase

## 🛠️ Tech Stack

- **Frontend**: Vue 3, Vite
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Deployment**: Automated via `peaceiris/actions-gh-pages`

## 📁 Project Structure

```
vue-github-pages-demo/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── components/
│   ├── App.vue
│   └── main.js
├── public/
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 Live Demo

The application is automatically deployed to: `https://S613420.github.io/vue-github-pages-demo`

## 📝 Learning Objectives

This project demonstrates:
- Setting up a Vue 3 project with Vite
- Configuring GitHub Actions for CI/CD
- Deploying to GitHub Pages
- Branch-based deployment strategies
