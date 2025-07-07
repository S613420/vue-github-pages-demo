<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="bottom-nav">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="['nav-item', { active: activeTab === tab.id }]"
      >
        <span class="nav-icon">{{ tab.icon }}</span>
        <span class="nav-label">{{ tab.label }}</span>
      </button>
    </nav>

    <!-- Main Content -->
    <main class="main-content">
      <!-- Profile Screen -->
      <div v-if="activeTab === 'profile'" class="screen">
        <div class="profile-header">
          <div class="profile-avatar">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" alt="Profile" />
          </div>
          <h2 class="profile-name">Yev Lednov</h2>
          <p class="profile-subtitle">UX/UI designer. Open to the new projects. ⭐</p>
          
          <div class="profile-stats">
            <div class="stat">
              <span class="stat-number">1002</span>
              <span class="stat-label">Following</span>
            </div>
            <div class="stat">
              <span class="stat-number">1984</span>
              <span class="stat-label">Followers</span>
            </div>
          </div>

          <div class="profile-actions">
            <button class="btn-primary">Edit Profile</button>
          </div>
        </div>

        <div class="select-type-section">
          <h3>Select Type</h3>
          <div class="type-options">
            <div class="type-option">
              <span class="option-icon">⚡</span>
              <span class="option-text">Skills</span>
            </div>
            <div class="type-option">
              <span class="option-icon">📊</span>
              <span class="option-text">Recent Activity</span>
            </div>
            <div class="type-option">
              <span class="option-icon">👥</span>
              <span class="option-text">Community</span>
            </div>
            <div class="type-option">
              <span class="option-icon">➕</span>
              <span class="option-text">New Post</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Activity Screen -->
      <div v-if="activeTab === 'activity'" class="screen">
        <div class="screen-header">
          <button class="back-btn">←</button>
          <h2>Recent activity</h2>
          <button class="menu-btn">⋯</button>
        </div>

        <div class="activity-list">
          <div class="activity-item">
            <div class="activity-avatar">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=vitaly" alt="Vitaly" />
            </div>
            <div class="activity-content">
              <div class="activity-header">
                <span class="activity-name">Vitaly Akagratiy</span>
                <span class="activity-time">1 min ago</span>
              </div>
              <div class="activity-amount">$10.00</div>
              <div class="activity-type">/tip</div>
            </div>
            <button class="thanks-btn">Thanks</button>
          </div>

          <div class="activity-item">
            <div class="activity-avatar">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=maksym" alt="Maksym" />
            </div>
            <div class="activity-content">
              <div class="activity-header">
                <span class="activity-name">Maksym Kendzirai</span>
                <span class="activity-time">2 hrs ago</span>
              </div>
              <div class="activity-amount">$90.00</div>
              <div class="activity-type">/purchase</div>
            </div>
            <button class="thanks-btn">Thanked</button>
          </div>

          <div class="activity-item">
            <div class="activity-avatar">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=roseline" alt="Roseline" />
            </div>
            <div class="activity-content">
              <div class="activity-header">
                <span class="activity-name">Roseline Kumbiral</span>
                <span class="activity-time">1 hr ago</span>
              </div>
              <div class="activity-amount">$20.00</div>
              <div class="activity-type">/purchase</div>
            </div>
            <button class="thanks-btn">Thanks</button>
          </div>
        </div>
      </div>

      <!-- Posts Screen -->
      <div v-if="activeTab === 'posts'" class="screen">
        <div class="screen-header">
          <button class="back-btn">←</button>
          <h2>Posts</h2>
          <button class="menu-btn">⋯</button>
        </div>

        <div class="post-item">
          <div class="post-header">
            <div class="post-avatar">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=mudrah" alt="Mudrah" />
            </div>
            <div class="post-meta">
              <span class="post-author">@Mudrah</span>
              <span class="post-time">1 hr ago</span>
            </div>
          </div>
          
          <div class="post-content">
            <h3>Mudrah Kumbiral</h3>
            <p>In some cases, you may see a third-party API requests failure, which comes from a non-vendor application.</p>
            <div class="post-image">
              <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=200&fit=crop" alt="Post image" />
            </div>
          </div>

          <div class="post-actions">
            <button class="post-action">💬</button>
            <button class="post-action">❤️</button>
            <button class="post-action">🔄</button>
            <button class="post-action">📤</button>
          </div>
        </div>
      </div>

      <!-- Community Screen -->
      <div v-if="activeTab === 'community'" class="screen">
        <div class="screen-header">
          <h2>UX designers group</h2>
          <span class="group-time">12 hrs ago</span>
        </div>

        <div class="community-members">
          <div class="member-item">
            <div class="member-avatar">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=adam1" alt="Adam" />
            </div>
            <div class="member-info">
              <span class="member-name">Adam Pozion</span>
              <span class="member-handle">@adampaul_</span>
            </div>
            <div class="member-status online"></div>
          </div>

          <div class="member-item">
            <div class="member-avatar">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=adam2" alt="Adam Rich" />
            </div>
            <div class="member-info">
              <span class="member-name">Adam Rich</span>
              <span class="member-handle">@adamrich_designer</span>
            </div>
            <div class="member-status online"></div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const activeTab = ref('profile')
    
    const tabs = [
      { id: 'profile', icon: '👤', label: 'Profile' },
      { id: 'activity', icon: '📊', label: 'Activity' },
      { id: 'posts', icon: '📝', label: 'Posts' },
      { id: 'community', icon: '👥', label: 'Community' }
    ]

    return {
      activeTab,
      tabs
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
  background-color: #1a1a1a;
  color: #ffffff;
  line-height: 1.4;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  background-color: #1a1a1a;
}

