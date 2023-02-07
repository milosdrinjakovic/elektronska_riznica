<template>
  <div class="pb-4">
    <p class="h2-text">{{ translation(item, 'name') }}</p>
    <div v-html="translation(item, 'description')"></div>
    <gallery md="4" v-if="photos" :images="photos"></gallery>
  </div>
</template>


<script>
import Gallery from '~/components/global/gallery'

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    Gallery
  },
  computed: {
    image() {
      return `categories/${this.item.id}/${this.item.image}`
    },
    photos() {
      const galleries = this.item.album || [];
      const photos = galleries.reduce((photos, gallery) => {
        photos = photos.concat(gallery.photos || [])
        return photos;
      }, []).map(photo => {
        return {...photo, url: process.env.bucketUrl + `photos/${photo.photo_album_id}/${photo.filename}`}
      })
      return [{url: process.env.bucketUrl + this.image}, ...photos];
    }
  },
  filters: {
    bucketUrl(src) {
      return process.env.bucketUrl + src
    }
  }
}
</script>

<style>
.team-image {
  float: left;
  /*height: 430px;*/
  /*width: 460px;*/
  width: 500px;
  max-width: 100%;
  object-fit: cover;
}
</style>