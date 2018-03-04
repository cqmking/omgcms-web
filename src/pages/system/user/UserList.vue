<template>
    <div class="root">
        <el-row style="line-height: 32px;">
            <el-col :span="12">
                <div class="h3">用户管理</div>
            </el-col>
            <el-col :span="12" style="text-align: right; padding-top: 10px;">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/layout' }">用户列表</el-breadcrumb-item>
                    <el-breadcrumb-item>用户列表</el-breadcrumb-item>
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
        name: "user-list"
    }
</script>

<style scoped>

</style>