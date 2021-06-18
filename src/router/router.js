import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return{x:0, y:0}
  },
  routes: [
      {
        path: "/",
        name: "home",
        component: () => import("../views/Home/index.vue")
      },
      {
          path: '/login',
          name: 'login',
          component: () => import('../views/Login/index.vue')
      }
    ]
});