<script setup lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net-bs5';

DataTable.use(DataTablesCore);

const columns = [
  { data: 'name' },
  { data: 'position' },
  { data: 'office' },
  { data: 'extn' },
  { data: 'start_date' },
  { data: 'salary' },
];
</script>

<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <VCard class="strpied-tabled-with-hover" body-classes="table-full-width table-responsive">

            <DataTable :columns="columns" ajax="/data.json" class="table table-striped table-Secondary  table-hover"
              width="50%">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Office</th>
                  <th>Extn.</th>
                  <th>Start date</th>
                  <th>Salary</th>
                </tr>
              </thead>
            </DataTable>
          </VCard>

        </div>

      </div>
    </div>
  </div>
</template>

<style>
@import "bootstrap";
@import "datatables.net-bs5";
</style>
