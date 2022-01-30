import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/danger',
    name: 'Danger',
    component: () => import('../views/Danger.vue')
  },
  {
    path: '/validate',
    name: 'Validation',
    component: () => import('../views/Validation.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: "",
        name: 'Home',
        component: () => import('../views/FolderLists.vue')
      },
      {
        path: "add",
        name: 'AddFolder',
        component: () => import('../views/FormFolder.vue')
      },
      {
        path: "edit/:id",
        name: 'EditFolder',
        component: () => import('../views/FormFolder.vue')
      },
      {
        path: ":page",
        name: 'HomePage',
        component: () => import('../views/FolderLists.vue')
      },
    ]
  },
  {
    path: '/folders',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: "add/:id",
        name: 'AddTweet',
        components: {
          default: () => import('../views/FolderLists.vue'),
          second: () => import('../views/FormTweet.vue')
        }
      },
      {
        path: "edit/:id/:tweetId",
        name: 'EditTweet',
        components: {
          default: () => import('../views/FolderLists.vue'),
          second: () => import('../views/FormTweet.vue')
        }
      },
      {
        path: "view/:id/:page",
        name: 'TweetEmbed',
        components: {
          default: () => import('../views/FolderLists.vue'),
          second: () => import('../views/TweetEmbed.vue')
        }
      },
      {
        path: "list/:id/:page",
        name: 'TweetLists',
        components: {
          default: () => import('../views/FolderLists.vue'),
          second: () => import('../views/TweetLists.vue')
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const access_token = localStorage.getItem("access_token") || ''
  if((to.name === "Login" || to.name === "Register" || to.name === "Danger" || to.name === "Validation") && !access_token) {
    next()
  } else if((to.name !== "Login" || to.name !== "Register" || to.name !== "Danger" || to.name !== "Validation") && !access_token) {
    next("/login")
  } else {
    next()
  }
})

export default router
