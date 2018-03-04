<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {}
    }
</script>

<style>

    html, body {
        margin: 0;
        color: #333;
        font-size: 14px;
        font-family: 'Microsoft YaHei', sans-serif;
    }

    body {
        height: 100%;
        background-color: #ecf0f5;
    }

    input, textarea, keygen, select, button {
        font-family: 'Microsoft YaHei', sans-serif;
    }

    #app {
        text-align: center;
        height: 100%;
    }

    a {
        color: #3c8dbc;
        text-decoration: none;
    }

    /*提示导航*/
    .el-breadcrumb__item {
        float: none;
    }

    .module-box {
        min-height: 200px;
        margin-top: 15px;
        background-color: #ffffff;
        border-radius: 3px;
        border-top: 3px solid #d2d6de;
        box-shadow: 0 1px 1px rgba(0,0,0,0.1);
        padding: 10px;
    }

    .el-main .h3 {
        font-size: 24px;
        line-height: 24px;
        height: 24px;
    }

</style>
