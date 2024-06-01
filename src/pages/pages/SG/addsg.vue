<script setup lang="ts">
import { addSGService } from '@/services/SG/addsg';
import { VForm } from 'vuetify/components/VForm';
import { AUDIT_PARTNER } from "../../../../src/utils/constants";
import { ref, watch } from 'vue';

const refVForm = ref<VForm>();

const form = ref({
  Add_ISO_number: '',
  Add_ISO_name: '',
  Add_Country: '',
  privacyPolicies: false,
});

const ingresos = async () => {
  try {
    const data = {
      Add_ISO_number: form.value.Add_ISO_number,
      Add_ISO_name: form.value.Add_ISO_name,
      Add_Country: form.value.Add_Country,
    };
    const response = await addSGService(data);
  } catch (error) {
    console.log(error);
  }
};

const onSubmit = () => {
  refVForm.value?.validate()
    .then(({ valid: isValid }) => {
      if (isValid)
        ingresos();
    });
};

// Watch for changes in Add_ISO_number
watch(() => form.value.Add_ISO_number, (newValue) => {
  if (newValue) {
    form.value.Add_ISO_name = '';
  }
});

// Watch for changes in Add_ISO_name
watch(() => form.value.Add_ISO_name, (newValue) => {
  if (newValue) {
    form.value.Add_ISO_number = '';
  }
});
</script>

<template>
  <v-row justify="center" style="padding-block-start: 15%;">
    <v-col cols="6">
      <VCard class="mb-6">
        <VCol cols="12">
          <AppTextField v-model="form.Add_ISO_number" autofocus
            :label="`${AUDIT_PARTNER.IMPLEMENT_ISO.spanish.ISO_numero}`" type="text" placeholder="Ingrese ISO sg" />
        </VCol>

        <VCol cols="12">
          <AppTextField v-model="form.Add_ISO_name" autofocus
            :label="`${AUDIT_PARTNER.IMPLEMENT_ISO.spanish.ISO_nombre}`" type="text"
            placeholder="Nombre del sistema de gestion" />
        </VCol>

        <VCol cols="12">
          <VSelect clearable v-model="form.Add_Country"
            :items="['Afganistán', 'Albania', 'Alemania', 'Andorra', 'Angola', 'Arabia Saudita', 'Argelia', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaiyán', 'Bahamas', 'Bangladés', 'Barbados', 'Baréin', 'Bélgica', 'Belice', 'Benín', 'Bielorrusia', 'Birmania', 'Bolivia', 'Bosnia y Herzegovina', 'Botsuana', 'Brasil', 'Brunéi', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Bután', 'Cabo Verde', 'Camboya', 'Camerún', 'Canadá', 'Catar', 'Chad', 'Chile', 'China', 'Chipre', 'Ciudad del Vaticano', 'Colombia', 'Comoras', 'Corea del Norte', 'Corea del Sur', 'Costa de Marfil', 'Costa Rica', 'Croacia', 'Cuba', 'Dinamarca', 'Dominica', 'Ecuador', 'Egipto', 'El Salvador', 'Emiratos Árabes Unidos', 'Eritrea', 'Eslovaquia', 'Eslovenia', 'España', 'Estados Unidos', 'Estonia', 'Etiopía', 'Filipinas', 'Finlandia', 'Fiyi', 'Francia', 'Gabón', 'Gambia', 'Georgia', 'Ghana', 'Granada', 'Grecia', 'Guatemala', 'Guyana', 'Guinea', 'Guinea ecuatorial', 'Guinea-Bisáu', 'Haití', 'Honduras', 'Hungría', 'India', 'Indonesia', 'Irak', 'Irán', 'Irlanda', 'Islandia', 'Islas Marshall', 'Islas Salomón', 'Israel', 'Italia', 'Jamaica', 'Japón', 'Jordania', 'Kazajistán', 'Kenia', 'Kirguistán', 'Kiribati', 'Kuwait', 'Laos', 'Lesoto', 'Letonia', 'Líbano', 'Liberia', 'Libia', 'Liechtenstein', 'Lituania', 'Luxemburgo', 'Madagascar', 'Malasia', 'Malaui', 'Maldivas', 'Malí', 'Malta', 'Marruecos', 'Mauricio', 'Mauritania', 'México', 'Micronesia', 'Moldavia', 'Mónaco', 'Mongolia', 'Montenegro', 'Mozambique', 'Namibia', 'Nauru', 'Nepal', 'Nicaragua', 'Níger', 'Nigeria', 'Noruega', 'Nueva Zelanda', 'Omán', 'Países Bajos', 'Pakistán', 'Palaos', 'Palestina', 'Panamá', 'Papúa Nueva Guinea', 'Paraguay', 'Perú', 'Polonia', 'Portugal', 'Reino Unido', 'República Centroafricana', 'República Checa', 'República de Macedonia', 'República del Congo', 'República Democrática del Congo', 'República Dominicana', 'República Sudafricana', 'Ruanda', 'Rumanía', 'Rusia', 'Samoa', 'San Cristóbal y Nieves', 'San Marino', 'San Vicente y las Granadinas', 'Santa Lucía', 'Santo Tomé y Príncipe', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leona', 'Singapur', 'Siria', 'Somalia', 'Sri Lanka', 'Suazilandia', 'Sudán', 'Sudán del Sur', 'Suecia', 'Suiza', 'Surinam', 'Tailandia', 'Tanzania', 'Tayikistán', 'Timor Oriental', 'Togo', 'Tonga', 'Trinidad y Tobago', 'Túnez', 'Turkmenistán', 'Turquía', 'Tuvalu', 'Ucrania', 'Uganda', 'Uruguay', 'Uzbekistán', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Yibuti', 'Zambia', 'Zimbabue']"
            :label="`${AUDIT_PARTNER.REGISTER.spanish.country}`" placeholder="Seleccione" item-text="text"
            item-value="value" />

        </VCol>

        <v-container>
          <v-row justify="center">
            <v-col cols="7" class="d-flex justify-center">
              <v-btn block type="submit" @click="onSubmit">
                Guardar
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

      </VCard>
    </v-col>
  </v-row>
</template>
