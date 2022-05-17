<script lang="ts">
	const { log } = console;
	import type { Tech, TechType, Faction } from "../types/tech.types";
	import { techTypes, factions } from "../const";
	import LevelCounter from "./LevelCounter.svelte";

	export let techs: Tech[] = [];

	let tech: Tech = {
		name: "Neural Motivator",
		techType: "Biotic",
		description: "During the status phase, draw 2 action cards instead of 1.",
		isFactionTech: null,
		required: {},
		level: 0,
	};

	const setTechType = (techType: TechType) => (e: Event) => {
		tech.techType = techType;
	};

	const handleSubmit = (e: SubmitEvent) => {
		log("submit");
		let newTech: Tech = { ...tech };

		const find = techs.find((elem) => elem.name === newTech.name);

		if (find === undefined) techs = [...techs, newTech];
		else {
			let newTechs = techs.map((elem) =>
				elem.name == tech.name ? newTech : elem
			);
			techs = newTechs;
		}
		log("submit end, techs:", techs);
	};
</script>

<form on:submit|preventDefault={handleSubmit}>
	<!-- Name -->
	<span class="no-wrap">name: </span>
	<input label="label" type="text" bind:value={tech.name} />

	<!-- Tech Type -->
	<span class="grid-span-2">tech type: {tech.techType}</span>
	<div class="grid-span-2 flex">
		{#each techTypes as techType}
			<button on:click|preventDefault={setTechType(techType)}>
				{techType}
			</button>
		{/each}
		<button on:click|preventDefault={setTechType(null)}>null</button>
	</div>

	<!-- Faction -->
	<span class="no-wrap">for faction:</span>
	<select bind:value={tech.isFactionTech}>
		<option value={null}>none</option>
		{#each factions as faction}
			<option value={faction}>{faction}</option>
		{/each}
	</select>

	<!-- Level ? -->
	<span class="no-wrap">tech level:</span>
	<select bind:value={tech.level}>
		{#each [0, 1, 2, 3, 4] as level}
			<option value={level}>{level}</option>
		{/each}
	</select>

	<!-- Required -->
	<span class="grid-span-2">tech level required:</span>
	{#each techTypes as techType}
		<LevelCounter bind:count={tech.required[techType]} /><span>{techType}</span>
	{/each}

	<!-- Description -->
	<textarea class="grid-span-2" bind:value={tech.description} />

	<!-- Buttons -->
	<div class="grid-span-2 text-center">
		<button on:click|preventDefault={() => log({ tech })}>logTech</button>
		<button on:click|preventDefault={() => log({ techs })}>logTechs</button>
		<button type="submit">submit</button>
	</div>
</form>

<style>
	form {
		padding: 0.2rem;
		display: grid;
		gap: 0.2rem;
		grid-template-columns: min-content 1fr;
		border: 1px solid black;
		width: min-content;
	}

	.flex {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
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
