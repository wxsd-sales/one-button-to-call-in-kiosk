<script>
	export let toggleModal;
	export let modalHeader;
</script>

<div class="modal is-active">
	<div class="modal-background " on:click={toggleModal} />
	<div class="modal-card">
		<header class="modal-card-head">
			<p class="modal-card-title has-text-danger">{modalHeader}</p>
			<button class="delete" aria-label="close" on:click={toggleModal} />
		</header>
		<section class="modal-card-body ">
			<p class="subtitle is-size-6">
				<slot />
			</p>
		</section>
	</div>
</div>