/* Navigation */
.bottom-nav {
  display: flex;
  background-color: #2a2a2a;
  border-top: 1px solid #333;
  padding: 0.5rem 0;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 400px;
  z-index: 100;
}

.nav-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s ease;
}

.nav-item.active {
  color: #FFD700;
}

.nav-icon {
  font-size: 1.2rem;
}

.nav-label {
  font-size: 0.7rem;
  font-weight: 500;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 1rem;
  padding-bottom: 5rem; /* Space for bottom nav */
  overflow-y: auto;
}

.screen {
  width: 100%;
}

/* Screen Headers */
.screen-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
}

.screen-header h2 {
  font-size: 1.3rem;
  font-weight: 600;
}

.back-btn, .menu-btn {
  background: none;
  border: none;
  color: #FFD700;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.group-time {
  font-size: 0.8rem;
  color: #666;
}

/* Profile Screen */
.profile-header {
  text-align: center;
  margin-bottom: 2rem;
}

.profile-avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  overflow: hidden;
  border: 3px solid #FFD700;
}

.profile-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.profile-subtitle {
  color: #999;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.profile-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.stat {
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 1.3rem;
  font-weight: 600;
  color: #FFD700;
}

.stat-label {
  font-size: 0.8rem;
  color: #999;
}

.profile-actions {
  margin-bottom: 2rem;
}

.btn-primary {
  background-color: #FFD700;
  color: #1a1a1a;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.btn-primary:hover {
  transform: translateY(-1px);
}

/* Select Type Section */
.select-type-section h3 {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #FFD700;
}

.type-options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.type-option {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #2a2a2a;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.type-option:hover {
  background-color: #333;
}

.option-icon {
  font-size: 1.2rem;
}

.option-text {
  font-weight: 500;
}

/* Activity Screen */
.activity-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #2a2a2a;
  border-radius: 12px;
}

.activity-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.activity-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.activity-content {
  flex: 1;
}

.activity-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.25rem;
}

.activity-name {
  font-weight: 600;
  font-size: 0.9rem;
}

.activity-time {
  font-size: 0.8rem;
  color: #666;
}

.activity-amount {
  font-size: 1.1rem;
  font-weight: 600;
  color: #FFD700;
}

.activity-type {
  font-size: 0.8rem;
  color: #999;
}

.thanks-btn {
  background-color: #FFD700;
  color: #1a1a1a;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
}

/* Posts Screen */
.post-item {
  background-color: #2a2a2a;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
}

.post-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.post-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.post-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-meta {
  display: flex;
  flex-direction: column;
}

.post-author {
  font-weight: 600;
  font-size: 0.9rem;
}

.post-time {
  font-size: 0.8rem;
  color: #666;
}

.post-content h3 {
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.post-content p {
  color: #ccc;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.post-image {
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.post-image img {
  width: 100%;
  height: auto;
  display: block;
}

.post-actions {
  display: flex;
  gap: 1rem;
}

.post-action {
  background: none;
  border: none;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.post-action:hover {
  background-color: #333;
}

/* Community Screen */
.community-members {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.member-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background-color: #2a2a2a;
  border-radius: 12px;
}

.member-avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.member-name {
  font-weight: 600;
  font-size: 0.9rem;
}

.member-handle {
  font-size: 0.8rem;
  color: #666;
}

.member-status {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}

.member-status.online {
  background-color: #4CAF50;
}

/* Responsive Design */
@media (max-width: 480px) {
  .main-content {
    padding: 0.75rem;
    padding-bottom: 5rem;
  }
  
  .profile-stats {
    gap: 1.5rem;
  }
  
  .activity-item {
    padding: 0.75rem;
  }
  
  .post-item {
    padding: 0.75rem;
  }
}

@media (min-width: 401px) {
  #app {
    border-left: 1px solid #333;
    border-right: 1px solid #333;
  }
}
</style>
