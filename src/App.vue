<template>
  <div id="app">
    <cv-header aria-label="Deployment Platform">
      <cv-skip-to-content href="#main-content">Skip to content</cv-skip-to-content>
      <cv-header-name href="/" prefix="">Deployment Platform</cv-header-name>
      <cv-header-nav>
        <cv-header-menu-item href="/dashboard">Dashboard</cv-header-menu-item>
        <cv-header-menu-item href="/deployments">Deployments</cv-header-menu-item>
        <cv-header-menu-item href="/monitor">Monitor</cv-header-menu-item>
        <cv-header-menu-item href="/settings">Settings</cv-header-menu-item>
      </cv-header-nav>
    </cv-header>

    <main id="main-content" class="main-content">
      <div class="page-header">
        <h1 class="page-title">CI/CD Management Console</h1>
        <p class="page-subtitle">Automated deployment pipeline for modern applications</p>
      </div>

      <div class="content-grid">
        <cv-tile class="status-tile">
          <h2 class="tile-heading">Deployment Status</h2>
          <p class="tile-description">Current build and deployment pipeline status</p>
          
          <cv-structured-list>
            <cv-structured-list-heading>
              <cv-structured-list-header-item>Component</cv-structured-list-header-item>
              <cv-structured-list-header-item>Status</cv-structured-list-header-item>
              <cv-structured-list-header-item>Technology</cv-structured-list-header-item>
            </cv-structured-list-heading>
            <cv-structured-list-body>
              <cv-structured-list-row>
                <cv-structured-list-item>Frontend Application</cv-structured-list-item>
                <cv-structured-list-item>
                  <cv-tag kind="green">Active</cv-tag>
                </cv-structured-list-item>
                <cv-structured-list-item>Vue 3 + Vite</cv-structured-list-item>
              </cv-structured-list-row>
              <cv-structured-list-row>
                <cv-structured-list-item>Build Pipeline</cv-structured-list-item>
                <cv-structured-list-item>
                  <cv-tag kind="green">Successful</cv-tag>
                </cv-structured-list-item>
                <cv-structured-list-item>GitHub Actions</cv-structured-list-item>
              </cv-structured-list-row>
              <cv-structured-list-row>
                <cv-structured-list-item>Hosting Platform</cv-structured-list-item>
                <cv-structured-list-item>
                  <cv-tag kind="green">Online</cv-tag>
                </cv-structured-list-item>
                <cv-structured-list-item>GitHub Pages</cv-structured-list-item>
              </cv-structured-list-row>
            </cv-structured-list-body>
          </cv-structured-list>

          <WelcomeMessage />
          
          <div class="actions-section">
            <h3 class="actions-heading">Operations</h3>
            <div class="button-group">
              <cv-button @click="incrementCounter" kind="primary">
                Execute Operation ({{ counter }})
              </cv-button>
              <cv-button @click="resetCounter" kind="secondary">
                Reset Counter
              </cv-button>
            </div>
          </div>
        </cv-tile>

        <cv-tile class="resources-tile">
          <h2 class="tile-heading">Platform Resources</h2>
          <p class="tile-description">Documentation and external resources</p>
          
          <cv-structured-list>
            <cv-structured-list-body>
              <cv-structured-list-row>
                <cv-structured-list-item>
                  <cv-link href="https://vuejs.org/" target="_blank">Vue.js Documentation</cv-link>
                </cv-structured-list-item>
              </cv-structured-list-row>
              <cv-structured-list-row>
                <cv-structured-list-item>
                  <cv-link href="https://vitejs.dev/" target="_blank">Vite Build Tool</cv-link>
                </cv-structured-list-item>
              </cv-structured-list-row>
              <cv-structured-list-row>
                <cv-structured-list-item>
                  <cv-link href="https://docs.github.com/en/pages" target="_blank">GitHub Pages Hosting</cv-link>
                </cv-structured-list-item>
              </cv-structured-list-row>
              <cv-structured-list-row>
                <cv-structured-list-item>
                  <cv-link href="https://carbondesignsystem.com/" target="_blank">Carbon Design System</cv-link>
                </cv-structured-list-item>
              </cv-structured-list-row>
            </cv-structured-list-body>
          </cv-structured-list>
        </cv-tile>
      </div>

      <cv-tile class="deployment-info">
        <h2 class="tile-heading">Deployment Information</h2>
        <div class="info-grid">
          <div class="info-item">
            <span class="info-label">Environment:</span>
            <span class="info-value">Production</span>
          </div>
          <div class="info-item">
            <span class="info-label">Last Deployment:</span>
            <span class="info-value">{{ deploymentTime }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">Build Version:</span>
            <span class="info-value">v1.0.0</span>
          </div>
          <div class="info-item">
            <span class="info-label">Platform:</span>
            <span class="info-value">Vue.js 3 + Carbon Design System</span>
          </div>
        </div>
      </cv-tile>
    </main>
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
/* Import IBM Plex font */
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

/* Reset and base styling using Carbon Design System patterns */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'IBM Plex Sans', sans-serif;
  background-color: var(--cds-background);
  color: var(--cds-text-primary);
  line-height: 1.5;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Main content area */
.main-content {
  flex: 1;
  padding: var(--cds-spacing-07);
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

/* Page header */
.page-header {
  margin-bottom: var(--cds-spacing-08);
}

.page-title {
  font-size: var(--cds-productive-heading-04-font-size);
  font-weight: var(--cds-productive-heading-04-font-weight);
  line-height: var(--cds-productive-heading-04-line-height);
  margin-bottom: var(--cds-spacing-03);
  color: var(--cds-text-primary);
}

.page-subtitle {
  font-size: var(--cds-body-long-01-font-size);
  color: var(--cds-text-secondary);
}

/* Content grid layout */
.content-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--cds-spacing-06);
  margin-bottom: var(--cds-spacing-07);
}

