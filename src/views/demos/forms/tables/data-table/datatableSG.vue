<script setup>
//import data1 from '@/views/demos/forms/tables/data-table/dataAddSG';
import data1 from '@/views/demos/forms/tables/data-table/datatable';

const userList = ref([])

const options = ref({
  page: 1,
  itemsPerPage: 5,
  sortBy: [''],
  sortDesc: [false],
})

// headers
const headers = [
  {
    title: 'Sistema G.',
    key: 'tipo_sistema',
  },
  {
    title: 'NOMBRE',
    key: 'nombre',
  },
  {
    title: 'Pais',
    key: 'pais',
  },
  // {
  //   title: 'STATUS',
  //   key: 'status',
  // },
  {
    title: 'ESTADO',
    key: 'status',
  },
]

const resolve_tipo_sistema = tipo_sistema => {
  if (tipo_sistema === 1)
    return {
      text: 'ISO',

    }
  else if (tipo_sistema === 2)
    return {
      text: 'SG',
    }
}

const resolveStatusVariant = status => {
  if (status === 1)
    return {
      color: 'success',
      text: 'ACEPTADO',
    }
  else if (status === 2)
    return {
      color: 'error',
      text: 'NO ACEPTADO',
    }
  // else if (status === 3)
  //   return {
  //     color: 'error',
  //     text: 'Rejected',
  //   }
  // else if (status === 4)
  //   return {
  //     color: 'warning',
  //     text: 'Resigned',
  //   }
  // else
  //   return {
  //     color: 'info',
  //     text: 'Applied',
  //   }
}

onMounted(() => {
  userList.value = JSON.parse(JSON.stringify(data1))
})
</script>

<template>
  <VDataTable :headers="headers" :items="userList" :items-per-page="options.itemsPerPage" :page="options.page"
    :options="options">
    <!-- tipo_sistema: 'ISO' - 'sg' -->
    <template #item.tipo_sistema="{ item }">
      <div class="d-flex align-center">
        <VChip class="font-weight-medium" size="small">
          {{ resolve_tipo_sistema(item.status).text }}
        </VChip>
      </div>
    </template>

    <!-- status -->
    <template #item.status="{ item }">
      <VChip :color="resolveStatusVariant(item.status).color" class="font-weight-medium" size="small">
        {{ resolveStatusVariant(item.status).tipo_sistema }}
      </VChip>
    </template>

    <template #bottom>
      <VCardText class="pt-2">
        <div class="d-flex flex-wrap justify-center justify-sm-space-between gap-y-2 mt-2">
          <VTextField v-model="options.itemsPerPage" label="Rows per page:" type="number" min="-1" max="15" hide-details
            variant="underlined" style="max-inline-size: 8rem;min-inline-size: 5rem;" />

          <VPagination v-model="options.page" :total-visible="$vuetify.display.smAndDown ? 3 : 5"
            :length="Math.ceil(userList.length / options.itemsPerPage)" />
        </div>
      </VCardText>
    </template>
  </VDataTable>
</template>
