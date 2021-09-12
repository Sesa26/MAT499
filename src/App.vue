<template>
	<div id="app">
		<mdb-navbar color="primary" position="top" dark>
			<mdb-navbar-brand href="#/">
				Sesa
			</mdb-navbar-brand>
			<mdb-navbar-toggler>
				<mdb-navbar-nav>
					<mdb-nav-item href="#/" active>Home</mdb-nav-item>
					<mdb-nav-item href="#/alkanes">Alkanes</mdb-nav-item>
					<mdb-nav-item href="#/alkenes">Alkenes</mdb-nav-item>
					<mdb-nav-item href="#/alkynes">Alkynes</mdb-nav-item>
					<mdb-nav-item href="#/alkyhalides">Alkyl halides</mdb-nav-item>
					<mdb-nav-item href="#/alcohols">Alcohols</mdb-nav-item>
					<mdb-nav-item href="#/aldehydes">Aldehydes</mdb-nav-item>
					<mdb-nav-item href="#/carboxylicAcid">Carboxylic Acid</mdb-nav-item>
					<mdb-nav-item href="#/esters">Esters</mdb-nav-item>
					<mdb-nav-item href="#/ketones">Ketones</mdb-nav-item>
				</mdb-navbar-nav>
				<form>
					<mdb-input type="text" class="text-white" placeholder="Search" aria-label="Search" label navInput waves waves-fixed />
				</form>
			</mdb-navbar-toggler>
		</mdb-navbar>
		<transition>
			<router-view />
		</transition>
	</div>
</template>

<script>
import { mdbNavbar, mdbNavbarBrand, mdbNavbarToggler, mdbNavbarNav, mdbNavItem } from "mdbvue";
export default {
	name: "NavbarPage",
	components: {
		mdbNavbar,
		mdbNavbarBrand,
		mdbNavbarToggler,
		mdbNavbarNav,
		mdbNavItem,
	},
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"); */

#app {
	font-family: "Roboto", Helvetica, Arial, sans-serif;
	margin-top: 100px;
	text-align: center;
	color: #2c3e50;
}
</style>
