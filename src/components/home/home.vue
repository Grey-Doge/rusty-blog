<template>
    <div>
        <headnav></headnav>
        <b-container fluid class="content">
            <b-row no-gutters>
                <b-col>
                    <heading title="lasteast blog" subTitle="最近更新"></heading>
                    <article-summary v-if="flag" :articles="articles"></article-summary>
                    <heading title="About Me" subTitle="关于我"></heading>
                    <heading title="About RustyLake" subTitle='关于"绣湖"'></heading>
                    <!-- <aboutme></aboutme> -->
                </b-col>
            </b-row>
            
        </b-container>
        <sidebar></sidebar>
        <footnav></footnav>
    </div>
    
</template>

<script>
import headnav from 'components/public/header'
import sidebar from 'components/public/sidebar'
import footnav from 'components/public/footer'
import aboutme from 'components/public/aboutme'
import articleSummary from 'components/article/summary/summary'
import heading from 'components/public/heading.vue'
export default {
    name: 'home',
    components:{
        headnav,
        sidebar,
        footnav,
        'article-summary': articleSummary,
        aboutme,
        heading
    },
    data: function () {
        return {
            flag: false,
            articles: null
        }
    },
    mounted: function() {
        this.getArticles();
    },
    methods: {
        getArticles: async function() {
            let promise = new Promise( (resolve, reject) => {
                let ajax = new XMLHttpRequest();
                ajax.open('GET', 'http://localhost:8081/getArticles/1');
                ajax.onreadystatechange =  ()=> {
                    if (ajax.readyState === 4 && ajax.status === 200) {
                        let data = JSON.parse(ajax.responseText);
                        this.articles = data.data;
                        this.flag = true;
                        console.log(this.flag);
                        resolve('请求成功');
                    }
                }
                ajax.send();
            })
            let result = await promise;
        }
    }
    
}
</script>

<style>
    

</style>