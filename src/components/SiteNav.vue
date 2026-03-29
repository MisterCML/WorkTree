<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="site-nav">
    <RouterLink to="/" class="site-nav__brand">
      <span class="site-nav__mark">汶</span>
      <span>大汶科技</span>
    </RouterLink>
    <nav class="site-nav__links" aria-label="主导航">
      <RouterLink class="site-nav__link" to="/projects">交付案例</RouterLink>
      <RouterLink class="site-nav__link" to="/vision">愿景与宗旨</RouterLink>
      <RouterLink class="site-nav__link" to="/login">登录</RouterLink>
      <RouterLink class="site-nav__btn" to="/register">注册</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem clamp(1.25rem, 4vw, 2.5rem);
  border-bottom: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  flex-shrink: 0;
}

.site-nav__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: var(--text-strong);
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 0.04em;
}

.site-nav__mark {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, #0ea5e9, #0284c7);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 1rem;
  font-weight: 700;
}

.site-nav__links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.site-nav__link {
  padding: 0.5rem 0.85rem;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.95rem;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;
}

.site-nav__link:hover {
  color: var(--text-strong);
  background: rgba(14, 165, 233, 0.08);
}

.site-nav__link.router-link-active {
  color: var(--text-strong);
  font-weight: 500;
}

.site-nav__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid var(--border);
  color: var(--text-strong);
  background: #fff;
  transition: box-shadow 0.2s, border-color 0.2s;
}

.site-nav__btn:hover {
  border-color: #bae6fd;
  box-shadow: 0 4px 14px rgba(14, 165, 233, 0.15);
}

.site-nav__btn.router-link-active {
  border-color: #bae6fd;
  box-shadow: 0 2px 10px rgba(14, 165, 233, 0.12);
}
</style>
