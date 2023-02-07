<template>
  <div class="pt-0" style="background-color: #008bc3 !important;">
    <div class="py-2">
      <z-page class="no-gutters pt-2">
        <v-row v-if="data" justify="end" align-content="center" :no-gutters="$device.isMobileOrTablet">
          <v-col cols="12" lg="3">
            <v-row no-gutters v-if="$device.isMobile" class="fill-height" align="center" justify="center">
              <router-link to="/">
                <img
                    alt="Za porodicu Logo"
                    src="/logo.png"
                    height="90px"
                />
              </router-link>
            </v-row>
            <v-row v-else class="fill-height" align="center">
              <router-link to="/">
                <img
                    alt="Za porodicu Logo"
                    src="/logo.png"
                    height="90px"
                />
              </router-link>
            </v-row>
          </v-col>
          <v-col
              v-html="conv(getLang(data.langs).description)"
              class="white--text"
              :class="$device.isDesktop ? 'pl-6' : 'px-6'"
              cols="12"
              lg="4">
          </v-col>
          <v-col
              v-if="data2"
              v-html="conv(getLang(data2.langs).description)"
              class="white--text"
              :class="$device.isDesktop ? 'pl-10' : 'px-6 mb-8'"
              cols="12"
              lg="5">
          </v-col>
        </v-row>
        <v-row v-if="data3" :no-gutters="$device.isMobileOrTablet">
          <v-col v-html="conv(getLang(data3.langs).description)" class="white--text lg-6 xl-6"></v-col>
        </v-row>
        <v-row justify-md="center" :class="$device.isMobileOrTablet && 'px-6'" :no-gutters="$device.isMobileOrTablet">
          <p class="white--text caption">
            {{ getDate }} {{ $t('layout.footer') }}<br/>{{ $t('layout.copyright') }}
          </p>
        </v-row>
      </z-page>
    </div>
  </div>
</template>

<script>
import categoryService from "@/services/category";
import articleService from "@/services/article";

export default {

  data() {
    return {
      data: null,
      data2: null,
      data3: null
    }
  },
  computed: {
    getDate() {
      return 'Copyright ©' + new Date().getFullYear();
    }
  },
  created() {
    categoryService.get(this.$axios, 1284)
        .then(response => this.data = response.data)
    categoryService.get(this.$axios, 1285)
        .then(response => this.data2 = response.data)
    categoryService.get(this.$axios, 1286)
        .then(response => this.data3 = response.data)
  },

}
</script>