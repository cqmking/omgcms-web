<template>
    <el-container v :v-loading.fullscreen="isLoading">
        <el-header class="main-header" style="height: auto; padding: 0;">
            <a href="javascript:;" class="logo" :style="{'width':isCollapse?'65px':'230px'}">
                <span class="logo-mini" v-show="isCollapse">Cms</span>
                <span class="logo-lg" v-show="!isCollapse"><b>Omg</b>CMS</span>
            </a>
            <nav class="navbar navbar-static-top" :style="{'marginLeft':isCollapse?'65px':'230px'}">
                <a @click.prevent="toggleMenu" href="#" class="sidebar-toggle" data-toggle="push-menu" role="button"
                   style="line-height: 19px;">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </a>
                <ul class="right-navbar">
                    <li>
                        <a href="javascript:;" @click.prevent="logout">
                            <span>退出</span>
                            <i class="fa fa-sign-out" style="margin-top: -2px; margin-right: 0;" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </el-header>

        <el-container style="text-align: left;">
            <!-- 侧边栏 -->
            <el-aside class="main-sidebar" :width="isCollapse ? '65px' : '230px'">
                <el-menu default-active="1-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                         :collapse="isCollapse" text-color="#fff" style="border-right: 0;" background-color="#222d32">
                    <el-menu-item index="1">
                        <i class="fa fa-home" aria-hidden="true"></i>
                        <span slot="title">系统首页</span>
                    </el-menu-item>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">栏目管理</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document"></i>
                        <span slot="title">内容管理</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-document"></i>
                        <span slot="title">模型管理</span>
                    </el-menu-item>
                    <el-menu-item index="5">
                        <i class="el-icon-setting"></i>
                        <span slot="title">系统管理（用户角色等）</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>

            <!-- 内容模块 -->
            <el-container class="main-content"
                          :style="{'marginTop' : '50px', 'marginLeft' : isCollapse ? '65px' : '230px'}">
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>

        </el-container>

    </el-container>
</template>

<script>

    export default {
        name: "layout",

        data() {
            return {
                isCollapse: false,
                isLoading: false
            };
        },

        created: function () {
            let self = this;
            CmsUtil.checkAuthentication(self);
            self.isLoading = false;
        },

        methods: {
            toggleMenu() {
                this.isCollapse = !this.isCollapse;
            },
            logout() {

                let self = this;
                let logoutUrl = CmsUtil.remoteUrl.concat("/admin/auth/logout");

                self.isLoading = true;
                self.$ajax.post(logoutUrl)
                    .then(function (response) {

                        self.$router.push("/login");
                        self.isLoading = false;

                    })
                    .catch(function (error) {
                        self.$message({
                            showClose: true,
                            message: error.message,
                            type: 'error'
                        });
                        self.isLoading = false;
                    });

            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

    .main-header {
        position: relative;
        max-height: 100px;
        z-index: 1030;
        position: fixed;
        left: 0;
        right: 0;
    }

    .main-header .logo {
        -webkit-transition: width .3s ease-in-out;
        -o-transition: width .3s ease-in-out;
        transition: width .3s ease-in-out;
        display: block;
        float: left;
        height: 50px;
        font-size: 20px;
        line-height: 50px;
        text-align: center;
        width: 230px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        padding: 0;
        font-weight: 300;
        overflow: hidden;
    }

    .main-header .logo {
        background-color: #367fa9;
        color: #fff;
        border-bottom: 0 solid transparent;
    }

    .main-header .navbar {
        background-color: #3c8dbc;
    }

    .main-header .navbar {
        -webkit-transition: margin-left .3s ease-in-out;
        -o-transition: margin-left .3s ease-in-out;
        transition: margin-left .3s ease-in-out;
        margin-bottom: 0;
        margin-left: 230px;
        border: none;
        min-height: 50px;
        border-radius: 0;
    }

    .main-header .navbar .sidebar-toggle {
        color: #fff;
    }

    .main-header .navbar .sidebar-toggle:hover,
    ul.right-navbar a:hover {
        background-color: #367fa9;
    }

    ul.right-navbar {
        float: right;
        list-style: none;
        padding: 0;
    }

    ul.right-navbar a {
        color: #ffffff;
        font-weight: bold;
        padding: 15px;
    }

    .main-header .sidebar-toggle {
        float: left;
        background-color: transparent;
        background-image: none;
        padding: 15px 15px;
        font-family: fontAwesome;
    }

    .main-sidebar {
        background-color: #222d32;
        position: fixed;
        left: 0;
        top: 50px;
        bottom: 0;
    }

    .el-menu-item.is-active {
        color: #FFF;
        background-color: #2c3b41 !important;
    }

    .el-menu-item:focus, .el-menu-item:hover {
        background-color: #2c3b41 !important;
    }

    .el-menu-item, .el-submenu__title {
        height: 40px;
        line-height: 40px;
    }

    i.fa {
        margin-right: 5px;
        width: 24px;
        text-align: center;
        font-size: 18px;
        vertical-align: middle;
    }

</style>