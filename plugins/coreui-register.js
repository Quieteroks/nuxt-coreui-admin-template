import 'core-js/stable';
import Vue from 'vue';
import CoreuiVue from '@coreui/vue';

Vue.config.performance = true;
Vue.use(CoreuiVue);
Vue.prototype.$log = console.log.bind(console);

