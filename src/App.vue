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

</style>
