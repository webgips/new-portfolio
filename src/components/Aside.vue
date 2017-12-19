<template lang="pug">
	.aside(v-on:click.self="openMobile()" v-bind:class="{ open : showMobileMenu }")
		a.aside__arrow(v-on:click.self="openMobile()" v-bind:class="{ hide : showMobileMenu }")


		.aside__photo
			.aside__photo-wrap
				img.aside__photo-img(src="../assets/img/avatar.jpg" alt="Avatar")
		nav.nav
			router-link.nav__link(v-on:click.native="openMobile()" to='/' exact) About
			router-link.nav__link(v-on:click.native="openMobile()" to='/works' exact) Work
			router-link.nav__link(v-on:click.native="openMobile()" to='/contact' exact) Contact 
		ul.socials

</template>

<script>
export default {
	name: 'Aside',
	data: function () { 
		return {
				showMobileMenu: false
			}
	},  
	methods: {
		openMobile: function () {
			console.log(this.showMobileMenu);
			this.showMobileMenu = !this.showMobileMenu;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./../assets/styles/mixins";
.aside{
	background-color: rgba(#0a112a,.9);
	width: 25%;
	height: 100%;
	padding: 80px 0 50px;
	display: block;
	// display: flex;
	// flex-direction: column;
	@include laptop{
		padding: 4% 0;
	}
	@include tablet{
		transform: translate(-100%);
		transition:  all .3s ease;
		position: absolute;
		z-index: 999;
		width: 300px;
	}
	&.open{
		transform: translate(0);
	}
	&__arrow{
		display: none;
		position: absolute;
		top: 50%;
		right: -50px;
		transform: translate(0,-50%);
		width: 50px;
		height: 50px;
		background: url('../assets/img/aside_arrow.png') no-repeat center;
		background-size: 50%;
		background-color: $active;
	    border-bottom-right-radius: 50%;
	    border-top-right-radius: 50%;
		@include tablet{
			display: block;
		}
		&.hide{
			display: none;
		}
	}
	&__photo{
		// height: 30%;
		min-height: 150px;
		margin-bottom: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		&-wrap{
			width: 150px;
			height: 150px;
			border-radius: 50%;
			overflow: hidden;

		}
		&-img{
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		@include  laptop{
			min-height: auto;
			// &-wrap{
			//   height: 100px;
			//   width: 100px;
			// }
		}
	}
	.nav{
		display: block;
		height: 40%;
		max-height: 400px;
    	margin-top: 100px;
		// display: flex;
		// flex-direction: column;
		flex: 1;
		// height: 60%;
		@include notebook{
			max-height: 300px;
		}
		@include laptop{
			margin-top: 0;
		}
		&__link{      
			height: 33%;
			display: flex;
			align-items: center;
			// margin-bottom: 20px;
			padding-left: 70px;
			color: #fff;
			font-size: 24px;
			text-decoration: none;
			position: relative;
			font-family: "proxima_novasemibold";
			&:hover{
				background-color: rgba(#fff, .03);        
			}
			&-active{
				// color: #ff4ba8;
				color: $active;
				&:before{
					content: '';
					width: 10px;
					height: 100%;
					background-color: $active;
					position: absolute;
					left: 0;
					top: 0;
				}
			}
		}
	}
}

</style>
