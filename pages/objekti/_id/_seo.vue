<template>
  <z-page class="mt-8">
    <contact :item="object"></contact>
    <div v-html="conv(getLang(object.langs).description)"></div>
  </z-page>
</template>

<script>
import objectService from "@/services/object";
import Contact from '~/components/categories/objects/contact'

export default {
  components: {
    Contact
  },
  head() {
    return {
      title: this.conv(this.getLang(this.object.langs).title) + ' - ' + this.$t('layout.title'),
      meta: [

        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.domain+this.$route.fullPath,
        },
        {
          hid: 'og:published_time',
          property: 'og:published_time',
          content: this.conv(this.getLang(this.object.langs).created_at),
        },
        ...(this.conv(this.getLang(this.object.langs).meta_description)
            ? [
              {
                hid: 'og:description',
                property: 'og:description',
                content: this.conv(this.getLang(this.object.langs).meta_description),
              },
            ]
            : []),
        ...(this.conv(this.getLang(this.object.langs).meta_keywords)
            ? [
              {
                hid: 'og:keywords',
                property: 'og:keywords',
                content: this.conv(this.getLang(this.object.langs).meta_keywords),
              },
            ]
            : [])
      ],
    };
  },
  async asyncData({$axios, route}) {
    const {data: object} = await objectService.get($axios, route.params.id);
    return {
      object
    }
  }
}
</script>