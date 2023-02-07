<template>
  <v-row class="mt-10">
    <template v-for="document in item.documents">
      <v-col cols="12" lg="4" :class="$device.isMobileOrTablet && 'mb-4'">
        <router-link
            :to="localeLocation({name: 'dokumenti-id-seo', params: {id: document.id, seo: getLang(document.langs).seo_url}})">
          <div class="gallery-photo-container">
            <v-img contain :aspect-ratio="3/4" :src="getDocumentImage(document)" class="gallery-photo"/>
          </div>
          <div class="px-4 py-2 grey lighten-3 black--text">
            <p class="mb-0">
              <span class="caption">{{ $moment(document.publish_date).format('DD.MM.YYYY') }}</span>
              <br/>
              <span class="title">{{ conv(getLang(document.langs).name) }}</span>
            </p>
          </div>
        </router-link>
      </v-col>
    </template>
  </v-row>
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
    getDocumentImage(document) {
      return process.env.bucketUrl + `documents/${document.id}/${document.image}`
    }
  },
}
</script>