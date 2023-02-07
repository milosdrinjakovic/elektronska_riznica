<template>
  <v-row class="my-15" :no-gutters="$device.isMobileOrTablet" >
    <template v-for="(child, i) in children">
      <v-col cols="12" lg="4">
        <single-item-card :item="child"></single-item-card>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import SingleItemCard from "@/components/categories/objects/templates/components/single-item-card";

export default {
  components: {SingleItemCard},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    children() {
      return this.item.children.length ? this.item.children : this.item.object;
    }
  }
}
</script>