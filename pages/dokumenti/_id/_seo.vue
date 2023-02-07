<template>
  <div :class="['service-icon-page', 'contact-page'].includes(document.template) && 'category-ng'">
    <z-page class="mt-2">
      <v-sheet class="grey lighten-3">
        <v-breadcrumbs
            class="py-2 rounded-lg"
            :items="breadcrumbs"
            divider="/">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item
                exact
                :to="localeLocation(item.to)"
                :disabled="item.active"
            >
              <span class="accent--text">{{ item.text }}</span>
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
      </v-sheet>
    </z-page>
    <z-page>
      <v-col cols="12">
        <h3 class="h1-text mb-4">{{ conv(getLang(document.langs).name) }}</h3>
        <flipbook :src="flipbookItem"></flipbook>
        <div class="mt-8" v-html="conv(getLang(document.langs).description)"></div>
      </v-col>
    </z-page>
  </div>
</template>

<script>
import documentService from "@/services/document";
import Flipbook from "@/components/global/flipbook";

export default {
  components: {
    Flipbook
  },
  head() {
    return {
      title: this.conv(this.getLang(this.document.langs).title) + ' - ' + this.$t('layout.title'),
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: process.env.domain+this.$route.fullPath,
        },
        {
          hid: 'og:published_time',
          property: 'og:published_time',
          content: this.conv(this.getLang(this.document.langs).created_at),
        },
        ...(this.conv(this.getLang(this.document.langs).meta_description)
            ? [
              {
                hid: 'og:description',
                property: 'og:description',
                content: this.conv(this.getLang(this.document.langs).meta_description),
              },
            ]
            : []),
        ...(this.conv(this.getLang(this.document.langs).meta_keywords)
            ? [
              {
                hid: 'og:keywords',
                property: 'og:keywords',
                content: this.conv(this.getLang(this.document.langs).meta_keywords),
              },
            ]
            : [])
      ],
    };
  },
  async asyncData({$axios, route}) {
    const {data: document} = await documentService.get($axios, route.params.id);
    return {
      document
    }
  },
  computed: {
    flipbookItem() {
      return process.env.bucketUrl + `documents/${this.document.langs[0].file}`
    },
    breadcrumbs() {
      let items = [
        {
          disabled: false,
          text: this.$t('layout.home'),
          to: {name: 'index'}
        },
        {

          disabled: true,
          text: this.$t('layout.documents')
        }
      ];
      if (this.document.parent) {
        items.push({
          text: this.conv(this.getLang(this.document.parent.langs).name),
          to: {
            name: 'kategorije-id-seo',
            params: {
              id: this.document.parent.id,
              seo: this.getLang(this.document.parent.langs).seo_url || '-'
            }
          }
        })
      }
      items.push({
        text: this.conv(this.getLang(this.document.langs).name),
        active: true
      });
      return items;
    }
  }
}
</script>

<style>
.category-ng {
  background: url('https://opstinaribnik.rs.sr/template/images/h2factsbg.jpg') no-repeat;
  background-size: cover;
}
</style>