<template>
  <v-card flat class="z-card" :height="height" :to="to">
    <template v-if="!hideTitle">
      <v-card-title align="center">
        <slot name="title"></slot>
      </v-card-title>
      <v-divider></v-divider>
    </template>
    <slot name="content"></slot>
    <v-card-text v-if="!hideText">
      <slot></slot>
    </v-card-text>
    <v-card-actions v-if="showActions">
      <slot name="actions"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    to: {
      type: Object,
      required: false,
      default: undefined
    },
    hideTitle: {
      type: Boolean,
      required: false,
      default: false
    },
    hideText: {
      type: Boolean,
      required: false,
      default: false
    },
    showActions: {
      type: Boolean,
      required: false,
      default: false
    },
    height: {
      type: String,
      required: false,
      default: undefined
    }
  }
}
</script>

<style>
.z-card {
  box-shadow: 0 0 10px #ccc !important;
}
</style>