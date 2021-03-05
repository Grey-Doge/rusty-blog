<template>
<div>
    <b-row no-gutters class="footer" align-v="center">
        <b-col sm="4" cols="12" class="all-rights-reserved">
            <span>©2020 <span class="all-rights-reserved-delete">阿小宅宅</span> <span class="all-rights-reserved">绣湖</span> | RustyLake All rights reserved</span>
        </b-col>
        <b-col sm="4" cols="12">
            <img class="avatar-img" src="../../assets/avatar.jpg" alt="">
        </b-col>
        <b-col sm="4" cols="12">
            <div class="footer-icon">
                <router-link to="#">
                    <i class="iconfont icon-git-copy"></i>
                </router-link>
                <router-link to="#">
                    <i class="iconfont icon-552cd5c76f532"></i>
                </router-link>
                <router-link to="#">
                    <i class="iconfont icon-tuite"></i>
                </router-link>
                <router-link to="#">
                    <i class="iconfont icon-lingying"></i>
                </router-link>
            </div>
        </b-col>   
    </b-row>
</div>
</template>

<script>
export default {
    name: 'FooterNav',
    data () {
      return {
      }
    }
}
</script>

<style lang="less" scoped>
.footer{
    font-family: Montserrat,sans-serif;
    background-color: #303030;
    padding: 24px 50px;
    color: ghostwhite;
    .avatar-img{
        height: 60px;
        width: 60px;
        border-radius: 50%;
    }
    .all-rights-reserved{
        font-size: 14px;
        .all-rights-reserved{
            font-weight: bold;
        }
    }
    
    .all-rights-reserved-delete{
        text-decoration:line-through;
    }
    div{
        margin: 10px auto;
    }
    .footer-icon{
        a{
            color: ghostwhite;
            margin: 0 15px;
            text-decoration: none;
            // 底部图标大小
            i{
                font-size: 18px;
            }
        }
    }
    
}
@media (max-width: 768px) {
    .footer{
        margin: 0;
    }
}

@media (min-width: 768px){
    .footer{
        margin-left: 320px;
    }
}


</style>