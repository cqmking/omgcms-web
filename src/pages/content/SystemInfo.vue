<template>
    <div class="root">
        <el-row style="line-height: 32px;">
            <el-col :span="12">
                <div class="h3">系统概况</div>
            </el-col>
            <el-col :span="12" style="text-align: right; padding-top: 10px;">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>系统概况</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <div class="module-box">
            系统信息： Version OmgCms 1.0
        </div>
    </div>
</template>

<script>
    export default {
        name: "default"
    }
</script>

<style scoped>

</style>