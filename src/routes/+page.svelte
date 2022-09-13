<script>
	import '../app.scss';
	import Card from '../components/card.svelte';
	import logo from '../assets/logo.jpeg';
	import applications from '../applications';
	import BoopAction from '../animation/BoopAction.svelte';

	let URL = null;
	export const prerender = true;

	const onSelect = (url) => {
		URL = url;
	};
</script>

<div class="app">
	<div class="bg-image" />
	<div class="contnet">
		<div class="header is-translucent-black pl-2">
			<figure
				class="image is-128x128 mr-4 logo"
				on:click={() => {
					URL = null;
				}}
			>
				<img src={logo} />
			</figure>
			<div class=" title is-4 has-text-white">General Services Administration</div>
		</div>
		{#if URL === null}
			<div class="columns cards">
				{#each applications as { imgUrl, title, subtitle, avatarUrl, description, url }, i}
					<div class="column">
						<BoopAction boopParams={{ scale: 1.1, timing: 200 }}>
							<Card {imgUrl} {title} {subtitle} {avatarUrl} {description} {url} {onSelect} />
						</BoopAction>
					</div>
				{/each}
			</div>
		{:else}
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
		{/if}
		<div class="footer has-text-weight-medium has-text-light">
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
</div>

<style>
	.logo {
		cursor: pointer;
		height: 90px;
	}

	.iframe {
		z-index: 1;
		display: flex;
		position: relative;
		height: 70%;
		width: 110rem;
		justify-content: center;
		align-items: center;
		opacity: 0.8;
		margin-top: 3rem;
		flex-direction: column;
	}

	.footer {
		z-index: 1;
		position: relative;
		bottom: 0;
		background-color: transparent;
		display: flex;
		justify-content: flex-end;
		padding-right: 6rem;
		padding-bottom: 0;
	}

	.close-button {
		height: 3rem;
		width: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
		align-self: end;
		margin-right: 8.75rem;
		cursor: pointer;
	}

	.header {
		display: flex;
		align-items: center;
		height: 8rem;
		margin-bottom: 2rem;
		width: 100%;
		position: relative;
	}
	.cards {
		padding: 9rem 7rem 7rem 7rem;
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
		filter: brightness(75%);
	}

	.content {
		z-index: 1;
	}
</style>
