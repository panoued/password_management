import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/rem';
import '@/assets/css/default.scss';
import '@/assets/css/animate.css';
import '@/assets/font_icon/iconfont.css';

// import fastclick from 'fastclick';
// fastclick.attach(document.body);
// fastclick.prototype.focus = function(targetElement: any) {
//     let length: any;
//     if (targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month' && targetElement.type !== 'email') {
//         length = targetElement.value.length;
//         targetElement.focus();
//         targetElement.setSelectionRange(length, length);
//     } else {
//         targetElement.focus();
//     };
// };

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
