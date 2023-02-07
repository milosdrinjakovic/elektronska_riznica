<template>

  <z-page class="mb-8">
    <v-row :no-gutters="$device.isMobileOrTablet">
      <v-col cols="12" lg="9">
        <z-card hide-title>
          <v-row justify="center" class="mb-4">
            <v-col cols="12" :lg="article.category_id === 1234 ? 6 : 12">
              <v-row justify="center" no-gutters>
                <gallery :images="[{url: image}]" md="10"></gallery>
              </v-row>
            </v-col>
          </v-row>
          <v-row no-gutters class="mb-4">
            <v-icon small class="mr-2">mdi-calendar-range</v-icon>
            <span class="text-capitalize">{{ $moment(article.publish_date).format('L') }}</span>
          </v-row>
          <h1 class="h1-text black--text mb-6 font-weight-regular">{{ conv(getLang(article.langs).title) }}</h1>
          <div class="black--text" v-html="conv(getLang(article.langs).content)"></div>
          <z-iframe v-if="article.video" :src="'https://www.youtube.com/embed/' + videoCode"></z-iframe>
          <template v-if="photos.length">
            <gallery :images="photos"></gallery>
          </template>
        </z-card>
        <social-share class="mt-8"></social-share>
      </v-col>
      <v-col cols="12" lg="3">
        <z-card flat style="box-shadow: 0 0 10px #ccc !important;">
          <span slot="title" class="text-uppercase">{{ $t('index.latestNews') }}</span>
          <template v-for="item in articles">
            <mini-card :article="item" class="mb-4"></mini-card>
          </template>
        </z-card>
        <z-card flat style="box-shadow: 0 0 10px #ccc !important;" class="mt-8">
          <span slot="title" class="text-uppercase">{{ $t('index.allNews') }}</span>
          <v-list>
            <template v-for="category in categories">
              <router-link
                  :to="localeLocation({
                      name: 'kategorije-id-seo',
                      params: {
                        id: category.id,
                        seo: getLang(category.langs).seo_url || '-'
                      }
                    })">
                <v-row align="center" class="mb-2 px-2">
                  <v-col cols="2" align="end">
                    <v-icon color="primary">mdi-chevron-right</v-icon>
                  </v-col>
                  <v-col cols="10">
                    <span class="subtitle-2 black--text">{{ conv(getLang(category.langs).name) }}</span>
                  </v-col>
                </v-row>
              </router-link>
            </template>
          </v-list>
        </z-card>
      </v-col>
    </v-row>
  </z-page>
</template>

<script>
import articleService from "@/services/article";
import categoryService from "@/services/category";

import SocialShare from "~/components/global/social-share";
import MiniCard from "@/components/articles/mini-card";
import Gallery from "@/components/global/gallery";
import ZIframe from "@/components/global/iframe";

export default {
  components: {
    Gallery,
    MiniCard,
    SocialShare,
    ZIframe
  },
  head() {
    return {
      title: this.conv(this.getLang(this.article.langs).title) + ' - ' + this.$t('layout.title'),
      meta: [
        ...(this.article.image
            ? [
              {
                hid: 'og:image',
                property: 'og:image',
                content: process.env.bucketUrl + `news/${this.article.id}/medium/${this.article.image}`,
              },
            ]
            : []),
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.domain + this.$route.fullPath,
        },
        {
          hid: 'og:published_time',
          property: 'og:published_time',
          content: this.conv(this.getLang(this.article.langs).created_at),
        },
        ...(this.conv(this.getLang(this.article.langs).meta_description)
            ? [
              {
                hid: 'og:description',
                property: 'og:description',
                content: this.conv(this.getLang(this.article.langs).meta_description),
              },
            ]
            : []),
        ...(this.conv(this.getLang(this.article.langs).meta_keywords)
            ? [
              {
                hid: 'og:keywords',
                property: 'og:keywords',
                content: this.conv(this.getLang(this.article.langs).meta_keywords),
              },
            ]
            : [])
      ],
    };
  },


  async asyncData({$axios, route}) {
    const {data: article} = await articleService.article($axios, route.params.id);
    const params = {
      order: 'DESC',
      limit: 4
    }
    const {data: articles} = await articleService.articles($axios, params)
    const categoryParams = {
      type: 'news'
    }
    const {data: categories} = await categoryService.category($axios, categoryParams)
    return {
      article,
      articles,
      categories
    }
  },
  computed: {
    videoCode() {
      if (!this.article.video) return
      return this.article.video.split('youtu.be/')[1];
    },
    image() {
      return process.env.bucketUrl + `news/${this.article.id}/medium/${this.article.image}`
    },
    photos() {
      const galleries = this.article.gallery || [];
      const photos = galleries.reduce((photos, gallery) => {
        photos = photos.concat(gallery.photos || [])
        return photos;
      }, []).map(photo => {
        return {...photo, url: process.env.bucketUrl + `photos/${photo.photo_album_id}/${photo.filename}`}
      })
      return photos;
    }
  },
  filters: {
    bucketUrl(src) {
      return src.startsWith('http') ? src : process.env.bucketUrl + src
    }
  }
}
</script>