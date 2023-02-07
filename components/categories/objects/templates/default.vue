<template>
  <div class="mt-8">
    <div :class="$device.isMobileOrTablet && 'pa-6'" v-html="conv(getLang(item.langs).description)"></div>
    <v-list style="box-shadow: 0 0 10px #ccc" class="py-0">
      <template
          v-if="article.status"
          v-for="article in item.children.length > 0 ? item.children : item.object">
        <v-list-item :to="localeLocation({name: 'kategorije-id-seo', params: {id: article.id, seo: getLang(article.langs).seo_url}})">
          <v-list-item-title>{{ conv(getLang(article.langs).name) }}</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
      </template>
    </v-list>
    <div class="mt-4">
      <gallery :images="photos"></gallery>
    </div>
  </div>
</template>

<script>

import Gallery from "@/components/global/gallery";
export default {
  components: {
    Gallery
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    photos() {
      const galleries = this.item.album || [];
      const photos = galleries.reduce((photos, gallery) => {
        photos = photos.concat(gallery.photos || [])
        return photos;
      }, []).map(photo => {
        return {...photo, url: process.env.bucketUrl + `photos/${photo.photo_album_id}/${photo.filename}`}
      })
      return photos;
    }
  }
}
</script>

<style scoped>

</style>