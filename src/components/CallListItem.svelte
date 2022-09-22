<script>
	import { onMount } from 'svelte';
	import { getPersonDetails, sendMessage } from '../lib/webex';
	import Modal from './Modal.svelte';

	let person;
	let displayModal = false;
	let disabled = true;
	let messageIsSending = false;
	let messageIsSent = false;
	let name;

	const toggleModal = () => {
		displayModal = !displayModal;

		if (!displayModal) {
			messageIsSent = false;
		}
	};

	const onClick = async () => {
		if (person.status === 'active') {
			window.location.href = `sip:${person.emails[0]}`;
		} else {
			toggleModal();
		}
	};

	const send = async () => {
		disabled = true;
		messageIsSending = true;
		await sendMessage(new Date().toLocaleTimeString(), name, 'tel:deviceID');
		messageIsSending = false;
		messageIsSent = true;
	};

	const handleInput = ({ target: { value } }) => {
		if (value !== '') {
			disabled = false;
		} else {
			disabled = true;
		}

		name = value;
	};

	onMount(async () => {
		person = await getPersonDetails(
			'Y2lzY29zcGFyazovL3VzL1BFT1BMRS80N2MzMmQwYi0wNDQ0LTQ2MGQtOGJjZS0yMjY1YjUwMWFhYzU'
		);
	});
</script>

<nav class="level has-text-white is-size-4">
	<div class="level-left">
		{#if person}
			<div class="level-item mr-5">
				<figure class="image is-64x64">
					<img class="is-rounded" src={person.avatar} />
				</figure>
			</div>
		{/if}
		<div class="level-item">
			<p>Lobby Ambassador</p>
		</div>
	</div>
	<div class="level-right">
		<div class="level-item">
			<button class="button is-success p-5" on:click={onClick}>
				<span class="icon ">
					<i class="mdi mdi-36px mdi-phone" />
				</span>
			</button>
		</div>
	</div>
</nav>

<!-- Modal -->
{#if displayModal}
	<Modal {toggleModal} modalHeader={'Lobby Ambassador is not Available'}>
		<div>
			{#if messageIsSending}
				<div class="bulma-loader-mixin mt-4 mb-4" style="margin: auto" />
			{:else if messageIsSent}
				<div class="columns">
					<div class="column is-flex is-justify-content-center is-align-items-center">
						<div class="title mb-0 mr-4">Message Sent</div>
						<span class="icon has-text-success">
							<i class="mdi mdi-48px mdi-check" />
						</span>
					</div>
				</div>
				<div class="columns is-flex is-justify-content-center m-4">
					<p class="is-size-5">Somebody will call you shortly.</p>
				</div>
			{:else}
				<p>
					Unfortunately our lobby ambassador is not available at the moment. Please enter your name
					so we can send a message for them to call you directly here.
				</p>
				<div class="field mt-4">
					<div class="field-label is-normal">
						<label class="label has-text-left mb-1">Name</label>
					</div>
					<div class="field-body">
						<div class="field">
							<p class="control">
								<input class="input" type="text" placeholder="Your Name" on:input={handleInput} />
							</p>
						</div>
					</div>
				</div>
				<div class="buttons is-justify-content-flex-end mt-5">
					<button class="button is-danger" on:click={toggleModal}>Discard</button>
					<button class="button is-success " {disabled} on:click={send}>Send Message</button>
				</div>
			{/if}
		</div>
	</Modal>
{/if}
