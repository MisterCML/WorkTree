<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  title: { type: String, default: '' },
  subtitle: { type: String, default: '' },
})
</script>

<template>
  <div class="auth-shell">
    <aside class="auth-shell__brand" aria-hidden="false">
      <RouterLink to="/" class="auth-shell__logo-link">
        <span class="auth-shell__logo-mark">汶</span>
        <span class="auth-shell__logo-text">大汶科技</span>
      </RouterLink>
      <p class="auth-shell__tagline">专注企业级软件开发与数字化服务</p>
      <ul class="auth-shell__bullets">
        <li>定制开发与系统集成</li>
        <li>云原生与运维保障</li>
        <li>安全合规与可持续交付</li>
      </ul>
    </aside>
    <main class="auth-shell__panel">
      <header class="auth-shell__header">
        <h1 class="auth-shell__title">{{ title }}</h1>
        <p v-if="subtitle" class="auth-shell__subtitle">{{ subtitle }}</p>
      </header>
      <slot />
    </main>
  </div>
</template>

<style scoped>
.auth-shell {
  flex: 1;
  min-height: 0;
  display: grid;
  grid-template-columns: minmax(280px, 1fr) minmax(320px, 480px);
  background: var(--surface);
}

@media (max-width: 900px) {
  .auth-shell {
    grid-template-columns: 1fr;
  }
}

.auth-shell__brand {
  position: relative;
  padding: clamp(2rem, 5vw, 3.5rem);
  background: linear-gradient(145deg, #0c1929 0%, #132337 45%, #0d3d5c 100%);
  color: #e8f4fc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  overflow: hidden;
}

.auth-shell__brand::before {
  content: '';
  position: absolute;
  inset: -40% -20% auto auto;
  width: min(80vw, 520px);
  height: min(80vw, 520px);
  background: radial-gradient(circle, rgba(14, 165, 233, 0.22) 0%, transparent 65%);
  pointer-events: none;
}

.auth-shell__logo-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: inherit;
  z-index: 1;
}

.auth-shell__logo-mark {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #0ea5e9, #0284c7);
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 1.35rem;
  letter-spacing: 0.02em;
  box-shadow: 0 8px 24px rgba(14, 165, 233, 0.35);
}

.auth-shell__logo-text {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.06em;
}

.auth-shell__tagline {
  position: relative;
  margin: 0;
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.88;
  max-width: 22rem;
  z-index: 1;
}

.auth-shell__bullets {
  position: relative;
  margin: 0;
  padding-left: 1.15rem;
  font-size: 0.925rem;
  line-height: 1.75;
  opacity: 0.82;
  z-index: 1;
}

.auth-shell__bullets li {
  margin-bottom: 0.35rem;
}

.auth-shell__panel {
  padding: clamp(2rem, 5vw, 3rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--surface-elevated);
  box-shadow: -12px 0 40px rgba(15, 23, 42, 0.06);
}

.auth-shell__header {
  margin-bottom: 1.75rem;
}

.auth-shell__title {
  margin: 0;
  font-size: 1.65rem;
  font-weight: 600;
  color: var(--text-strong);
  letter-spacing: -0.02em;
}

.auth-shell__subtitle {
  margin: 0.5rem 0 0;
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.5;
}
</style>
