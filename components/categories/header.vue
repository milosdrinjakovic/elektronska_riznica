<template>
  <v-img :src="image" height="300px">
    <v-row
        no-gutters
        class="fill-height category-header">
      <z-page>
        <v-row justify="center" class="fill-height flex-column" :no-gutters="$device.isMobileOrTablet">
          <h2 class="display-1 white--text ml-5">{{ title }}</h2>
          <v-breadcrumbs
              dark
              :items="breadcrumbs"
              divider="/">
            <template v-slot:item="{ item }">
              <v-breadcrumbs-item
                  exact
                  :to="localeLocation(item.to)"
                  :disabled="item.active"
              >
                <span class="white--text">{{ item.text }}</span>
              </v-breadcrumbs-item>
            </template>
          </v-breadcrumbs>
        </v-row>
      </z-page>
    </v-row>
  </v-img>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    breadcrumbs: {
      type: Array,
      required: true
    },
  }
}
</script>

<style>
.category-header {
  background-image: linear-gradient(90deg, rgba(254, 130, 2, 0.25) 0%, rgba(254, 130, 2, 0.20) 35%, rgba(254, 130, 2, 0.14) 100%)
}
</style>
