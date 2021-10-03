<template>
	<mdb-container fluid class="p-0  m-0 home d-flex  flex-column justify-content-center align-items-center">
		<!-- <mdb-parallax src="https://mdbootstrap.com/img/Photos/Others/gradient2.png" height="full" factor="2"> -->
		<!-- <mdb-parallax :src="`http://localhost:8080/home3.jpg`" class="py-5 m-0 indigo darken-4" height="full" factor="1" style="height:100vh">
			<mdb-container fluid class="m-0 p-0">
				<mdb-row class="pt-5 mx-0 px-0">
					<mdb-col md="12" class="text-center justify-content-center mx-0 px-0  pt-4 ">
						<h1 class="h1-reponsive  mt-5 font-weight-bold">
							<strong class="grey-text font-weight-bold">ORGANIC CHEMISTRY</strong>
						</h1>

						<mdb-row class="m pt-5 justify-content-center z-depth-2">
							<mdb-col col="6" md="5" lg="4" class="text-right justify-content-right ">
								<mdb-input label="Organic  " class="z-depth-1 white" size="lg" outline v-model="value" />
							</mdb-col>
							<mdb-col col="6" class=" text-left pt-3">
								<mdb-btn color="white" @click="search" rounded>search</mdb-btn>
							</mdb-col>
						</mdb-row>
					</mdb-col>
				</mdb-row>
			</mdb-container>
		</mdb-parallax> -->

						<h1 class="h1-reponsive  mt-5 font-weight-bold">
							<strong class="grey-text font-weight-bold">ORGANIC CHEMISTRY</strong>
						</h1>
						<mdb-row class="m pt-5 justify-content-center flex-grow z-depth-2">
							<mdb-col col="6" md="5" lg="6" class="text-right justify-content-right ">
								<mdb-input @blur="search" label="Organic  " class="z-depth-1 white" size="lg" outline v-model="value" />
							</mdb-col>
							<mdb-col col="6" class=" text-left pt-3">
								<mdb-btn color="white" @click="search" rounded>search</mdb-btn>
							</mdb-col>
						</mdb-row>
	</mdb-container>
</template>
<script>
import { mdbContainer, mdbParallax, mdbMask, mdbRow, mdbCol, mdbInput, mdbBtn } from "mdbvue";
export default {
	name: "CallToActionButtonsIntro",
	components: {
		mdbContainer,
		mdbParallax,
		mdbMask,
		mdbRow,
		mdbCol,
		mdbInput,
		mdbBtn,
	},
	data() {
		return {
			value: "",
		};
	},
	methods: {
		search() {
			if (/\w(ane)/.test(this.value)) {
				this.$router.push({ name: "alkanes" });
			} else if (/\w(ene)/.test(this.value)) {
				this.$router.push({ name: "alkenes" });
			} else if (/\w(yne)/.test(this.value)) {
				this.$router.push({ name: "alkynes" });
			} else if (/\w(nol)/.test(this.value)) {
				this.$router.push({ name: "alcohols" });
			} else if (/\w(nal)/.test(this.value)) {
				this.$router.push({ name: "alkyhalides" });
			} else if (/\w(acid)/.test(this.value)) {
				this.$router.push({ name: "carboxylicAcid" });
			} else if (/\w(oate)/.test(this.value)) {
				this.$router.push({ name: "esters" });
			} else if (/\w(one)/.test(this.value)) {
				this.$router.push({ name: "ketones" });
			} else if (/\w(yne)/.test(this.value)) {
			}
		},
	},
	mounted() {
		this.search();
	},
};
</script>
<style>
.top-nav-collapse {
	background-color: #f8bbd0 !important;
}
.mdb-white {
	opacity: 0.8;
}
.mdb-color .text {
	opacity: 1;
	color: white;
}
.home{
	height: 100vh;
	width:100vw;
	flex-basis: row;
	background-image: url("../assets/home.jpg");
	 background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
