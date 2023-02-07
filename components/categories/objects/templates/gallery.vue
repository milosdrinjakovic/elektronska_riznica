<template>
  <div class="mt-10">
    <gallery v-if="photos.length" :images="photos"></gallery>
    <video-gallery v-if="videos.length" :videos="videos"></video-gallery>
  </div>
</template>

<script>
import Gallery from "@/components/global/gallery";
import VideoGallery from "@/components/global/video-gallery";

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    Gallery,
    VideoGallery
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
    },
    videos() {
      const objects = this.item.object || [];
      return objects.map(object => {
        let url = false;
        const extra_fields = JSON.parse(object.extra_fields)
        const videoField = extra_fields.find(field => field.tag === 'video');
        if (videoField) url = videoField.langs.sr.value
        return {
          ...object,
          url,
          extra_fields
        }
      }).filter(object => (object.extra_fields || []).some(field => field.tag === 'video'))
    },
  }
}
</script>