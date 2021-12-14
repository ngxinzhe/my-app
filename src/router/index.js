import Vue from "vue";
import VueRouter from "vue-router";

import Container from "../components/_global/layouts/Container";

import LoginPage from "../components/authentication/LoginPage";
import AppsList from "../components/authentication/AppLists";

import JiraDashboard from "../components/apps/jira/Dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: LoginPage,
  },
  {
    path: "/apps",
    component: Container,
    redirect: "/apps/list",
    children: [
      {
        path: "list",
        component: AppsList,
      },
      {
        path: "jira",
        name: "Jira",
        component: JiraDashboard,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
