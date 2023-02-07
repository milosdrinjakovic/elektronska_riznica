<template>
  <carousel :per-page="1" loop autoplay :pagination-enabled="false">
    <template v-for="slide in slides">
      <slide>
        <z-image :src="getImage(slide)" max-height="82.3vh">
          <z-page class="fill-height slider-background" >
            <v-row no-gutters class="fill-height flex-column" style="max-width: 100%" justify="center">
              <h1 class="font-weight-bold white--text display-1 slide-title" v-if="getLang(slide.langs).title.length > 3">
                {{ getLang(slide.langs).title }}
              </h1>
              <h1 class="font-weight-medium white--text display-1 slide-title" v-if="getLang(slide.langs).introduction.length > 3">
                {{ getLang(slide.langs).introduction }}
              </h1>
            </v-row>
          </z-page>
        </z-image>
      </slide>
    </template>
  </carousel>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  methods: {
    getImage(article) {
      return `news/${article.id}/${article.image}`;
    }
  }
}
</script>

<style>
.slide-title {
  color: antiquewhite;
  text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.8)
}

.slider-background {
  background-color: rgba(0, 0, 0, 0.3);
}

.VueCarousel-slide{
  max-width: 100%;
}
</style>