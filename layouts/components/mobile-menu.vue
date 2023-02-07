<template>

  <v-navigation-drawer
      v-model="localDrawer"
      app
      temporary
      right
      dark
      width="100%"

  >

    <v-list-item :to="localePath('index')" exact>{{ $t('layout.home') }}</v-list-item>
    <v-list
        class="pa-0"
        v-for="item in menuData"
        :key="item.id"
    >

        <v-list-item v-if="!item.children" :to="localeLocation(getRoute(item))">{{ conv(getLang(item.langs).name) }}</v-list-item>

      <v-list-group
          :value="true"
          v-if="item.children"
      >
        <template v-slot:activator>
          <v-list-item-title>{{ conv(getLang(item.langs).name) }}</v-list-item-title>
        </template>
        <template v-for="children in item.children">
          <v-list-group
              v-if="children.children"
              :value="true"
              no-action
              sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item>{{ conv(getLang(children.langs).name) }}</v-list-item>
              </v-list-item-content>
            </template>

            <v-list-item
                v-for="(child, i) in children.children"
                :key="i"
                link
            >
              <v-list-item-title>{{ conv(getLang(child.langs).name) }}</v-list-item-title>

            </v-list-item>
          </v-list-group>

            <v-list-item v-else :to="localeLocation(getRoute(children))" class="pl-8">{{
                conv(getLang(children.langs).name)
              }}
            </v-list-item>
        </template>
      </v-list-group>

    </v-list>
  </v-navigation-drawer>
</template>


<script>
export default {
  data: () => ({
    localDrawer: false
  }),
  methods: {
    goToLink(item) {
      this.$router.push(this.localeLocation(this.getRoute(item)));
    },
    getRoute(item) {
      const name = item.itemable_type === 'Category' ? 'kategorije-id-seo' : 'objekti-id-seo';
      return {name, params: {id: item.itemable_id, seo: this.getLang(item.langs).url}}
    }
  },
  computed: {
    drawer() {
      return this.$store.state.drawer;
    },
    menuData() {
      return this.$store.state.menu
    }
  },
  watch: {
    drawer(drawer) {
      if (drawer) this.localDrawer = drawer;
    },
    localDrawer(drawer) {
      if (!drawer) this.$store.commit('setDrawer', false)
    }
  }
}
</script>

<style scoped>

</style>