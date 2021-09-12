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
							<mdb-btn color="purple" rounded icon="user">sign up!</mdb-btn>
							<mdb-btn outline="purple" rounded>learn more</mdb-btn>
							<mdb-input />
						</mdb-col>
					</mdb-row>
				</mdb-container>
			</mdb-mask>
		</mdb-parallax>
		<main>
			<mdb-container>
				<mdb-row class="py-5">
					<mdb-col md="12" class="text-center">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
							quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
							eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
							modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
							nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
							dolorem eum fugiat quo voluptas nulla pariatur?
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
						<p>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
							quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
							eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
							modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
							nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui
							dolorem eum fugiat quo voluptas nulla pariatur?
						</p>
					</mdb-col>
				</mdb-row>
			</mdb-container>
		</main>
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
};
</script>
<style>
.top-nav-collapse {
	background-color: #f8bbd0 !important;
}
</style>
