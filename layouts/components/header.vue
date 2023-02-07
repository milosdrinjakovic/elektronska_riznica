<template>
  <v-app-bar
      app
      flat
      :style="[{
        'height': showHeader ? '17.7vh' : $device.isDesktop ? '5.4vh' : 'auto'
      }]"
      :class="(showHeader || $device.isMobileOrTablet) ? 'z-toolbar-show' : 'z-toolbar-hide'"
      :height="headerHeight"
      :color="$device.isMobileOrTablet ? 'accent' : 'transparent'"
      dark
      class="z-toolbar"
      id="header"
  >
    <desktop-header v-if="$device.isDesktop"></desktop-header>
    <mobile-header v-else></mobile-header>
  </v-app-bar>
</template>

<script>
import ZMenu from './menu'
import MobileMenu from "@/layouts/components/mobile-menu";
import DesktopHeader from "@/layouts/components/desktop-header";
import MobileHeader from "@/layouts/components/mobile-header";

export default {
  components: {
    MobileHeader,
    DesktopHeader,
    MobileMenu,
    ZMenu
  },
  data: () => ({
    scrollFromTop: 0,
    drawer: false,
    headerHeight: 75,
    headerHeight2: 200,
  }),
  mounted() {
    document.addEventListener('scroll', this.onScroll);
    this.headerHeight2 = document.getElementById('header').getBoundingClientRect().height;
    this.onScroll();
  },
  methods: {
    onScroll() {
      this.scrollFromTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (this.$device.isMobileOrTablet) this.headerHeight = 75
      else this.headerHeight = this.showHeader ? this.headerHeight2 : this.headerHeight2 - 30;
    }
  },
  computed: {
    showHeader() {
      return !this.$device.isMobileOrTablet && this.scrollFromTop < 100
    }
  },
  watch: {
    $route() {
      setTimeout(() => this.onScroll(), 500)
    }
  }
}
</script>

<style>
body{
  overflow: hidden;
}
.z-toolbar .v-toolbar__content {
  padding-left: 0 !important;
  padding-right: 0 !important;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}

@media only screen and (min-width: 900px) {
  .z-toolbar .v-toolbar__content {
    height: auto !important;
  }
}

.z-toolbar {
  transition: all .6s ease-out;
}

.z-toolbar-hide {
  transform: translateY(calc(-12.3vh - 1px)) !important;
}
</style>