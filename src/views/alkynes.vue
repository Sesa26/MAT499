<template>
	<div class="container-fluid">
		<p class="white-text h2 blue-grey">ALKYNES</p>
		<mdb-row class="justify-content-center">
			<mdb-col col="5"> <mdb-input outline label="IUPAC Name" /> </mdb-col>
			
		</mdb-row>
		<p class="text-center h4 blue lighten-5">Molecular Fomula</p>
		<mdb-row class="justify-content-center">
			<mdb-col col="5" class="d-flex">
				<span class="big">C</span>
				<mdb-input class="small nbox" outline label="" :min="2" v-model="carbon" size="sm" style="" />
				<span class="big">H</span>
				<mdb-input class="small nbox" outline label="" @input="hydrogenChange" v-model="hydrogen" size="sm" style="" />
				<!-- <span class=" nbox border m-0 p-0" > 	
					{{2*carbon}}				
				</span> -->
			</mdb-col>
		</mdb-row>
				<mdb-btn color="primary" size="md"> CONVERT</mdb-btn>
	</div>
</template>
<script>
import { mdbInput, mdbRow, mdbCol, mdbBtn } from "mdbvue";
export default {
	name: "Input",
	components: {
		mdbInput,
		mdbRow,
		mdbCol,
		mdbBtn,
	},
	data() {
		return {
			carbon: 2,
		};
	},
	computed: {
		hydrogen() {
			return this.carbon * 2 -2;
		},
	},
	methods: {
		hydrogenChange(event) {
			console.log(event);
			this.carbon = (event+2) / 2;
		},
	},
};
</script>
<style scoped>
.big {
	font-size: 34pt;
}
.nbox {
	transform: translateY(10px);
	width: 50px;
	height: 30px;
}
</style>
