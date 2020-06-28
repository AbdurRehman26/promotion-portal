import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Admin from "./views/Admin.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";
import Dashboard from "./views/Dashboard.vue";
import DashboardLayout from "@/layout/DashboardLayout";

Vue.use(Router);

export default new Router({
  mode: "history",
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      redirect: "profile",
      component: DashboardLayout,
      meta: {
        forAuth: true
      },
      children: [
        {
          path: "/",
          name: "components",
          component: ()=>
              import(/* webpackChunkName: "demo" */ "./views/UserProfile.vue"),
        },

        {
          path: "/profile",
          name: "profile",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/UserProfile.vue"),
        },
        {
          path: "/posts",
          name: "posts",
          component: () =>
            import(/* webpackChunkName: "demo" */ "./views/Posts.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      meta: {
        forVisitors: true
      },
      components: {
        default: Login,
        footer: AppFooter,
      },
    },
    {
      path: "/admin",
      name: "admin",
      meta: {
        forVisitors: true
      },
      components: {
        default: Admin,
        footer: AppFooter,
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
