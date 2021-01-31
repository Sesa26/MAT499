<template>
	<div class="home">
		<h1>Home</h1>
		<mdb-row class="justify-content-center">
			<mdb-col col="11">
				<mdb-carousel :interval="8000" slide :items="items" controlls></mdb-carousel>
			</mdb-col>
		</mdb-row>

		<mdb-container>
			<section class="my-5">
				<h2 class="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
				<p class="lead grey-text w-responsive text-center mx-auto mb-5">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
				</p>
				<mdb-row class="justify-content-center">
					<mdb-col md="3" class="md-0 mb-5">
						<mdb-row class="card mx-auto">
							<mdb-col lg="2" md="3" size="2">
								<mdb-icon icon="bullhorn" size="2x" class="blue-text" />
							</mdb-col>
							<mdb-col lg="10" md="9" size="10">
								<router-link :to="{ name:'alkanes'}" class="h4 font-weight-bold">  Alkanes</router-link>
								<p class="grey-text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
								</p>
							</mdb-col>
						</mdb-row>
					</mdb-col>
					<mdb-col md="3" class="md-0 mb-5">
						<mdb-row class="card mx-auto">
							<mdb-col lg="2" md="3" size="2">
								<mdb-icon icon="cogs" size="2x" class="pink-text" />
							</mdb-col>
							<mdb-col lg="10" md="9" size="10">
								<router-link :to="{ name:'alkenes'}" class="h4 font-weight-bold">  Alkenes</router-link>							
								<p class="grey-text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
								</p>
							
							</mdb-col>
						</mdb-row>
					</mdb-col>
					<mdb-col md="3" class="md-0 mb-5">
						<mdb-row class="card mx-auto">
							<mdb-col lg="2" md="3" size="2">
								<mdb-icon icon="tachometer-alt" size="2x" class="purple-text" />
							</mdb-col>
							<mdb-col lg="10" md="9" size="10">
								<router-link :to="{ name:'alkynes'}" class="h4 font-weight-bold">  Alkynes</router-link>							
								<p class="grey-text">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
								</p>
								
							</mdb-col>
						</mdb-row>
					</mdb-col>
				</mdb-row>
			</section>
		</mdb-container>
	</div>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon,  mdbCarousel } from "mdbvue";
export default {
	name: "FeaturesPage",
	components: {
		mdbContainer,
		mdbRow,
		mdbCol,
		mdbIcon,		
		mdbCarousel,
	},
	data() {
		return {
			items: [
				{
					img: true,
					src: "https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg",
				},
				{
					img: true,
					src: "https://mdbootstrap.com/img/Photos/Slides/img%20(16).jpg",
				},
				{
					img: true,
					src: "https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg",
				},
			],
		};
	},
};
</script>
