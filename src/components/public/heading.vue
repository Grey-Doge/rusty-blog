<template>
  <div class="heading">
      <div class="sub-title">{{subTitle}}</div>
      <div class="title">{{title}}</div>
  </div>
</template>

<script>
export default {
    name: 'heading',
    props: {
        subTitle: String,
        title: String
    }
}
</script>

<style lang="less" scoped>
.heading{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border-left: 6px solid #e3872d;
    padding: 5px 0 0 25px;
    font-family: Montserrat,sans-serif;
    margin: 30px 0;
    .sub-title{
        color: #888888;
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 5px;
    }
    .title{
        font-weight: 500;
        font-size: 30px;
        letter-spacing: 3px;
        text-transform: uppercase;
        margin: 0;
        text-align: start;
    }
}
</style>