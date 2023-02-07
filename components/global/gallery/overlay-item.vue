<template>
  <v-overlay v-model="model" z-index="5555555555555555555555555555555555555" opacity="0.9">
    <v-btn absolute right top icon x-large @click="model = false">
      <v-icon x-large>mdi-close</v-icon>
    </v-btn>
    <v-row style="height: 100vh;width: 100vw" justify="center" align="center">
      <v-btn icon x-large @click="$emit('changeImage', -1)" v-if="$device.isDesktop">
        <v-icon x-large>mdi-chevron-left</v-icon>
      </v-btn>
      <v-col cols="12" lg="11">
        <v-row
          justify="center"
          align="center"
          ref="item"
          v-touch="{
            left: () => $emit('changeImage', -1),
            right: () => $emit('changeImage', 1)
          }"
          v-if="image"
          className="flex-column"
          style="height: 90vh">
          <div :style="`width: 600px`">
            <img :src="image.url" style="max-width: 100%"/>
          </div>
        </v-row>
      </v-col>
      <v-btn icon x-large @click="$emit('changeImage', 1)" v-if="$device.isDesktop">
        <v-icon x-large>mdi-chevron-right</v-icon>
      </v-btn>
    </v-row>
  </v-overlay>
</template>

<script>
import hasModel from "@/mixins/hasModel";

export default {
  mixins: [hasModel],
  props: {
    image: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    elWidth: 0,
    elHeight: 0
  }),
  mounted() {
    // const bounding = this.$refs.item.getBoundingClientRect();
    this.width = window.screen.width;
    this.height = window.screen.height;
  },
  computed: {
    imageSize() {
      let width = this.width;
      let height = Math.floor(this.aspectRatio * width);
      // if (height > this.maxHeight) {
      //   height = this.maxHeight;
      //   return [Math.floor(height / this.aspectRatio), height]
      // }
      return [width, height]
    },
    aspectRatio() {
      return this.height / this.width;
    }
  }
}
</script>
