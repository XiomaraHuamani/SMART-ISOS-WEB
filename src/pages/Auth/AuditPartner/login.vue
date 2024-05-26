<script setup lang="ts">
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-login-illustration-bordered-light.png'
import authV2LoginIllustrationDark from '@images/pages/auth-v2-login-illustration-dark.png'
import authV2LoginIllustrationLight from '@images/pages/auth-v2-login-illustration-light.png'
import logo from '@images/pages/logo_2sinfondo.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import { VForm } from 'vuetify/components/VForm'


import { loginSession } from '@/services/Auth/AuditPartner/login'
import { AUDIT_PARTNER } from "../../../../src/utils/constants"

const authThemeImg = useGenerateImageVariant(
  authV2LoginIllustrationLight,
  authV2LoginIllustrationDark,
  authV2LoginIllustrationBorderedLight,
  authV2LoginIllustrationBorderedDark,
  true)

const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)

definePage({
  meta: {
    layout: 'blank',
  },
})

const form = ref({
  email: '',
  password: '',
  remember: false,
})

const isPasswordVisible = ref(false)

const route = useRoute()
const router = useRouter()

const ability = useAbility()

const refVForm = ref<VForm>()

const credentials = ref({
  email: 'admin@demo.com',
  password: 'admin',
})

const rememberMe = ref(false)

const login = async () => {

  // console.log('data - submit', credentials)
  // return;
  try {
    const response = await loginSession(credentials.value.email, credentials.value.password);
    const { token } = response

    // useCookie('userAbilityRules').value = userAbilityRules
    // ability.update(userAbilityRules)
    // useCookie('userData').value = userData
    useCookie('accessToken').value = token

    // Redirect to `to` query if exist or redirect to index route
    // ❗ nextTick is required to wait for DOM updates and later redirect
    await nextTick(() => {
      router.replace(route.query.to ? String(route.query.to) : '/')
    })
  }
  catch (err) {
    console.error(err)
  }
}

const onSubmit = () => {
  refVForm.value?.validate()
    .then(({ valid: isValid }) => {
      if (isValid)
        login()
    })
}
</script>

<template>
  <VRow no-gutters class="auth-wrapper bg-surface">
    <VCol md="8" class="d-none d-md-flex">
      <div class="position-relative bg-background w-100 me-0">
        <VImg max-width="213" :src="logo" class="auth-logo d-flex align-center gap-x-3"
          style="z-index: 1001 !important;" />
        <div class="d-flex align-center justify-center w-100 h-100" style="padding-inline: 6.25rem;">
          <VImg max-width="613" :src="authThemeImg" class="auth-illustration mt-16 mb-2" />
        </div>

        <img class="auth-footer-mask" :src="authThemeMask" alt="auth-footer-mask" height="280" width="100">
      </div>
    </VCol>

    <VCol cols="12" md="4" class="auth-card-v2 d-flex align-center justify-center">
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4">
        <VCardText>
          <h4 class="text-h4 mb-1">
            {{ AUDIT_PARTNER.LOGIN_TEXT.spanish.title }} 👋🏻
          </h4>
        </VCardText>
        <!-- <VCardText>
          <VAlert
            color="primary"
            variant="tonal"
          >
            <p class="text-sm mb-2">
              Admin Email: <strong>admin@demo.com</strong> / Pass: <strong>admin</strong>
            </p>
            <p class="text-sm mb-0">
              Client Email: <strong>client@demo.com</strong> / Pass: <strong>client</strong>
            </p>
          </VAlert>
        </VCardText> -->
        <VCardText>
          <VForm ref="refVForm" @submit.prevent="onSubmit">
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField v-model="credentials.email" autofocus :label="`${AUDIT_PARTNER.LOGIN_TEXT.spanish.email}`"
                  type="email" placeholder="johndoe@email.com" />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField v-model="credentials.password" :label="`${AUDIT_PARTNER.LOGIN_TEXT.spanish.password}`"
                  placeholder="············" :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible" />

                <div class="d-flex align-center flex-wrap justify-space-between mt-2 mb-4">
                  <VCheckbox v-model="rememberMe" :label="`${AUDIT_PARTNER.LOGIN_TEXT.spanish.remember}`" />
                  <a class="text-primary ms-2 mb-1" :to="{ name: 'forgot-password' }">
                    {{ AUDIT_PARTNER.LOGIN_TEXT.spanish.forgotEmail }}
                  </a>
                  <a class="text-primary ms-2 mb-1" :to="{ name: 'forgot-password' }">
                    {{ AUDIT_PARTNER.LOGIN_TEXT.spanish.forgotPassword }}
                  </a>
                </div>

                <VBtn block type="submit">
                  {{ AUDIT_PARTNER.LOGIN_TEXT.spanish.login }}
                </VBtn>
              </VCol>
              <!-- create account -->
              <VCol cols="12" class="text-center">
                <span>{{ AUDIT_PARTNER.LOGIN_TEXT.spanish.accountText }}</span>

                <RouterLink class="text-primary ms-2" :to="{ name: 'auth-audit-partner-register' }">
                  {{ AUDIT_PARTNER.LOGIN_TEXT.spanish.createAccount }}
                </RouterLink>
              </VCol>
              <VCol cols="12" class="d-flex align-center">
                <VDivider />
                <span class="mx-4">or</span>
                <VDivider />
              </VCol>

              <!-- auth providers -->
              <VCol cols="12" class="text-center">
                <AuthProvider />
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>


<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";
</style>
