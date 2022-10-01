<script>
	import '../app.scss';
	import logo from '../assets/logo.png';
	import image from '../assets/aia.jpeg';
	import { page } from '$app/stores';


	const sipAddress = $page.url.searchParams.get('sipAddress');
	const call = (url) => {
		window.location.href= `sip:${sipAddress}`
	};

</script>

<div class="app is-flex is-flex-direction-column">
	<div
		class="bg-image"
		style="background: #fff url(https://www.panaynews.net/wp-content/uploads/2021/08/aia.jpg) center center/cover no-repeat"
	>
	</div>
	<nav
		class="navbar is-flex is-align-items-center is-translucent-black pl-4 is-transparent pt-4 pb-2"
		role="navigation"
		style="margin-bottom: 1rem;"
		aria-label="main navigation"
	>
		<div class="navbar-brand">
			<figure
				class="image is-96x96 mr-4 logo"
				on:click={() => {
					URL = null;
				}}
			>
				<img src={logo} />
			</figure>
		</div>
		<div class="navbar-item is-flex is-flex-direction-column  is-align-items-start">
			<p class=" m-0 title is-4 has-text-white">AIA Insurance</p>
			<p class=" mt-2  is-size-5 has-text-white">Healthier, Longer, Better Lives</p>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start">
				<div class="navbar-item" />
			</div>

			<div class="navbar-end is-flex is-flex-direction-column">
				<div class="columns navbar-item p-0">
					<div class="column has-text-white p-1" style="width: 9rem">Singapore</div>
					<div class="column has-text-white p-1">75°</div>
				</div>
				<div class="columns navbar-item p-0">
					<div class="column has-text-white p-1">{new Date().toDateString()}</div>
				</div>
			</div>
		</div>
	</nav>
	<div class="contnet is-flex is-justify-content-flex-end is-align-items-flex-end" style="width: 100%; height: 100%;">
		<button class="button is-large is-rounded is-size-2 is-success"  style="margin: 5rem !important; width: 15rem;" on:click={call}>Call</button>
	</div>
</div>

<style>
	.video-background {
		width: 100%;
		height: 100%;
		background-color: black;
	}
	.hide {
		display: none !important;
	}
	.logo {
		cursor: pointer;
		height: 110px;
	}

	.QA {
		display: flex;
		flex-direction: column;
		margin: 4rem 10rem;
		position: relative;
	}
	.iframe {
		z-index: 1;
		display: flex;
		position: relative;
		height: 80%;
		justify-content: center;
		align-items: center;
		opacity: 1;
		margin: 2rem 8rem;
		flex-direction: column;
	}

	.customFooter {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		z-index: 1;
		position: relative;
		background-color: transparent;
		bottom: 0;
	}

	.contact {
		display: flex;
		padding-right: 4rem;
		padding-bottom: 0;
	}

	.close-button {
		height: 3rem;
		width: 16rem;
		display: flex;
		justify-content: space-evenly;
		align-self: flex-start;
		align-items: center;
		cursor: pointer;
		margin-bottom: 0.5rem;
	}

	.textContainer {
		width: 30rem;
		height: 15rem;
		white-space: pre;
		margin-right: 0.25rem;
		margin-top: 0.5rem;
		border: none;
	}

	.app {
		display: flex;
		height: 100%;
	}

	.bg-image {
		position: absolute;
		display: block;
		height: 100%;
		width: 100%;
		z-index: 0;
		filter: brightness(50%);
	}

	.content {
		z-index: 1;
	}
</style>
