<template>
  <div class="welcome-message">
    <h3>🎉 Welcome to the Demo!</h3>
    <p>This component demonstrates:</p>
    <ul>
      <li>✅ Vue 3 Composition API</li>
      <li>✅ Component-based architecture</li>
      <li>✅ Responsive design</li>
      <li>✅ Modern CSS styling</li>
      <li>✅ GitHub Actions deployment</li>
    </ul>
    
    <div class="status">
      <div class="status-item">
        <span class="status-label">Build Status:</span>
        <span class="status-value success">✅ Success</span>
      </div>
      <div class="status-item">
        <span class="status-label">Deployment:</span>
        <span class="status-value success">✅ Live</span>
      </div>
      <div class="status-item">
        <span class="status-label">Environment:</span>
        <span class="status-value">{{ environment }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'WelcomeMessage',
  setup() {
    const environment = computed(() => {
      return import.meta.env.MODE === 'production' ? '🌐 Production' : '🛠️ Development'
    })

    return {
      environment
    }
  }
}
</script>

<style scoped>
.welcome-message {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 12px;
  padding: 2rem;
  color: white;
  margin: 2rem 0;
}

.welcome-message h3 {
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.welcome-message ul {
  list-style: none;
  margin: 1rem 0;
}

.welcome-message li {
  padding: 0.3rem 0;
  font-size: 0.95rem;
}

.status {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.status-item {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.status-label {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 0.3rem;
}

.status-value {
  font-weight: bold;
  font-size: 1rem;
}

.status-value.success {
  color: #90ee90;
}

@media (max-width: 768px) {
  .welcome-message {
    padding: 1.5rem;
  }
  
  .status {
    grid-template-columns: 1fr;
  }
}
</style>
