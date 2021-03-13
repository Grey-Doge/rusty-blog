<template>
    <div>
        <heading title="用代码构筑虚拟世界" subTitle="The World Of Code"></heading>
        <b-row>
            <b-col lg="12">
                <h1 class="sub-title">
                    文章列表
                </h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col lg="12">
                <h1 class="post-title">
                    <router-link to="#">
                        Tag: # {{tagName}}
                    </router-link>
                </h1>
            </b-col>
        </b-row>
        <article-summary  :articles="articles"></article-summary>
        <b-row>
            <b-col lg="12">
                <pagenation :total="count" :pageSize=5 :perPages=5 @current-change="pageChange"></pagenation>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import heading from 'components/public/heading'
import articleSummary from 'components/article/summary/summary'
import pagenation from 'components/public/pagnation'
export default {
    name: 'TagSearch',
    components: {
        heading,
        'article-summary': articleSummary,
        pagenation
    },
    data: function() {
        return {
            tagName: '',
            articles: null,
            current_page:1,
            count: 0
        }
    },
    methods: {
        getTagInfo() {
            this.$loading.show();
            this.$axios.get(`http://localhost:8081/articles/tag?name=${this.tagName}&page=${this.current_page}`).then((res) => {
                this.articles = res.data.data.articles;
                this.count = res.data.count;
                
            }).catch((err) => {
                console.log(`请求错误: ${err}`)
                this.$router.push('/404');
            }).finally(() => {
                this.$loading.close();
            })
        },
        pageChange(current_page) {
            this.current_page = current_page;
            this.getTagInfo();
        }
    },
    mounted: function() {
        
        this.tagName = this.$route.params.name;
        this.getTagInfo(this.tagName);
    }
}
</script>

<style lang="less" scoped>
.post-title {
    font-size: 34px;
    text-align: left;
    margin-top: 10px;
    margin-bottom: 20px;
    a {
        color: #d83c07;
    }
}
.sub-title {
    margin-top: 20px;
    font-size: 20px;
    color: #999;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    padding-bottom: 4px;
    text-align: left;
}
</style>