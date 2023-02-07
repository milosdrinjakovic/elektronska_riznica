<template>
  <v-row
      no-gutters
      class="flex-column mx-0 px-0">
    <v-col
        cols="12"
        class="accent px-0 z-header">
      <v-row justify="center" align="center" class="fill-height" no-gutters style="min-height: 12.3vh">
        <router-link to="/">
          <img
              alt="Elektronska riznica Logo"
              src="/logo.png"
              height="60px"
          />
        </router-link>
      </v-row>
    </v-col>
    <v-col id="menu" cols="12" class="px-0" style="min-height: 5.4vh">
      <z-menu></z-menu>
    </v-col>
  </v-row>
</template>

<script>
import ZMenu from './menu'
export default {
  components: {
    ZMenu
  }
}
</script>