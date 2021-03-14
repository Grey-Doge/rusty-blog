<template>
    <div class="cover-container d-none d-md-block ">
        <div class="cover-image">
            <div class="avatar">
                <img class="avatar-img" src="../../assets/avatar.jpg" alt="" @mouseover="getEl" >
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
        <transition name="fade">
            <div class="popover-wrapper" v-show="showPopover" :style="{top : popOver.top + 'px',left : popOver.left + 'px'}"  ref="pop">
                <img src="../../assets/img/二维码.png" alt="">
                <div class="popper_arrow arrow-up" ></div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    data: function() {
        return {
            showPopover: true,
            popOver: {
                top: 0,
                left: 0,
            }
        }
    },
    methods: {
        getEl(event) {
            this.showPopover = true;
            console.log(`X为:${event.x}`);
            console.log(`Y为:${event.y}`);
            console.log(`offsetX为:${event.offsetX}`);
            console.log(`offsetY为:${event.offsetY}`);
            let targetMidOffsetWidth = event.x - event.offsetX + (event.srcElement.clientWidth / 2);
            let targetMidOffsetHeihgt = event.y - event.offsetY + (event.srcElement.clientHeight / 2);
            console.log(`targetMidOffsetHeihgt = ${targetMidOffsetHeihgt} px`);
            console.log(`targetMidOffsetWidth = ${targetMidOffsetWidth} px`);
            //必须调用$nextTick方法强制渲染后才能获取到元素的宽高坐标
            this.$nextTick(function() {
                //arrow-right的top;
                // this.popOver.top = targetMidOffsetHeihgt - (this.$refs.pop.offsetHeight / 2);
                //arrow-down的top和left;
                // this.popOver.top = event.y - event.offsetY - this.$refs.pop.offsetHeight - 20;
                // this.popOver.left = targetMidOffsetWidth - (this.$refs.pop.offsetWidth / 2);
                //arrow-uo的top和left;
                this.popOver.top = event.y - event.offsetY + event.srcElement.clientHeight + 20;
                this.popOver.left = targetMidOffsetWidth - (this.$refs.pop.offsetWidth / 2);
                console.log(`弹出框的top定位在:${this.popOver.top}px`);
            });
            
        }
    },
    mounted: function() {
        console.log(`this.$refs.pop.offsetHeight = ${this.$refs}`);
        console.log(this);
    }
}
</script>

<style lang="less" scoped>
@import url('../../assets/css/common.css');
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.arrow-down {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #fff;
    border-bottom: 10px solid transparent;
    bottom: -20px;
    filter: drop-shadow(0px 3px 1px #EFEFEF);
}
.arrow-up {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid #fff;
    top: -20px;
    filter: drop-shadow(0px -3px 1px #EFEFEF);
}
.arrow-left {
    border-left: 10px solid transparent;
    border-right: 10px solid #fff;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    left: -20px;
    filter: drop-shadow(-3px 0px 1px #EFEFEF);
}
.arrow-right {
    border-left: 10px solid #fff;
    border-right: 10px solid transparent;;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    right: -20px;
    filter: drop-shadow(3px 0px 1px #EFEFEF);
}
.popper_arrow {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    // border-width: 6px;
    // filter: drop-shadow(-3px 0px 1px #EFEFEF);
    // top: calc(50% - 10px);
    
}
.popover-wrapper{
    position: fixed;
    height: auto;
    // top: 121px;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 220px;
    z-index: 999;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 6px 3px #EFEFEF;
    min-height: 150px;
    min-width: 150px;
    img {
        width: 150px;
        height: 150px;
    }
}
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
            cursor: pointer;
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