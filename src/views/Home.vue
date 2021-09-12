<template>
	<div>
		<!-- <mdb-parallax src="https://mdbootstrap.com/img/Photos/Others/gradient2.png" height="full" factor="2"> -->
		<mdb-parallax :src="`@/assets/home.jpg`" height="full" factor="2">
			<mdb-mask overlay="purple-slight" color="#4285F4" class="d-flex justify-content-center align-items-center">
				<mdb-container>
					<mdb-row class="mt-5 pt-5">
						<mdb-col md="12" class="text-center animated fadeInUp">
							<h1 class="h1-reponsive font-weight-bold">
								<strong>Our New Course is Ready</strong>
								<!-- <a href="https://ibb.co/Xk2DJnn"><img src="https://i.ibb.co/Xk2DJnn/organic-chemistry-wallpaper-Google-Search.jpg" alt="organic-chemistry-wallpaper-Google-Search" border="0" /></a> -->
							</h1>
							<h5 class="mb-5 pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5">It comes with a lot of new features, easy to follow videos and images. Check it out now!</h5>

							<mdb-row class="justify-content-center text-center ">
								<mdb-col class="">
									<mdb-input label="Organic  " class="z-depth-1" size="lg" outline v-model="value" />
								</mdb-col>
								<mdb-col class=" text-left ">
									<mdb-btn outline="primary" rounded>search</mdb-btn>
								</mdb-col>
							</mdb-row>
						</mdb-col>
					</mdb-row>
				</mdb-container>
			</mdb-mask>
		</mdb-parallax>
	</div>
</template>
<script>
import { mdbContainer, mdbInput, mdbParallax, mdbMask, mdbRow, mdbCol, mdbBtn } from "mdbvue";
export default {
	name: "CallToActionButtonsIntro",
	components: {
		mdbContainer,
		mdbInput,
		mdbParallax,
		mdbMask,
		mdbRow,
		mdbCol,
		mdbBtn,
	},
	data() {
		return {
			value: "",
		};
	},
};
</script>
<style>
.top-nav-collapse {
	background-color: #f8bbd0 !important;
}
</style>
