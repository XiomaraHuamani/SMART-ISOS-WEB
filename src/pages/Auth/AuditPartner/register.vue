<script setup lang="ts">
import { ref } from 'vue'
import { VForm } from 'vuetify/components/VForm'

import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'

import authV2RegisterIllustrationBorderedDark from '@images/pages/auth-v2-register-illustration-bordered-dark.png'
import authV2RegisterIllustrationBorderedLight from '@images/pages/auth-v2-register-illustration-bordered-light.png'
import authV2RegisterIllustrationDark from '@images/pages/auth-v2-register-illustration-dark.png'
import authV2RegisterIllustrationLight from '@images/pages/auth-v2-register-illustration-light.png'
import authV2MaskDark from '@images/pages/misc-mask-dark.png'
import authV2MaskLight from '@images/pages/misc-mask-light.png'

import { registerService } from '@/services/Auth/AuditPartner/register'
import logo from '@images/pages/logo_2sinfondo.png'
import { AUDIT_PARTNER } from "../../../../src/utils/constants"

const imageVariant = useGenerateImageVariant(authV2RegisterIllustrationLight,
  authV2RegisterIllustrationDark,
  authV2RegisterIllustrationBorderedLight,
  authV2RegisterIllustrationBorderedDark, true)

const authThemeMask = useGenerateImageVariant(authV2MaskLight, authV2MaskDark)

definePage({
  meta: {
    layout: 'blank',
    unauthenticatedOnly: true,
  },
})

const requiredValidator = (value: any) => {
  return !!value || 'Este campo es obligatorio';
};

const documentLengthValidator = (value: any) => {
  return value.length === 15 || 'El documento debe tener exactamente 15 dígitos';
};

const numberphoneLengthValidator = (value: any) => {
  return value.length === 15 || 'El numero movil debe tener exactamente 15 dígitos';
};
const refVForm = ref<VForm>()

const form = ref({
  names: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
  country: '',
  doc: '',
  phone: '',
  bank_account: '',
  bank: '',
  privacyPolicies: false,
  requiredValidator: requiredValidator
})

//lista de paises
const countries = [
  { text: 'Afganistán', value: 'af' }, { text: 'Albania', value: 'al' }, { text: 'Alemania', value: 'de' }, { text: 'Andorra', value: 'ad' },
  { text: 'Angola', value: 'ao' }, { text: 'Arabia Saudita', value: 'sa' }, { text: 'Argelia', value: 'dz' }, { text: 'Argentina', value: 'ar' },
  { text: 'Armenia', value: 'am' }, { text: 'Australia', value: 'au' }, { text: 'Austria', value: 'at' }, { text: 'Azerbaiyán', value: 'az' },
  { text: 'Bahamas', value: 'bs' }, { text: 'Bangladés', value: 'bd' }, { text: 'Barbados', value: 'bb' }, { text: 'Baréin', value: 'bh' },
  { text: 'Bélgica', value: 'be' }, { text: 'Belice', value: 'bz' }, { text: 'Benín', value: 'bj' }, { text: 'Bielorrusia', value: 'by' },
  { text: 'Birmania', value: 'mm' }, { text: 'Bolivia', value: 'bo' }, { text: 'Bosnia y Herzegovina', value: 'ba' }, { text: 'Botsuana', value: 'bw' },
  { text: 'Brasil', value: 'br' }, { text: 'Brunéi', value: 'bn' }, { text: 'Bulgaria', value: 'bg' }, { text: 'Burkina Faso', value: 'bf' },
  { text: 'Burundi', value: 'bi' }, { text: 'Bután', value: 'bt' }, { text: 'Cabo Verde', value: 'cv' }, { text: 'Camboya', value: 'kh' },
  { text: 'Camerún', value: 'cm' }, { text: 'Canadá', value: 'ca' }, { text: 'Catar', value: 'qa' }, { text: 'Chad', value: 'td' },
  { text: 'Chile', value: 'cl' }, { text: 'China', value: 'cn' }, { text: 'Chipre', value: 'cy' }, { text: 'Ciudad del Vaticano', value: 'va' },
  { text: 'Colombia', value: 'co' }, { text: 'Comoras', value: 'km' }, { text: 'Corea del Norte', value: 'kp' }, { text: 'Corea del Sur', value: 'kr' },
  { text: 'Costa de Marfil', value: 'ci' }, { text: 'Costa Rica', value: 'cr' }, { text: 'Croacia', value: 'hr' }, { text: 'Cuba', value: 'cu' },
  { text: 'Dinamarca', value: 'dk' }, { text: 'Dominica', value: 'dm' }, { text: 'Ecuador', value: 'ec' }, { text: 'Egipto', value: 'eg' },
  { text: 'El Salvador', value: 'sv' }, { text: 'Emiratos Árabes Unidos', value: 'ae' }, { text: 'Eritrea', value: 'er' }, { text: 'Eslovaquia', value: 'sk' },
  { text: 'Eslovenia', value: 'si' }, { text: 'España', value: 'es' }, { text: 'Estados Unidos', value: 'us' }, { text: 'Estonia', value: 'ee' },
  { text: 'Etiopía', value: 'et' }, { text: 'Filipinas', value: 'ph' }, { text: 'Finlandia', value: 'fi' }, { text: 'Fiyi', value: 'fj' },
  { text: 'Francia', value: 'fr' }, { text: 'Gabón', value: 'ga' }, { text: 'Gambia', value: 'gm' }, { text: 'Georgia', value: 'ge' },
  { text: 'Ghana', value: 'gh' }, { text: 'Granada', value: 'gd' }, { text: 'Grecia', value: 'gr' }, { text: 'Guatemala', value: 'gt' },
  { text: 'Guyana', value: 'gy' }, { text: 'Guinea', value: 'gn' }, { text: 'Guinea ecuatorial', value: 'gq' }, { text: 'Guinea-Bisáu', value: 'gw' },
  { text: 'Haití', value: 'ht' }, { text: 'Honduras', value: 'hn' }, { text: 'Hungría', value: 'hu' }, { text: 'India', value: 'in' },
  { text: 'Indonesia', value: 'id' }, { text: 'Irak', value: 'iq' }, { text: 'Irán', value: 'ir' }, { text: 'Irlanda', value: 'ie' },
  { text: 'Islandia', value: 'is' }, { text: 'Islas Marshall', value: 'mh' }, { text: 'Islas Salomón', value: 'sb' }, { text: 'Israel', value: 'il' },
  { text: 'Italia', value: 'it' }, { text: 'Jamaica', value: 'jm' }, { text: 'Japón', value: 'jp' }, { text: 'Jordania', value: 'jo' }
]

