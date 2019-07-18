<template>
  	<div class="home_container">
        <div class="header">
            <div :class="{checkbox:true,isactive:active}" @click="activeChange('mobile')">手机验证</div>
            <div :class="{checkbox:true,isactive:!active}" @click="activeChange('email')">邮箱验证</div>
        </div>
        <div class="title">
            为了您的信息安全，请输入个人信息进行身份验证
        </div>
        <div class="main" v-if="active">
            <div class="input-box">
                <div class="input-label">手机号</div>
                <input class="input-mobile" type="text" v-model="mobile" @input="valueChange('mobile')" placeholder="请输入手机号">
            </div>
            <div class="message-box">{{messageMobile}}</div>
            <div class="input-box">
                <div class="input-label">验证码</div>
                <input class="input-sms" type="text" v-model="sms" @input="valueChange('sms')" placeholder="请输入验证码">
                <span>丨</span>
                <div class="get-sms" @click="getSms('mobile')">{{mobileSmsText}}</div>
            </div>
            <div class="message-box">{{messageSms}}</div>
            <div class="button-box">
                <button @click="doSubmit()">下一步</button>
            </div>
        </div>
        <div class="main" v-if="!active">
            <div class="input-box">
                <div class="input-label">邮箱</div>
                <input class="input-email" type="text" v-model="email" @input="valueChange('email')" placeholder="请输入邮箱">
            </div>
            <div class="message-box">{{messageEmail}}</div>
            <div class="input-box">
                <div class="input-label">验证码</div>
                <input class="input-sms" type="text" v-model="sms" @input="valueChange('sms')" placeholder="请输入验证码">
                <span>丨</span>
                <div class="get-sms" @click="getSms('email')">{{emailSmsText}}</div>
            </div>
            <div class="message-box">{{messageSms}}</div>
            <div class="button-box">
                <button @click="doSubmit()">下一步</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
    name: 'home',
    data(){
        return {
            active:true,
            mobile:"",
            messageMobile:"",
            email:"",
            messageEmail:"",
            sms:'',
            messageSms:"",
            mobileSmsText:"获取验证码",
            mobileSmsTime:60,
            emailSmsText:"获取验证码",
            emailSmsTime:60
        }
    },
    mounted(){
        
    },
    methods:{
        //手机号邮箱切换
        activeChange(state){
            if(state == 'mobile'){
                this.active = true
            }else if(state == 'email'){
                this.active = false
            }
            this.mobile = ""
            this.messageMobile = ""
            this.email = ""
            this.messageEmail = ""
            this.sms = ""
            this.messageSms = ""
        },
        //输入框验证
        valueChange(state){
            let mobileReg = /^1[0-9]{10}$/
            let emailReg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$");
            let smsReg = /^\d{6}$/
            if(state == 'mobile'){
                if(!this.mobile){
                    this.messageMobile = "请输入手机号"
                }else if(!mobileReg.test(this.mobile)){
                    this.messageMobile = "请输入正确的手机号"
                }else{
                    this.messageMobile = ""
                }
            }else if(state == 'email'){
                if(!this.email){
                    this.messageEmail = "请输入邮箱"
                }else if(!emailReg.test(this.email)){
                    this.messageEmail = "请输入正确的邮箱"
                }else{
                    this.messageEmail = ""
                }
            }else if(state == 'sms'){
                if(!this.sms){
                    this.messageSms = "请输入验证码"
                }else if(!smsReg.test(this.sms)){
                    this.messageSms = "请输入正确的验证码"
                }else{
                    this.messageSms = ""
                }
            }
        },
        //获取验证码
        getSms(state){
            if(state == 'mobile' && this.mobileSmsText == '获取验证码'){
                if(this.mobile && !this.messageMobile){
                    this.mobileSmsTime = 60
                    var mobileTimer = setInterval(() => {
                        this.mobileSmsTime--
                        if (this.mobileSmsTime > 0) {
                            this.mobileSmsText = "(" + this.mobileSmsTime + "s)后重试"
                            }else{
                                this.mobileSmsText = '获取验证码'
                                clearInterval(mobileTimer)
                        }
                    }, 1000)
                    this.$ajax("GET","v1/sms/sendSMS/"+this.mobile).then(res => {
                        if(!res.data){
                            Toast({
                                message: res.message,
                                duration: 3000
                            });
                            this.mobileSmsTime = 0
                            this.mobileSmsText = '获取验证码'
                        }
                    },err => {
                        Toast({
                            message: JSON.parse(err.response).message ||  '验证码获取失败，请稍后重试',
                            duration: 3000
                        });
                        this.mobileSmsTime = 0
                        this.mobileSmsText = '获取验证码'
                    })
                }else{
                    Toast({
                        message: '请输入正确的手机号',
                        duration: 3000
                    });
                }
            }else if(state == 'mobile'){
                console.log("手机验证码发送过频繁")
            }else if(state == 'email' && this.emailSmsText == '获取验证码'){
                if(this.email && !this.messageEmail){
                    this.emailSmsTime = 60
                    var emailTimer = setInterval(() => {
                        this.emailSmsTime--
                        if (this.emailSmsTime > 0) {
                            this.emailSmsText = "(" + this.emailSmsTime + "s)后重试"
                            }else{
                                this.emailSmsText = '获取验证码'
                                clearInterval(emailTimer)
                        }
                    }, 1000)
                    this.$ajax("GET","v1/sms/sendMail/"+this.email).then(res => {
                        if(!res.data){
                            Toast({
                                message: res.message,
                                duration: 3000
                            });
                            this.emailSmsTime = 0
                            this.emailSmsText = '获取验证码'
                        }
                    },err => {
                        Toast({
                            message: JSON.parse(err.response).message ||  '验证码获取失败，请稍后重试',
                            duration: 3000
                        });
                        this.emailSmsTime = 0
                        this.emailSmsText = '获取验证码'
                    })
                }else{
                    Toast({
                        message: '请输入正确的邮箱',
                        duration: 3000
                    });
                }
            }else if(state == 'email'){
                console.log("邮箱验证码发送过频繁")
            }
        },
        //下一步
        doSubmit(){
            if(this.sms && !this.messageSms){
                if(this.active && this.mobile && !this.messageMobile){
                    this.$ajax("POST","v1/sendrecord/staff/pager",{
                        pageNum: 1,
                        pageSize: 5,
                        paramData: {
                            code: this.sms,
                            mobile: this.mobile
                        }
                    }).then(res => {
                        if(res.data){
                            // console.log(res.data.resultData)
                            this.$router.push({
                              path: "/billList",
                              query: res.data
                            });
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
                }else if(!this.active && this.email && !this.messageEmail){
                    this.$ajax("POST","v1/sendrecord/staff/pager",{
                        pageNum: 1,
                        pageSize: 5,
                        paramData: {
                            code: this.sms,
                            email: this.email
                        }
                    }).then(res => {
                        if(res.data){
                            this.$router.push({
                              path: "/billList",
                              query: res.data
                            });
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
                }else{
                    Toast({
                        message: '请正确填写个人信息',
                        duration: 3000
                    });
                }
            }else{
                Toast({
                    message: '验证码输入错误',
                    duration: 3000
                });
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .home_container{
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        overflow:hidden;
        background:#f3f3f3;
        display:flex;
        flex-direction:column;
        .header{
            width:100%;
            padding:0 20%;
            height:54px;
            background:#fff;
            display: flex;
            justify-content:space-between;
            .checkbox{
                width:30%;
                height:54px;
                line-height:54px;
                font-size:0.9rem;
                text-align:center;
                transition: 200ms;
            }
            .checkbox.isactive{
                color: #3bc492;
                border-bottom:2px solid #3bc492;
            }
        }
        .title{
            height:32px;
            line-height:32px;
            font-size:0.5rem;
        }
        .main{
            flex:1;
            .input-box{
                height:54px;
                background:#fff;
                display:flex;
                padding-right:8px;
                .input-label{
                    width:60px;
                    margin:0 10px;
                    line-height: 54px;
                    font-size:1rem;
                }
                input{
                    flex:1;
                }
                input::-webkit-input-placeholder{
                    color:#ccc;
                }
                .get-sms{
                    width:100px;
                    text-align:center;
                    line-height:54px;
                    color:#3bc492;
                }
                span{
                    color:#777;
                    line-height: 54px;
                }
            }
            .message-box{
                height:20px;
                margin:0 10px;
                color:red;
                line-height:20px;
                font-size:0.5rem;
            }
            .button-box{
                height:60px;
                display:flex;
                justify-content: center;
                button{
                    width:75%;
                    height:54px;
                    background:#3bc492;
                    border-radius:8px;
                    color:#fff;
                    font-size:1.2rem;
                }
            }
        }
    }
</style>