<template>
  <div class="list-container">
    <div :class="{listmain:true,isactive:state == 'list'}">
      <div class="title">工资条列表</div>
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
            <li v-for="item in listData" :key="item.id" @click="goDetail(item.id)">
                <div>{{item.year}}年{{item.month}}月</div>
                <div>{{item.salaryType}}</div>
                <div>查看详情</div>
            </li>
        </ul>
    </div>
    <div :class="{detailmain:true,isactive:state == 'detail'}">
      <div class="detail-header">
        <div class="show-list" @click="state = 'list'">历史</div>
      </div>
      <div v-html="detailData.content || ''"></div>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { Indicator } from 'mint-ui';
export default {
  name: "billList",
  data() {
    return {
      state: "list",
      listState: "",
      listData: [],
      detailData: {},
      mobile: "",
      email: "",
      pageNum:1,
      pageSate:true,
    };
  },
  mounted() {
    // console.log(this.$route.query);
    if (this.$route.query.mobile) {
      this.mobile = this.$route.query.mobile;
      this.listState = "mobile";
      this.getList();
    } else if (this.$route.query.email) {
      this.email = this.$route.query.email;
      this.listState = "email";
      this.getList();
    }
  },
  methods: {
    getList() {
      let data = {};
      if (this.listState == "mobile") {
        data = {
          pageNum: this.pageNum,
          pageSize: 12,
          paramData: {
            mobile: this.mobile
          }
        };
      } else if (this.listState == "email") {
        data = {
          pageNum: this.pageNum,
          pageSize: 12,
          paramData: {
            email: this.email
          }
        };
      }
      this.$ajax("POST", "v1/sendrecord/staff/pager", data).then(
        res => {
          if (res.data) {
             // console.log(res.data.resultData)
            if(res.data.resultData == null){
                this.pageSate =false;
                Toast({
                    message: "没有更多内容了",
                    duration: 3000
                });
            }else{
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
                setTimeout(() => {
                   Indicator.close();
                   this.listData =this.listData.concat(res.data.resultData);
                }, 1000);
                
            }
          } else {
            Toast({
              message: res.message,
              duration: 3000
            });
          }
        },
        err => {
          Toast({
            message:
              JSON.parse(err.response).message || "数据请求失败，请稍后重试",
            duration: 3000
          });
        }
      );
    },

    //滚动加载
    loadMore: function() {
      this.busy = true;
      if(this.pageSate){
          this.pageNum =this.pageNum+1;
          this.getList();
          this.busy = false;
      };
    },

    goDetail(id) {
        this.$router.push({
            path: "/billdetails",
            query: {id: id}
        });
    //   this.$ajax("GET", "v1/sendrecord/staff/" + id).then(
    //     res => {
    //       if (res.data) {
    //         this.state = "detail";
    //         this.detailData = res.data;
    //       } else {
    //         Toast({
    //           message: res.message,
    //           duration: 3000
    //         });
    //       }
    //     },
    //     err => {
    //       console.log(err);
    //       Toast({
    //         message:
    //           JSON.parse(err.response).message || "获取工资条失败，请稍后重试",
    //         duration: 3000
    //       });
    //     }
    //   );
      //无标签样式接口
      // this.$ajax("GET","v1/sendrecord/"+id).then(res => {
      //     if(res.data){
      //         this.state = 'detail'
      //         this.detailData = JSON.parse(res.data.content)
      //         console.log(this.detailData)
      //     }else{
      //         Toast({
      //             message: res.message,
      //             duration: 3000
      //         });
      //     }
      // },err => {
      //     Toast({
      //         message: JSON.parse(err.response).message ||  '获取工资条失败，请稍后重试',
      //         duration: 3000
      //     });
      // })
    }
  }
};
</script>

<style lang="less" scoped>
.list-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #f3f3f3;
  overflow-x: hidden;
  overflow-y: auto;
  .title {
    text-align: center;
    line-height: 60px;
    height: 60px;
    font-size: 1.3rem;
    background: #3bc492;
    color: #fff;
    margin-bottom: 10px;
  }
  .listmain {
    position: absolute;
    width: 100%;
    left: -100%;
    transition: 1000ms;
    ul {
      padding: 0 15px;
      height: 100%;
      margin: 0 auto;
      li {
        height: 55px;
        line-height: 55px;
        color: #999;
        cursor: pointer;
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        justify-content: space-between;
        div:first-child {
          margin-right: 15px;
        }
      }
    }
  }
  .listmain.isactive {
    left: 0;
  }
  .detailmain {
    position: absolute;
    min-width: 100%;
    left: 100%;
    transition: 1000ms;
    background: #fff;
    .detail-header {
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
  }
  .detailmain.isactive {
    left: 0;
  }
}
</style>