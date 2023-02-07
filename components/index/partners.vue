<template>
  <z-page v-if="item" class="my-15">
    <h3 class="h1-text text-center">{{ conv(getLang(item.langs).name) }}</h3>
    <v-row
        :no-gutters="$device.isMobileOrTablet"
        class="mt-4 mb-8 accent"
        style="height: 2px">
    </v-row>
    <v-row align="center" :no-gutters="$device.isMobileOrTablet">
      <template v-for="partner in paginatedPartners">
        <v-col cols="6" sm="3" :class="$device.isMobileOrTablet && 'px-4'" lg="3" align="center">
          <a :href="partner.web" target="_blank">
            <img class="partner-logo" :src="getImage(partner)" style="max-width: 100%"/>
          </a>
        </v-col>
      </template>
    </v-row>
  </z-page>
</template>

<script>
import categoryService from "@/services/category";

export default {
  data: () => ({
    item: null,
    interval: null,
    currentIndex: 0,
  }),
  created() {
    categoryService.get(this.$axios, 1290)
        .then(response => this.item = response.data)
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentIndex = this.currentIndex === this.item.object.length - 1 ? 0 : this.currentIndex + 1;
    }, 4000)
  },
  computed: {
    limit() {
      return this.$device.isMobile ? 2 : 4
    },
    paginatedPartners() {
      if (!this.item) return;
      let items = this.item.object.filter((partner, i) => i >= this.currentIndex && i < this.currentIndex + this.limit)
      if (this.currentIndex + this.limit > this.item.object.length) {
        const remaining = this.limit - (this.item.object.length - this.currentIndex + 1) + 1;
        const startingPartners = this.item.object.slice(0, remaining);
        items = items.concat(startingPartners);
      }
      return items;
    }
  },
  methods: {
    getImage(article) {
      return process.env.bucketUrl + `objects/${article.id}/${article.image}`;
    }
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
}
</script>

<style>

.partner-logo {
  cursor: pointer;
  transition: all .5s ease-in-out;
  filter: grayscale(100%);
  max-height: 64px;
}

.partner-logo:hover {
  filter: grayscale(0%);
}
</style>