<template>
	<div class="container-fluid">
		<p class="white-text h2 blue darken-3 ">ALKYNES</p>
		<mdb-row class="justify-content-center">
			<mdb-col col="5"> <mdb-input v-model="name" @change="convertFromName" outline label="IUPAC Name" /> </mdb-col>
		</mdb-row>
		<p class="text-center h4 blue lighten-5">Molecular Fomula</p>
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
				<mdb-input class="small nbox" id="carbon" type="number" outline label="" :min="2" @input="carbonChange" @blur="convertFromMoleculaFormula" v-model="carbon" size="sm" style="" />
				<span class="big">H</span>
				<mdb-input class="small nbox" id="hydrogen"  outline label="" @input="hydrogenChange" v-model="hydrogen" size="sm" style="" />
			</mdb-col>
		</mdb-row>
	</div>
</template>
<script>
import { mdbInput, mdbRow, mdbCol } from "mdbvue";
export default {
	name: "Input",
	components: {
		mdbInput,
		mdbRow,
		mdbCol,
	},
	data() {
		return {
			carbon: "",
			name: "",
			molecula_processing: false,
			Invalid_name: false,
		};
	},
	computed: {
		hydrogen() {
			if (this.carbon !== 0) {
				return this.carbon* 2 -2;
			} else {
				return "";
			}
		},
	},
	methods: {
		convertFromName() {
			if (this.name.length < 6) {
				this.carbon = "";
				// this.Invalid_name =true;
				return;
			}

			let sub = this.name;
			sub.toLowerCase();
			sub = sub.replace("yne", "");

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
			
			if (this.carbon === 2) {
				this.name = "ethyne";
			} else if (this.carbon == 3) {
				this.name = "propyne";
			} else if (this.carbon == 4) {
				this.name = "butyne";
			} else if (this.carbon == 5) {
				this.name = "pentyne";
			} else if (this.carbon == 6) {
				this.name = "hexyne";
			} else if (this.carbon == 7) {
				this.name = "heptyne";
			} else if (this.carbon == 8) {
				this.name = "octyne";
			} else if (this.carbon == 9) {
				this.name = "nonyne";
			} else if (this.carbon == 10) {
				this.name = "decyne";
			}
		},

		hydrogenChange(event) {
			console.log(event);
			this.carbon = (event+2) / 2;
			this.convertFromMoleculaFormula();
		},

		carbonChange(event) {
			console.log(event);
			// this.carbon = (event - 2) / 2;
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
	width: 55px;
	height: 30px;
}
</style>
