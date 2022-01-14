import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import HelloWorld from "@/components/HelloWorld"
import Favorite from "@/components/Favorite"
import Watch from "@/components/Watch"
Vue.config.productionTip = false


const router = new VueRouter({
  mode: "history",
  routes:[
      {path : "/home", component : HelloWorld},
      {path : "/", component : HelloWorld},
      {path : "/favorites/:userid", component : Favorite},
      {path : "/watch", component : Watch},
  ]
});

Vue.use(VueRouter);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
