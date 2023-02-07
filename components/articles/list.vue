<template>
  <v-row :no-gutters="$device.isMobileOrTablet" :class="$device.isMobileOrTablet && 'px-4'">
    <template v-for="article in articles" v-if="getLang(article.langs)">
      <v-col cols="12" lg="4" :class="$device.isMobileOrTablet && 'mb-4'">
        <v-card
            :to="localeLocation({name: 'novost-id-seo', params: {id: article.id, seo: getLang(article.langs).seo_url}})"
            flat
            style="box-shadow: 0 0 10px #ccc !important;overflow: hidden"
            class="fill-height"
            max-height="500px">
          <z-image :src="getImage(article)" :aspect-ratio="16/9">
            <v-row justify="end" class="mt-2" no-gutters>
              <v-chip
                  class="py-0 mr-2"
                  color="accent"
                  label
              >

                {{ conv(getLang(article.category.langs).name) }}
              </v-chip>
            </v-row>
          </z-image>
          <v-card-text>
            <v-row no-gutters>
              <v-icon small class="mr-2">mdi-calendar-range</v-icon>
              <span class="text-capitalize">{{ $moment(article.publish_date).format('DD.MM.YYYY') }}</span>
            </v-row>
            <h2 class="my-4 black--text">
              {{ conv(getLang(article.langs).title) }}
            </h2>
            <p class="line-clamp subtitle-1" v-html="conv(getLang(article.langs).content)"></p>
          </v-card-text>
        </v-card>
      </v-col>
    </template>
  </v-row>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: false
    }
  },
  methods: {
    getImage(article) {
      return `news/${article.id}/${article.image}`;
    }
  }
}
</script>