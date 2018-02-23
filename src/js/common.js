CmsUtil = {

    remoteUrl: 'http://localhost:8080/omgcms',

    checkAuthentication: function ($vue) {

        let checkAuthUrl = CmsUtil.remoteUrl.concat("/admin/auth/checkAuth");

        $vue.$ajax.get(checkAuthUrl)
            .then(function (response) {
                let data = response.data;
                if (data.status != "success") {
                    $vue.$router.push("/login");
                }
            })
            .catch(function (error) {
                $vue.$message({
                    showClose: true,
                    message: error.message,
                    type: 'error'
                });
            });
    }

}