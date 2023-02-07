<template>
  <div :class="['service-icon-page', 'contact-page'].includes(data.template) && 'category-ng'" class="pb-8">
    <!--    v-if="data.include_in_layout.includes('image-header')"-->
    <category-header
        v-if="!disabledHeader"
        :image="headerImage"
        :title="conv(getLang(data.langs).name)"
        :breadcrumbs="breadcrumbs">
    </category-header>
    <z-page v-else class="mt-2">
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
      <component :is="categoryComponent" :item="data"></component>
    </z-page>
  </div>
</template>

<script>
import categoryService from "@/services/category";
import Documents from '~/components/categories/documents/index'
import News from '~/components/categories/news/index'
import Objects from '~/components/categories/objects/index'
import CategoryHeader from '~/components/categories/header'

export default {
  components: {
    CategoryHeader
  },
  head() {
    return {
      title: this.conv(this.getLang(this.data.langs).name) + ' - ' + this.$t('layout.title'),
      meta: [
        ...(this.data.image
            ? [
              {
                hid: 'og:image',
                property: 'og:image',
                content: process.env.bucketUrl + `/categories/${this.data.id}/${this.data.image}`,
              },
            ]
            : []),
        {
          hid: 'og:url',
          property: 'og:url',
          content:  process.env.domain+this.$route.fullPath,
        },
        {
          hid: 'og:published_time',
          property: 'og:published_time',
          content: this.conv(this.getLang(this.data.langs).created_at),
        },
        ...(this.conv(this.getLang(this.data.langs).meta_description)
            ? [
              {
                hid: 'og:description',
                property: 'og:description',
                content: this.conv(this.getLang(this.data.langs).meta_description),
              },
            ]
            : []),
        ...(this.conv(this.getLang(this.data.langs).meta_keywords)
            ? [
              {
                hid: 'og:keywords',
                property: 'og:keywords',
                content: this.conv(this.getLang(this.data.langs).meta_keywords),
              },
            ]
            : [])
      ],
    };
  },
  async asyncData({$axios, route}) {
    const {data} = await categoryService.get($axios, route.params.id);
    return {
      data
    }
  },
  computed: {
    disabledHeader() {
      return this.data.image === 'undefined' || ['team-single'].includes(this.data.template)
    },
    headerImage() {
      if (!this.data.image) return 'https://cms.rs.sr/api/data/74/categories/224/no-image.jpg';
      return process.env.bucketUrl + `/categories/${this.data.id}/${this.data.image}`
    },
    breadcrumbs() {
      let items = [{
        disabled: false,
        text: this.$t('layout.home'),
        to: {name: 'index'}
      }];
      if (this.data.parent) {
        items.push({
          text: this.conv(this.getLang(this.data.parent.langs).name),
          to: {
            name: 'kategorije-id-seo',
            params: {
              id: this.data.parent.id,
              seo: this.getLang(this.data.parent.langs).seo_url || '-'
            }
          }
        })
      }
      items.push({
        text: this.conv(this.getLang(this.data.langs).name),
        active: true
      });
      return items;
    },
    categoryComponent() {
      switch (this.data.type) {
        case 'news':
          return News;
        case 'object':
          return Objects;
        case 'document':
          return Documents;
      }
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