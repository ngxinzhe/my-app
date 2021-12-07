import Vue from 'vue'
import VueRouter from 'vue-router';
import home from "../components/home";
import second from "../components/second";
import api from "../components/EmployeeList";
import bootstrap from "../components/bootstrap";
import loginpage from "../components/loginpage";
import success from "../components/success";
import cloud from "../components/cloud";

Vue.use(VueRouter);


const routes = [
    {
        path: '/', component: loginpage
    },
    {
        path: '/second', component: second
    },
    {
        path: '/api', component: api
    },
    {
        path: '/bootstrap', component: bootstrap
    },
    {
        path: '/home', component: home
    },
    {
        path: '/success', component: success
    },
    {
        path: '/cloud', component: cloud
    },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;