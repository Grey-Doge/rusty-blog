<template>
    <div>
        <headnav></headnav>
        <b-container fluid class="content">
            
            <b-row no-gutters>
                <b-col>
                    <router-view></router-view>
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
export default {
    name: 'home',
    components:{
        headnav,
        sidebar,
        footnav,
        aboutme
    },
    data: function () {
        return {
            flag: false,
            articles: null
        }
    },
    mounted: function() {
        
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