const isPasswordVisible = ref(false)

const register = async () => {
  try {
    const data = {
      names: form.value.names,
      lastName: form.value.lastName,
      email: form.value.email,
      password: form.value.password,
      doc: form.value.doc,
      phone: form.value.phone,
      country: form.value.country,
      bank_account: form.value.bank_account,
      bank: form.value.bank
    }
    const response = await registerService(data);
  } catch (error) {

  }
}

const onSubmit = () => {
  refVForm.value?.validate()
    .then(({ valid: isValid }) => {
      if (isValid)
        register()
    })

}

</script>
<template>
  <VRow no-gutters class="auth-wrapper bg-surface">
    <VCol md="8" class="d-none d-md-flex">
      <div class="position-relative bg-background w-100 me-0">
        <VImg max-width="213" :src="logo" class="auth-logo d-flex align-center gap-x-3" />
        <div class="d-flex align-center justify-center w-100 h-100" style="padding-inline: 100px;">
          <VImg max-width="500" :src="imageVariant" class="auth-illustration mt-16 mb-2" />
        </div>

        <img class="auth-footer-mask" :src="authThemeMask" alt="auth-footer-mask" height="280" width="100">
      </div>
    </VCol>

    <VCol cols="12" md="4" class="auth-card-v2 d-flex align-center justify-center"
      style="background-color: rgb(var(--v-theme-surface));">
      <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4">
        <VCardText>
          <h4 class="text-h4 mb-1">
            {{ AUDIT_PARTNER.REGISTER.spanish.createAccount }} 🚀
          </h4>
        </VCardText>

        <VCardText>
          <VForm ref="refVForm" @submit.prevent="onSubmit">
            <VRow>
              <!-- Names -->
              <VCol cols="12">
                <AppTextField v-model="form.names" :rules="[requiredValidator]" autofocus
                  :label="`${AUDIT_PARTNER.REGISTER.spanish.names}`" type="text" placeholder="John" />
              </VCol>
              <!-- lastName -->
              <VCol cols="12">
                <AppTextField v-model="form.lastName" :rules="[form.requiredValidator]" autofocus
                  :label="`${AUDIT_PARTNER.REGISTER.spanish.lastName}`" type="text" placeholder="Doe" />
              </VCol>

              <!-- email -->
              <VCol cols="12">
                <AppTextField v-model="form.email" :rules="[requiredValidator, emailValidator]"
                  :label="`${AUDIT_PARTNER.REGISTER.spanish.email}`" type="email" placeholder="johndoe@email.com" />
              </VCol>

              <!-- country -->
              <VCol cols="12">
                <VSelect clearable v-model="form.country"
                  :items="['Afganistán', 'Albania', 'Alemania', 'Andorra', 'Angola', 'Arabia Saudita', 'Argelia', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaiyán', 'Bahamas', 'Bangladés', 'Barbados', 'Baréin', 'Bélgica', 'Belice', 'Benín', 'Bielorrusia', 'Birmania', 'Bolivia', 'Bosnia y Herzegovina', 'Botsuana', 'Brasil', 'Brunéi', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Bután', 'Cabo Verde', 'Camboya', 'Camerún', 'Canadá', 'Catar', 'Chad', 'Chile', 'China', 'Chipre', 'Ciudad del Vaticano', 'Colombia', 'Comoras', 'Corea del Norte', 'Corea del Sur', 'Costa de Marfil', 'Costa Rica', 'Croacia', 'Cuba', 'Dinamarca', 'Dominica', 'Ecuador', 'Egipto', 'El Salvador', 'Emiratos Árabes Unidos', 'Eritrea', 'Eslovaquia', 'Eslovenia', 'España', 'Estados Unidos', 'Estonia', 'Etiopía', 'Filipinas', 'Finlandia', 'Fiyi', 'Francia', 'Gabón', 'Gambia', 'Georgia', 'Ghana', 'Granada', 'Grecia', 'Guatemala', 'Guyana', 'Guinea', 'Guinea ecuatorial', 'Guinea-Bisáu', 'Haití', 'Honduras', 'Hungría', 'India', 'Indonesia', 'Irak', 'Irán', 'Irlanda', 'Islandia', 'Islas Marshall', 'Islas Salomón', 'Israel', 'Italia', 'Jamaica', 'Japón', 'Jordania', 'Kazajistán', 'Kenia', 'Kirguistán', 'Kiribati', 'Kuwait', 'Laos', 'Lesoto', 'Letonia', 'Líbano', 'Liberia', 'Libia', 'Liechtenstein', 'Lituania', 'Luxemburgo', 'Madagascar', 'Malasia', 'Malaui', 'Maldivas', 'Malí', 'Malta', 'Marruecos', 'Mauricio', 'Mauritania', 'México', 'Micronesia', 'Moldavia', 'Mónaco', 'Mongolia', 'Montenegro', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Nicaragua', 'Níger', 'Nigeria', 'Noruega', 'Nueva Zelanda', 'Omán', 'Países Bajos', 'Pakistán', 'Palaos', 'Palestina', 'Panamá', 'Papúa Nueva Guinea', 'Paraguay', 'Perú', 'Polonia', 'Portugal', 'Reino Unido', 'República Centroafricana', 'República Checa', 'República de Macedonia', 'República del Congo', 'República Democrática del Congo', 'República Dominicana', 'República Sudafricana', 'Ruanda', 'Rumanía', 'Rusia', 'Samoa', 'San Cristóbal y Nieves', 'San Marino', 'San Vicente y las Granadinas', 'Santa Lucía', 'Santo Tomé y Príncipe', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leona', 'Singapur', 'Siria', 'Somalia', 'Sri Lanka', 'Suazilandia', 'Sudán', 'Sudán del Sur', 'Suecia', 'Suiza', 'Surinam', 'Tailandia', 'Tanzania', 'Tayikistán', 'Timor Oriental', 'Togo', 'Tonga', 'Trinidad y Tobago', 'Túnez', 'Turkmenistán', 'Turquía', 'Tuvalu', 'Ucrania', 'Uganda', 'Uruguay', 'Uzbekistán', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Yibuti', 'Zambia', 'Zimbabue']"
                  :rules="[requiredValidator]" :label="`${AUDIT_PARTNER.REGISTER.spanish.country}`"
                  placeholder="Seleccione" item-text="text" item-value="value" />
              </VCol>



              <!-- documento identidad -->
              <VCol cols="12">
                <AppTextField v-model="form.doc" :rules="[requiredValidator, documentLengthValidator]" autofocus
                  :label="`${AUDIT_PARTNER.REGISTER.spanish.doc}`" type="number" placeholder="00000" />
              </VCol>

              <!-- numero movil -->
              <VCol cols="12">
                <AppTextField v-model="form.phone" :rules="[requiredValidator]" autofocus
                  :label="`${AUDIT_PARTNER.REGISTER.spanish.phone}`" type="number" placeholder="00000" />
              </VCol>

              <!-- BANCO -->
              <VCol cols="12">
                <AppTextField v-model="form.bank" :rules="[requiredValidator]" autofocus
                  :label="`${AUDIT_PARTNER.REGISTER.spanish.bank}`" type="text" placeholder="00000" />
              </VCol>

              <!-- Cuenta bancaria -->
              <VCol cols="12">
                <AppTextField v-model="form.bank_account" :rules="[requiredValidator]" autofocus
                  :label="`${AUDIT_PARTNER.REGISTER.spanish.bank_account}`" type="number" placeholder="00000" />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField v-model="form.password" :rules="[requiredValidator]"
                  :label="`${AUDIT_PARTNER.REGISTER.spanish.password}`" placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible" />
              </VCol>
              <VCol cols="12">
                <AppTextField v-model="form.password" :rules="[requiredValidator]"
                  :label="`${AUDIT_PARTNER.REGISTER.spanish.repeatPassword}`" placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible" />
              </VCol>
              <VCol cols="12">
                <VBtn block type="submit">
                  {{ AUDIT_PARTNER.REGISTER.spanish.createAccount }}
                </VBtn>
              </VCol>

              <!-- create account -->
              <VCol cols="12" class="text-center text-base">
                <span class="d-inline-block">{{ AUDIT_PARTNER.REGISTER.spanish.alreadyHaveAccount }}</span>

                <RouterLink class="text-primary ms-1 d-inline-block" :to="{ name: 'auth-audit-partner-login' }">
                  {{ AUDIT_PARTNER.REGISTER.spanish.signInInstead }}
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
