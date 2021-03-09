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
    </div>
</template>

<script>
import heading from 'components/public/heading'
import articleSummary from 'components/article/summary/summary'
export default {
    name: 'TagSearch',
    components: {
        heading,
        'article-summary': articleSummary
    },
    data: function() {
        return {
            tagName: '',
            articles: null
        }
    },
    methods: {
        getTagInfo(name) {
            this.$axios.get(`http://localhost:8081/articles/tag?name=${this.tagName}`).then((res) => {
                this.articles = res.data.data.articles;
                // console.log(res.data);
            })
        }
    },
    mounted: function() {
        
        this.tagName = this.$route.params.name;
        console.log(`name : ${this.tagName}`);
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