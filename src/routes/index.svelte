<script lang="ts">
	import { onMount } from "svelte";

	let isPushEnabled = true;
	let isButtonDisabled = true;

	const load = async () => {
		let sw = await navigator.serviceWorker.register('./sw.js');
		console.log(sw)
	}

	const subscribe = async () => {
		let sw = await navigator.serviceWorker.ready;
		let push = sw.pushManager.subscribe({
			userVisibleOnly: true,
			applicationServerKey: 'BBBOb2OcAhdShgXwN66yMx-_Z-fKY6L7nAd941qNOV9DXQFIs58UKU5HK7JCEIt5yUHXqFApWC9AfCc4eFOXK4o'
		})
		console.log(JSON.stringify(push))
	}

	onMount(() => {
		load();
	})
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<button on:click={subscribe}>Push the button</button>
</section>
