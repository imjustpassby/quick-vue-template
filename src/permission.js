import router from "./router";
import store from "./store";
import NProgress from "nprogress"; // Progress 进度条
import "nprogress/nprogress.css"; // Progress 进度条样式
import Vue from "vue";

const whiteList = ["/home"];
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (whiteList.indexOf(to.path) !== -1) {
    //to.path在白名单内
    next();
  } else {
    next();
    NProgress.done();
  }
});

router.afterEach(() => {
  NProgress.done();
});
