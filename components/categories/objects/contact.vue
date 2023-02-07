<template>
  <v-row>
    <v-col cols="12" lg="9">
      <v-row>
        <template v-if="getLang(item.langs).address">
          <v-col cols="12" lg="3">
            <contact-item
                :info="conv(getLang(item.langs).address)"
                :title="$t('contact.address')"
                icon="mdi-map-marker">
            </contact-item>
          </v-col>
          <v-divider vertical></v-divider>
        </template>
        <template v-if="item.phone">
          <v-col cols="12" lg="3">
            <contact-item
                :info="item.phone"
                :title="$t('contact.tel')"
                icon="mdi-phone">
            </contact-item>
          </v-col>
          <v-divider vertical></v-divider>
        </template>
        <template v-if="item.web">
          <v-col cols="12" lg="3">
            <contact-item
                :info="item.web"
                :title="$t('contact.web')"
                icon="mdi-web">
              <a class="black--text" :href="'//' + item.web" target="_blank">{{ item.web }}</a>
            </contact-item>
          </v-col>
          <v-divider vertical></v-divider>
        </template>
        <template v-if="item.email">
          <v-col cols="12" lg="3">
            <contact-item
                :info="item.email"
                :title="$t('contact.mail')"
                icon="mdi-email">
            </contact-item>
          </v-col>
          <v-divider vertical></v-divider>
        </template>
        <template v-if="item.fax">
          <v-col cols="12" lg="3">
            <contact-item
                :info="item.fax"
                :title="$t('contact.fax')"
                icon="mdi-fax">
            </contact-item>
          </v-col>
          <v-divider vertical></v-divider>
        </template>
        <template
            v-for="social in JSON.parse(item.extra_fields)"
            v-if="['facebook','instagram'].includes(social.tag)">
          <v-col cols="12" lg="3">
            <contact-item
                :info="item.phone"
                title=""
                :icon="social.tag === 'facebook' ? 'mdi-facebook' : 'mdi-instagram'">
              <a class="black--text" target="_blank" :href="social.langs.sr.value">
                {{ social.tag == 'facebook' ? 'Facebook' : 'Instagram' }}
              </a>
            </contact-item>
          </v-col>
        </template>
      </v-row>
      <social-share class="mt-15"></social-share>
    </v-col>
    <v-col cols="12" lg="3" class="py-0">
      <z-card flat style="box-shadow: 0 0 10px #ccc !important;">
        <span slot="title" class="subtitle-2 font-weight-bold text-uppercase">
          {{ conv(getLang(item.category.langs).name) }}
        </span>
        <v-list slot="content" class="py-0">
          <template v-for="category in item.category.object">
            <v-list-item
                active-class="accent white--text"
                :to="localeLocation({
                      name: 'objekti-id-seo',
                      params: {
                        id: category.id,
                        seo: getLang(category.langs).seo_url || '-'
                      }
                    })">
              <v-list-item-title>{{ conv(getLang(category.langs).name) }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-list>
      </z-card>
    </v-col>
  </v-row>
</template>

<script>
import ContactItem from "@/components/categories/objects/contact-item";
import SocialShare from "~/components/global/social-share";

export default {
  components: {
    ContactItem,
    SocialShare
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>