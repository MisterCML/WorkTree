<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="vm">
    <main class="vm__main">
      <p class="vm__eyebrow">关于大汶科技</p>
      <h1 class="vm__title">愿景与宗旨</h1>
      <p class="vm__intro">
        我们以长期主义与客户成功为导向，在技术与服务上持续投入，与企业共同成长。
      </p>

      <section class="vm__card" aria-labelledby="vision-heading">
        <h2 id="vision-heading" class="vm__card-title">公司愿景</h2>
        <p class="vm__card-lead">
          成为值得信赖的企业级软件与数字化伙伴，让复杂业务在可靠、可扩展的系统上顺畅运转。
        </p>
        <ul class="vm__list">
          <li>以工程化与可运维性为核心，交付经得起时间检验的产品与服务。</li>
          <li>与客户建立透明、可持续的合作关系，在迭代中持续创造价值。</li>
          <li>关注行业趋势与最佳实践，将成熟方案与定制开发有机结合。</li>
        </ul>
      </section>

      <section class="vm__card" aria-labelledby="mission-heading">
        <h2 id="mission-heading" class="vm__card-title">公司宗旨</h2>
        <p class="vm__card-lead">
          以客户业务目标为先，以专业与诚信为底线，用可落地的技术方案解决真实问题。
        </p>
        <ul class="vm__list">
          <li><strong>客户为先</strong>：深入理解场景与约束，方案贴合实际、可执行、可度量。</li>
          <li><strong>质量为本</strong>：在架构、安全与交付流程上不打折扣，对结果负责。</li>
          <li><strong>协作共赢</strong>：与团队、伙伴及客户开放沟通，追求共同成功。</li>
        </ul>
      </section>

      <div class="vm__footer">
        <RouterLink class="vm__link vm__link--large" to="/">返回首页</RouterLink>
      </div>
    </main>
  </div>
</template>

<style scoped>
.vm {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.vm__link {
  padding: 0.5rem 0.85rem;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.95rem;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;
}

.vm__link:hover {
  color: var(--text-strong);
  background: rgba(14, 165, 233, 0.08);
}

.vm__link--large {
  font-size: 1rem;
}

.vm__main {
  flex: 1;
  max-width: 720px;
  margin: 0 auto;
  padding: clamp(2rem, 5vw, 3rem) clamp(1.25rem, 4vw, 2.5rem) clamp(3rem, 8vw, 4rem);
}

.vm__eyebrow {
  margin: 0 0 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0284c7;
}

.vm__title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 700;
  color: var(--text-strong);
  letter-spacing: -0.03em;
  line-height: 1.25;
}

.vm__intro {
  margin: 0 0 2rem;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-muted);
}

.vm__card {
  margin-bottom: 1.5rem;
  padding: 1.5rem clamp(1.25rem, 3vw, 1.75rem);
  border-radius: 12px;
  background: var(--surface-elevated);
  border: 1px solid var(--border);
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
}

.vm__card-title {
  margin: 0 0 0.75rem;
  font-size: 1.15rem;
  font-weight: 600;
  color: var(--text-strong);
}

.vm__card-lead {
  margin: 0 0 1rem;
  font-size: 1rem;
  line-height: 1.65;
  color: var(--text-muted);
}

.vm__list {
  margin: 0;
  padding-left: 1.25rem;
  color: var(--text-muted);
  line-height: 1.75;
}

.vm__list li {
  margin-bottom: 0.5rem;
}

.vm__list li:last-child {
  margin-bottom: 0;
}

.vm__list strong {
  color: var(--text-strong);
  font-weight: 600;
}

.vm__footer {
  margin-top: 2rem;
  padding-top: 0.5rem;
}
</style>
