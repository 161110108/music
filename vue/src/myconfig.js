import Vue from 'vue';
import api from './api'
import axios from 'axios'
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'


Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.prototype.$api = api;
const eventbus = new Vue();
Vue.prototype.$bus = eventbus;
Vue.prototype.$axios = axios
