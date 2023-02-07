<template>
  <div>
    <overlay-item
        v-model="showGalleryItem"
        :image="images[galleryItemIndex]"
        @changeImage="changeImage">
    </overlay-item>
    <v-row :no-gutters="$device.isMobileOrTablet">
      <v-col
          v-for="(image, i) in images"
          :key="i"
          cols="12"
          class="gallery-photo-container"
          :md="md">
        <v-img
            class="gallery-photo"
            :class="!$device.isMobileOrTablet ? 'fill-height pointer' : 'mb-4' "
            @click="openGallery(i)"
            :src="image.url"></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import OverlayItem from "./overlay-item";

export default {
  components: {OverlayItem},
  props: {
    images: {
      type: Array,
      required: true
    },
    md: {
      type: String,
      required: false,
      default: '4'
    }
  },
  data: () => ({
    showGalleryItem: false,
    galleryItemIndex: 0
  }),
  methods: {
    openGallery(i) {
      this.galleryItemIndex = i;
      this.showGalleryItem = true;
    },
    changeImage(direction) {
      if (direction > 0) {
        if (this.galleryItemIndex === this.images.length - 1) this.galleryItemIndex = 0;
        else this.galleryItemIndex++;
      } else {
        if (!this.galleryItemIndex) this.galleryItemIndex = this.images.length - 1;
        else this.galleryItemIndex--;
      }
    }
  }
}
</script>