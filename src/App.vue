<template>
    <div id="app">
        <router-view class="router-view"></router-view>
    </div>
</template>

<script src="./App.ts"></script>

<style lang="scss">
    #app{
        height: 100%;
        position: relative;
        -ms-overflow-style: none;// IE 10+
        overflow: -moz-scrollbars-none;// Firefox
        ::-webkit-scrollbar{// chrome 和Safari
            display: none;
        }
    }
</style>
