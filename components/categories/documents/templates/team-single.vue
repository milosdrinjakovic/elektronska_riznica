<template>
  <v-row class="mt-4" no-gutters>
    <documents-table :items="item.documents" show-download v-if="multipleDocuments"></documents-table>
    <v-col cols="12" v-else-if="document">
      <h3 class="h1-text mb-4">{{ conv(getLang(document.langs).name) }}</h3>
      <flipbook :src="getFlipbookItem(document)"></flipbook>
      <div class="mt-8" v-html="conv(getLang(document.langs).description)"></div>
    </v-col>
  </v-row>
</template>

<script>
import Flipbook from "@/components/global/flipbook";
import DocumentsTable from './components/table'

export default {
  components: {Flipbook, DocumentsTable},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    getFlipbookItem(document) {
      if (!document.langs) return null;
      return process.env.bucketUrl + `documents/${document.langs[0].file}`
    },
  },
  computed: {
    document() {
      return (this.item.documents || []).slice(0, 1)[0];
    },
    multipleDocuments() {
      return (this.item.documents || []).length > 1;
    }
  }
}
</script>