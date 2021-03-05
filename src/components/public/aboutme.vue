<template>
  <div class="content-container">
      <heading title="About Me" subTitle='"大可不必了解我,看我笑话就行了"'></heading>
      <div class="aboutme-container">
          <b-row>
              <b-col sm="4" md="3" cols="12" >
                <div class="aboutme-img">
                    <img src="../../assets/avatar.jpg" alt="">
                </div>
              </b-col>
              <b-col sm="8" md="9" cols="12">
                <div class="aboutme-content">
                    <h3 class="content-title">ABOUT ME</h3>
                    <p class="description">
                        绣湖 <br><br><br>
                        鄙人绣湖，生于广东，纯南方汉子，苦读十二载，后求学于西安~<br>
                        『厚德、求真、砺学、笃行』这是母校给予的八字真言，四年本科生涯、三年研究生涯，良师益友收获颇多~<br>
                        求学之际偶遇佳人，毕业之后终成正果，小窝一间、少爷一个，平平淡淡、快快乐乐~<br>
                        前有微波天线、后学电磁黑障，本非科班出身，出于热情投身猿类大军~<br>
                        工作五六载，两域三城奔波，累哉累哉，自知其中快乐~<br>
                    </p>
                    <div>
                        <b-row>
                            <b-col cols="12" md="6" class="website">
                                <strong>主页:</strong>
                                <span>http://blog.littlelake.com</span>
                            </b-col>
                            <b-col cols="12" md="6" class="website">
                                <strong>主页:</strong>
                                <span>http://blog.littlelake.com</span>
                            </b-col>
                            <b-col cols="12" md="6" class="website">
                                <strong>主页:</strong>
                                <span>http://blog.littlelake.com</span>
                            </b-col>
                            <b-col cols="12" md="6" class="website">
                                <strong>主页:</strong>
                                <span>http://blog.littlelake.com</span>
                            </b-col>
                            
                        </b-row>
                    </div>
                    
                </div>
              </b-col>
          </b-row>
                
                
      </div>
  </div>
</template>

<script>
import heading from 'components/public/heading.vue'
export default {
    name: 'aboutme',
    components: {
        heading
    }

}
</script>

<style lang="less" scoped>
.website{
    // padding: 0 15px 0 0;
    word-break: break-all;
    margin: 5px 0;
}
.aboutme-container{
    display: flex;
    .aboutme-img{
        img{
            
            display: block;
            width: 100%;
            border-radius: 5px;
        }
    }
    .aboutme-content{
        text-align: start;
        .content-title{
            color: #888;
            font-size: 14px;
        }
        .description{
            font-size: 14px;
            color: #101010;;
        }
    }
    .aboutme-content,.aboutme-img{
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
    }
}
</style>