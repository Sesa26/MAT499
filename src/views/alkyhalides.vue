<template>
	<div class="container-fluid">
		<p class="white-text h2 blue darken-3 ">ALKY HALIDES</p>
		<mdb-row class="justify-content-center">
			<mdb-col col="5"> <mdb-input v-model="name" @change="convertFromName" outline label="IUPAC Name" /> </mdb-col>
		</mdb-row>
		<p class="text-center h4 blue lighten-5">Molecular Fomula</p>
		<mdb-row class="justify-content-center">
			<!-- <mdb-col  class="justify-content-left"> -->
			<mdb-select c id="halide" color="primary" v-model="helides" @getValue="halideChange" label="Select Hilide" size="lg" />
			<!-- </mdb-col> -->
			<div class="w-100"></div>
			<hr />
			<mdb-col v-if="molecula_processing">
				<img src="@/assets/loader1.gif" alt="thumbnail" class="img-thumbna il" style="width: 100px" />
			</mdb-col>
			<mdb-col v-else-if="Invalid_name" col="5">
				<p class="h3-responsive red-text font-weight-bold">
					Invalid!
				</p>
			</mdb-col>
			<mdb-col v-else col="5" class="d-flex">
				<span class="big">C</span>
				<mdb-input class="small nbox" id="carbon" type="number" :min="0" outline label="" @input="carbonChange" v-model="carbon" size="sm" style="" />
				<!-- <mdb-input class="small nbox" id="carbon" type="number" outline label="" @input="carbonChange" @blur="convertFromMoleculaFormula" v-model="carbon" size="sm" style="" /> -->
				<span class="big">H</span>
				<mdb-input class="small nbox" id="hydrogen" outline label="" readOnly v-model="hydrogen" size="sm" style="" />
				<span class="big animated bounceInRight">{{helide}}</span>
			</mdb-col>
		</mdb-row>
		<p class="text-center h4 blue lighten-5 mt-3">Stuctural Fomula</p>
		<mdb-row class="justify-content-center">
			<div class="d-flex" v-if="carbon != 0">
				<initialHydrogen />
				<span v-for="i in carbon-1" :key="i" class="d-flex">
					<horizontal />
					<twoHydrogen />
				</span>
					<horizontal />
				<span class="align-self-center">{{helide}}</span>
			</div>
			<mdb-col v-else>
				<mdb-icon class="flash animated infinite red-text" icon="exclamation-circle" size="3x" />
				<p class="h5 red-text font-weight-bold mt-4">Invalid chemical</p>
			</mdb-col>
		</mdb-row>
	</div>
</template>
<script>
import { mdbInput, mdbRow, mdbCol, mdbIcon, mdbSelect } from "mdbvue";
export default {
	name: "alkanes",
	components: {
		mdbInput,
		mdbRow,
		mdbCol,
		mdbIcon,
		mdbSelect,
	},
	data() {
		return {
			helides: [
				{ text: "Fluorine", value: "F",selected: true,name:"fluoro"  },
				{ text: "Chlorine", value: "Cl",name:"chloro" },
				{ text: "Bromine", value: "Br",name:"bromo" },
				{ text: "Iodine", value: "I",name:"Iodo" },
			],
			helide: "F",
			carbon: 0,
			name: "",
			molecula_processing: false,
			Invalid_name: false,
		};
	},
	computed: {
		hydrogen() {
			if (this.carbon != 0) {
				return this.carbon * 2 + 2;
			} else {
				return 0;
			}
		},
	},
	methods: {
		convertFromName() {
			if (this.name.length < 6) {
				this.carbon = 0;
				// this.Invalid_name =true;
				return;
			}

			let sub = this.name;
			sub.toLowerCase();
			sub = sub.replace("ane", "");

			if (sub === "meth") {
				this.carbon = 1;
			} else if (sub === "eth") {
				this.carbon = 2;
			} else if (sub === "prop") {
				this.carbon = 3;
			} else if (sub === "but") {
				this.carbon = 4;
			} else if (sub === "pent") {
				this.carbon = 5;
			} else if (sub === "hex") {
				this.carbon = 6;
			} else if (sub === "hept") {
				this.carbon = 7;
			} else if (sub === "oct") {
				this.carbon = 8;
			} else if (sub === "non") {
				this.carbon = 9;
			} else if (sub === "dec") {
				this.carbon = 10;
			}
		},

		convertFromMoleculaFormula() {
			this.name = "";
			let helide = "chloro";
			helide =  this.helides.find(e=>e.value == this.helide).name;
			


			if (this.carbon == 0) {
				this.name = "invalid";
			} else if (this.carbon == 1) {
				this.name = helide + "methane";
			} else if (this.carbon == 2) {
				this.name = helide + "ethane";
			} else if (this.carbon == 3) {
				this.name = helide + "propane";
			} else if (this.carbon == 4) {
				this.name = helide + "butane";
			} else if (this.carbon == 5) {
				this.name = helide + "pentane";
			} else if (this.carbon == 6) {
				this.name = helide + "hexane";
			} else if (this.carbon == 7) {
				this.name = helide + "heptane";
			} else if (this.carbon == 8) {
				this.name = helide + "octane";
			} else if (this.carbon == 9) {
				this.name = helide + "nonane";
			} else if (this.carbon == 10) {
				this.name = helide + "decane";
			}
		},
		carbonChange() {
			this.convertFromMoleculaFormula();
		},
		halideChange(e) {
			this.helide = e;
			this.convertFromMoleculaFormula();
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
	width: 70px;
	height: 30px;
}
</style>
