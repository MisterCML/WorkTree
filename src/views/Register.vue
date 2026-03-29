<script setup>
import { reactive, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import AuthShell from '../components/AuthShell.vue'

const router = useRouter()

const form = reactive({
  name: '',
  company: '',
  email: '',
  password: '',
  confirm: '',
  agree: false,
})

const errors = reactive({
  name: '',
  email: '',
  password: '',
  confirm: '',
  agree: '',
})

const submitting = ref(false)

function validate() {
  errors.name = ''
  errors.email = ''
  errors.password = ''
  errors.confirm = ''
  errors.agree = ''
  let ok = true

  const name = form.name.trim()
  if (!name) {
    errors.name = '请输入姓名或称呼'
    ok = false
  }

  const email = form.email.trim()
  if (!email) {
    errors.email = '请输入邮箱'
    ok = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = '邮箱格式不正确'
    ok = false
  }

  if (!form.password) {
    errors.password = '请设置密码'
    ok = false
  } else if (form.password.length < 8) {
    errors.password = '密码至少 8 位'
    ok = false
  }

  if (!form.confirm) {
    errors.confirm = '请再次输入密码'
    ok = false
  } else if (form.confirm !== form.password) {
    errors.confirm = '两次输入的密码不一致'
    ok = false
  }

  if (!form.agree) {
    errors.agree = '请阅读并同意服务条款'
    ok = false
  }

  return ok
}

async function onSubmit() {
  if (!validate()) return
  submitting.value = true
  await new Promise((r) => setTimeout(r, 700))
  submitting.value = false
  console.info('[演示] 注册提交', {
    name: form.name.trim(),
    company: form.company.trim(),
    email: form.email.trim(),
  })
  alert('演示环境：注册请求已模拟。接入 API 后可自动登录或跳转验证页。')
  router.push('/login')
}
</script>

<template>
  <AuthShell title="创建账户" subtitle="加入大汶科技客户与合作伙伴网络">
    <form class="form" @submit.prevent="onSubmit" novalidate>
      <label class="field">
        <span class="field__label">姓名</span>
        <input
          v-model="form.name"
          class="field__input"
          type="text"
          name="name"
          autocomplete="name"
          placeholder="您的称呼"
          :aria-invalid="!!errors.name"
        />
        <span v-if="errors.name" class="field__error" role="alert">{{ errors.name }}</span>
      </label>
      <label class="field">
        <span class="field__label">公司 / 组织（选填）</span>
        <input
          v-model="form.company"
          class="field__input"
          type="text"
          name="company"
          autocomplete="organization"
          placeholder="企业或团队名称"
        />
      </label>
      <label class="field">
        <span class="field__label">工作邮箱</span>
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
          autocomplete="new-password"
          placeholder="至少 8 位字符"
          :aria-invalid="!!errors.password"
        />
        <span v-if="errors.password" class="field__error" role="alert">{{ errors.password }}</span>
      </label>
      <label class="field">
        <span class="field__label">确认密码</span>
        <input
          v-model="form.confirm"
          class="field__input"
          type="password"
          name="confirm"
          autocomplete="new-password"
          placeholder="再次输入密码"
          :aria-invalid="!!errors.confirm"
        />
        <span v-if="errors.confirm" class="field__error" role="alert">{{ errors.confirm }}</span>
      </label>
      <label class="agree">
        <input v-model="form.agree" type="checkbox" name="agree" />
        <span>
          我已阅读并同意
          <span class="agree__fake-link">《服务条款》</span>
          与
          <span class="agree__fake-link">《隐私政策》</span>
        </span>
      </label>
      <span v-if="errors.agree" class="field__error agree__error" role="alert">{{ errors.agree }}</span>
      <button class="btn btn--primary" type="submit" :disabled="submitting">
        {{ submitting ? '提交中…' : '注册' }}
      </button>
      <p class="form__footer">
        已有账户？
        <RouterLink class="form__link" to="/login">前往登录</RouterLink>
      </p>
    </form>
  </AuthShell>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

.agree {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.8125rem;
  line-height: 1.5;
  color: var(--text-muted);
  cursor: pointer;
  user-select: none;
}

.agree input {
  margin-top: 0.2rem;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  accent-color: #0ea5e9;
}

.agree__fake-link {
  color: #0284c7;
}

.agree__error {
  margin-top: -0.35rem;
}

.btn {
  margin-top: 0.35rem;
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
  margin: 0.35rem 0 0;
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
