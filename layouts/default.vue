<template>
  <v-app>
    <z-header></z-header>
    <mobile-menu v-if="$device.isMobileOrTablet"></mobile-menu>
    <v-main id="main">
      <nuxt/>
    </v-main>

    <z-footer></z-footer>
  </v-app>
</template>

<script>
import ZHeader from './components/header'
import ZFooter from './components/footer'
import MobileMenu from "@/layouts/components/mobile-menu";

export default {
  name: 'App',
  components: {
    MobileMenu,
    ZHeader,
    ZFooter
  },
  data: () => ({
    isMobile: false
  }),
  created() {
    this.$store.dispatch('getMenu', this.$axios);
  },
  watch: {
    '$i18n.locale'(locale) {
      if (locale === 'sr') {
        this.$moment.locale('sr-cyrl')
      } else {
        this.$moment.locale('sr')
      }
    },
  }
};
</script>
