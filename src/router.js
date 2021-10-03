import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Alkanes from './views/alkanes.vue'
import Alkenes from './views/alkenes.vue'
import Alkynes from './views/alkynes.vue'
import CyclicAlkanes from "./views/CyclicAlkanes.vue";
import Alkyhalides from './views/alkyhalides.vue'
import alcohols from "./views/alcohols.vue";
import aldehydes from "./views/aldehydes.vue";
import carboxylicAcid from "./views/carboxylicAcid.vue";
import esters from "./views/esters.vue";
import ketones from "./views/ketones.vue";

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
			path: "/cyclicalkanes",
			name: "cyclicalkanes",
			component: CyclicAlkanes,
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
		{
			path: "/alkyhalides",
			name: "alkyhalides",
			component: Alkyhalides,
		},
		{
			path: "/alcohols",
			name: "alcohols",
			component: alcohols,
		},
		{
			path: "/aldehydes",
			name: "aldehydes",
			component: aldehydes,
		},
		{
			path: "/carboxylicAcid",
			name: "carboxylicAcid",
			component: carboxylicAcid,
		},
		{
			path: "/esters",
			name: "esters",
			component: esters,
		},
		{
			path: "/ketones",
			name: "ketones",
			component: ketones,
		},
	],
});
