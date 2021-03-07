<template>
  <div>
    <heading title="lasteast blog" subTitle="最近更新"></heading>
    <article-summary  :articles="articles"></article-summary>
    <heading title="About Me" subTitle="关于我"></heading>
    <heading title="About RustyLake" subTitle='关于"绣湖"'></heading>
  </div>
</template>

<script>
import articleSummary from 'components/article/summary/summary'
import heading from 'components/public/heading'
export default {
    name: 'ArticleSummary',
    data: function() {
        return {
            articles: null
        }
    },
    components: {
        'article-summary': articleSummary,
        heading
    },
    mounted: function() {
        this.$loading.show();
        if (this.articles === null || this.articles === undefined) {
            this.$axios.get('http://localhost:8081/getArticles/1').then((res) => {
                this.articles = res.data.data;
                this.$loading.close();
            });
        }
    }
}
</script>

<style>

</style>