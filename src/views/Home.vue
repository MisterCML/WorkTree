<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
    <header class="home__nav">
      <RouterLink to="/" class="home__brand">
        <span class="home__mark">汶</span>
        <span>大汶科技</span>
      </RouterLink>
      <nav class="home__links" aria-label="主导航">
        <RouterLink class="home__link" to="/login">登录</RouterLink>
        <RouterLink class="home__btn" to="/register">注册</RouterLink>
      </nav>
    </header>
    <section class="home__hero">
      <h1 class="home__title">企业级 IT 软件开发服务</h1>
      <p class="home__lead">
        大汶科技助力客户构建可靠、可扩展的软件系统，覆盖定制开发、系统集成与持续运维。
      </p>
      <div class="home__cta">
        <RouterLink class="home__btn home__btn--primary" to="/register">创建账户</RouterLink>
        <RouterLink class="home__link home__link--large" to="/login">已有账户？登录</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
}

.home__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem clamp(1.25rem, 4vw, 2.5rem);
  border-bottom: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
}

.home__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: var(--text-strong);
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 0.04em;
}

.home__mark {
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

.home__links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.home__link {
  padding: 0.5rem 0.85rem;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.95rem;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;
}

.home__link:hover {
  color: var(--text-strong);
  background: rgba(14, 165, 233, 0.08);
}

.home__link--large {
  font-size: 1rem;
}

.home__btn {
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

.home__btn:hover {
  border-color: #bae6fd;
  box-shadow: 0 4px 14px rgba(14, 165, 233, 0.15);
}

.home__btn--primary {
  background: linear-gradient(135deg, #0ea5e9, #0284c7);
  color: #fff;
  border: none;
  box-shadow: 0 4px 16px rgba(14, 165, 233, 0.35);
}

.home__btn--primary:hover {
  box-shadow: 0 6px 22px rgba(14, 165, 233, 0.45);
}

.home__hero {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 640px;
  margin: 0 auto;
  padding: clamp(2rem, 6vw, 4rem) clamp(1.25rem, 4vw, 2.5rem);
  text-align: center;
}

.home__title {
  margin: 0 0 1rem;
  font-size: clamp(1.75rem, 4vw, 2.25rem);
  font-weight: 700;
  color: var(--text-strong);
  letter-spacing: -0.03em;
  line-height: 1.25;
}

.home__lead {
  margin: 0 0 2rem;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-muted);
}

.home__cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>
