<script lang="ts">
	import type { RessourceCost, Tech, TechType } from "src/types/tech.types";
	import bioticLogo from "../assets/Biotic light.png";
	import cyberneticLogo from "../assets/Cybernetic light.png";
	import propulsionLogo from "../assets/Propulsion light.png";
	import warfareLogo from "../assets/Warfare light.png";

	export let tech: Tech;
	export let isDeletable: boolean = false;
	export let removeTech: ((name: string) => void) | undefined = undefined;

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

	// $: console.log(tech.description.split("\n"));
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

	<div class="description">
		<ul>
			{#each tech.description.split("\n") as line}
				<li>{line}</li>
			{/each}
		</ul>
	</div>

	<div class="tech-provide">
		{#if isDeletable}
			<button on:click={() => removeTech(tech.name)} class="delete-btn">
				X
			</button>
		{/if}
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
		border-radius: 6px;
		aspect-ratio: 3/4;
		width: 10rem;
		margin-top: 0.5rem;
		margin-left: 0.5rem;
		display: grid;
		grid-template-columns: min-content 1fr min-content;
		grid-template-rows: min-content 1fr;

		.title {
			text-align: center;
			// border-bottom: 1px solid black;
		}

		.description {
			overflow: auto;
			overflow-wrap: break-word;
			font-size: small;

			> ul {
				list-style: inside;
				margin: 0;
				padding: 0.3rem;
				> ::marker {
					content: "- ";
				}
			}
		}

		.tech-require {
			grid-column: 1;
			grid-row: 1 / span 3;
		}

		.tech-provide {
			grid-column: 3;
			grid-row: 1 / span 3;
			.delete-btn {
				background: none;
				border: none;
				color: #ddd;
				&:hover {
					color: #222;
				}
			}
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
