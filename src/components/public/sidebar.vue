<template>
  <div class="cover-container d-none d-md-block ">
      <div class="cover-image">
        <div class="avatar">

            <img class="avatar-img" src="../../assets/avatar.jpg" alt="">
            <p class="author-name">绣湖</p>
        </div>
        <div class="nav-item">
            <ul>
                <li>
                    <router-link to="/">
                        网站首页
                    </router-link>
                </li>
                <li>
                    <router-link to="/publish">
                        工作生活
                    </router-link>
                </li>
                <li>
                    <router-link to="/articles/1">
                        编程记录
                    </router-link>
                </li>
                <li>
                    <router-link to="/tag">
                        文章存档
                    </router-link>
                </li>
                <li>
                    <router-link to="#">
                        
                        关于绣湖
                        
                    </router-link>
                </li>
            </ul>
        </div>
        
        <div class="cover-footer">
            只愿偷得浮生半日闲,无他求。
        </div>
        
      </div>
      
  </div>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/common.css');
.cover-container{
    font-size: 14px;
    overflow: hidden;
    position: fixed;
    width: 320px;
    z-index: 99;
    top: 0;
    bottom: 0;
    // border-right: 1px solid #ccc;
    // color: #ffffff;
    box-shadow: 1px 0 5px #e0e0e0;
    color: #888;
}
.cover-image{
    width: 320px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    // background: url('https://soulteary.com/asset/image/feature-cover/light.svg') no-repeat center 50%;
    background-size: cover;
    height: 100%;
    
    
    .avatar{
        .avatar-img{
            height: 80px;
            width: 80px;
            border-radius: 50%;
            display: block;
            margin: 30px 0 20px 0;
            box-shadow: 0 3px 8px #B0AFAF;
        }
        .author-name{
            font-size: 18px;
            font-weight: bold;
        }
        
    }
    .cover-footer{
        position: absolute;
        bottom: 0;
        margin-bottom: 25px;
        font-size: 14px;
    }
    .nav-item{
        width: 100%;
        ul{
            list-style-type: none;
            padding: 10px 25px;
            margin: 0;
            li:first-child{
                border-top: 1px dashed #e0e0e0;
            }
            li{
                padding: 15px 0;
                border-bottom: 1px dashed #e0e0e0;
                color: #888;
                a{
                    display: inline-block;
                    font-size: 14px;
                    color: #888;
                }
                a:hover{
                    text-decoration: none;
                }
            }
            
        }
        
    }
}
</style>