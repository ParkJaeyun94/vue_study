import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Board from '../views/Board.vue'
import User from '../views/User.vue'
import UserProfile from '../views/UserProfile.vue'
import UserPosts from '../views/UserPosts.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 함수형도 쓸 수 있다는 것을 보여줌.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/board/:id',
    name: 'Board',
    component: Board
  },
  { path: '/user/:id', component: User,
    children: [
      {
        // /user/:id/profile 과 일치 할 때
        // UserProfile은 User의 <router-view> 내에 렌더링 됩니다.
        path: 'profile',
        component: UserProfile
      },
      {
        // /user/:id/posts 과 일치 할 때
        // UserPosts가 User의 <router-view> 내에 렌더링 됩니다.
        path: 'posts',
        component: UserPosts
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
