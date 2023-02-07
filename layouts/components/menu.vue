<template>
  <z-page class="my-0 fill-height" style="background-color: #fe8202; justify-items: end">
    <v-row no-gutters justify="space-between" align="center" style="min-height: 5.4vh">
      <v-btn
          class="px-2"
          text
          color="white"
          :to="localePath('index')" exact>
        <span class="text-uppercase">{{ $t('layout.home') }}</span>
      </v-btn>
      <template v-for="item in menuData">
        <div>
          <v-menu
              v-if="item.children"
              :close-on-content-click="false"
              open-on-hover
              tile
              offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                  @click="goToLink(item)"
                  class="px-2"
                  text
                  color="white"
                  v-bind="attrs"
                  v-on="on">
                <span class="text-uppercase">
                  <v-list-item>  {{ conv(getLang(item.langs).name) }}</v-list-item>
                </span>
                <v-icon>mdi-chevron-down</v-icon>

              </v-btn>
            </template>
            <v-list class="py-0">
              <template v-for="(children, index) in item.children">
                <v-list-group
                    v-if="children.children"
                    class="menu-group"
                    :value="[children.model]"
                    multiple
                    no-action>
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ conv(getLang(children.langs).name) }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <template v-for="(item, i) in children.children">
                    <v-list-item :to="localeLocation(getRoute(item))">
                      <v-list-item-title>{{ conv(getLang(item.langs).name) }}</v-list-item-title>
                    </v-list-item>
                    <v-divider v-if="i < children.children.length - 1"></v-divider>
                  </template>
                </v-list-group>
                <v-list-item v-else :to="localeLocation(getRoute(children))">
                  <v-list-item-title>{{ conv(getLang(children.langs).name) }}</v-list-item-title>
                </v-list-item>
                <v-divider v-if="index < item.children.length - 1"></v-divider>
              </template>
            </v-list>

          </v-menu>
          <v-btn class="px-2" v-else text color="white" :to="localeLocation(getRoute(item))" exact>
            <span class="text-uppercase">{{ conv(getLang(item.langs).name) }}</span>
          </v-btn>

        </div>

      </template>
      <div>
        <template v-for="(lang, i) in $i18n.locales">
          <router-link class="white--text" :to="switchLocalePath(lang.code)">{{ lang.name.substring(0, 3) }}
          </router-link>
          <span v-if="i < $i18n.locales.length - 1">| </span>

        </template>
      </div>
    </v-row>
  </z-page>
</template>

<script>
export default {
  computed: {
    menuData() {
      return this.$store.state.menu;
    }
  },
  methods: {
    goToLink(item) {
      this.$router.push(this.localeLocation(this.getRoute(item)));
    },
    getRoute(item) {
      const name = item.itemable_type === 'Category' ? 'kategorije-id-seo' : 'objekti-id-seo';
      return {name, params: {id: item.itemable_id, seo: this.getLang(item.langs).url}}
    },

  }
}
</script>