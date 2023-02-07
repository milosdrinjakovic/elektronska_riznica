<template>
  <div>
    <slider :slides="slides"></slider>

    <v-row justify="center" v-if="flipbookItem" :no-gutters="$device.isMobileOrTablet">
      <v-col class="px-0 col-lg-8 col-xl-7 col-12">
        <flipbook :src="flipbookItem"></flipbook>
      </v-col>
    </v-row>

    <v-lazy>
      <projects></projects>
    </v-lazy>

    <div :class="$device.isMobileOrTablet && 'team-boxb'">
      <div :class="!$device.isMobileOrTablet && 'py-8 team-box'">
        <z-page class="mt-8" :justify="$device.isMobile ? 'center' : 'space-around'">
            <v-row no-gutters>
              <v-col cols="12">
                <v-row :justify="!$device.isMobileOrTablet? 'space-between' : 'center'" class="py-6" no-gutters>
                  <h3 v-if="!$device.isMobileOrTablet" class="h1-text">{{ $t('index.latestNews') }}</h3>
                  <v-btn
                      depressed
                      color="primary"
                      :to="localeLocation({name: 'kategorije-id-seo', params: {id: articles.id, seo: articles.seo}})">
                    {{ $t('index.seeAllNews') }}
                  </v-btn>
                </v-row>
              </v-col>
              <article-list :articles="articles.data"></article-list>
            </v-row>
        </z-page>
      </div>

      <z-page class="mt-8 mb-8" justify="space-around">
        <v-row no-gutters>
          <v-col cols="12">
            <v-row  :justify="!$device.isMobileOrTablet? 'space-between' : 'center'" class="py-6" no-gutters>
              <h3 v-if="!$device.isMobileOrTablet"  class="h1-text">{{$t('index.Contests') }}</h3>
              <v-btn
                  depressed
                  color="primary"
                  :to="localeLocation({name: 'kategorije-id-seo', params: {id: contests.id, seo: contests.seo}})">
                {{ $t('index.seeAllContests') }}
              </v-btn>
            </v-row>
          </v-col>
          <article-list :articles="contests.data"></article-list>
        </v-row>
      </z-page>
    </div>

    <v-lazy>
      <partners></partners>
    </v-lazy>
  </div>
</template>

<script>
import Slider from "@/components/global/slider";
import ArticleList from "@/components/articles/list";
import articleService from "@/services/article";
import Projects from "@/components/index/projects";
import Partners from "@/components/index/partners";
import categoryService from "@/services/category";
import Flipbook from "@/components/global/flipbook";

export default {
  components: {
    Flipbook,
    Projects,
    Slider,
    Partners,
    ArticleList
  },
  head() {
    return {
      title: this.$t('layout.title')
    }
  },
  async asyncData({$axios}) {
    const articlesId = 1233;
    const contestsId = 1234;
    const articleParams = {
      offset: 0,
      limit: 3,
      paginate: true,
      category_id: articlesId,
      order: 'DESC',
      status: 'active'
    }
    const contestParams = {
      offset: 0,
      limit: 3,
      paginate: true,
      category_id: contestsId,
      order: 'DESC',
      status: 'active'
    }
    const {data: articles} = await articleService.articles($axios, articleParams);
    const {data: contests} = await articleService.articles($axios, contestParams);
    const paramsSlider = {
      slider: true,
      limit: 5
    }
    const {data: slides} = await articleService.articles($axios, paramsSlider);
    const {data: flipbook} = await categoryService.get($axios, 1228);
    return {
      articles: {...articles, id: articlesId, seo: 'vijesti'},
      contests: {...contests, id: contestsId, seo: 'konkursi'},
      slides,
      flipbook
    }
  },
  computed: {
    flipbookItem() {
      const documents = this.flipbook.documents;
      if (!documents) return null;
      const document = documents[0];
      if (!document) return null;
      if (!document.langs) return null;
      return process.env.bucketUrl + `documents/${document.langs[0].file}`
    },
    allArticles() {
      return [...this.articles.data, ...this.contests.data]
    }
  }
}
</script>

<style>
* {
  font-family: "Roboto Condensed" !important;
}
.team-box {
  background: url('static/pozadina.png') no-repeat;
  background-size: cover;


}
</style>