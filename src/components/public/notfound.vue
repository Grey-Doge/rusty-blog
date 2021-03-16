<template>
  <div class="container">
    
    <b-row align-h="start">
      <b-col cols="12">
        <heading title="你似乎迷路了" subTitle="The Page was stolen"></heading>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div class="page-info">
          <img src="../../assets/img/404.png" alt="">
          <h2 class="info-title">抱歉，您访问的页面出错了</h2>
          <p class="info-text">您可能输错了网址，或该网页已删除或不存在</p>
          <router-link to="/">返回首页</router-link>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import heading from 'components/public/heading'
export default {
  name: 'NotFound',
  components: {
    heading
  },
  mounted: function() {
  }
}
</script>

<style lang="less" scoped>
.router-link-active {
  text-decoration: none;
}
.container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  .page-info {
    img {
      max-width: 100%;
    }
    .info-title {
      font-size: 32px;
      color: #333333;
      text-align: center;
      letter-spacing: 5px;
      padding-top: 33px;
      padding-bottom: 25px;
    }
    .info-text {
      font-size: 14px;
      color: #666666;
      letter-spacing: 1px;
      text-align: center;
      margin-bottom: 35px;
    }
    a {
      color: #fff;
      font-size: 18px;
      padding: 15px 30px;
      background-color: #7caced;
      border-radius: 4px;
    }
  }
}
.page-title {
  margin-top: 20px;
  font-size: 20px;
  color: #999;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
  padding-bottom: 4px;
  text-align: left;
}
.page-message {
  margin: 2em auto;
  text-align: left;
  .notfound-bg {
    // background: url('../../assets/img/404_bg.jpg') no-repeat center/cover;
    min-height: 500px;
  }
}
</style>