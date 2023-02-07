<template>
  <div class="team-box">
    <z-page class="py-10" v-if="team">
      <p class="text-center h2-text font-weight-bold mb-4">{{ translation(team, 'name') }}</p>
      <v-row :no-gutters="$device.isMobileOrTablet" >
        <template v-for="children in team.children">
          <v-col cols="12" lg="4">
            <z-card
                hide-title
                hide-text
                class="fill-height"
                :to="localeLocation({name: 'kategorije-id-seo', params: {id: children.id, seo: getLang(children.langs).seo_url}})">
              <template slot="content">
                <v-row no-gutters class="fill-height">
                  <v-col cols="12" lg="6" class="pa-0">
                    <z-image :src="getImage(children)" height="100%"></z-image>
                  </v-col>
                  <v-col cols="12" lg="6" class="px-4 py-6">
                    <p class="headline font-weight-bold" style="line-height: 1.2">
                      {{ translation(children, 'name') }}
                    </p>
                    <p class="subtitle-2">
                      {{ translation(children, 'short_description') }}
                    </p>
                  </v-col>
                </v-row>
              </template>
            </z-card>
          </v-col>
        </template>
      </v-row>
    </z-page>
  </div>
</template>

<script>
import categoryService from "@/services/category";

export default {
  data: () => ({
    team: null
  }),
  created() {
    categoryService.get(this.$axios, 687)
        .then(response => this.team = response.data)
  },
  methods: {
    getImage(article) {
      return `categories/${article.id}/${article.image}`;
    }
  }
}
</script>

<style>
.team-box {
  background: url('static/pozadina.png') no-repeat;
  background-size: cover;
}
</style>