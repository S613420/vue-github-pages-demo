<template>
  <div id="app">
    <header class="header">
      <h1>🚀 Vue GitHub Pages Demo</h1>
      <p>A simple Vue.js 3 app deployed with GitHub Actions</p>
    </header>

    <main class="main">
      <div class="card">
        <h2>✅ Deployment Success!</h2>
        <p>This Vue.js application was automatically built and deployed using:</p>
        
        <div class="tech-stack">
          <div class="tech-item">
            <h3>Frontend</h3>
            <p>Vue 3 + Vite</p>
          </div>
          <div class="tech-item">
            <h3>Hosting</h3>
            <p>GitHub Pages</p>
          </div>
          <div class="tech-item">
            <h3>CI/CD</h3>
            <p>GitHub Actions</p>
          </div>
        </div>

        <WelcomeMessage />
        
        <div class="actions">
          <button @click="incrementCounter" class="btn btn-primary">
            Clicked {{ counter }} times
          </button>
          <button @click="resetCounter" class="btn btn-secondary">
            Reset
          </button>
        </div>
      </div>

      <div class="card">
        <h2>🔗 Links</h2>
        <div class="links">
          <a href="https://vuejs.org/" target="_blank" class="link">Vue.js Docs</a>
          <a href="https://vitejs.dev/" target="_blank" class="link">Vite Docs</a>
          <a href="https://docs.github.com/en/pages" target="_blank" class="link">GitHub Pages</a>
        </div>
      </div>
    </main>

    <footer class="footer">
      <p>Built with ❤️ using Vue.js and deployed via GitHub Actions</p>
      <p>Last deployed: {{ deploymentTime }}</p>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue'
import WelcomeMessage from './components/WelcomeMessage.vue'

export default {
  name: 'App',
  components: {
    WelcomeMessage
  },
  setup() {
    const counter = ref(0)
    const deploymentTime = ref(new Date().toLocaleString())

    const incrementCounter = () => {
      counter.value++
    }

    const resetCounter = () => {
      counter.value = 0
    }

    return {
      counter,
      deploymentTime,
      incrementCounter,
      resetCounter
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  text-align: center;
  padding: 2rem;
  color: white;
  background: rgba(0, 0, 0, 0.1);
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.main {
  flex: 1;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-2px);
}

.card h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.tech-stack {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.tech-item {
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px solid #e9ecef;
}

.tech-item h3 {
  color: #495057;
  margin-bottom: 0.5rem;
}

.actions {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: 500;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover {
  background: #0056b3;
  transform: translateY(-1px);
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #545b62;
  transform: translateY(-1px);
}

.links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.link {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: #e3f2fd;
  color: #1976d2;
  text-decoration: none;
  border-radius: 6px;
  border: 1px solid #bbdefb;
  transition: all 0.2s ease;
}

.link:hover {
  background: #1976d2;
  color: white;
  transform: translateY(-1px);
}

.footer {
  text-align: center;
  padding: 2rem;
  color: white;
  background: rgba(0, 0, 0, 0.1);
  margin-top: auto;
}

.footer p {
  opacity: 0.9;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
  }
  
  .main {
    padding: 1rem;
  }
  
  .card {
    padding: 1.5rem;
  }
  
  .actions {
    flex-direction: column;
  }
  
  .links {
    flex-direction: column;
  }
}
</style>
