<template>
	<div class="container-fluid">
		<p class="white-text h2 blue darken-3 ">ALKANES</p>
		<mdb-row class="justify-content-center">
			<mdb-col col="5"> <mdb-input v-model="name" @change="convertFromName" outline label="IUPAC Name" /> </mdb-col>
		</mdb-row>
		<p class="text-center h4 blue lighten-5">Molecular Formula</p>
		<mdb-row class="justify-content-center">
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
			</mdb-col>
		</mdb-row>
		<p class="text-center h4 blue lighten-5">Structural Formula</p>
		<mdb-row class="justify-content-center">
			<div v-if="isCyclic">
				<img src="@/assets/loader1.gif" alt="thumbnail" class="img-thumbna il" style="width: 100px" />

			</div>
			<div class="d-flex" v-else-if="carbon != 0">
				<initialHydrogen />
				<span v-for="i in carbon" :key="i" class="d-flex">
					<horizontal />
					<twoHydrogen v-if="i != carbon" />
				</span>
				<span class="align-self-center">H</span>
			</div>
			<mdb-col v-else>
				<mdb-icon class="flash animated infinite red-text" icon="exclamation-circle" size="3x" />
				<p class="h5 red-text font-weight-bold mt-4">Invalid chemical</p>
			</mdb-col>
		</mdb-row>
	</div>
</template>
<script>
import { mdbInput, mdbRow, mdbCol, mdbIcon } from "mdbvue";
export default {
	name: "alkanes",
	components: {
		mdbInput,
		mdbRow,
		mdbCol,
		mdbIcon,
	},
	data() {
		return {
			carbon: 0,
			name: "",
			molecula_processing: false,
			Invalid_name: false,
			isCyclic:false
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
			sub.toLowerCase ();
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

			if (this.carbon == 0) {
				this.name = "invalid";
			} else if (this.carbon == 1) {
				this.name = "methane";
			} else if (this.carbon == 2) {
				this.name = "ethane";
			} else if (this.carbon == 3) {
				this.name = "propane";
			} else if (this.carbon == 4) {
				this.name = "butane";
			} else if (this.carbon == 5) {
				this.name = "pentane";
			} else if (this.carbon == 6) {
				this.name = "hexane";
			} else if (this.carbon == 7) {
				this.name = "heptane";
			} else if (this.carbon == 8) {
				this.name = "octane";
			} else if (this.carbon == 9) {
				this.name = "nonane";
			} else if (this.carbon == 10) {
				this.name = "decane";
			}
		},
		carbonChange() {
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
