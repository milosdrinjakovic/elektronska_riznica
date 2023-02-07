<template>
  <v-row no-gutters class="px-5 fill-height" justify="space-between" align="center">
    <v-col>
      <router-link to="/">
        <v-row class="fill-height" align="center">
          <img
              alt="Elektronska riznica Logo"
              src="/logo.png"
              height="68px"
          />
        </v-row>
      </router-link>
    </v-col>

    <v-btn icon color="primary" @click="toggleDrawer">
      <v-icon x-large>mdi-menu</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  methods: {
    toggleDrawer() {
      this.$store.commit('setDrawer', true)
    }
  }
}
</script>