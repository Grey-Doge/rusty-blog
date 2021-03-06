<template>
    <transition v-show="showLoading">
        <div class="loading-wrapper">
            <div class="loading-circle">

            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'loading',
    data: function() {
        return {

            showLoading: false,
            
        }
    },
    methods: {

    },
    mounted: function() {
        setTimeout(() => {
            this.showLoading = false;
        }, 2500)
        console.log(this.showLoading);
    }
}
</script>

<style lang="less" scoped>
.loading-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 100;
    background-color: hsla(0,0%,100%,.65);
    .loading-circle {
        width: 50px;
        height: 50px;
        background-color: #fff;
        border: 1px solid blue;
        animation: circle 3s linear infinite;
    }
    @keyframes circle {
        0%{-webkit-transform:rotate(0deg);}
        25%{-webkit-transform:rotate(90deg);}
        50%{-webkit-transform:rotate(180deg);}
        75%{-webkit-transform:rotate(270deg);}
        100%{-webkit-transform:rotate(360deg);}
    }
}
</style>