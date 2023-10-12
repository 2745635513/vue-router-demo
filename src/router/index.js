import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/settings",
    // You could also have named views at tho top
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../components/named-views/UserSettings.vue"
      ),
    children: [
      {
        path: "emails",
        component: () =>
          import(
            /* webpackChunkName: "about" */ "../components/named-views/UserEmailsSubscriptions.vue"
          )
      },
      {
        path: "profile",
        components: {
          default: () =>
            import(
              /* webpackChunkName: "about" */ "../components/named-views/UserProfile.vue"
            ),
          helper: () =>
            import(
              /* webpackChunkName: "about" */ "../components/named-views/UserProfilePreview.vue"
            )
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name === from.name) {
    next();
  }
  next();
})
export default router;
