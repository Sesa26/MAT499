<template>
	<div class="home">
		<h1>Organic Chemistry</h1>
		<mdb-row class="justify-content-center">
			<mdb-col col="11">
				<mdb-carousel :interval="8000" indicator slide :items="2" controlls>
					<template #1>
						<img src="@/assets/2.jpg" class="img-fluid" alt="Responsive image">
					</template>
					<template #2>
						<img src="@/assets/3.jpg" class="img-fluid" alt="Responsive image">
					</template>
				</mdb-carousel>
			</mdb-col>
		</mdb-row>

		<mdb-container>
			<section class="my-5">
				<h2 class="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
				<p class="lead grey-text w-responsive text-center mx-auto mb-5">
					Organic chemistry is phenomenal because it is the study of life and all the chemical reactions related to life. Most careers apply an understanding of organic chemistry, such as doctors and chemical engineers.
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
									An alkane, is an acyclic saturated hydrocarbon. It consists of hydrogen and carbon atoms arranged in a tree structure in which all the carbon-carbon bonds are single.
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
									Alkenes are the simplest unsaturated hydrocarbons. They contain one or more reactive double bonds between the carbon atoms.Their general formula is CnH2n.
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
									An alkyne is an unsaturated hydrocarbon containing atleast one carbon-carbon triple bond. They have a general formula that C2H2n-2.
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
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbCarousel, } from "mdbvue";
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
					src: './assets/2.jpg',
				},
				{
					img: true,
					src: './assets/3.jpg',
				},
			],
		};
	},
};
</script>
