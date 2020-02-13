<template>
    <div>
        <div class="header">
            <div class="add"><i class="iconfont icon-jia"></i></div>
        </div>
        <ul class="list">
            <li v-for="i in 20" :key="i" @click="toConversation">
                <div class="avatar"></div>
                <div class="info">
                    <h2>聯發大廈809</h2>
                    <p>測試，這是一條新信息。</p>
                </div>
                <div class="time"><span>2020-02-10</span></div>
            </li>
        </ul>
        <ul class="tabs">
            <li class="tab" :class="{'active': active == i }" :style="tabWidth" v-for="(tab,i) in tabs" :key="i" @click="toggle(i)">
                <i :class="tab.icon"></i>
                <span>{{ tab.label }}</span>
            </li>
        </ul>
    </div>
</template>

<script src="./HomePage.ts"></script>

<style lang="scss" scoped>
    .header{
        height: 0.8rem;
        background-color: #ededed;
        border-bottom: $border;
        .add{
            width: 0.8rem;
            height: 100%;
            float: right;
            line-height: 0.8rem;
            text-align: center;
            i{
                font-size: 0.36rem;
                color: #000;
            }
        }
    }
    .list{
        width: 100%;
        position: absolute;
        top: 0.8rem;
        bottom: 1rem;
        overflow: auto;
        li{
            height: 1.32rem;
            padding: 0 0.16rem 0 0.3rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .avatar{
            flex: none;
            width: 0.9rem;
            height: 0.9rem;
            background-color: #f7f7f7;
            border-radius: 0.1rem;
        }
        .info{
            flex: auto;
            width: 1rem;
            height: 100%;
            margin-left: 0.2rem;
            border-bottom: $border;
            h2{
                font-size: 0.3rem;
                margin-top: 0.26rem;
                @extend %text-overflow;
            }
            p{
                margin-top: 0.06rem;
                font-size: 0.24rem;
                color: #adadad;
                @extend %text-overflow;
            }
        }
        .time{
            flex: none;
            height: 100%;
            padding: 0.26rem 0;
            font-size: 0.24rem;
            color: #a9a9a9;
            border-bottom: $border;
            span{
                display: inline-block;
                transform: scale(0.8);
            }
        }
    }
    .tabs{
        width: 100%;
        height: 1rem;
        @include left-bottom;
        border-top: $border;
        display: flex;
        background-color: #f7f7f7;
        .tab{
            @extend %flex-center;
            flex-flow: column wrap;
            font-size: 0.24rem;
            i{
                font-size: 0.32rem;
                color: #000;
            }
        }
        .active{
            color: $vi-color;
            i{
                color: $vi-color;
            }
        }
    }
</style>
