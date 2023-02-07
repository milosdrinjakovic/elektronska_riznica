<template>
  <v-row class="py-15" :no-gutters="$device.isMobileOrTablet" :class="$device.isMobileOrTablet && 'px-4'">
    <template v-for="child in children">
      <v-col cols="12" lg="4" :class="$device.isMobileOrTablet && 'mb-4'">
        <z-card>
          <span slot="title" style="word-break: break-word">{{ conv(getLang(child.langs).name) }}</span>
          <v-list class="py-0">
            <v-list-item v-if="child.phone">
              <v-list-item-action>
                <v-icon color="accent">mdi-phone</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ $t('contact.phone') }}</v-list-item-title>
                <v-list-item-subtitle>{{ child.phone }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item three-line v-if="getLang(child.langs).address">
              <v-list-item-action>
                <v-icon color="accent">mdi-domain</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ $t('contact.address') }}</v-list-item-title>
                <v-list-item-subtitle>{{ [conv(getLang(child.langs).address), conv(getLang(child.langs).city)].join(', ') }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="child.email">
              <v-list-item-action>
                <v-icon color="accent">mdi-email</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ $t('contact.mail') }}</v-list-item-title>
                <v-list-item-subtitle>{{ child.email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </z-card>
      </v-col>
    </template>
  </v-row>
</template>

<script>

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    children() {
      return this.item.children.length ? this.item.children : this.item.object;
    }
  }
}
</script>