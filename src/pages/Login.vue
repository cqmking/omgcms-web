<template>

    <div class="login-box" v-loading.fullscreen="isLoading">
        <div class="login-logo">
            <a href="javascript:;"><b>Omg</b>Cms</a>
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
                            <el-button type="primary" size="small" @click.native.prevent="login">登&nbsp;&nbsp;录
                            </el-button>
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
                rememberPwd: false,
                isLoading: false
            }
        },
        methods: {
            login() {
                let self = this;
                let loginUrl = CmsUtil.remoteUrl.concat("/admin/auth/checkLogin");

                self.isLoading = true;
                self.$ajax.post(loginUrl,
                    Qs.stringify({
                        oc_account: self.account,
                        oc_password: self.password,
                        oc_rememberme: self.rememberPwd
                    }))
                    .then(function (response) {
                        let data = response.data;
                        if (data.status == "success") {
                            //如果使用{ name: 'layout' } 则不会默认显示子组件，需要用path，或者直接使用{ name: 'category' }子组件名称
                            self.$router.push("/layout");
                        } else {
                            self.$message({
                                showClose: true,
                                message: data.message,
                                type: 'error'
                            });
                        }
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