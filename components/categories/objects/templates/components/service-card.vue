<template>
  <z-card
      class="gallery-photo-container"
      hide-title
      hide-text
      :to="localeLocation({name: routeName, params: {id: item.id, seo: getLang(item.langs).seo_url}})">
    <z-image
        class="gallery-photo"
        :aspect-ratio="16/9"
        slot="content"
        :src="getImage(item)"
        :alt="conv(getLang(item.langs).name)">
      <v-row class="fill-height pb-10 pl-12" align="end" no-gutters style="background-color: rgba(0,0,0,.4)">
        <span class="title font-weight-bold text-center white--text">{{ conv(getLang(item.langs).name) }}</span>
      </v-row>
    </z-image>
  </z-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImage(item) {
      if (item.image === 'undefined') return 'https://opstinaribnik.rs.sr/template/images/deprticon1.png'
      const prefix = item.type === 'object' ? 'categories' : 'objects';
      return `${prefix}/${item.id}/${item.image}`
    }
  },
  computed: {
    routeName() {
      return this.item.type === 'object' ? 'kategorije-id-seo' : 'objekti-id-seo';
    }
  }
}
</script>