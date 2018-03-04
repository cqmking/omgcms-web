import Login from './pages/Login.vue'
import Layout from './components/Layout.vue'

import Category from './pages/content/Category.vue'

import UserList from './pages/system/user/UserList.vue'

let routes = [
    {
        path: '/',
        redirect: 'login'
    },
    {
        path: '/login',
        component: Login,
        name: 'login',
        hidden: true
    },
    {
        path: '/layout',
        component: Layout,
        name: 'layout',
        children: [
            {
                path: 'userList',
                name: 'userList',
                component: UserList
            },            {
                path: 'category',
                name: 'category',
                component: Category
            },
            {
                path: '',
                component: Category
            }
        ]
    }


    // ,
    // {
    //     path: '/404',
    //     component: NotFound,
    //     name: '',
    //     hidden: true
    // },
    // {
    //     path: '/',
    //     component: Home,
    //     name: '导航一',
    //     iconCls: 'el-icon-message',//图标样式class
    //     children: [
    //         { path: '/main', component: Main, name: '主页', hidden: true },
    //         { path: '/table', component: Table, name: 'Table' },
    //         { path: '/form', component: Form, name: 'Form' },
    //         { path: '/user', component: user, name: '列表' },
    //     ]
    // }
];

export default routes;