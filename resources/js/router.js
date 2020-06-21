import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
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
      components: {
        default: Login,
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
