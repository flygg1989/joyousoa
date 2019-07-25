<template>
  	<div class="propagate-container">
        <swiper :options="swiperOption">
            <!-- 首页 -->
            <swiper-slide>
                <div class="page-box">
                    <div class="bg-box" style="background: url('static/img/propagate1/index_bg@2x2.png') no-repeat top;background-size:100% 100%;">&nbsp;</div>
                    <div class="title">助力1000万中小企业</div>
                    <div class="logo-box">
                        <img class="logo" src="static/img/propagate1/logo.png" alt="">
                        <div class="logo-text">提升企业形象 提高员工认可</div>
                        <img class="wave-point-left" src="static/img/propagate1/波点1@2x.png" alt="">
                        <img class="wave-point-right" src="static/img/propagate1/波点2@2x.png" alt="">
                    </div>
                    <div class="advantage-box">
                        <div class="advantage">
                            <img src="static/img/propagate1/优势1@2x.png" alt="">
                            <p>更智能</p>
                        </div>
                        <div class="separator">&nbsp;</div>
                        <div class="advantage">
                            <img src="static/img/propagate1/优势2@2x.png" alt="">
                            <p>更便捷</p>
                        </div>
                        <div class="separator">&nbsp;</div>
                        <div class="advantage">
                            <img src="static/img/propagate1/优势3@2x.png" alt="">
                            <p>更多样</p>
                        </div>
                        <div class="separator">&nbsp;</div>
                        <div class="advantage">
                            <img src="static/img/propagate1/优势4@2x.png" alt="">
                            <p>更安全</p>
                        </div>
                    </div>
                    <div class="next-btn">
                        <img src="static/img/翻页键@2x.png" alt="">
                    </div>
                </div>
            </swiper-slide>
            <!-- 2页 -->
            <swiper-slide>
                <div class="page-box">
                    <div class="bg-box" style="background: url('static/img/propagate2/joyousoa@2x.png') no-repeat right;background-size:100% 100%;">&nbsp;</div>
                    <img src="static/img/propagate2/标题1@2x.png" alt="" class="logo">
                    <div class="title">专为人事打造的发工资神器
                        <img src="static/img/propagate2/“@2x.png" alt="" class="title-logo">
                    </div>
                    <div class="main">
                        <div class="main-li" style="background: url('static/img/propagate2/气泡1@2x.png') no-repeat;background-size:100% 100%;">电子工资条</div>
                        <div class="main-li" style="background: url('static/img/propagate2/气泡2@2x.png') no-repeat;background-size:100% 100%;">数据加密</div>
                        <div class="main-li" style="background: url('static/img/propagate2/气泡1@2x.png') no-repeat;background-size:100% 100%;">一键发送</div>
                        <div class="main-li" style="background: url('static/img/propagate2/气泡2@2x.png') no-repeat;background-size:100% 100%;">可配置模板</div>
                        <div class="main-li" style="background: url('static/img/propagate2/气泡3@2x.png') no-repeat;background-size:100% 100%;">灵活查收方式</div>
                        <div class="main-li" style="background: url('static/img/propagate2/气泡4@2x.png') no-repeat;background-size:100% 100%;">减轻人事辎重</div>
                        <img src="static/img/propagate2/六边形@2x.png" alt="" class="main-center">
                    </div>
                    <div class="next-btn">
                        <img src="static/img/翻页键@2x.png" alt="">
                    </div>
                </div>
            </swiper-slide>
            <!-- 3页 -->
            <swiper-slide>
                <div class="page-box">
                    <img src="static/img/propagate3/标题2@2x.png" alt="" class="logo">
                    <div class="main">
                        <div class="main-li">
                            <div class="number">01</div>
                            <img src="static/img/propagate3/问题-图1@2x.png" alt="">
                            <p>工资类别繁多  每月工资单厚厚一沓</p>
                        </div>
                        <div class="main-li">
                            <div class="number">02</div>
                            <img src="static/img/propagate3/问题-图2@2x.png" alt="">
                            <p>纸质工资条费时费力  容易出错</p>
                        </div>
                        <div class="main-li">
                            <div class="number">03</div>
                            <img src="static/img/propagate3/问题-图3@2x.png" alt="">
                            <p>《工资支付暂行规定》《个人所得税法》规定企业需要发放工资条</p>
                        </div>
                        <div class="main-li">
                            <div class="number">04</div>
                            <img src="static/img/propagate3/问题-图4@2x.png" alt="">
                            <p>员工不断询问  增加人事成本  员工对企业认可度不高</p>
                        </div>
                    </div>
                    <div class="next-btn">
                        <img src="static/img/翻页键@2x.png" alt="">
                    </div>
                </div>
            </swiper-slide>
            <!-- 4页 -->
            <swiper-slide>
                <div class="page-box" style="background: #28b180;background-size:100% 100%;">
                    <img src="static/img/propagate4/bg04.png" alt="">
                </div>
            </swiper-slide>
            <!-- 5页 -->
            <swiper-slide>
                <div class="page-box" style="background: #28b180;background-size:100% 100%;">
                    <img src="static/img/propagate5/bg05.png" alt="">
                </div>
            </swiper-slide>
            <!-- 6页 -->
            <swiper-slide>
                <div class="page-box" style="background: #28b180;background-size:100% 100%;">
                    <img src="static/img/propagate6/bg06.png" alt="">
                </div>
            </swiper-slide>
            <!-- 7页 -->
            <swiper-slide>
                <div class="page-box" style="background: #28b180;background-size:100% 100%;">
                    <img src="static/img/propagate7/bg07.png" alt="">
                </div>
            </swiper-slide>
            <!-- 8页 -->
            <swiper-slide>
            <!-- 加入演示视频按钮 -->
                <div class="page-box" style="background: #28b180;background-size:100% 100%;">
                    <img src="static/img/propagate8/bg08.png" alt="">
                </div>
                <button class="video-btn" style="background: url('static/img/propagate8/bg08_btn.png') no-repeat;background-size:100% 100%;" @click="openVideo"></button>
            </swiper-slide>
            <!-- 9页 -->
            <swiper-slide>
                <div class="page-box" style="background: #28b180;background-size:100% 100%;">
                    <img src="static/img/propagate9/bg09.png" alt="">
                </div>
            </swiper-slide>
            <!-- 10页 -->
            <swiper-slide>
                <div class="page-box" style="background: #28b180;background-size:100% 100%;">
                    <div>
                        <img src="static/img/propagate10/bg10_01.png" alt="">
                        <img src="static/img/propagate10/bg10.png" alt="">
                        <img src="static/img/propagate10/bg10_02.png" alt="">
                    </div>
                </div>
            </swiper-slide>
            <!-- 11页 -->
            <swiper-slide>
                <div class="page-box" style="background: #28b180;background-size:100% 100%;">
                    <img src="static/img/propagate11/bg11.png" alt="">
                </div>
            </swiper-slide>
            <!-- 12页 -->
            <swiper-slide>
                <div class="page-box" style="background: #28b180;background-size:100% 100%;">
                    <div>
                        <img src="static/img/propagate12/bg12_01.png" alt="">
                        <img src="static/img/propagate12/bg12.png" alt="">
                        <img src="static/img/propagate12/bg12_02.png" alt="">
                    </div>
                </div>
            </swiper-slide>
            <!-- 13页 -->
            <swiper-slide>
                <div class="page-box" style="background: #28b180;background-size:100% 100%;">
                    <img src="static/img/propagate13/bg13.png" alt="">
                </div>
            </swiper-slide>
            <!-- 14页 -->
            <swiper-slide>
                <div class="page-box" style="background: #28b180;background-size:100% 100%;">
                    <img src="static/img/propagate14/bg14.png" alt="">
                </div>
            </swiper-slide>
            <!-- 15页 -->
            <swiper-slide>
                <div class="page-box">
                    <div class="bg-box" style="background: url('static/img/propagate15/椭圆 15@2x.png') no-repeat;background-size:100% 100%;">&nbsp;</div>
                    <img src="static/img/propagate15/标题5@2x.png" alt="" class="logo">
                    <div class="main">
                        <div class="header">了解更多</div>
                        <img src="static/img/propagate15/ico_更多@2x.png" alt="" class="more">
                        <div class="qr-code-row">
                            <div class="qr-code-box">
                                <img src="static/img/propagate15/公众号二维码@2x.png" alt=""  class="qr-code">
                                <p>关注公众号 了解更多</p>
                            </div>
                            <div class="qr-code-box">
                                <img src="static/img/propagate15/公司二维码@2x.png" alt=""  class="qr-code">
                                <p>添加此微信 商务合作</p>
                            </div>
                        </div>
                        <div class="link">https://payroll.joyousoa.com</div>
                        <p class="link-p">（PC端查看）</p>
                    </div>
                    <div class="aside">
                        <p>彦旭科技(武汉)有限公司</p>
                        <p>联系电话：+86（27）87888662</p>
                        <p>公司地址：武汉市光山大道光谷创意B座</p>
                    </div>
                    <div class="footer">
                        <img src="static/img/propagate15/logo1@2x.png" alt="">
                        <div class="line">丨</div>
                        <img src="static/img/propagate15/logo2@2x.png" alt="">
                        <img src="static/img/propagate15/波点拷贝@2x.png" alt="" class="wave-point">
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <!-- 演示视频弹窗 -->
        <mt-popup
            v-model="popupVisible"
            lockScroll="true"
            popup-transition="popup-fade"
            position="left">
            <div v-show="popupVisible" class="video-box">
                <video src="static/media/OperationalVideo.mp4" controls="controls" poster="static/media/OperationalVideo.png" @touchmove.prevent></video>
            </div>
        </mt-popup>
  	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
    name: 'propagate',
    components: {
        swiper,
        swiperSlide
    },
  	data(){
        return {
            swiperOption: {
                direction: 'vertical',
                height: window.innerHeight,
            },
            popupVisible:false,
        }
    },
	mounted(){
        // this.$ajax("GET","http://192.168.0.110:6010/v1/wx/user").then(res => {
        //     if(res.data){
        //         alert(res)
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
    },
    methods:{
        // 打开演示视频弹窗
        openVideo(){
            this.popupVisible = true
        }
    }
}

