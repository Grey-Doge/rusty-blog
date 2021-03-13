<template>
    <div>
        <heading title="用代码构筑虚拟世界" subTitle="The World Of Code"></heading>
        <!-- <h1 class="page-title">
            数字世界
        </h1> -->
        <div class="post-content">
            <div>
                <h2 class="sub-title">Web技术</h2>
                <b-row>
                    <b-col lg="6" v-for="(item, index) in tags" :key = index>
                        <div  class="sub-page-item" v-if="item.articles.length > 0">
                            <h3 class="cate-title">{{item.name}}<router-link :to="{path: '/tag/' + item.name}" class="view-all"><span v-if="item.articles.length > 5">浏览全部{{item.count}}篇内容</span></router-link></h3>
                            <ul>
                                <li v-for="(article, index) in item.articles" :key = index>
                                    <span class="item-date">[{{new Date(article.date).getFullYear()}}年{{new Date(article.date).getMonth()}}月{{new Date(article.date).getDay()}}日]</span>
                                    <router-link class="item-link" :to="{path: '/article/' + article._id}">{{article.title}}</router-link>
                                </li>
                            </ul>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </div>

    </div>
</template>

<script>
import heading from 'components/public/heading'
export default {
    name: 'classification',
    components: {
        heading
    },
    data: function() {
        return {
            tags: null
        }
    },
    methods: {
        getTagInfo() {
            this.$loading.show();
            this.$axios.get(`http://localhost:8081/articles/tag`).then((res) => {
                this.tags = res.data.data;
                console.log(this.tags);
                this.$loading.close();
            })
        }
    },
    mounted: function() {
        this.getTagInfo();
    }
}
</script>

<style lang="less" scoped>
.page-title {
    margin-top: 20px;
    font-size: 20px;
    color: #999;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    padding-bottom: 4px;
    text-align: left;
}
.post-content {
    text-align: left;
    .sub-title {
        font-size: 24px;
        border-bottom: 1px solid #eee;
        padding-bottom: 4px;
    }
    .cate-title {
        margin: 1rem 2rem 1rem 0;
        font-size: 19px;
        font-weight: normal;
        .view-all {
            font-size: 12px;
            color: #D83C07;
            margin-left: 8px;
        }
    }
    .sub-page-item {
        padding: 0 15px 0 10px;
        ul li {
            margin-bottom: 6px;
            .item-date{
                font-family: monospace;
                color: #6f6e6e;
                min-width: 100px;
                padding-right: 4.8px;
            }
            .item-link {
                border-bottom: 1px dashed #ffb195;
                text-decoration: none;
                color: #D83C07;
            }
            .item-link:hover {
                color: #8e2705;
            }
        }
        ul li:hover {
            font-style: italic;
        }
      
    }
}
</style>