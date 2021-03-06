<template>
    <div>
        <!-- <b-container fluid class="content">
            
        </b-container> -->
        <b-row no-gutters>
            <b-col>
                <heading title="Blog List" subTitle="就请你当做我已不在~"></heading>
                <article-summary v-if="flag" :articles="articles"></article-summary>
                <pagenation :total=50 :pageSize=10 :perPages=8 @current-change="pageChange"></pagenation>
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
            currentPage: null,
            renderPage: 5,
            articles:null,
            flag: false
        }
    },
    mounted: function(){
        this.getPageData();
    },
    methods: {
        pageChange(val) {
            console.log(`当前页码:${val}`);
        },
        getPageData:async function(currentPage) {
            let that = this;
            that.currentPage = parseInt(this.$route.params.pageNum);
            let promise = new Promise(function(resolve, reject) {
                //请求页码数据;
                let ajax = new XMLHttpRequest();
                ajax.open('GET',`http://localhost:8081/getArticles/${that.currentPage}`);
                ajax.onreadystatechange = function(){
                    if(ajax.readyState === 4 && ajax.status === 200){
                        let data = JSON.parse(ajax.responseText);
                        that.articles = data.data;
                        console.log(data);
                        that.count = data.count;
                        that.flag = true;
                        resolve('请求成功!');
                    }
                }
                ajax.send();
            })
            let result = await promise;
            // console.log(result);
        }
    }
}
</script>

<style>

</style>