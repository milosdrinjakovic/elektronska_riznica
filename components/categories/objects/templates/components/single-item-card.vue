<template>
  <z-card hide-title height="250px">
    <v-row
        @mouseenter="expand = true"
        @mouseleave="expand = false"
        class="fill-height flex-column"
        justify="center"
        align="center"
        slot="content"
        no-gutters>
      <v-avatar size="100px" class="mb-5">
        <z-image
            :non-bucket="item.image === 'undefined'"
            class="item-card-avatar"
            :src="getImage(item)"
            :alt="conv(getLang(item.langs).name)"
        />
      </v-avatar>
      <span class="subtitle-1 font-weight-bold text-center">{{ conv(getLang(item.langs).name) }}</span>
      <transition name="fade">
        <v-btn
            v-if="expand"
            class="mt-4"
            rounded
            :to="localeLocation({name: 'kategorije-id-seo', params: {id: item.id, seo: getLang(item.langs).seo_url}})"
            small
            depressed
            color="primary">
          <span class="text-uppercase">{{ $t('layout.more') }}</span>
        </v-btn>
      </transition>
    </v-row>
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
  data: () => ({
    expand: false
  }),
  methods: {
    getImage(item) {
      if (item.image === 'undefined') return 'https://opstinaribnik.rs.sr/template/images/deprticon1.png'
      return `categories/${item.id}/${item.image}`
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>