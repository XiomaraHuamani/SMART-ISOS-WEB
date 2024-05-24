<script setup lang="ts">
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import authV2LoginIllustrationBorderedDark from '@images/pages/auth-v2-login-illustration-bordered-dark.png'
import authV2LoginIllustrationBorderedLight from '@images/pages/auth-v2-login-illustration-bordered-light.png'
import authV2LoginIllustrationDark from '@images/pages/auth-v2-login-illustration-dark.png'
import authV2LoginIllustrationLight from '@images/pages/auth-v2-login-illustration-light.png'
import logo from '@images/pages/logo_2sinfondo.png'
import imgBievenida from '@images/pages/img-inicio.jpeg'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'
import { VForm } from 'vuetify/components/VForm'

import { AUDIT_PARTNER } from "../../src/utils/constants"


</script>

<template>
  <v-row justify="center" style="padding-block-start: 15%;">
    <v-col cols="6">
      <VCard class="mb-6">
        <VImg max-width="213" :src="imgBievenida" class="auth-logo d-flex align-center gap-x-3" />

      </VCard>

    </v-col>
  </v-row>
</template>
