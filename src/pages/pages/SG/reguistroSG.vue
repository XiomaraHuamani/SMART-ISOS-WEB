<script setup>
import DatatableSG from '@/views/demos/forms/tables/data-table/datatableSG.vue';
import Datatableingresos from '@/views/demos/forms/tables/data-table/datatableingresos.vue';
import * as demoCode from '../../../views/demos/forms/tables/data-table/demoCodeDataTable';
//layouts para crud /agregar botones

// @layouts plugin

// SECTION: Loading Indicator
const isFallbackStateActive = ref(false)
const refLoadingIndicator = ref(null)

watch([
  isFallbackStateActive,
  refLoadingIndicator,
], () => {
  if (isFallbackStateActive.value && refLoadingIndicator.value)
    refLoadingIndicator.value.fallbackHandle()
  if (!isFallbackStateActive.value && refLoadingIndicator.value)
    refLoadingIndicator.value.resolveHandle()
}, { immediate: true })
// !SECTION
</script>

<template>
  <VRow>
    
    <v-container fluid>
    <v-card class="my-card">
      <v-row > 
        <v-col class="d-flex justify-end" style>
          <v-btn class="my-2" @click="onAddClick">Agregar</v-btn>
        </v-col>      
      </v-row>
      <!-- <v-card-text class="my-card-text">
        Chocolate sesame snaps pie carrot cake pastry pie lollipop muffin.
        Carrot cake dragée chupa chups jujubes. Macaroon liquorice cookie
        wafer tart marzipan bonbon. Gingerbread jelly-o dragée
        chocolate.
      </v-card-text> -->
    </v-card>
    </v-container>

    <!-- 👉 Row Editing via Dialog -->
    <VCol cols="12">
      <AppCardCode title="Sistemas de gestion implementadas" :code="demoCode.externalPagination" no-padding>
        <DatatableSG />
      </AppCardCode>
    </VCol>

    <!-- 👉 External Pagination  -->
    <VCol cols="12">
      <AppCardCode title="filtro por ISOS" :code="demoCode.externalPagination" no-padding>
        <Datatableingresos />
      </AppCardCode>
    </VCol>

    

  </VRow>
</template>

<style scoped>
.my-card {
  max-inline-size: 1600px; /* Reemplaza max-width con max-inline-size */
}

</style>
