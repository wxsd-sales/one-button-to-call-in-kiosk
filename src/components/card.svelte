<script>
	export let imgUrl;
	export let title;
	export let subtitle;
	export let avatarUrl;
	export let description;
	export let url;
	export let onSelect;

	const select = () => {
		onSelect(url);

		return null;
	};
</script>

<div class="card is-translucent-black card-helper" on:click={select}>
	<div class="card-image">
		<figure class="image is-4by3">
			<img src={imgUrl} alt="Placeholder image" />
		</figure>
	</div>
	<div class="card-content">
		<div class="media">
			<div class="media-left media-left-helper">
				<span class="icon light">
					<i class={`mdi mdi-${avatarUrl} mdi-48px`} />
				</span>
			</div>
			<div class="media-content">
				<p class="title is-4 has-text-white">{title}</p>
				<p class="subtitle is-6 has-text-white">{subtitle}</p>
			</div>
		</div>

		<div class="content has-text-white">
			{description}
			<br />
		</div>
	</div>
</div>

<style>
	.light {
		color: hsl(0deg, 0%, 50%) !important;
	}

	.media-left-helper {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3rem;
		margin-right: 1.5rem;
	}

	.card-helper {
		cursor: pointer;
	}
</style>
