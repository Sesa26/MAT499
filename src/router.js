import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Alkanes from './views/alkanes.vue'
import Alkenes from './views/alkenes.vue'
import Alkynes from './views/alkynes.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/alkanes",
			name: "alkanes",
			component: Alkanes,
		},
		{
			path: "/alkenes",
			name: "alkenes",
			component: Alkenes,
		},
		{
			path: "/alkynes",
			name: "alkynes",
			component: Alkynes,
		},
	],
});
