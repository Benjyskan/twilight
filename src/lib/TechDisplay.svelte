<script lang="ts">
	import type { RessourceCost, Tech, TechType } from "src/types/tech.types";
	import bioticLogo from "../assets/Biotic light.png";
	import cyberneticLogo from "../assets/Cybernetic light.png";
	import propulsionLogo from "../assets/Propulsion light.png";
	import warfareLogo from "../assets/Warfare light.png";

	export let tech: Tech;

	const assignRequired = () => {
		let newRequired: string[] = [];

		for (let i = 0; i < tech.required[0]; i++) newRequired.push(bioticLogo);
		for (let i = 0; i < tech.required[1]; i++) newRequired.push(cyberneticLogo);
		for (let i = 0; i < tech.required[2]; i++) newRequired.push(propulsionLogo);
		for (let i = 0; i < tech.required[3]; i++) newRequired.push(warfareLogo);

		return newRequired;
	};

	let requiredLogos = [];
	$: tech, (requiredLogos = assignRequired());

	function getTechColor(type: TechType) {
		if (type === "Biotic") return "green";
		if (type === "Cybernetic") return "chocolate";
		if (type === "Propulsion") return "blue";
		if (type === "Warfare") return "red";
		else return "black";
	}

	function getTechImg(type: TechType) {
		if (type === "Biotic") return bioticLogo;
		if (type === "Cybernetic") return cyberneticLogo;
		if (type === "Propulsion") return propulsionLogo;
		if (type === "Warfare") return warfareLogo;
	}
</script>

<div class="main">
	<div class="title" style:color={getTechColor(tech.techType)}>{tech.name}</div>

	<div class="tech-require">
		{#each requiredLogos as src}
			<div class="img-container">
				<img class="scaled-down-img" {src} alt="altLogo" />
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
</div>

<style lang="scss">
	.main {
		border: 1px solid black;
		// width: clamp(9rem, 20vw, 18rem);
		// aspect-ratio: 355/133;
		aspect-ratio: 3/4;
		width: 10rem;
		margin-top: 0.5rem;
		margin-left: 0.5rem;
		display: grid;
		grid-template-columns: min-content 1fr min-content;
		grid-template-rows: min-content 1fr;

		& > * {
			grid-column: 2;
		}

		.title {
			text-align: center;
			border-bottom: 1px solid black;
		}

		.description {
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: small;
			text-align: center;
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
