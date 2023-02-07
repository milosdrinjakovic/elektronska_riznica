<template>
  <v-card flat :to="localeLocation({name: 'novost-id-seo', params: {id: article.id, seo: getLang(article.langs).seo_url}})">
    <z-image
        :src="getImage(article)"
        :aspect-ratio="16/9">
    </z-image>
    <v-card-text>
      <v-row no-gutters class="mb-2">
        <v-icon small class="mr-2">mdi-calendar-range</v-icon>
        <span class="text-capitalize">{{ $moment(article.publish_date).format('DD.MM.YYYY') }}</span>
      </v-row>
      <span class="black--text subtitle-2">{{ conv(getLang(article.langs).title) }}</span>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  methods: {
    getImage(article) {
      return `news/${article.id}/${article.image}`;
    }
  }
}
</script>