<template>
  	<div class="video-container">
        <div class="title">操作视频</div>
    	<video src="static/media/OperationalVideo.mp4" controls="controls"></video>
  	</div>
</template>

<script>
export default {
	name: 'showHow',
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
.video-container{
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    background:#f3f3f3;
    overflow: hidden;
    .title{
        text-align: center;
        line-height:5rem;
        font-size:1.3rem;
        background: #3bc492;
        color: #fff;
        margin-bottom:10px;
    }
    video{
        display:block;
        max-width:95%;
        margin:0 auto;
    }
}
</style>