<template>
  <v-row class="mt-4" :no-gutters="$device.isMobileOrTablet">
    <v-col cols="12" :lg="item.parent ? 9 : 12">
      <documents-table :items="item.children"></documents-table>
    </v-col>
    <v-col cols="12" lg="3" v-if="item.parent">
      Right
    </v-col>
  </v-row>
</template>

<script>
import DocumentsTable from './components/table'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    DocumentsTable
  }
}
</script>