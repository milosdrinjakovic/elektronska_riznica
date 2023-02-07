<template>
  <div>
    <v-row :no-gutters="$device.isMobileOrTablet">
      <v-col cols="6" lg="3" :class="$device.isMobileOrTablet ? 'px-2' : 'pr-6'">
        <strong>{{ $t('documents.search') }}</strong>
        <v-text-field
            v-model="filters.search"
            outlined
            dense
            hide-details>
        </v-text-field>
      </v-col>
      <v-col cols="6" lg="3" :class="$device.isMobileOrTablet ? 'px-2' : 'px-6'">
        <strong>{{ $t('documents.sort') }}</strong>
        <v-select
            v-model="filters.sort"
            :items="sortItems"
            outlined
            item-value="value"
            item-text="name"
            dense
            hide-details>
        </v-select>
      </v-col>
      <v-col cols="6" lg="3" :class="$device.isMobileOrTablet ? 'px-2' : 'px-6'">
        <strong>{{ $t('documents.order') }}</strong>
        <v-select
            v-model="filters.sortDirection"
            :items="descItems"
            outlined
            dense
            item-value="value"
            item-text="name"
            hide-details>
        </v-select>
      </v-col>
      <v-col cols="6" lg="3" :class="$device.isMobileOrTablet ? 'px-2' : 'pl-6'">
        <strong>{{ $t('documents.show') }}</strong>
        <v-select
            v-model="filters.limit"
            :items="limitItems"
            outlined
            dense
            hide-details>
        </v-select>
      </v-col>
    </v-row>
    <v-data-table
        class="mt-2"
        hide-default-footer
        hide-default-header
        :headers="headers"
        :items="sortedItems"
        :items-per-page="filters.limit">
      <template v-slot:item.name="{item}">
        <v-row justify="space-between" align="center" no-gutters>
          <span>{{ conv(getLang(item.langs).name) }}</span>
          <div>
            <v-btn
                :to="getItemRoute(item)"
                depressed
                class="pl-3"
                color="info">
              <v-icon class="mr-2">mdi-eye</v-icon>
              Pogledaj
            </v-btn>
            <v-btn
                v-if="showDownload"
                :href="item | documentUrl"
                target="_blank"
                depressed
                class="pl-3"
                color="success">
              <v-icon class="mr-2">mdi-download</v-icon>
              Preuzmi
            </v-btn>
          </div>
        </v-row>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    showDownload: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({
    headers: [
      {text: 'Name', value: 'name'},
    ],
    filters: {
      search: '',
      sort: 'name',
      sortDirection: 'asc',
      limit: 10
    }
  }),
  methods: {
    getItemRoute(item) {
      const routeName = item.langs[0].document_id ? 'dokumenti-id-seo' : 'kategorije-id-seo'
      return this.localeLocation({name: routeName, params: {id: item.id, seo: this.getLang(item.langs).seo_url}})
    }
  },
  computed: {
    sortItems() {
      return [
        {
          name: this.$t('documents.title'),
          value: 'name'
        },
        {
          name: this.$t('documents.publishDate'),
          value: 'date'
        }
      ]
    },
    descItems() {
      return [
        {
          name: this.$t('documents.asc'),
          value: 'asc'
        },
        {
          name: this.$t('documents.desc'),
          value: 'Desc'
        }
      ]
    },
    limitItems() {
      return [10, 20, 50, 100]
    },
    sortedItems() {
      return (this.items || [])
          .filter(item => {
            return this.conv(this.getLang(item.langs).name).toLowerCase().includes(this.filters.search.toLowerCase())
          })
          .sort((a, b) => {
            if (this.filters.sort === 'name') {
              const aName = this.conv(this.getLang(a.langs).name);
              const bName = this.conv(this.getLang(b.langs).name);
              if (this.filters.sortDirection === 'asc') return aName > bName ? 1 : -1;
              return aName > bName ? -1 : 1;
            } else {
              const aDate = new Date(a.created_at);
              const bDate = new Date(b.created_at);
              if (this.filters.sortDirection === 'asc') return aDate > bDate ? 1 : -1;
              return aDate > bDate ? -1 : 1;
            }
          });
    }
  },
  filters: {
    documentUrl(document) {
      if (!document.langs) return null;
      return process.env.bucketUrl + `documents/${document.langs[0].file}`
    }
  }
}
</script>