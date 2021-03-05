<template>
    <!-- 遮罩层  -->
    <!-- 动画使用transition组件 -->
    
    <transition name="img-preview">
        <div :class="['image-preview-wrapper',visible ? '' : '']" v-show="visible" @click.stop="closePreview">
            <img :src="src" alt="图片加载中..." class="image-preview">
        </div>
    </transition>
</template>

<script>
export default {
    name: "ImgPreview",
    props:{
        src: String,
        visible: Boolean
    },
    methods: {
        closePreview: function() {
            this.$emit('show',!this.visible);
        }
    }
}
</script>

<style lang="less" scoped>
::selection{
        background-color:transparent;
}
// 动画样式
.img-preview-enter-active ,.img-preview-leave-active {
  transition: opacity .5s ease;
}
// .img-preview-leave-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }
.img-preview-enter, .img-preview-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
  pointer-events:none;
}
@keyframes zoom-in {
    from{
        transform: scale(0,0);
    }
    to{
        transform: scale(1,1);
    }
}
.image-preview-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    height: 100%;
    width: 100%;
    padding: 25px;
    z-index: 100;
    background-color: rgba(26,26,26,.65);
    left: 0;
    top: 0;
    
    .image-preview{
        max-height: 100%;
        max-width: 100%;
        cursor: zoom-out;
        opacity: 1;
        animation: zoom-in 0.5s cubic-bezier(.32,.64,.17,1.05) forwards;
    }
}


</style>