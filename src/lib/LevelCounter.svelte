<script lang="ts">
	export let count = 0;

	const min = 0;
	const max = 4;

	const increment = () => {
		if (count < max) count += 1;
	};
	const decrement = () => {
		if (count > min) count -= 1;
	};
</script>

<span>
	<button on:click|preventDefault={decrement}>-</button>
	{count}
	<button on:click|preventDefault={increment}>+</button>
</span>

<style>
	span {
		white-space: nowrap;
	}
</style>
