<template>
	<div>
		<!-- <mdb-parallax src="https://mdbootstrap.com/img/Photos/Others/gradient2.png" height="full" factor="2"> -->
		<mdb-parallax :src="`http://localhost:8080/home3.jpg`" height="full" factor="2">
			<mdb-mask overlay="black" color="#00000" class="d-flex justify-content-center align-items-center">
				<mdb-container>
					<mdb-row class="mt- pt-5">
						<mdb-col md="12" class="text-center justify-content-center  mdb-ncolor pt-4 ">
							<h1 class="h1-reponsive   font-weight-bold">
								
								<strong class="white-text">Our New Course is Ready</strong>
								<!-- <a href="https://ibb.co/Xk2DJnn"><img src="https://i.ibb.co/Xk2DJnn/organic-chemistry-wallpaper-Google-Search.jpg" alt="organic-chemistry-wallpaper-Google-Search" border="0" /></a> -->
							</h1>
							<div class="mdb-ncolor">
							
							<h5 class="mb-5  grey-text pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5">It comes with a lot of new features, easy to follow videos and images. Check it out now!</h5>
							</div>
						</mdb-col>
					</mdb-row>
							 <mdb-row class="justify-content-center text-center mx-auto mdb-ncolor">
								<mdb-col col='6' class="">
									<mdb-input label="Organic  " class="z-depth-1 white" size="lg" outline v-model="value" />
								</mdb-col>
								<mdb-col col='6' class=" text-left pt-3">
									<mdb-btn color="white" @click="search" rounded>search</mdb-btn>
								</mdb-col>
							</mdb-row> 
				</mdb-container>
			</mdb-mask>
		</mdb-parallax>
	</div>
</template>
<script>
import { mdbContainer,  mdbParallax, mdbMask, mdbRow,mdbCol,mdbInput,mdbBtn } from "mdbvue";
export default {
	name: "CallToActionButtonsIntro",
	components: {
		mdbContainer,
		mdbParallax,
		mdbMask,
		mdbRow,mdbCol,mdbInput,mdbBtn
	},
	data() {
		return {
			value: "",
		};
	},
	methods:{
		search(){
			if(/\w(ane)/.test(this.value)){
				this.$router.push({name:'alkanes'})
			} else if(/\w(ene)/.test(this.value)){
				
				this.$router.push({name:'alkenes'})
			} else if(/\w(yne)/.test(this.value)){
				this.$router.push({name:'alkynes'})
			} else if(/\w(nol)/.test(this.value)){
				this.$router.push({name:'alcohols'})
			} else if(/\w(nal)/.test(this.value)){
				this.$router.push({name:'alkyhalides'})
			} else if(/\w(acid)/.test(this.value)){
				this.$router.push({name:'carboxylicAcid'})
			} else if(/\w(oate)/.test(this.value)){
				this.$router.push({name:'esters'})
			} else if(/\w(one)/.test(this.value)){
				this.$router.push({name:'ketones'})

			} else if(/\w(yne)/.test(this.value)){

			}
		}
	},
	mounted(){
		this.search();
	}
};
</script>
<style >
.top-nav-collapse {
	background-color: #f8bbd0 !important;
}
.mdb-color{
	opacity:.8;
}
.mdb-color .text{
	opacity:1;
	color:white;
}

</style>
