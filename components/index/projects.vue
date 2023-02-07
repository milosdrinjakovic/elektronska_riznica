<template>
  <div class="projects-box">
    <p class="text-center h2-text white--text font-weight-bold">{{ $t('index.projects') }}</p>
    <v-row justify="center" class="mt-4" :no-gutters="$device.isMobileOrTablet" >
      <v-col cols="12" lg="10">
        <v-row align="center" style="position: relative" :no-gutters="$device.isMobileOrTablet" >
<!--          <v-btn-->
<!--              color="primary"-->
<!--              class="px-0 project-navigation-btn project-navigation-btn-prev"-->
<!--              depressed-->
<!--              min-width="40px"-->
<!--              width="40px"-->
<!--              height="114px">-->
<!--            <v-icon>mdi-chevron-left</v-icon>-->
<!--          </v-btn>-->
          <v-col>
            <carousel
                :pagination-enabled="false"
                loop
                autoplay
                :scroll-per-page="false"
                :per-page="$device.isMobileOrTablet ? 1 : 4"
                :mouse-drag="false"
                v-if="project">
              <template v-for="children in project.children">
                <slide>
                  <router-link :to="localeLocation({name: 'kategorije-id-seo', params: {id: children.id, seo: getLang(children.langs).seo_url}})">
                  <z-image class="mx-1" :aspect-ratio="1.2" :src="getImage(children)" v-ripple>
                    <v-row
                        no-gutters
                        class="pa-2"
                        style="position: absolute;left:0;bottom:0;width: 100%;background-color: rgba(0,0,0, .7)">
                      <span class="white--text subtitle-1 font-weight-bold">{{
                          conv(getLang(children.langs).name)
                        }}</span>
                    </v-row>
                  </z-image>

                  </router-link>
                </slide>
              </template>
            </carousel>
          </v-col>
<!--          <v-btn-->
<!--              color="primary"-->
<!--              class="px-0 project-navigation-btn project-navigation-btn-next"-->
<!--              depressed-->
<!--              min-width="40px"-->
<!--              width="40px"-->
<!--              height="114px">-->
<!--            <v-icon>mdi-chevron-right</v-icon>-->
<!--          </v-btn>-->
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import categoryService from "@/services/category";

export default {
  data: () => ({
    project: null
  }),
  created() {
    categoryService.get(this.$axios, 1230)
        .then(response => this.project = response.data)
  },
  methods: {
    getImage(article) {
      return `categories/${article.id}/${article.image}`;
    }
  }
}
</script>

<style>
.projects-box {
  background: linear-gradient(rgba(6, 9, 40, .75), rgba(0, 0, 0, .5)), url(/pozadina.png) no-repeat;
  background-size: cover;
  max-height: 350px;
  margin-bottom: 190px;
  padding: 80px 0;
  background-attachment: fixed;
}

.project-navigation-btn {
  position: absolute;
  z-index: 55555
}

.project-navigation-btn-prev {
  left: 0;
}

.project-navigation-btn-next {
  right: 0;
}
</style>