<template>
    <div>
        <headnav></headnav>
        <b-container fluid class="content" @mouseenter="showPopover = true" @mouseleave="showPopover = false">
            
            <b-row no-gutters>
                <b-col>
                    <router-view></router-view>
                </b-col>
            </b-row>
            
        </b-container>
        <sidebar></sidebar>
        <footnav></footnav>
        <!-- <transition name="fade">
            <div class="popover-wrapper" v-if="showPopover">
            </div>
        </transition> -->
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
            articles: null,
            showPopover: false
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.popover-wrapper::after {
    content: '';
    position: absolute;
    top: 45px;
    left: -20px;
    border-left: 10px solid transparent;
    border-right: 10px solid #fff;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    filter: drop-shadow(-3px 0px 1px #EFEFEF);
}
.popover-wrapper{
    position: fixed;
    top: 165px;
    left: 240px;
    width: 100px;
    height: 100px;
    z-index: 999;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 6px 3px #EFEFEF;
}

</style>