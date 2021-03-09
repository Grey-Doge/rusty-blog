<template>
    <div>
        <b-row no-gutters>
            <b-col>
                <heading title="Blog List" subTitle="就请你当做我已不在~"></heading>
                <article-summary :articles="articles"></article-summary>
                <pagenation :total=count :pageSize=5 :perPages=5 @current-change="pageChange"></pagenation>
            </b-col>
        </b-row>
    </div>
</template>

<script>

import articleSummary from 'components/article/summary/summary'
import pagenation from 'components/public/pagnation'
import heading from 'components/public/heading'
export default {
    name: 'articles',
    components: {
        'article-summary': articleSummary,
        pagenation,
        heading
    },
    data: function() {
        return {
            count: null,
            renderPage: 5,
            articles:null
        }
    },
    mounted: function(){
        // 使用Promise,
        this.getPageData();
    },
    methods: {

        pageChange(val) {
            console.log(`当前页码:${val}`);
            this.getPageData(val);
        },

        getPageData: function(currentPage) {
            currentPage = currentPage ? currentPage : 1;
            this.$loading.show();
            this.currentPage = parseInt(this.$route.params.pageNum);
            this.$axios.get(`http://localhost:8081/articles/getArticles/${currentPage}`).then((res) => {
                this.$loading.close();
                this.articles = res.data.data;
                this.count = res.data.count;
            });
        }

    }
}
</script>

<style>

</style>