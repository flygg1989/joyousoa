<template>
  <div class="list-container">
    <div :class="{detailmain:true,isactive:state == 'detail'}">
      <div class="detail-header">
        <div class="show-list" @click="backlist()">历史</div>
      </div>
      <div class="detail-content" v-html="detailData.content || ''"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "billdetails",
  data() {
    return {
      state: "detail",
      detailData: {},
    };
  },
  mounted() {
    // console.log(this.$route.query);
    this.goDetail(this.$route.query.id)
    
  },
  methods: {
    goDetail(id) {

      this.$ajax("GET", "v1/sendrecord/staff/" + id).then(
        res => {
          if (res.data) {
            this.state = "detail";
            this.detailData = res.data;
          } else {
            Toast({
              message: res.message,
              duration: 3000
            });
          }
        },
        err => {
          console.log(err);
          Toast({
            message:
              JSON.parse(err.response).message || "获取工资条失败，请稍后重试",
            duration: 3000
          });
        }
      );
    },

    //返回上级
    backlist(){
      this.$router.go(-1)
    }
  }
};
</script>

<style lang="less" scoped>
.list-container {
  width:100%;
 
 
  .detailmain {
    width: 100%;
    transition: 1000ms;
    background: #fff;
    .detail-header {
      width: 100%;
      height: 60px;
      background: #3bc492;
      .show-list {
        width: 20%;
        height: 60px;
        margin-left:20px;
        line-height: 60px;
        color: #fff;
      }
    }
    .detail-content{
      overflow: auto;
    }
  }
  .detailmain.isactive {
    left: 0;
  }
}
</style>