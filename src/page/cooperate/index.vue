<template>
  	<div class="cooperate-container">
          <div class="title">商务合作</div>
          <div class="main">彦旭科技（武汉）有限公司，是一家面向全球提供专业的产品、服务、解决方案的科技公司。公司聚焦云办公领域，依托自身强大的研发能力、创新能力、新技术的引入能力，为部队、高校、政府媒体、房地产企业等客户产品和定制化服务，助力客户成功。彦旭科技，欢迎更多的伙伴加入合作，实现多赢！</div>
          <ul class="aside">
              <li>
                  <div class="label">咨询电话 :</div>
                  <div class="label-for">+86 (27) 87888662</div>
              </li>
              <li>
                  <div class="label">咨询邮箱 :</div>
                  <div class="label-for">info@prosuntech.com</div>
              </li>
              <li>
                  <div class="label">公司地址 :</div>
                  <div class="label-for">湖北省武汉市东湖高新区关山大道光谷创意B座</div>
              </li>
              <li>
                  <div class="label">更多请关注 :</div>
                  <div class="label-for">https://www.prosuntech.com</div>
              </li>
          </ul>
          <div class="footer">
              <img src="static/img/wx.png" alt="">
              <p>企业公众号</p>
          </div>
  	</div>
</template>

<script>
export default {
	name: 'cooperate',
    data(){
        return {
           
        }
    },
	mounted(){
        
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>
.cooperate-container{
    position: absolute;
    top:0;
    left:25px;
    bottom:0;
    right:25px;
    overflow: hidden;
    .title{
        text-align: center;
        line-height:5rem;
        font-size:1.3rem;
    }
    .main{
        padding-bottom:20px;
    }
    .aside{
        padding-bottom:10px;
        li{
            display:flex;
            padding:2px 0;
            .label{
                width:100px;
            }
            .label-for{
                flex:1;
            }
        }
    }
    .footer{
        width:40%;
        margin-left:100px;
        img{
            width:100%;
        }
        p{
            text-align: center;
        }
    }
}
</style>