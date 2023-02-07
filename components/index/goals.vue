<template>
  <div class="goals-box">
    <z-page v-if="goals">
      <v-row :no-gutters="$device.isMobileOrTablet" >
        <v-col cols="12" lg="3">
          <v-card
              :to="localeLocation({name: 'kategorije-id-seo', params: {id: goals.id, seo: getLang(goals.langs).seo_url}})"
              flat
              color="hsla(0,0%,100%,.8)"
              height="190px"
              class="rounded-lg">
            <v-row justify="center" align="center" class="flex-column fill-height" no-gutters>
              <v-col cols="8" lg="7">
                <v-img src="https://cms.bitlab.host/api/data/86/photos/613/ikonica.png"></v-img>
              </v-col>
              <p class="text-center subtitle-1 font-weight-bold text-uppercase">{{
                  conv(getLang(goals.langs).name)
                }}
              </p>
            </v-row>
          </v-card>
        </v-col>
        <template v-for="(item, i) in items">
          <v-col cols="12" lg="3">
            <v-card
                flat
                color="hsla(0,0%,100%,.8)"
                height="190px"
                class="rounded-lg"
                :to="localeLocation({name: 'kategorije-id-seo', params: {id: goals.id, seo: getLang(goals.langs).seo_url}})">
              <v-row align="center" class="flex-column fill-height" no-gutters>
                <p class="primary--text h2-text font-weight-bold mb-0">{{ i + 1 }}.</p>
                <p class="text-center subtitle-2 font-weight-bold">
                  {{ item }}
                </p>
              </v-row>
            </v-card>
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
    goals: null
  }),
  created() {
    categoryService.get(this.$axios, 678)
        .then(response => this.goals = response.data)
  },
  methods: {
    getImage(article) {
      return `categories/${article.id}/${article.image}`;
    }
  },
  computed: {
    items() {
      return [
        this.$t('index.goals.title1'),
        this.$t('index.goals.title2'),
        this.$t('index.goals.title3'),
        this.$t('index.goals.title4'),
        this.$t('index.goals.title5'),
        this.$t('index.goals.title6'),
        this.$t('index.goals.title7'),
      ]
    }
  }
}
</script>

<style>
.goals-box {
  background: linear-gradient(rgba(6, 9, 40, .75), rgba(0, 0, 0, .5)), url(https://cms.bitlab.host/api/data/86/photos/613/djeca.jpg) no-repeat;
  background-size: cover;
  padding: 80px 0;
  background-attachment: fixed;
}
</style>