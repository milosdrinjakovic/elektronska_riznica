<template>
  <v-img
      :src="src | bucketUrl"
      max-width="100%"
      :aspect-ratio="aspectRatio"
      :height="height"
      :max-height="maxHeight">
    <slot></slot>
  </v-img>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    maxHeight: {
      type: String,
      required: false,
      default: undefined
    },
    height: {
      type: String,
      required: false,
      default: undefined
    },
    aspectRatio: {
      type: [String, Number],
      required: false,
      default: undefined
    }
  },
  filters: {
    bucketUrl(src) {
      return src.startsWith('http') ? src : process.env.bucketUrl + src
    }
  }
}
</script>