import Vue from 'vue'
import Router from 'vue-router'
import ArticleDetail from 'components/article/detail/ArticleDetail'
import Articles from 'components/article/articles/articles'
import Publish from 'components/publish/publish'
import Home from '@/components/home/home'
import articleSummary from 'components/article/articlesSummary/articlesSummary'
import Classification from 'components/article/classification/article_classification'
Vue.use(Router)
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'summary',
          component: articleSummary
        },
        {
          path: 'article/:articleId',
          name: 'article',
          component: ArticleDetail
        },
        {
          path: 'articles/:pageNum',
          name: 'articles',
          component: Articles
        },
        {
          path: 'tag',
          name: 'tag',
          component: Classification
        }
      ]
    },
    {
      path: '/publish',
      name: 'publish',
      component: Publish
    }
  ]
})

