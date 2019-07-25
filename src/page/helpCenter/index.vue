<template>
  	<div class="help-container">
    	<div :class="{listmain:true,isactive:state == 'list'}">
            <div class="title">常见问题列表</div>
            <ul>
                <li v-for="item in listData" :key="item.id" @click="goDetail(item.id)">
                    <div>{{item.title}}</div>
                </li>
                <li class="ul-footer">联系客服 : 027-8788 8662</li>
            </ul>
        </div>
        <div :class="{detailmain:true,isactive:state == 'detail'}">
            <div class="detail-header">
                <div class="show-list" @click="state = 'list'">返回</div>
            </div>
            <div v-html="detailData.content || ''"></div>
        </div>
  	</div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
	name: 'helpCenter',
    data(){
        return {
            state:"list",
            listData:[],
            detailData: {}
        }
    },
	mounted(){
        this.getHelpList()
    },
    methods:{
        getHelpList(){
            this.$ajax("POST","v1/HelpCenter/pager",{
                pageNum: 1,
                pageSize: 10,
                paramData: {}
            }).then(res => {
                if(res.data){
                    this.listData = res.data.resultData
                    console.log(this.listData)
                }else{
                    Toast({
                        message: '请求失败：' + res.message,
                        duration: 3000
                    });
                }
            },err => {
                Toast({
                    message: JSON.parse(err.response).message || '获取信息失败，请稍后重试',
                    duration: 3000
                });
            })
        },
        goDetail(id){
            this.$ajax("GET","v1/HelpCenter/"+id).then(res => {
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
        }
    }
}
</script>

<style lang="less" scoped>
.help-container{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:#f3f3f3;
    .title{
        text-align: center;
        line-height:60px;
        height:60px;
        font-size:1.3rem;
        background: #3bc492;
        color: #fff;
        margin-bottom:10px;
    }
    .listmain{
        position: absolute;
        width:100%;
        left:-100%;
        transition: 1000ms;
        ul{
            padding:10%;
            li{
                line-height:36px;
                font-size:0.8rem;
                border-bottom:0.01rem solid #ddd;
                margin-bottom:10px;
            }
            .ul-footer{
                padding-top:10px;
                text-align:center;
                color:#555;
                border-bottom:none;
            }
        }
    }
    .listmain.isactive{
        left:0;
    }
    .detailmain{
        position: absolute;
        min-width:100%;
        left:100%;
        transition: 1000ms;
        .detail-header{
            height:60px;
            background:#3bc492;
            .show-list{
                width:20%;
                height:60px;
                margin-left:20px;
                line-height: 60px;
                color:#fff;
            }
        }
    }
    .detailmain.isactive{
        left:0;
    }
}
</style>