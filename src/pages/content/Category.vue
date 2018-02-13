<template>
    <div class="root">
        <el-row style="line-height: 32px;">
            <el-col :span="12">
                <div class="h3">系统概况</div>
            </el-col>
            <el-col :span="12" style="text-align: right; padding-top: 10px;">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <div class="module-box">
            ss
        </div>
    </div>
</template>

<script>
    export default {
        name: "category"
    }
</script>

<style scoped>
    .h3 {
        font-size: 24px;
        line-height: 24px;
        height: 24px;
    }

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
</style>