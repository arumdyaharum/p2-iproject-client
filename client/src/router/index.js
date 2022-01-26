import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
      }
    ]
  },
  {
    path: '/folders',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: "view/:id/:page",
        name: 'TweetEmbed',
        component: {
          default: () => import('../views/FolderLists.vue'),
          second: () => import('../views/TweetEmbed.vue')
        }
      },
      {
        path: "list/:id/:page",
        name: 'TweetLists',
        component: {
          default: () => import('../views/FolderLists.vue'),
          second: () => import('../views/TweetLists.vue')
        }
      },
      {
        path: "add/:id",
        name: 'AddTweet',
        component: {
          default: () => import('../views/FolderLists.vue'),
          second: () => import('../views/FormTweet.vue')
        }
      },
      {
        path: "edit/:tweetId",
        name: 'EditTweet',
        component: {
          default: () => import('../views/FolderLists.vue'),
          second: () => import('../views/FormTweet.vue')
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
