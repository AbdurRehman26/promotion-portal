import Router from "./router";
import { getToken } from "@/utils/auth";

Router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.forVisitors)) {
    if (getToken()) {
      next({
        path: "/",
      });
    } else next();
  } else if (to.matched.some((record) => record.meta.forAuth)) {
    if (!getToken()) {
      next({
        path: "/",
      });
    } else next();
  } else {
    next();
  }
});

Router.afterEach((to, from) => {});
