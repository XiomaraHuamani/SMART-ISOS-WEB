<script setup>
import Shepherd from 'shepherd.js'
import { withQuery } from 'ufo'
import { useConfigStore } from '@core/stores/config'
import * as demoCode from '@/views/demos/forms/form-layout/demoCodeFormLayout'

defineOptions({
  // 👉 Is App Search Bar Visible
  inheritAttrs: false,
})

const configStore = useConfigStore()
const isAppSearchBarVisible = ref(false)
const isLoading = ref(false)

// 👉 Default suggestions
const suggestionGroups = [
  {
    title: 'Popular Searches',
    content: [
      {
        icon: 'tabler-chart-bar',
        title: 'Analytics',
        url: { name: 'dashboards-analytics' },
      },
      {
        icon: 'tabler-chart-donut-3',
        title: 'CRM',
        url: { name: 'dashboards-crm' },
      },
      {
        icon: 'tabler-shopping-cart',
        title: 'eCommerce',
        url: { name: 'dashboards-ecommerce' },
      },
      {
        icon: 'tabler-truck',
        title: 'Logistics',
        url: { name: 'dashboards-logistics' },
      },
    ],
  },
  {
    title: 'Apps & Pages',
    content: [
      {
        icon: 'tabler-calendar',
        title: 'Calendar',
        url: { name: 'apps-calendar' },
      },
      {
        icon: 'tabler-lock',
        title: 'Roles & Permissions',
        url: { name: 'apps-roles' },
      },
      {
        icon: 'tabler-settings',
        title: 'Account Settings',
        url: {
          name: 'pages-account-settings-tab',
          params: { tab: 'account' },
        },
      },
      {
        icon: 'tabler-copy',
        title: 'Dialog Examples',
        url: { name: 'pages-dialog-examples' },
      },
    ],
  },
  {
    title: 'User Interface',
    content: [
      {
        icon: 'tabler-typography',
        title: 'Typography',
        url: { name: 'pages-typography' },
      },
      {
        icon: 'tabler-menu-2',
        title: 'Accordion',
        url: { name: 'components-expansion-panel' },
      },
      {
        icon: 'tabler-info-triangle',
        title: 'Alert',
        url: { name: 'components-alert' },
      },
      {
        icon: 'tabler-checkbox',
        title: 'Cards',
        url: { name: 'pages-cards-card-basic' },
      },
    ],
  },
  {
    title: 'Forms & Tables',
    content: [
      {
        icon: 'tabler-circle-dot',
        title: 'Radio',
        url: { name: 'forms-radio' },
      },
      {
        icon: 'tabler-file-invoice',
        title: 'Form Layouts',
        url: { name: 'forms-form-layouts' },
      },
      {
        icon: 'tabler-table',
        title: 'Table',
        url: { name: 'tables-data-table' },
      },
      {
        icon: 'tabler-edit',
        title: 'Editor',
        url: { name: 'forms-editors' },
      },
    ],
  },
]

// 👉 No Data suggestion
const noDataSuggestions = [
  {
    title: 'Analytics',
    icon: 'tabler-chart-bar',
    url: { name: 'dashboards-analytics' },
  },
  {
    title: 'CRM',
    icon: 'tabler-chart-donut-3',
    url: { name: 'dashboards-crm' },
  },
  {
    title: 'eCommerce',
    icon: 'tabler-shopping-cart',
    url: { name: 'dashboards-ecommerce' },
  },
]

const searchQuery = ref('')
const router = useRouter()
const searchResult = ref([])

const fetchResults = async () => {
  isLoading.value = true

  const { data } = await useApi(withQuery('/app-bar/search', { q: searchQuery.value }))

  searchResult.value = data.value

  // ℹ️ simulate loading: we have used setTimeout for better user experience your can remove it
  setTimeout(() => {
    isLoading.value = false
  }, 500)
}

watch(searchQuery, fetchResults)

const closeSearchBar = () => {
  isAppSearchBarVisible.value = false
  searchQuery.value = ''
}

const redirectToSuggestedPage = selected => {
  router.push(selected.url)
  closeSearchBar()
}

const LazyAppBarSearch = defineAsyncComponent(() => import('../components/modal.vue'))
</script>

<template>

<div
    class="d-flex align-center cursor-pointer"
    v-bind="$attrs"
    style="user-select: none;"
    @click="isAppSearchBarVisible = !isAppSearchBarVisible"
  >
    
    <v-btn class="my-2" @click="Shepherd.activeTour?.cancel()">
            Agregar
    </v-btn>


  </div>


  <!-- 👉 App Bar Search -->
  <LazyAppBarSearch
    v-model:isDialogVisible="isAppSearchBarVisible"
    :search-results="searchResult"
    :is-loading="isLoading"
    @search="searchQuery = $event"
  >
  <template #suggestions>
    <AppCardCode
          title="Registro"
          :code="demoCode.verticalFormWithIcons"
        >
          <DemoFormLayoutVerticalFormWithIcons />
    </AppCardCode>
  </template>
  </LazyAppBarSearch>
</template>

<style lang="scss">
@use "@styles/variables/vuetify.scss";

.meta-key {
  border: thin solid rgba(var(--v-border-color), var(--v-border-opacity));
  border-radius: 50px;
  block-size: 1.5625rem;
  font-size: 0.8125rem;
  line-height: 1.3125rem;
  padding-block: 0.125rem;
  padding-inline: 0.25rem;
}

.app-bar-search-dialog {
  .custom-letter-spacing {
    letter-spacing: 0.8px;
  }

  .card-list {
    --v-card-list-gap: 8px;
  }
}
</style>