</script>

<style lang="less" scoped>
video{
    margin:0 auto;
}
.propagate-container{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    // background: #28B180;
    overflow: hidden;
    img{
        display:block;
    }
    .page-box{
        width:100%;
        height:100%;
        overflow: hidden;
        .next-btn{
            position: absolute;
            left:0;
            right:0;
            bottom:0;
            img{
                margin:0 auto 40px;
                width:20px;
                height:20px;
            }
        }
    }
    //首页
    .swiper-slide:nth-child(1) .page-box{
        .bg-box{
            width:100%;
            height:100%;
            position: absolute;
            left:0;
            top:30%;
        }
        .title{
            width:100%;
            padding:18% 0 6%;
            font-size:1.8rem;
            text-align: center;
            color: #2C2D3A;
            font-weight:400;
        }
        .logo-box{
            width:83%;
            margin:0 auto;
            position: relative;
            .logo{
                width:100%;
                margin-bottom:6%; 
            }
            .logo-text{
                width:77%;
                height: 32px;
                line-height:30px;
                margin:0 auto;
                font-size:1rem;
                border:1px solid rgba(63,199,150,1);
                border-radius:30px;
                text-align: center;
                color: #3FC796;
                font-weight:500;
            }
            .wave-point-left{
                width:15.7%;
                position: absolute;
                left:-8%;
                top:-22%;
            }
            .wave-point-right{
                width:14.1%;
                position: absolute;
                right:-8%;
                top:40%;
            }
        }
        .advantage-box{
            position: absolute;
            left:0;
            right:0;
            bottom:10%;
            height:100px;
            display:flex;
            justify-content: center;
            .advantage{
                width:100px;
                height:80px;
                img{
                    width:50px;
                    height:50px;
                    margin:0 auto;
                }
                p{
                    height:30px;
                    line-height:30px;
                    text-align:center;
                    color: #EBF9F4;
                }
            }
            .separator{
                width:0.1rem;
                margin-top:10px;
                height:30px;
                background:#EFF5F9;
                opacity:0.46;
                border-radius:50%;
            }
        }
    }
    //2页
    .swiper-slide:nth-child(2) .page-box{
        background: #28B180;
        .bg-box{
            width:16.8%;
            height:68.4%;
            position: absolute;
            top:16.2%;
            right:0;
            z-index:1;
        }
        .logo{
            padding:12% 0 6%;
            width:90.8%;
            margin:0 auto;
        }
        .title{
            position:absolute;
            width:100%;
            z-index:2;
            text-align:center;
            font-size:1.5rem;
            color:#fff;
            .title-logo{
                width:1.5rem;
                height:1.5rem;
                position:absolute;
                left:10%;
                top:50%;
                z-index:1;
            }
        }
        .main{
            width:180px;
            position:absolute;
            top:45%;
            left:0;
            right:0;
            margin:0 auto;
            .main-center{
                width:180px;
            }
            .main-li{
                width:125px;
                height:50px;
                text-align:center;
                color:#fff;
                line-height:33px;
                position: absolute;
                z-index:3;
            }
            .main-li:nth-child(1){
                left:-75px;
                top:-50px;
            }
            .main-li:nth-child(2){
                left:125px;
                top:-50px;
            }
            .main-li:nth-child(3){
                left:-110px;
                top:30px;
            }
            .main-li:nth-child(4){
                left:170px;
                top:30px;
            }
            .main-li:nth-child(5){
                line-height:67px;
                left:-75px;
                top:160px;
            }
            .main-li:nth-child(6){
                line-height:67px;
                left:125px;
                top:160px;
            }
        }
    }
    //3页
    .swiper-slide:nth-child(3) .page-box{
        background: #28B180;
        .logo{
            padding:8% 0 6%;
            width:90.8%;
            margin:0 auto;
        }
        .main{
            padding:0 5%;
            height:100%;
            .main-li{
                position: relative;
                width:48%;
                height:35%;
                margin-bottom:5%;
                background:#73CCAC;
                box-shadow:0px 3px 8px 1px rgba(12,120,86,0.18);
                border-radius:4%;
                .number{
                    width:28px;
                    height:28px;
                    text-align:center;
                    line-height:30px;
                    color:#fff;
                    font-weight:400;
                    background: #0C8A5D;
                    position:absolute;
                    left:-5px;
                    top:-5px;
                }
                img{
                    width:65%;
                    margin:13% auto 0;
                }
                p{
                    width:74%;
                    margin:2% auto;
                    color:#fff;
                    font-size:0.8rem;
                }
            }
            .main-li:nth-child(2n-1){
                float: left;
            }
            .main-li:nth-child(2n){
                float: right;
            }
        }
    }
    //4页 5页 6页 7页
    .swiper-slide:nth-child(4) .page-box,.swiper-slide:nth-child(5) .page-box,.swiper-slide:nth-child(6) .page-box,.swiper-slide:nth-child(7) .page-box{
        background: #28B180;
        img{
            width: 75%;
            position: absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            text-align: center;
        }
    }
     //8页  9页  11页  13页  14页
    .swiper-slide:nth-child(8) .page-box,.swiper-slide:nth-child(9) .page-box,.swiper-slide:nth-child(11) .page-box,.swiper-slide:nth-child(13) .page-box,.swiper-slide:nth-child(14) .page-box{
        background: #28B180;
        position: relative;
        img{
            width:85%;
            position: absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            text-align: center;
        }
    }
    //10页  12页
    .swiper-slide:nth-child(10) .page-box,.swiper-slide:nth-child(12) .page-box{
        background: #28B180;
        div{
            width: 100%;
            position: absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            text-align: center;
            img:nth-child(1){
                width:75%;
                margin: 0 auto;
            }
            img:nth-child(2){
                width: 90%;
                margin: 0 auto;
            }
            img:nth-child(3){
                width: 75%;
                margin: 0 auto;
            }
        }
    }
    //15页
    .swiper-slide:nth-child(15) .page-box{
        background: #28B180;
        .bg-box{
            position: absolute;
            width:60px;
            height:60px;
        }
        .logo{
            padding:12% 0 8%;
            width:90.8%;
            margin:0 auto;
        }
        .main{
            width:92%;
            height:51%;
            background:#fff;
            margin:0 auto;
            border-radius:4px;
            .header{
                padding:4% 0 1%;
                text-align:center;
                color:#1A7E5A;
                font-size:1.2rem;
                font-weight:600;
            }
            .more{
                width:8%;
                height:5%;
                margin:0 auto 3%;
            }
            .qr-code-row{
                display:flex;
                margin-bottom:10px;
                .qr-code-box{
                    width:50%;
                    img{
                        width:80%;
                        margin:0 auto 10px;
                    }
                    p{
                        font-size:0.8rem;
                        text-align:center;
                    }
                }
            }
            .link{
                text-align:center;
                color:#108CFF;
                font-weight:bold;
                margin-bottom:5px;
            }
            .link-p{
                text-align:center;
                color:#999;
            }
        }
        .aside{
            position: absolute;
            top:75%;
            left: 0;
            right: 0;
            bottom:60px;
            box-shadow:0px 2px 15px 3px rgba(17,146,99,0.1);
            p{
                text-align:center;
                color:#fff;
                line-height:1.8rem;
            }
        }
        .footer{
            height:60px;
            padding:15px 0;
            background:#2EAB7E;
            position: absolute;
            left: 0;
            right: 0;
            bottom:0;
            display:flex;
            justify-content:center;
            img{
                height:30px;
            }
            .line{
                width:40px;
                text-align:center;
                color:#fff;
                font-size:1.4rem;
            }
            .wave-point{
                width:60px;
                height:60px;
                position: absolute;
                left:75%;
                top:-20px;
            }
        }
    }
    .video-btn{
        position: absolute;
        width:30%;
        height:5%;
        top:25%;
        right:0;
    }
    .video-box{
        width:100%;
        video{
            display:block;
            max-width:100%;
        }
    }
}
</style>