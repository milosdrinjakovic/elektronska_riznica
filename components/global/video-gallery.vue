<template>
  <v-row :no-gutters="$device.isMobileOrTablet">
    <template v-for="video in videos" v-if="video.url">
      <v-col cols="12" lg="6" :class="$device.isMobileOrTablet && 'mb-4'">
        <z-iframe :src="video.url"></z-iframe>
        <v-row justify="space-between" no-gutters class="white--text subtitle-1 font-weight-bold accent">
          <div class="pa-4">{{ conv(getLang(video.langs).name) }}</div>
          <div class="py-4 px-12 fill-height primary">Video</div>
        </v-row>
      </v-col>
    </template>
  </v-row>
</template>

<script>
import ZIframe from '~/components/global/iframe'

export default {
  props: {
    videos: {
      type: Array,
      required: true
    }
  },
  components: {
    ZIframe
  }
}
</script>