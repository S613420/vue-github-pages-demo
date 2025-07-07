<template>
  <div class="platform-overview">
    <h3 class="overview-heading">Platform Overview</h3>
    <p class="overview-description">This deployment platform demonstrates modern CI/CD capabilities:</p>
    
    <cv-structured-list class="capabilities-list">
      <cv-structured-list-body>
        <cv-structured-list-row>
          <cv-structured-list-item>
            <cv-checkmark-filled16 class="capability-icon" />
            Vue 3 Composition API
          </cv-structured-list-item>
        </cv-structured-list-row>
        <cv-structured-list-row>
          <cv-structured-list-item>
            <cv-checkmark-filled16 class="capability-icon" />
            Component-based architecture
          </cv-structured-list-item>
        </cv-structured-list-row>
        <cv-structured-list-row>
          <cv-structured-list-item>
            <cv-checkmark-filled16 class="capability-icon" />
            Responsive design system
          </cv-structured-list-item>
        </cv-structured-list-row>
        <cv-structured-list-row>
          <cv-structured-list-item>
            <cv-checkmark-filled16 class="capability-icon" />
            IBM Carbon Design System
          </cv-structured-list-item>
        </cv-structured-list-row>
        <cv-structured-list-row>
          <cv-structured-list-item>
            <cv-checkmark-filled16 class="capability-icon" />
            Automated deployment pipeline
          </cv-structured-list-item>
        </cv-structured-list-row>
      </cv-structured-list-body>
    </cv-structured-list>
    
    <div class="system-status">
      <h4 class="status-heading">System Status</h4>
      <div class="status-grid">
        <div class="status-metric">
          <span class="metric-label">Build Status:</span>
          <cv-tag kind="green">Operational</cv-tag>
        </div>
        <div class="status-metric">
          <span class="metric-label">Deployment:</span>
          <cv-tag kind="green">Active</cv-tag>
        </div>
        <div class="status-metric">
          <span class="metric-label">Environment:</span>
          <cv-tag kind="blue">{{ environment }}</cv-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { CheckmarkFilled16 } from '@carbon/icons-vue'

export default {
  name: 'WelcomeMessage',
  components: {
    CheckmarkFilled16
  },
  setup() {
    const environment = computed(() => {
      return import.meta.env.MODE === 'production' ? 'Production' : 'Development'
    })

    return {
      environment
    }
  }
}
</script>

<style scoped>
.platform-overview {
  background-color: var(--cds-layer-01);
  border: 1px solid var(--cds-border-subtle);
  border-radius: var(--cds-border-radius);
  padding: var(--cds-spacing-06);
  margin: var(--cds-spacing-06) 0;
}

.overview-heading {
  font-size: var(--cds-productive-heading-03-font-size);
  font-weight: var(--cds-productive-heading-03-font-weight);
  color: var(--cds-text-primary);
  margin-bottom: var(--cds-spacing-04);
}

.overview-description {
  font-size: var(--cds-body-short-01-font-size);
  color: var(--cds-text-secondary);
  margin-bottom: var(--cds-spacing-05);
}

.capabilities-list {
  margin-bottom: var(--cds-spacing-06);
}

.capability-icon {
  color: var(--cds-support-success);
  margin-right: var(--cds-spacing-03);
  vertical-align: middle;
}

.cv-structured-list-item {
  display: flex;
  align-items: center;
  font-size: var(--cds-body-short-01-font-size);
  color: var(--cds-text-primary);
}

.system-status {
  padding-top: var(--cds-spacing-05);
  border-top: 1px solid var(--cds-border-subtle);
}

.status-heading {
  font-size: var(--cds-productive-heading-02-font-size);
  font-weight: var(--cds-productive-heading-02-font-weight);
  color: var(--cds-text-primary);
  margin-bottom: var(--cds-spacing-04);
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--cds-spacing-04);
}

.status-metric {
  display: flex;
  flex-direction: column;
  gap: var(--cds-spacing-02);
}

.metric-label {
  font-size: var(--cds-label-01-font-size);
  font-weight: var(--cds-label-01-font-weight);
  color: var(--cds-text-secondary);
}

@media (max-width: 768px) {
  .platform-overview {
    padding: var(--cds-spacing-05);
  }
  
  .status-grid {
    grid-template-columns: 1fr;
  }
}
</style>
