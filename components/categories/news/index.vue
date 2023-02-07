<template>
  <div class="mt-8">
    <v-row v-if="loading" justify="center" align="center" class="py-15" :no-gutters="$device.isMobileOrTablet" >
      <v-progress-circular indeterminate></v-progress-circular>
    </v-row>
    <article-list v-else-if="articles" :articles="articles.data"></article-list>
    <v-pagination
        v-if="pagination.total > 1"
        class="mt-8"
        v-model="pagination.page"
        :length="pagination.total"
    ></v-pagination>
  </div>
</template>

<script>
import articleService from "@/services/article";

import ArticleList from "@/components/articles/list";

export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    ArticleList
  },
  data: () => ({
    articles: null,
    pagination: {
      page: 1,
      total: 1
    },
    loading: false
  }),
  created() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      this.loading = true;
      const params = {
        offset: this.pagination.page * 12 - 12,
        limit: 12,
        paginate: true,
        category_id: this.$route.params.id,
        order: "DESC",
        status: "active"
      };
      articleService.articles(this.$axios, params)
          .then(response => {
            this.articles = response.data;
            this.pagination.total = Math.ceil(response.data.total_count / 12)
          }).finally(() => this.loading = false)
    }
  },
  watch: {
    'pagination.page'() {
      this.getArticles();
    }
  }
}
</script>