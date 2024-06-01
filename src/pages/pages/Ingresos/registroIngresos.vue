<script setup>
import * as demoCode from '../../../views/demos/forms/tables/data-table/demoCodeDataTable';
</script>

<template>
  <VRow>

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
