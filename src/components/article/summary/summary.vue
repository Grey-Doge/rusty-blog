<template>
<div>
    <div class="article-summary-container" v-for="(item, index) in articles" :key="index">
        <h2 class="atricle-summary-title">
            <router-link :to="{path:'/article/'+item._id}">{{item.title}}</router-link>
        </h2>
        <div class="meta-box">
            <span>
                <i class="iconfont icon-riqi"></i>
                2020年10月04日
            </span>
            <span>
                <i class="iconfont icon-taolun"></i>
                <router-link to="#">查看评论</router-link>
            </span>
        </div>
        <div class="article-summary-content">
            <div class="article-summary-description">
                {{item.summary}}
            </div>
            <router-link :to="{path:'/article/'+item._id}">阅读全文</router-link>
        </div>
        <div class="atricle-summary-tag">
            <i class="iconfont icon-biaoqian"></i>
            <span v-for="(tag, index) in item.classification" :key="index">
                <router-link to="#">{{tag}}</router-link>,
            </span>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
    name: 'Summary',
    props: {
        articles: Array
    }
}
</script>

<style lang="less">
.article-summary-container{
    display: flex;
    justify-items: flex-start;
    align-items: flex-start;
    flex-direction: column;
    border-bottom: 1px dashed #eee;
    padding: 15px 0 5px 0;
    .atricle-summary-title,.meta-box,.atricle-summary-tag{
        color: #e95420;
        a{
            color: #e95420;
        }
    }
    .atricle-summary-title{
        margin: 15px 0;
        color: #e95420;
        font-size: 24px;
        text-align: start;
    }
    .meta-box{
        span{
            margin-right: 25px;
            
        }
        a:hover{
            color: #bdbdbd;
        }
    }
    .atricle-summary-tag{
        span{
            margin-right: 3px;
            text-decoration: underline;
        }
        a:hover{
            color: #bdbdbd;
        }
    }
    .meta-box,.atricle-summary-tag{
        margin: 5px 0 6px 0;
        font-size: 12px;
    }
    .article-summary-content{
        text-align: start;
        line-height: 1.8;
        font-weight: 400;
        font-size: 14px;
        .article-summary-description{
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 8;
            overflow: hidden;
        }
        a{
            display: inline-block;
            font-size: 12px;
            padding: 1px 5px;
            background-color:  #e95420;
            color: #FFF;
            border-color: #b93e12;
            text-decoration: none;    
            border-radius: 3px;
        }
        a:hover{
            background-color: #c34113;
        }
    }
}

</style>
