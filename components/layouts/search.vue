<template>
  <v-dialog
      v-model="dialog"
      fullscreen
      transition="dialog-bottom-transition"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
          icon
          dark
          v-bind="attrs"
          v-on="on"
      >
        <v-icon color="accent">mdi-magnify</v-icon>
      </v-btn>
    </template>
    <v-btn
        @click="dialog = false"
        absolute
        top
        right
        style="z-index: 4444"
        width="48px"
        min-width="48px"
        height="48px"
        dark
        tile
        class="px-0"
        color="primary"
        depressed>
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <v-overlay absolute :opacity="0.91" color="#000">
      <v-row style="width: 500px;max-width: 100%;">
        <v-text-field :label="$t('layout.search')" dark></v-text-field>
        <v-btn tile width="50px" height="50px" class="ml-4" color="accent">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-row>
    </v-overlay>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  })
}
</script>