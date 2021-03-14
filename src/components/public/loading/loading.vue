<template>
    <div class="loading-wrapper" v-if="show">
        <div class="loading-circle">

        </div>
    </div>
</template>

<script>
export default {
    name: 'loading',
    data: function() {
        return {
            show: false
        }
    },
    methods: {

    },
    mounted: function() {
    }
}
</script>

<style lang="less" scoped>
.loading-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position:fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 100;
    background-color: hsla(0,0%,100%,.65);
    .loading-circle {
        width: 80px;
        height: 80px;
        background-color: transparent;
        border-radius: 100%;
        border: 5px transparent solid;
        border-right-color: #87CEEB;
        animation: circle 1.5s linear infinite;
    }
    @keyframes circle {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
}
</style>