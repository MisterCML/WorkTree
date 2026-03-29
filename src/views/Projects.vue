<script setup>
import { RouterLink } from 'vue-router'

const projects = [
  {
    name: '区域医疗信息平台',
    sector: '医疗健康',
    year: '2024',
    summary:
      '为多级医疗机构搭建统一患者主索引与检验互认接口，完成与省级平台的对接与数据治理。',
    tags: ['系统集成', 'HL7/FHIR', '数据治理'],
  },
  {
    name: '制造执行与仓储一体化',
    sector: '智能制造',
    year: '2023',
    summary:
      'MES 与 WMS 联动，实现工单、物料与质检全流程可追溯，支撑多工厂协同排产。',
    tags: ['MES', 'WMS', '工业互联网'],
  },
  {
    name: '金融风控决策引擎',
    sector: '金融科技',
    year: '2023',
    summary:
      '规则引擎与模型服务解耦，支持灰度发布与审计留痕，满足等保与监管报送要求。',
    tags: ['规则引擎', '合规', '微服务'],
  },
  {
    name: '智慧园区综合运营平台',
    sector: '智慧城市',
    year: '2022',
    summary:
      '整合门禁、能耗、安防与工单，提供可视化运营大屏与移动端巡检闭环。',
    tags: ['IoT', '可视化', '运维'],
  },
  {
    name: '跨境电商平台中台',
    sector: '零售电商',
    year: '2022',
    summary:
      '商品、订单、库存与多币种结算中台化，支撑多站点扩张与促销策略编排。',
    tags: ['中台', '电商', '国际化'],
  },
  {
    name: '政务一网通办升级',
    sector: '政务数字化',
    year: '2021',
    summary:
      '事项标准化与流程再造，对接电子证照与统一身份，缩短办事链路并提升可观测性。',
    tags: ['政务', '流程引擎', '高可用'],
  },
]
</script>

<template>
  <div class="projects">
    <header class="projects__nav">
      <RouterLink to="/" class="projects__brand">
        <span class="projects__mark">汶</span>
        <span>大汶科技</span>
      </RouterLink>
      <nav class="projects__links" aria-label="主导航">
        <RouterLink class="projects__link projects__link--active" to="/projects">交付案例</RouterLink>
        <RouterLink class="projects__link" to="/login">登录</RouterLink>
        <RouterLink class="projects__btn" to="/register">注册</RouterLink>
      </nav>
    </header>

    <main class="projects__main">
      <section class="projects__intro" aria-labelledby="projects-heading">
        <h1 id="projects-heading" class="projects__title">过往交付项目</h1>
        <p class="projects__lead">
          以下为大汶科技近年参与或主导交付的代表性项目，涵盖定制开发、系统集成与持续运维，具体范围以合同约定为准。
        </p>
      </section>

      <ul class="projects__grid">
        <li v-for="(p, i) in projects" :key="i" class="projects__card">
          <div class="projects__card-head">
            <span class="projects__sector">{{ p.sector }}</span>
            <span class="projects__year">{{ p.year }}</span>
          </div>
          <h2 class="projects__name">{{ p.name }}</h2>
          <p class="projects__summary">{{ p.summary }}</p>
          <ul class="projects__tags" aria-label="技术标签">
            <li v-for="t in p.tags" :key="t" class="projects__tag">{{ t }}</li>
          </ul>
        </li>
      </ul>
    </main>
  </div>
</template>

<style scoped>
.projects {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
}

.projects__nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem clamp(1.25rem, 4vw, 2.5rem);
  border-bottom: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
}

.projects__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: var(--text-strong);
  font-weight: 600;
  font-size: 1.1rem;
  letter-spacing: 0.04em;
}

.projects__mark {
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

.projects__links {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.projects__link {
  padding: 0.5rem 0.85rem;
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.95rem;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;
}

.projects__link:hover {
  color: var(--text-strong);
  background: rgba(14, 165, 233, 0.08);
}

.projects__link--active {
  color: var(--text-strong);
  font-weight: 500;
}

.projects__btn {
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

.projects__btn:hover {
  border-color: #bae6fd;
  box-shadow: 0 4px 14px rgba(14, 165, 233, 0.15);
}

.projects__main {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: clamp(1.75rem, 4vw, 2.75rem) clamp(1.25rem, 4vw, 2.5rem) 3rem;
}

.projects__intro {
  text-align: center;
  margin-bottom: 2rem;
}

.projects__title {
  margin: 0 0 0.75rem;
  font-size: clamp(1.5rem, 3.5vw, 2rem);
  font-weight: 700;
  color: var(--text-strong);
  letter-spacing: -0.03em;
  line-height: 1.25;
}

.projects__lead {
  margin: 0 auto;
  max-width: 42rem;
  font-size: 1.02rem;
  line-height: 1.7;
  color: var(--text-muted);
}

.projects__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: 1.25rem;
}

.projects__card {
  background: var(--surface-elevated);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.25rem 1.35rem;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  transition: box-shadow 0.2s, border-color 0.2s;
}

.projects__card:hover {
  border-color: #bae6fd;
  box-shadow: 0 8px 28px rgba(14, 165, 233, 0.12);
}

.projects__card-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.projects__sector {
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: none;
  color: #0369a1;
  background: rgba(14, 165, 233, 0.12);
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
}

.projects__year {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-variant-numeric: tabular-nums;
}

.projects__name {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-strong);
  letter-spacing: -0.02em;
  line-height: 1.35;
}

.projects__summary {
  margin: 0;
  flex: 1;
  font-size: 0.925rem;
  line-height: 1.65;
  color: var(--text-muted);
}

.projects__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.25rem 0 0;
  padding: 0;
  list-style: none;
}

.projects__tag {
  font-size: 0.75rem;
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0.2rem 0.55rem;
  background: rgba(241, 245, 249, 0.8);
}
</style>
