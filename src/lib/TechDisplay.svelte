<script lang="ts">
	import type { RessourceCost, Tech, TechType } from "src/types/tech.types";
	import bioticLogo from "../../TI4_Icons_2021/Color/General Icons/Biotic dark.png";
	import cyberneticLogo from "../../TI4_Icons_2021/Color/General Icons/Cybernetic dark.png";
	import propulsionLogo from "../../TI4_Icons_2021/Color/General Icons/Propulsion dark.png";
	import warfareLogo from "../../TI4_Icons_2021/Color/General Icons/Warfare dark.png";

	export let tech: Tech;

	let required: string[] = [];

	const assignRequired = () => {
		console.log("assignRequired tech.required:", tech.required);
		let newRequired: string[] = [];

		for (let i = 0; i < tech.required.Biotic; i++) newRequired.push(bioticLogo);
		for (let i = 0; i < tech.required.Cybernetic; i++)
			newRequired.push(cyberneticLogo);
		for (let i = 0; i < tech.required.Propulsion; i++)
			newRequired.push(propulsionLogo);
		for (let i = 0; i < tech.required.Warfare; i++)
			newRequired.push(warfareLogo);

		return newRequired;
	};

	required = assignRequired();

	console.log("in TechDisplay", tech.name, required);

	function getColor(techType: TechType) {
		let color: string;
		switch (techType) {
			case "Biotic":
				color = "green";
				break;
			case "Cybernetic":
				color = "chocolate";
				break;
			case "Propulsion":
				color = "blue";
				break;
			case "Warfare":
				color = "red";
				break;
			default:
				color = "black";
				break;
		}
		return color;
	}

	function getTechImg(type: TechType) {
		if (type === "Biotic") return bioticLogo;
		if (type === "Cybernetic") return cyberneticLogo;
		if (type === "Propulsion") return propulsionLogo;
		if (type === "Warfare") return warfareLogo;
	}
</script>

<div class="main">
	<div class="title" style="color: {getColor(tech.techType)}">{tech.name}</div>

	<div class="tech-require">
		{#each required as img}
			<div class="img-container">
				<img class="scaled-down-img" src={img} alt="altLogo" />
			</div>
		{/each}
	</div>

	<div class="description">{tech.description}</div>

	<div class="tech-provide">
		{#if tech.techType}
			<div class="img-container">
				<img
					class="scaled-down-img"
					src={getTechImg(tech.techType)}
					alt="bioticLogo"
				/>
			</div>
		{/if}
	</div>

	<button
		on:click={() => {
			required = assignRequired();
		}}>refresh</button
	>
</div>

<style lang="scss">
	.main {
		border: 1px solid black;
		width: clamp(9rem, 20vw, 18rem);
		margin-top: 0.5rem;
		margin-left: 0.5rem;
		display: grid;
		grid-template-columns: min-content 1fr min-content;
		grid-template-rows: min-content 1fr min-content;

		& > * {
			grid-column: 2;
		}

		.title {
			text-align: center;
		}

		.description {
			display: flex;
			justify-content: center;
			align-items: center;
		}

		.tech-require {
			grid-column: 1;
			grid-row: 1 / span 3;
		}
		.tech-provide {
			grid-column: -1;
			grid-row: 1 / span 3;
		}
	}

	.img-container {
		height: 1rem;
		width: 1rem;
		padding: 2px;
	}

	.scaled-down-img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}
</style>
