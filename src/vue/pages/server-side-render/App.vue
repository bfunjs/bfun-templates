<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('hello world');
        }
    }
</script>

<style lang="less">
    #app {
        background: #fff;
    }
</style>
