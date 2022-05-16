<script lang="ts">
	import type { Tech, TechType, Faction } from "../types/tech.types";
	import LevelCounter from "./LevelCounter.svelte";

	export let techs: Tech[] = [];
	const techTypes: TechType[] = [
		"Biotic",
		"Cybernetic",
		"Propulsion",
		"Warfare",
	];

	const factions: Faction[] = ["The Arborec"];

	let tech: Tech = {
		name: "Neural Motivator",
		techType: "Biotic",
		description: "During the status phase, draw 2 action cards instead of 1.",
		isFactionTech: null,
		required: {},
		provide: { Biotic: 1 },
		level: 0,
	};

	let required = { ...tech.required };
	let provide = { ...tech.provide };

	const logTech = (e) => {
		console.log(tech);
	};

	const handleSubmit = (e) => {
		console.log("submit");
		let newTech: Tech = { ...tech };
		console.log("sumbit: before", newTech.required);
		newTech.required = { ...required };
		console.log("sumbit: after", newTech.required);
		newTech.provide = { ...provide };

		const find = techs.find((elem) => elem.name === newTech.name);

		if (find === undefined) techs = [...techs, newTech];
		else {
			let newTechs = techs.map<Tech>((elem) =>
				elem.name == tech.name ? newTech : elem
			);
			techs = newTechs;
		}
		console.log("newTechs:", techs);
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<span class="no-wrap">name: </span>
	<input label="label" type="text" bind:value={tech.name} />

	<span class="no-wrap">tech type:</span>
	<select name="techType" bind:value={tech.techType}>
		{#each techTypes as techType}
			<option value={techType}>{techType}</option>
		{/each}
	</select>

	<span class="no-wrap">for faction:</span>
	<select bind:value={tech.isFactionTech}>
		<option value={null}>none</option>
		{#each factions as faction}
			<option value={faction}>{faction}</option>
		{/each}
	</select>

	<span class="no-wrap">tech level:</span>
	<select bind:value={tech.level}>
		{#each [0, 1, 2, 3, 4] as level}
			<option value={level}>{level}</option>
		{/each}
	</select>

	<span class="grid-span-2 text-center">tech level required:</span>
	{#each techTypes as techType}
		<LevelCounter bind:count={required[techType]} /><span>{techType}</span>
	{/each}

	<span class="grid-span-2 text-center">tech provided:</span>
	{#each techTypes as techType}
		<LevelCounter bind:count={provide[techType]} /><span>{techType}</span>
	{/each}

	<textarea class="grid-span-2" bind:value={tech.description} />

	<!-- Buttons -->
	<button type="button" on:click={logTech}>logTech</button>
	<button
		type="button"
		on:click={() => {
			console.log({ techs });
		}}>logTechs</button
	>
	<button type="submit">submit</button>
</form>

<style>
	form {
		padding: 0.2rem;
		display: grid;
		/* margin: 1rem; */
		gap: 0.2rem;
		grid-template-columns: min-content 1fr;
		border: 1px solid black;
		width: fit-content;
	}

	.no-wrap {
		white-space: nowrap;
	}

	.grid-span-2 {
		grid-column: span 2;
	}

	.text-center {
		text-align: center;
	}
</style>
