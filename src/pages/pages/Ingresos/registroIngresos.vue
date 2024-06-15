<script setup>
import * as demoCode from '../../../views/demos/forms/tables/data-table/demoCodeDataTable';
import ModalRegistroSG from '../SG/ModalRegistroSG.vue';

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

</script>

<template>
  <VRow>
    <v-container fluid>
    <v-card class="my-card">
      <v-row > 
        <v-col class="d-flex justify-end" style>
          <!-- <v-btn class="my-2" @click="onAddClick">
            Agregar
          </v-btn> -->
          <ModalRegistroSG class="ms-lg-n3" />
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
    <!-- <VCol cols="12">
      <AppCardCode title="Row Editing via Dialog" :code="demoCode.rowEditingViaDialog" no-padding>
        <DemoDataTableRowEditingViaDialog />
      </AppCardCode>
    </VCol> -->

    <!-- 👉 External Pagination  -->
    <VCol cols="12">
      <AppCardCode title="Ingresos" :code="demoCode.externalPagination" no-padding>
        <DemoDataTableExternalPagination />
      </AppCardCode>
    </VCol>

  </VRow>  
</template>
