<template>
    <div id="home">
        <transition :enter-active-class="enter" :leave-active-class="leave">
            <router-view class="router-view"></router-view>
        </transition>
    </div>
</template>

<script src="./Home.ts"></script>

<style lang="scss" scoped>
    
</style>
