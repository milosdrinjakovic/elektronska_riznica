 <template>
  <v-row :no-gutters="$device.isMobileOrTablet"  class="flex-column" align="center" justify="center">
    <v-icon color="primary" size="72px">{{ icon }}</v-icon>
    <p class="headline mt-4 font-weight-bold">{{ title }}</p>
      <div class="body-2 text-center">
        <slot>{{ info }}</slot>
      </div>
  </v-row>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    info: {
      type: String,
      required: true
    },
  }
}
</script>