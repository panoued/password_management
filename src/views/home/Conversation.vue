<template>
    <div id="conversation">
        <div class="header">
            <div class="left"><i class="iconfont icon-back" @click="back"></i><span>{{ name }}</span></div>
        </div>
        <div class="body" id="conversation-body">
            <ul>
                <li v-for="(item,i) in list"  :key="i" :class="'li-'+item.key">
                    <div class="avatar">{{ item.key }}</div>
                    <div class="content"><span>{{ item.message }}</span><i class="iconfont icon-leftarrow arrow"></i></div>
                </li>
            </ul>
        </div>
        <div class="footer">
            <div class="input"><input id="conversation-input" type="text" v-model="value" @focus="focus"></div>
            <div class="add"><i class="iconfont icon-jia" v-show="!value"></i><button :class="{'w-1': value}" @click="send">发送</button></div>
        </div>
    </div>
</template>

<script src="./Conversation.ts"></script>

<style lang="scss" scoped>
    .header{
        height: 0.8rem;
        background-color: #ededed;
        border-bottom: $border;
        .left{
            height: 100%;
            display: flex;
            align-items: center;
            i{
                height: 100%;
                line-height: 0.8rem;
                padding: 0 0.2rem;
                font-size: 0.3rem;
            }
        }
    }
    .body{
        width: 100%;
        position: absolute;
        top: 0.8rem;
        bottom: 1rem;
        background-color: #ededed;
        overflow-y: auto;
        ul{
            width: 100%;
            padding: 0 0.3rem 0.2rem;
        }
        li{
            display: flex;
            margin-top: 0.3rem;
            .arrow{
                font-size: 0.3rem;
                color: #fff;
                position: absolute;
                top: 0.1rem;
            }
        }
        .avatar{
            flex: none;
            width: 0.72rem;
            height: 0.72rem;
            background-color: #f7f7f7;
            border-radius: 0.1rem;
        }
        .content{
            position: relative;
            min-height: 0.72rem;
            max-width: 4.82rem;
            background-color: #fff;
            padding: 0.2rem;
            line-height: 1.3;
            border-radius: 0.1rem;
        }
        .li-1{
            .content{
                margin-left: 0.3rem;
            }
            .arrow{
                left: -0.2rem;
            }
        }
        .li-2{
            justify-content: flex-end;
            .content{
                margin-right: 0.3rem;
            }
            .avatar{
                order: 1;
            }
            .arrow{
                right: -0.2rem;
                transform: rotate(180deg);
            }
        }
    }
    .footer{
        width: 100%;
        height: 1rem;
        padding: 0 0.2rem;
        @include left-bottom;
        border-top: $border;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #f7f7f7;
        .input{
            flex: auto;
            height: 100%;
            padding: 0.1rem;
            input{
                width: 100%;
                height: 100%;
                padding: 0 0.1rem;
                background-color: #fff;
                border-radius: 0.06rem;
                font-size: 0.36rem;
            }
        }
        .add{
            flex: none;
            display: flex;
            align-items: center;
            padding: 0 0.1rem;
            i{
                font-size: 0.48rem;
                color: #000;
            }
            button{
                visibility: hidden;
                width: 0;
                height: 0.6rem;
                background-color: $vi-color;
                color: #fff;
                border-radius: 0.06rem;
                transition: width 0.15s;
            }
            .w-1{
                visibility: visible;
                width: 1rem;
            }
        }
    }
</style>
