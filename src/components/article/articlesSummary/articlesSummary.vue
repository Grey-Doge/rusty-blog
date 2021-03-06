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
        let date = new Date('2021-02-09T00:00:00.000+00:00');
        console.dir(date);
        if (this.articles === null || this.articles === undefined) {
            console.log('props没有传值,请求第一页');
            this.$axios.get('http://localhost:8081/getArticles/1').then((res) => {
                console.log(res.data);
                this.articles = res.data.data;
            });
        }
    }
}
</script>

<style>

</style>