/* Tile styling */
.status-tile,
.resources-tile,
.deployment-info {
  padding: var(--cds-spacing-06);
}

.tile-heading {
  font-size: var(--cds-productive-heading-03-font-size);
  font-weight: var(--cds-productive-heading-03-font-weight);
  margin-bottom: var(--cds-spacing-04);
  color: var(--cds-text-primary);
}

.tile-description {
  font-size: var(--cds-body-short-01-font-size);
  color: var(--cds-text-secondary);
  margin-bottom: var(--cds-spacing-06);
}

/* Actions section */
.actions-section {
  margin-top: var(--cds-spacing-07);
  padding-top: var(--cds-spacing-06);
  border-top: 1px solid var(--cds-border-subtle);
}

.actions-heading {
  font-size: var(--cds-productive-heading-02-font-size);
  font-weight: var(--cds-productive-heading-02-font-weight);
  margin-bottom: var(--cds-spacing-05);
  color: var(--cds-text-primary);
}

.button-group {
  display: flex;
  gap: var(--cds-spacing-05);
  flex-wrap: wrap;
}

/* Deployment info grid */
.info-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--cds-spacing-05);
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: var(--cds-spacing-02);
}

.info-label {
  font-size: var(--cds-label-01-font-size);
  font-weight: var(--cds-label-01-font-weight);
  color: var(--cds-text-secondary);
}

.info-value {
  font-size: var(--cds-body-short-01-font-size);
  color: var(--cds-text-primary);
  font-weight: 500;
}

/* Responsive design */
@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .main-content {
    padding: var(--cds-spacing-05);
  }
  
  .page-title {
    font-size: var(--cds-productive-heading-03-font-size);
  }
  
  .button-group {
    flex-direction: column;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
}

/* Ensure proper spacing for Carbon components */
.cv-structured-list {
  margin-bottom: var(--cds-spacing-05);
}

.cv-tile {
  margin-bottom: var(--cds-spacing-06);
}
</style>
