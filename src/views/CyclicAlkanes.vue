<template>
	<div class="container-fluid">
		<p class="white-text h2 blue darken-3 ">Cyclic Alkanes</p>
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
				<mdb-input class="small nbox" id="carbon" type="number" :min="3" :max="10" outline label="" @input="carbonChange" v-model="carbon" size="sm" style="" />
				<!-- <mdb-input class="small nbox" id="carbon" type="number" outline label="" @input="carbonChange" @blur="convertFromMoleculaFormula" v-model="carbon" size="sm" style="" /> -->
				<span class="big">H</span>
				<mdb-input class="small nbox" id="hydrogen" outline label="" readOnly v-model="hydrogen" size="sm" style="" />
			</mdb-col>
		</mdb-row>
		<p class="text-center h4 blue lighten-5">Structural Formula</p>
		<mdb-row class="justify-content-center">
			<div class="d-flex " v-if="carbon != 0">			
				<img src='@/assets/cycloalkanes/cyclopropane.png' v-if="carbon == 3"  alt="cyclopropane" class="animated fadeIn " style="width: 40vw" />
				<img src='@/assets/cycloalkanes/cyclobutane.png' v-if="carbon == 4"  alt="cyclobutane" class="animated fadeIn" style="width: 40vw" />
				<img src='@/assets/cycloalkanes/cyclopentane.png' v-if="carbon == 5"  alt="cyclopentane" class="animated fadeIn" style="width: 40vw" />
				<img src='@/assets/cycloalkanes/cyclohexane.png' v-if="carbon == 6"  alt="cyclohexane" class="animated fadeIn" style="width: 35vw" />
				<img src='@/assets/cycloalkanes/cycloheptane.png' v-if="carbon == 7"  alt="cycloheptane" class="animated fadeIn" style="width: 40vw" />
				<img src='@/assets/cycloalkanes/cyclooctane.png' v-if="carbon == 8"  alt="cyclooctane" class="animated fadeIn" style="width: 40vw" />
				<img src='@/assets/cycloalkanes/cyclononane.png' v-if="carbon == 9"  alt="cyclononane" class="animated fadeIn" style="width: 40vw" />
				<img src='@/assets/cycloalkanes/cyclodecane.png' v-if="carbon == 10"  alt="cyclodecane" class="animated fadeIn" style="width: 40vw" />
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
			name: '',
			molecula_processing: false,
			Invalid_name: false,
		};
	},
	computed: {
		hydrogen() {
			if (this.carbon != 0) {
				return this.carbon * 2;
			} else {
				return 0;
			}
		},
		imageName(){
			let image = ''
			 if (this.carbon == 3) {
				image = "@/assets/cycloalkanes/cyclopropane.png";
			} else if (this.carbon == 4) {
				image = "@/assets/cycloalkanes/cyclobutane.png";
			} else if (this.carbon == 5) {
				image = "@/assets/cycloalkanes/cyclopentane.png";
			} else if (this.carbon == 6) {
				image = "@/assets/cycloalkanes/cyclohexane.png";
			} else if (this.carbon == 7) {
				image = "@/assets/cycloalkanes/cycloheptane.png";
			} else if (this.carbon == 8) {
				image = "@/assets/cycloalkanes/cyclooctane.png";
			} else if (this.carbon == 9) {
				image = "@/assets/cycloalkanes/cyclononane.png";
			} else if (this.carbon == 10) {
				image = "@/assets/cycloalkanes/cyclononane.png";
			}
			return image;
		}
	},
	methods: {
		convertFromName() {
			// if (this.name.length < 6) {
			// 	this.carbon = 0;
			// 	return;
			// }

			let sub = this.name;
			sub.toLowerCase();
			sub = sub.replace("ane", "");
			sub = sub.replace("cyclo", "");

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

			if (this.carbon == 0 || this.carbon == 1 || this.carbon == 2) {
				this.name = "invalid";
			} else if (this.carbon == 3) {
				this.name = "cyclopropane";
			} else if (this.carbon == 4) {
				this.name = "cyclobutane";
			} else if (this.carbon == 5) {
				this.name = "cyclopentane";
			} else if (this.carbon == 6) {
				this.name = "cyclohexane";
			} else if (this.carbon == 7) {
				this.name = "cycloheptane";
			} else if (this.carbon == 8) {
				this.name = "cyclooctane";
			} else if (this.carbon == 9) {
				this.name = "cyclononane";
			} else if (this.carbon == 10) {
				this.name = "cyclodecane";
			}
		},
		carbonChange() {
			if (this.carbon < 3) {
				this.carbon = 3;
				return;
			}
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
.doublbond {
	height: 5px;
	width: 20px;
	border-width: 2px;
}
</style>
