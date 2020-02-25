<template>
    <div id="login">
        <ul>
            <li v-for="(item,i) in list" :key="i">{{ i+' : '+item }}</li>
        </ul>
        <div class="buttons">
            <button @click="get">get</button>
            <button @click="set">set</button>
        </div>
    </div>
</template>
  
<script src="./Login.ts"></script>

<style lang="scss" scoped>
    .buttons{
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,-50%);
        button{
            padding: 20px;
            font-size: 20px;
        }
        button+button{
            margin-left: 30px;
        }
    }
</style>
