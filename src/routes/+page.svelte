<script>
	import '../app.scss';
	import Card from '../components/card.svelte';
	import logo from '../assets/logo.jpeg';
	import applications from '../applications';
	import BoopAction from '../animation/BoopAction.svelte';
	import { browser } from '$app/environment';
	import QA from '../components/Q&A.svelte';
	import listItems from '../faq';
	import SensorData from '../components/SensorData.svelte';

	let URL = null;

	const onSelect = (url) => {
		URL = url;
	};
</script>

<div class="app is-flex is-flex-direction-column">
	<div class="bg-image" />
	<nav
		class="navbar is-flex is-align-items-center is-translucent-black pl-2 is-transparent pt-4 pb-0"
		role="navigation"
		style="margin-bottom: 1rem;"
		aria-label="main navigation"
	>
		<div class="navbar-brand">
			<figure
				class="image is-128x128 mr-4 logo"
				on:click={() => {
					URL = null;
				}}
			>
				<img src={logo} />
			</figure>
		</div>
		<div class="navbar-item is-flex is-flex-direction-column  is-align-items-start">
			<p class=" m-0 title is-4 has-text-white">General Services Administration</p>
			<p class=" mt-2  is-size-5 has-text-white">Workplace Innovation Lab</p>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start">
				<div class="navbar-item" />
			</div>

			<div class="navbar-end">
				<div class="navbar-item has-dropdown is-hoverable">
					<a class="navbar-link has-text-white"> About </a>
					<div class="navbar-dropdown is-right textContainer is-translucent-black">
						<div class="navbar-item is-expanded  ">
							<div class="has-text-white is-size-6" style="white-space:normal;">
								The Workplace Innovation Lab (WIL) is the pilot project of GSA’s federal coworking
								concept. Located at GSA headquarters in Washington, DC, the WIL is a proving ground
								for federal agencies to test out innovative environments in workplace furnishings
								and audio visual & technology solutions. The 25,000 SF space is available for
								periods ranging from a single hour to weeks. Federal employees are able to reserve
								workspaces and collaborative areas online within six distinct neighborhoods.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>
	<div class="contnet" style="width: 100%; height: 100%;">
		{#if URL === null}
			<div class="columns cards" style="padding: 7rem 4rem 2rem 4rem">
				{#each applications as { imgUrl, title, subtitle, avatarUrl, description, url }, i}
					<div class="column">
						<BoopAction boopParams={{ scale: 1.1, timing: 200 }}>
							<Card {imgUrl} {title} {subtitle} {avatarUrl} {description} {url} {onSelect} />
						</BoopAction>
					</div>
				{/each}
			</div>
		{:else if URL !== 'NO-URL'}
			<div class="iframe">
				<div
					class="is-translucent-black close-button"
					on:click={() => {
						URL = null;
					}}
				>
					<span class="icon has-text-danger">
						<i class="mdi mdi-48px mdi-close" />
					</span>
				</div>
				<iframe src={URL} />
			</div>
		{:else}
			<div class="QA">
				<div
					class="is-translucent-black close-button"
					on:click={() => {
						URL = null;
					}}
				>
					<span class="icon has-text-danger">
						<i class="mdi mdi-48px mdi-close" />
					</span>
				</div>
				<div class="box is-translucent-black" style="border-radius: 0;">
					{#each listItems as { question, answer }, i}
						<QA {question} {answer} />
					{/each}
					<QA />
				</div>
			</div>
		{/if}
		{#if URL === null}
			<div class="customFooter">
				<div class="box is-translucent-black mb-0" style="margin-left: 4rem;">
					<p class="subtitle has-text-white mb-4 is-flex is-justify-content-center">Room Metrics</p>
					<div class="columns">
						<div class="column">
							<SensorData title="Air Quality" icon="smoke" value="1" color="danger" />
							<SensorData title="Humidity" icon="water-percent" value="20%" color="warning" />
						</div>
						<div class="column">
							<SensorData title="Noise" icon="waveform" value="2" color="success" />
							<SensorData title="Occupancy" icon="account-group" value="2/4" color="success" />
						</div>
					</div>
				</div>
				<div class="contact has-text-weight-medium has-text-light">
					<p>
						Made with <span>
							<span class="icon has-text-danger">
								<i class="mdi mdi-heart " />
							</span>
						</span>
						by WXSD team (wxsd@external.cisco.com)
					</p>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	.logo {
		cursor: pointer;
		height: 90px;
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
		width: 3rem;
		display: flex;
		justify-content: center;
		align-self: flex-end;
		align-items: center;
		cursor: pointer;
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
		background: #fff url(../assets/GSA.jpeg) center top/cover no-repeat;
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
