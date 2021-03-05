<template>
    <div class="d-md-none">
        <b-navbar toggleable="lg" class="nav-bar">
            <b-navbar-brand href="#"><router-link to="/" class="logo-text">绣湖旅馆</router-link></b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                
                <b-navbar-nav class="ml-auto">
                    <b-nav-item to="article" class="link-text">
                        网站首页
                    </b-nav-item>
                    <b-nav-item to="article">
                        工作生活
                    </b-nav-item>
                    <b-nav-item to="article">
                        编程记录
                    </b-nav-item>
                    <b-nav-item to="article">
                        文章存档
                    </b-nav-item>
                    <b-nav-item to="article">
                        关于绣湖
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name:'headernav'
}
</script>

<style lang="less" scoped>
.nav-item{
    font-size: 14px;
}

.logo-text{
    font-size: 16px;
    color: antiquewhite;
}
.navbar-collapse{
    text-align: start;   
}
.nav-link{
    color: antiquewhite !important;
    font-size: 13px;
}
.nav-bar{
    background-color: #d34615;
}
</style>