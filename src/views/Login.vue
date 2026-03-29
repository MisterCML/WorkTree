<script setup>
import { reactive, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import AuthShell from '../components/AuthShell.vue'

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  remember: true,
})

const errors = reactive({
  email: '',
  password: '',
})

const submitting = ref(false)

function validate() {
  errors.email = ''
  errors.password = ''
  let ok = true
  const email = form.email.trim()
  if (!email) {
    errors.email = '请输入邮箱'
    ok = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = '邮箱格式不正确'
    ok = false
  }
  if (!form.password) {
    errors.password = '请输入密码'
    ok = false
  }
  return ok
}

async function onSubmit() {
  if (!validate()) return
  submitting.value = true
  await new Promise((r) => setTimeout(r, 600))
  submitting.value = false
  // 接入后端 API 时在此调用登录接口
  console.info('[演示] 登录提交', {
    email: form.email.trim(),
    remember: form.remember,
  })
  alert('演示环境：登录请求已模拟。接入 API 后可跳转业务首页。')
  router.push('/')
}
</script>

<template>
  <AuthShell title="登录账户" subtitle="使用已注册的邮箱与密码进入大汶科技服务平台">
    <form class="form" @submit.prevent="onSubmit" novalidate>
      <label class="field">
        <span class="field__label">邮箱</span>
        <input
          v-model="form.email"
          class="field__input"
          type="email"
          name="email"
          autocomplete="email"
          placeholder="name@company.com"
          :aria-invalid="!!errors.email"
        />
        <span v-if="errors.email" class="field__error" role="alert">{{ errors.email }}</span>
      </label>
      <label class="field">
        <span class="field__label">密码</span>
        <input
          v-model="form.password"
          class="field__input"
          type="password"
          name="password"
          autocomplete="current-password"
          placeholder="••••••••"
          :aria-invalid="!!errors.password"
        />
        <span v-if="errors.password" class="field__error" role="alert">{{ errors.password }}</span>
      </label>
      <div class="form__row">
        <label class="checkbox">
          <input v-model="form.remember" type="checkbox" name="remember" />
          <span>保持登录</span>
        </label>
        <span class="form__hint">忘记密码功能可在接入后端后开启</span>
      </div>
      <button class="btn btn--primary" type="submit" :disabled="submitting">
        {{ submitting ? '登录中…' : '登录' }}
      </button>
      <p class="form__footer">
        还没有账户？
        <RouterLink class="form__link" to="/register">立即注册</RouterLink>
      </p>
    </form>
  </AuthShell>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-align: left;
}

.field__label {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-strong);
}

.field__input {
  padding: 0.65rem 0.85rem;
  border: 1px solid var(--border);
  border-radius: 10px;
  font-size: 1rem;
  background: #fff;
  color: var(--text-strong);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.field__input::placeholder {
  color: #94a3b8;
}

.field__input:hover {
  border-color: #cbd5e1;
}

.field__input:focus {
  outline: none;
  border-color: #38bdf8;
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.2);
}

.field__error {
  font-size: 0.8125rem;
  color: #dc2626;
}

.form__row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-size: 0.8125rem;
}

.checkbox {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  cursor: pointer;
  color: var(--text-muted);
  user-select: none;
}

.checkbox input {
  width: 1rem;
  height: 1rem;
  accent-color: #0ea5e9;
}

.form__hint {
  color: #94a3b8;
}

.btn {
  margin-top: 0.25rem;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
}

.btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.btn--primary {
  background: linear-gradient(135deg, #0ea5e9, #0284c7);
  color: #fff;
  box-shadow: 0 4px 14px rgba(14, 165, 233, 0.35);
}

.btn--primary:not(:disabled):hover {
  filter: brightness(1.05);
}

.btn--primary:not(:disabled):active {
  transform: translateY(1px);
}

.form__footer {
  margin: 0.5rem 0 0;
  text-align: center;
  font-size: 0.925rem;
  color: var(--text-muted);
}

.form__link {
  color: #0284c7;
  font-weight: 500;
  text-decoration: none;
}

.form__link:hover {
  text-decoration: underline;
}
</style>
