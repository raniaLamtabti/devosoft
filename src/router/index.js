import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Agency from '../views/Agency.vue'
import Pricing from '../views/Pricing.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/Blog.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/agency',
    name: 'Agency',
    component: Agency
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/article',
    name: 'Article',
    component: Article
  }
];

const router = new VueRouter({
  routes
});

export default router;
