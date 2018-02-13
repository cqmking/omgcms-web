<template>

    <div class="login-box">
        <div class="login-logo">
            <a href="../../index2.html"><b>Open</b>Cms</a>
        </div>

        <div class="login-box-body">
            <p class="login-box-msg" style="font-size: 20px;">系统登录</p>

            <form action="#" method="post">
                <div class="form-group">
                    <el-input placeholder="请输入账号" v-model="account" size="small" type="text">
                        <i slot="suffix" class="fa fa-user el-input__icon" aria-hidden="true"></i>
                    </el-input>
                </div>
                <div class="form-group">
                    <el-input placeholder="请输入密码" v-model="password" size="small" type="password">
                        <i slot="suffix" class="fa fa-key el-input__icon" aria-hidden="true"></i>
                    </el-input>
                </div>

                <div class="form-group" style="text-align: left">
                    <el-row style="line-height: 32px;">
                        <el-col :span="16">
                            <el-checkbox v-model="rememberPwd">记住密码</el-checkbox>
                        </el-col>
                        <el-col :span="8" style="text-align: right;">
                            <el-button type="primary" size="small" @click.native.prevent="login">登&nbsp;&nbsp;录</el-button>
                        </el-col>
                    </el-row>
                    <el-row style="line-height: 23px;">
                        <a href="#">忘记密码</a>
                    </el-row>
                    <el-row style="line-height: 23px;">
                        <a href="#">新用户注册</a>
                    </el-row>

                </div>

            </form>

        </div>

    </div>

</template>

<script>
    export default {
        name: "login",
        data: function () {
            return {
                account: '',
                password: '',
                rememberPwd: false
            }
        },
        methods: {
            login() {
                this.$router.push({name: 'layout'});
            }
        }
    }
</script>

<style>

    body {
        height: 100%;
        width: 100%;
        background-color: #d2d6de;
    }

    .login-box {
        width: 360px;
        margin: 7% auto;
    }

    .login-logo {
        font-size: 35px;
        text-align: center;
        margin-bottom: 25px;
        font-weight: 300;
    }

    .login-logo a, .register-logo a {
        color: #444;
    }

    .login-box-body {
        background: #fff;
        padding: 20px;
        border-top: 0;
        color: #666;
    }

    .login-box-body .el-input__inner {
        border-radius: 0;
    }

    .login-box-body a:hover {
        outline: none;
        text-decoration: none;
        color: #72afd2;
    }

    .login-box-msg {
        margin: 0;
        text-align: center;
        padding: 0 20px 20px 20px;
    }

    .form-group {
        margin-bottom: 15px;
    }

</style>