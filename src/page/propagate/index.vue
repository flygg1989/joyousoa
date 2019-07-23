<template>
  	<div class="propagate-container">
        <swiper :options="swiperOption">
            <swiper-slide>
                <div class="page-box" style="background: url('static/img/propagate1.png') no-repeat;background-size:100% 100%;"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="page-box" style="background: url('static/img/propagate2.png') no-repeat;background-size:100% 100%;"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="page-box" style="background: url('static/img/propagate3.png') no-repeat;background-size:100% 100%;"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="page-box" style="background: url('static/img/propagate4.png') no-repeat;background-size:100% 100%;"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="page-box" style="background: url('static/img/propagate5.png') no-repeat;background-size:100% 100%;"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="page-box" style="background: url('static/img/propagate6.png') no-repeat;background-size:100% 100%;"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="page-box" style="background: url('static/img/propagate7.png') no-repeat;background-size:100% 100%;"></div>
            </swiper-slide>
            <!-- 加入演示视频按钮 -->
            <swiper-slide>
                <div class="page-box" style="background: url('static/img/propagate8.png') no-repeat;background-size:100% 100%;">
                    <button class="video-btn" @click="openVideo">演示视频</button>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="page-box" style="background: url('static/img/propagate9.png') no-repeat;background-size:100% 100%;"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="page-box" style="background: url('static/img/propagate10.png') no-repeat;background-size:100% 100%;"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="page-box" style="background: url('static/img/propagate11.png') no-repeat;background-size:100% 100%;"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="page-box" style="background: url('static/img/propagate12.png') no-repeat;background-size:100% 100%;"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="page-box" style="background: url('static/img/propagate13.png') no-repeat;background-size:100% 100%;"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="page-box" style="background: url('static/img/propagate14.png') no-repeat;background-size:100% 100%;"></div>
            </swiper-slide>
            <swiper-slide>
                <div class="page-box" style="background: url('static/img/propagate15.png') no-repeat;background-size:100% 100%;"></div>
            </swiper-slide>
        </swiper>
        <!-- 演示视频弹窗 -->
        <mt-popup
            v-model="popupVisible"
            lockScroll="true"
            popup-transition="popup-fade"
            position="left">
            <div v-show="popupVisible" class="video-box">
                <video src="static/media/OperationalVideo.mp4" controls="controls" @touchmove.prevent></video>
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
    background: #28B180;
    overflow: hidden;
    .page-box{
        width:100%;
        height:100%;
    }
    .video-btn{
        position: absolute;
        width:30%;
        height:5%;
        color: rgba(255,255,255,0);
        background: rgba(255,255,255,0);
        top:22%;
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