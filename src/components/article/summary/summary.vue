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
            <router-link to="#">阅读全文</router-link>
        </div>
        <div class="atricle-summary-tag">
            <i class="iconfont icon-biaoqian"></i>
            <span><router-link to="#">JavaScript</router-link></span>，
            <span><router-link to="#">ECMAScript</router-link></span>，
            <span><router-link to="#">FrontEnd</router-link></span>
        </div>
    </div>
    <!-- <div class="article-summary-container">
    <h2 class="atricle-summary-title">
        <router-link to="/article/1">使用 Nginx 构建前端日志统计服务（打点采集）服务</router-link>
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
            工作中经常会遇到需要“数据支撑”决策的时候，那么可曾想过这些数据从何而来呢？如果业务涉及 Web 服务，那么这些数据的来源之一便是服务器上各种服务器的请求数据，如果我们将专门用于统计的数据进行服务器区分，有一些服务器专注于接收“统计类型”的请求，那么产生的这些日志便是“打点日志”。本文将介绍如何在容器中使用 Nginx 简单搭建一个支持前端使用的统计（打点采集）服务，避免引入过多的技术栈，徒增维护成本。不知你是否想过一个问题，当一个页面中的打点事件比较多的时候，页面打开的瞬间将同时发起无数请求，此刻非宽带环境下用户体验将不复存在，打点服务器也将面临来自友军的业务 DDoS 行为。
        </div>
        <router-link to="#">阅读全文</router-link>
    </div>
    <div class="atricle-summary-tag">
        <i class="iconfont icon-biaoqian"></i>
        <span><router-link to="#">JavaScript</router-link></span>，
        <span><router-link to="#">ECMAScript</router-link></span>，
        <span><router-link to="#">FrontEnd</router-link></span>
    </div>
    </div>
    <div class="article-summary-container">
    <h2 class="atricle-summary-title">
        <router-link to="#">使用 Node.js 定制你的技术雷达：上篇</router-link>
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
            最近又继续在做社区产品，过程中结合这两年运营微信群，思考了一些社区产品和人群相关的事情，记录下来，一年后再看看。两年前，在现任“导师&老板”建议下我开始慢慢接触一些小圈子，并考虑建设一个小众的兴趣圈，既然我还算能写博客，那么就从最简单的“读者”微信群开始吧。当时发布了[一篇文章] ，讲述了群的价值观，受众、欢迎的人，和不欢迎的人，毕竟无规矩不成方圆嘛。
        </div>
        <router-link to="#">阅读全文</router-link>
    </div>
    <div class="atricle-summary-tag">
        <i class="iconfont icon-biaoqian"></i>
        <span><router-link to="#">JavaScript，</router-link></span>
        <span><router-link to="#">ECMAScript，</router-link></span>
        <span><router-link to="#">FrontEnd</router-link></span>
    </div>
    </div>
    <div class="article-summary-container">
    <h2 class="atricle-summary-title">
        <router-link to="#">劲夫劲夫,全场欢呼~</router-link>
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
            最近在梳理团队项目依赖和各个项目技术栈的时候，发现使用技术雷达的形式来进行呈现和管理是个不错的点子。但是没找到维护简单，界面又清爽好看的 UI。正巧访问到 Thoughtworks 新版本技术雷达，发现在线版本十分漂亮，远比官方提供的生成版本漂亮。那么，记录下折腾这个技术雷达的过程吧，本篇是第一篇，聊聊如何使用 Node.js 完成一个上述雷达的本地版本。
        </div>
        <div>
            <router-link to="#">阅读全文</router-link>
        </div>
    </div>
    <div class="atricle-summary-tag">
        <i class="iconfont icon-biaoqian"></i>
        <span><router-link to="#">JavaScript，</router-link></span>
        <span><router-link to="#">ECMAScript，</router-link></span>
        <span><router-link to="#">FrontEnd</router-link></span>
    </div>
    <h2 class="atricle-summary-title">
        <router-link to="/article/1">使用 Nginx 构建前端日志统计服务（打点采集）服务</router-link>
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
            工作中经常会遇到需要“数据支撑”决策的时候，那么可曾想过这些数据从何而来呢？如果业务涉及 Web 服务，那么这些数据的来源之一便是服务器上各种服务器的请求数据，如果我们将专门用于统计的数据进行服务器区分，有一些服务器专注于接收“统计类型”的请求，那么产生的这些日志便是“打点日志”。本文将介绍如何在容器中使用 Nginx 简单搭建一个支持前端使用的统计（打点采集）服务，避免引入过多的技术栈，徒增维护成本。不知你是否想过一个问题，当一个页面中的打点事件比较多的时候，页面打开的瞬间将同时发起无数请求，此刻非宽带环境下用户体验将不复存在，打点服务器也将面临来自友军的业务 DDoS 行为。
        </div>
        <router-link to="#">阅读全文</router-link>
    </div>
    <div class="atricle-summary-tag">
        <i class="iconfont icon-biaoqian"></i>
        <span><router-link to="#">JavaScript</router-link></span>，
        <span><router-link to="#">ECMAScript</router-link></span>，
        <span><router-link to="#">FrontEnd</router-link></span>
    </div>
    </div>
    <div class="article-summary-container">
    <h2 class="atricle-summary-title">
        <router-link to="#">使用 Node.js 定制你的技术雷达：上篇</router-link>
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
            最近又继续在做社区产品，过程中结合这两年运营微信群，思考了一些社区产品和人群相关的事情，记录下来，一年后再看看。两年前，在现任“导师&老板”建议下我开始慢慢接触一些小圈子，并考虑建设一个小众的兴趣圈，既然我还算能写博客，那么就从最简单的“读者”微信群开始吧。当时发布了[一篇文章] ，讲述了群的价值观，受众、欢迎的人，和不欢迎的人，毕竟无规矩不成方圆嘛。
        </div>
        <router-link to="#">阅读全文</router-link>
    </div>
    <div class="atricle-summary-tag">
        <i class="iconfont icon-biaoqian"></i>
        <span><router-link to="#">JavaScript，</router-link></span>
        <span><router-link to="#">ECMAScript，</router-link></span>
        <span><router-link to="#">FrontEnd</router-link></span>
    </div>
    </div>
    <div class="article-summary-container">
        <h2 class="atricle-summary-title">
            <router-link to="#">劲夫劲夫,全场欢呼~</router-link>
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
                最近在梳理团队项目依赖和各个项目技术栈的时候，发现使用技术雷达的形式来进行呈现和管理是个不错的点子。但是没找到维护简单，界面又清爽好看的 UI。正巧访问到 Thoughtworks 新版本技术雷达，发现在线版本十分漂亮，远比官方提供的生成版本漂亮。那么，记录下折腾这个技术雷达的过程吧，本篇是第一篇，聊聊如何使用 Node.js 完成一个上述雷达的本地版本。
            </div>
            <div>
                <router-link to="#">阅读全文</router-link>
            </div>
        </div>
        <div class="atricle-summary-tag">
            <i class="iconfont icon-biaoqian"></i>
            <span><router-link to="#">JavaScript，</router-link></span>
            <span><router-link to="#">ECMAScript，</router-link></span>
            <span><router-link to="#">FrontEnd</router-link></span>
        </div>
    </div> -->
</div>
</template>

<script>
import heading from 'components/public/heading.vue'
export default {
    name: 'ArticleSummary',
    components: {
        heading
    },
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
