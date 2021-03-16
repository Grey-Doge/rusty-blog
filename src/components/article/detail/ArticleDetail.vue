<template>
    <div>
        
        <img-preview :visible="zoom" :src="src" @show="displayPreview"></img-preview>
        
        <div class="article-container" style="border:none">
                <h1>
                    <router-link to="#">{{article.title}}</router-link>
                </h1>
                <div class="meta-box">
                    <span>
                        <i class="iconfont icon-riqi"></i>
                        2020年09月05日
                    </span>
                    <span>
                        <i class="iconfont icon-taolun"></i>
                        查看评论
                    </span>
                    <span>阅读Markdown格式</span>
                    <span>
                        <i class="iconfont icon-biaoqian"></i>
                        8553字
                    </span>
                </div>
                <div class="ql-container ql-snow">
                    <div class="ql-editor" v-html="html" @click.stop="PreviewImg($event)">
                    </div>
                </div>
                <!-- <div class="ql-editor">
                    <div v-html="html" class="rich-text" @click.stop="PreviewImg($event)">

                    </div>
                </div> -->
                
                <div class="meta-box">
                    <i class="iconfont icon-biaoqian"></i>
                    <router-link :to="{path: '/tag/' + item.name}" v-for="(item, index) in article.classification" :key="index">
                        <span class="tag">{{item.name}},</span>
                    </router-link>
                </div>
                <div class="meta-box-wrapper relative">
                    <div class="meta-tag absolute">
                        <i class="iconfont icon-xinwen"></i>
                        <span># 随便看看</span>
                    </div>
                    <div class="meta-box">
                        <span>前一篇: 使用 Markdown 自由地写博客</span>
                    </div>
                </div>
                <div class="meta-box-wrapper relative">
                    <div class="meta-tag absolute">
                        <i class="iconfont icon-taolun"></i>
                        <span># 谈谈你的看法?</span>
                    </div>
                    <div class="meta-box disable">
                        <span class="disable">评论功能暂时关闭,Sorry啦~</span>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import imgpreview from 'components/public/img-preview'
export default {
    name: 'articleDetail',
    components: {
        'img-preview':imgpreview
    },
    data: function(){
        return{
            html: ``,
            zoom: false,
            src: '',
            article: {}
        }
    },
    methods: {
        ZoomPic: function(event) {
            this.zoom = !this.zoom;
            this.src = event.target.currentSrc;
        },
        displayPreview: function(value) {
            this.zoom = value;
        },
        PreviewImg: function(e){
            if(e.target.tagName === "IMG"){
                console.log("对象是IMG");
                this.ZoomPic(e);
            }
            return;
        }
    },
    mounted:async function(){
        this.$loading.show();
        const id = this.$route.params.articleId;
        await this.$axios.get('http://localhost:8081/articles/'+id).then((res) => {
            this.article = res.data.article;
            this.html = res.data.article.content;
            this.$loading.close();
        }).catch((err) => {
            console.log(`请求错误: ${err}`)
            this.$router.push('404');
        })
    }
}
</script>

<style lang="less" scoped>
h1,h2,h3,h4,h5,h6 {
    margin: 25px 0 !important; 
}
.ql-container.ql-snow {
    border: none;
    
    font-size: 1em;
}
.article-container{
    
    font-size: 14px;
    text-align: start;
    h1{
        margin: 20px 0;
        color: #e95420;
        font-size: 34px;
        a{
            color: #e95420;
        }
    }
    .rich-text{
        margin: 30px 0;
        text-align: start;
        /deep/ h2{
            margin: 20px 0;
        }
        /deep/ p{
            line-height: 1.75;
        }
        /deep/ img {
            max-width: 100%;
            text-align: center;
            cursor: zoom-in;
        }

    }
    .meta-box-wrapper{
        margin: 45px 0 25px 0;
        border: 1px solid #d8d7d7;
        padding: 1px;
        .meta-tag{
            position: absolute;
            left: -6px;
            top: -16px;
            background: #fff;
            border: 1px solid #c5c5c5;
            padding: 0 6px;
            font-size: 15px;
            color: #333;
            text-align: left;
        }
        .meta-box{
            border: 1px dashed #cacaca;
            padding: 10px;
            font-size: 14px;
        }
    }
    .meta-box{
        padding: 10px 0;
        border-bottom: 1px dashed #cacaca;
        border-top: 1px dashed #cacaca;
        text-align: center;
        color: #e95420;
        word-wrap: break-word;
        text-align: start;
        span{
            margin-right: 20px;
        }
        .tag{
            font-size: 12px;
            color: #e95420;
            margin-right: 5px;
        }
        a:hover{
            text-decoration: underline #e95420;
        }
    }
    
}

</style>