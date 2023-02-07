<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12" :lg="lg" :xl="xl" class="px-0">
      <slot></slot>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    xl: {
      type: String,
      required: false,
      default: '7'
    },
    lg: {
      type: String,
      required: false,
      default: '10'
    },
  }
}
</script>