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
        case 'contact-page':
          return () => import('~/components/categories/objects/templates/contact');
        case 'gallery-page':
          return () => import('~/components/categories/objects/templates/gallery');
        case 'team-single':
          return () => import('~/components/categories/objects/templates/team-single');
        case 'service-page':
          return () => import('~/components/categories/objects/templates/services');
        case 'service-icon-page':
          return () => import('~/components/categories/objects/templates/services-icon');
        default :
          return () => import('~/components/categories/objects/templates/default');
      }
    }
  }
}
</script>