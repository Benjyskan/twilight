<script lang="ts">
	import type { RessourceCost, Tech, TechType } from "src/types/tech.types";
	import bioticLogo from "../../TI4_Icons_2021/Color/General Icons/Biotic dark.png";
	import cyberneticLogo from "../../TI4_Icons_2021/Color/General Icons/Cybernetic dark.png";
	import propulsionLogo from "../../TI4_Icons_2021/Color/General Icons/Propulsion dark.png";
	import warfareLogo from "../../TI4_Icons_2021/Color/General Icons/Warfare dark.png";

	export let tech: Tech;
	// export let requiredCost: RessourceCost;

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
		// for (let i = 0; i < tech.required.Biotic; i++) required.push(bioticLogo);
		// for (let i = 0; i < tech.required.Cybernetic; i++)
		// 	required.push(cyberneticLogo);
		// for (let i = 0; i < tech.required.Propulsion; i++)
		// 	required.push(propulsionLogo);
		// for (let i = 0; i < tech.required.Warfare; i++) required.push(warfareLogo);
		return newRequired;
	};

	required = assignRequired();

	// for (let i = 0; i < requiredCost.Biotic; i++) required.push(bioticLogo);
	// for (let i = 0; i < requiredCost.Cybernetic; i++)
	// 	required.push(cyberneticLogo);
	// for (let i = 0; i < requiredCost.Propulsion; i++)
	// 	required.push(propulsionLogo);
	// for (let i = 0; i < requiredCost.Warfare; i++) required.push(warfareLogo);

	console.log("in TechDisplay", tech.name, required);

	let color: string;
	switch (tech.techType) {
		case "Biotic":
			color = "green";
			break;
		case "Cybernetic":
			color = "yellow";
			break;
		case "Propulsion":
			color = "blue";
			break;
		case "Warfare":
			color = "red";
			break;
	}
</script>

<main>
	{#each required as img}
		<div class="img-container">
			<img class="scaled-down-img" src={img} alt="altLogo" />
		</div>
	{/each}
	<p style="color: {color}">{tech.name}</p>
	<div class="img-container">
		<img class="scaled-down-img" src={bioticLogo} alt="bioticLogo" />
	</div>
	<button
		on:click={() => {
			// tech = {...tech}
			required = assignRequired();
			console.log("TechDisplay:", tech);
			console.log("TechDispay required:", required);
		}}>refresh</button
	>
</main>

<style>
	main {
		border: 1px solid black;
		display: flex;
	}

	.img-container {
		height: 30px;
		width: 30px;
		border: 1px solid black;
	}

	.scaled-down-img {
		height: 100%;
		width: 100%;
		object-fit: contain;
	}
</style>
