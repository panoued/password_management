<template>
    <div id="login">
        <div class="auth-box" v-show="auth">
            <span>{{ tips }}</span>
        </div>
        <div class="not-support" v-show="!support">不支持指纹</div>
        <button class="login-button" v-show="support" @click="loginStart">登录</button>
    </div>
</template>
  
<script src="./Login.ts"></script>

<style lang="scss" scoped>
    .auth-box{
        @extend %center;
        width: 3rem;
        height: 3rem;
        background-color: $vi-color;
        border-radius: 0.1rem;
        text-align: center;
        padding-top: 1.8rem;
        span{
            color: #fff;
        }
    }
    .not-support{
        @include top-center(2rem);
        width: 3rem;
        height: 1rem;
        background-color: #333;
        border-radius: 0.1rem;
        color: #fff;
        font-size: 0.36rem;
        line-height: 1rem;
        text-align: center;
    }
    .login-button{
        width: 6rem;
        height: 2rem;
        @include bottom-center(2rem);
        border-radius: 0.16rem;
        font-size: 0.6rem;
    }
</style>
