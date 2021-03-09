<template>
  <div>
    <heading title="lasteast blog" subTitle="最近更新"></heading>
    <article-summary  :articles="articles"></article-summary>
    <b-row>
        <b-col md="12">
            <h2 class="sub-title">更多内容</h2>
        </b-col>
    </b-row>
    <div class="view-more">
        <router-link to="articles/2">
            浏览博客更多文章
        </router-link>
    </div>
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
            this.$axios.get(`http://localhost:8081/articles/getArticles/1`).then((res) => {
                this.articles = res.data.data;
                this.$loading.close();
            });
        }
    }
}
</script>

<style scoped lang="less">
.sub-title {
    margin-top: 20px;
    font-size: 20px;
    color: #999;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    padding-bottom: 4px;
    text-align: left;
}
.view-more {
    text-align: left;
}
a {
    margin: 15px 0;
    display: inline-block;
    font-size: 12px;
    padding: 8px 12px;
    background-color:  #e95420;
    color: #FFF;
    border-color: #b93e12;
    text-decoration: none;    
    border-radius: 3px;
}
a:hover {
    background-color: #c34113;
}
</style>
