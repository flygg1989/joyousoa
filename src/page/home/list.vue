<template>
  	<div class="list-container">
        <div class="list-main" v-if="state == 'list'">
            <ul>
                <li v-for="item in listData" :key="item.id" @click="goDetail(item.id)">
                    <div>{{item.year}}年{{item.month}}月</div>
                    <div>{{item.salaryType}}</div>
                    <div>查看详情</div>
                </li>
            </ul>
        </div>
        <div class="detail-main" v-if="state == 'detail'">
            <div class="detail-header">
                <div class="show-list" @click="state = 'list'">历史</div>
            </div>
            <div v-html="detailData.content || ''"></div>
        </div>
  	</div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
	name: 'billList',
  	data(){
        return {
            state:"list",
            listData: [],
            detailData: {}
        }
    },
	mounted(){
        console.log(this.$route.query)
        // this.listData = this.$route.query.resultData.reverse();
        // console.log(this.listData)
    },
    methods:{
        goDetail(id){
            this.$ajax("GET","v1/sendrecord/staff/"+id).then(res => {
                if(res.data){
                    this.state = 'detail'
                    this.detailData = res.data
                }else{
                    Toast({
                        message: res.message,
                        duration: 3000
                    });
                }
            },err => {
                Toast({
                    message: JSON.parse(err.response).message ||  '获取工资条失败，请稍后重试',
                    duration: 3000
                });
            })
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
}

</script>

<style lang="less" scoped>
.list-container{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:#f3f3f3;
    display:flex;
    flex-direction:column;
    overflow: hidden;
    .list-main{
        flex:1;
        ul{
            width:80%;
            height:100%;
            margin:0 auto;
            padding-top:25%;
            li{
                height:56px;
                line-height:56px;
                color:#999;
                border-radius:10px;
                background:#fff;
                padding:0 15px;
                cursor:pointer;
                margin-bottom:20px;
                display:flex;
                justify-content: space-between;
                div:first-child{
                    margin-right:15px;
                }
            }
        }
    }
    .detail-main{
        flex:1;
        .detail-header{
            height:60px;
            background:#3bc492;
            .show-list{
                width:20%;
                height:60px;
                text-align:center;
                line-height: 60px;
                color:#fff;
            }
        }
    }
}
</style>