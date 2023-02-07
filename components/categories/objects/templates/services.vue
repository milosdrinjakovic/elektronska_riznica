<template>
  <v-row class="my-15" :no-gutters="$device.isMobileOrTablet" :class="$device.isMobileOrTablet && 'px-4'">
    <template v-for="(child, i) in children">
      <v-col cols="12" :lg="lg" :class="$device.isMobileOrTablet && 'mb-4'">
        <service-card :item="child"></service-card>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import ServiceCard from "@/components/categories/objects/templates/components/service-card";

export default {
  components: {ServiceCard},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    children() {
      return this.item.children.length ? this.item.children : this.item.object;
    },
    lg() {
      const lg = Number(this.item.include);
      switch (lg) {
        case 3:
          return '3'
        case 4:
          return '4'
        case 6:
          return '6'
        default:
          return '3'
      }
    }
  }
}
</script>