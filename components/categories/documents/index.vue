<template>
  <component :is="objectComponent" :item="item"></component>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    objectComponent() {
      switch (this.item.template) {
        case 'service-page':
          return () => import('~/components/categories/documents/templates/service-page');
        case 'team-single':
          return () => import('~/components/categories/documents/templates/team-single');
        default :
          return () => import('~/components/categories/documents/templates/default');
      }
    }
  }
}
</script>