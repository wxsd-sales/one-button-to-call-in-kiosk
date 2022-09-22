<script>
	export let title;
	export let icon;
	export let value;
	export let color = 'white';
</script>

<div class="is-flex is-flex-direction-column mt-4">
	<p class="has-text-weight-medium has-text-grey-lighter has-text-centered mb-2">
		{title}
	</p>

	<div class="level is-size-4 has-text-white">
		<div class="level-left has-text-grey-light">
			<span class="icon is-medium has-text-link">
				<i class={`mdi mdi-${icon} mdi-24px`} />
			</span>
		</div>
		<div class={`level-right is-size-6 has-text-${color}`}>{value}</div>
	</div>
</div>
