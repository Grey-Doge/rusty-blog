import Vue from 'vue'
import Router from 'vue-router'
import ArticleDetail from 'components/article/detail/ArticleDetail'
import Articles from 'components/article/articles/articles'
import Publish from 'components/publish/publish'
import Home from '@/components/home/home'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home 
    },
    {
      path: '/article/:articleId',
      name: 'article',
      component: ArticleDetail
    },
    {
      path: '/articles/:pageNum',
      name: 'articles',
      component: Articles
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish
    }
  ]
})

