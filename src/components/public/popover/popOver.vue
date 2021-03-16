<template>
  <div style="display:inline-block;">
    <div ref="target">
        <slot></slot>
    </div>
    <transition name="fade">
        <div class="popover-wrapper" v-show="showPop" ref="popover" @mouseenter="showPop = true" @mouseleave="showPop = false">
            <div class="popover-inner">
                <slot name="content"></slot>
            </div>
            <div class="popper_arrow" :class="{ 
                'arrow-down': placement === 'top',
                'arrow-up': placement === 'bottom',
                'arrow-left' : placement === 'right',
                'arrow-right' : placement === 'left'
            }">

            </div>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
    name: 'PopOver',
    data: function() {
        return {
            position: {
                top: 0,
                left: 0
            },
            target: {},
            showPop: false
        }
    },
    props: {
        // 需要监听的事件
        trigger: {
            type: String,
            default: 'hover'
        },
        // 弹窗出现在元素的哪个方向
        placement: {
            type: String,
            default: 'top'
        }
    },
    watch: {
        // 监听showPop属性变化,并计算popover的坐标;
        async showPop(val) {
            if (val) {
                const popover = this.$refs.popover;
                // const target = this.$refs.target;
                const event = this.target;
                switch (this.placement) {
                    case 'top':
                        await this.$nextTick(() => {
                            this.position.top = event.y - event.offsetY - this.$refs.popover.offsetHeight - 15;
                            this.position.left = (event.x - event.offsetX + (event.srcElement.clientWidth / 2)) - (this.$refs.popover.offsetWidth / 2);  
                        })
                        break;
                    case 'right':
                        await this.$nextTick(() => {
                            this.position.top = (event.y - event.offsetY + (event.srcElement.clientHeight / 2)) - (this.$refs.popover.offsetHeight / 2);
                            this.position.left = (event.x - event.offsetX + event.srcElement.clientWidth) +20;  
                        })
                        break;
                    case 'left':
                        await this.$nextTick(() => {
                            this.position.top = (event.y - event.offsetY + (event.srcElement.clientHeight / 2)) - (this.$refs.popover.offsetHeight / 2);
                            this.position.left = (event.x - event.offsetX - this.$refs.popover.offsetWidth) - 20;  
                        })
                        break;
                    case 'bottom':
                        await this.$nextTick(() => {
                            this.position.top = event.y - event.offsetY + event.srcElement.clientHeight + 20;
                            this.position.left = (event.x - event.offsetX + (event.srcElement.clientWidth / 2)) - (this.$refs.popover.offsetWidth / 2);
                        })
                        break;
                    default:
                        console.log('invalidate placement prop!');
                }
                popover.style.top = this.position.top + 'px';
                popover.style.left = this.position.left + 'px';
            }
        }
    },
    mounted: function() {
        console.log('触发元素为:');
        console.log(this.$refs);
        this.$refs.target.onmouseenter = (event)=> {
            console.log('触发onmouseenter');
            this.target = event;
            this.showPop = true;
        }
        this.$refs.target.onmouseleave = ()=> {
            console.log('触发onmouseleave');
            this.$nextTick(function() {
                this.showPop = false;
            })
        }
    },
    beforeDestroy: function() {
        console.log('组件被销毁啦~~~');
    }
}
</script>

<style lang="less" scoped>
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
    filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, .12));
}
.arrow-up {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid #fff;
    top: -20px;
    filter: drop-shadow(0px -2px 1px rgba(0, 0, 0, .12));
}
.arrow-left {
    border-left: 10px solid transparent;
    border-right: 10px solid #fff;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    left: -20px;
    filter: drop-shadow(-2px 0px 1px rgba(0, 0, 0, .12));
}
.arrow-right {
    border-left: 10px solid #fff;
    border-right: 10px solid transparent;;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    right: -20px;
    filter: drop-shadow(2px 0px 1px rgba(0, 0, 0, .12));
}
.popper_arrow {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
}
.popover-wrapper{
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #606266;
    z-index: 999;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    padding: 20px;
    cursor: auto;
    img {
        width: 150px;
        height: 150px;
    }
}
</style>