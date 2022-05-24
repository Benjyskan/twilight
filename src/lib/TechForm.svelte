<script lang="ts">
  const { log } = console;
  import type { Tech, TechType } from "../types/tech.types";
  import { techTypes, factions } from "../const";
  import LevelCounter from "./LevelCounter.svelte";
  import TechCard from "./TechCard.svelte";
  import { techsStore } from "../stores/tech_store";

  let nameInput: HTMLInputElement;

  let tech: Tech = {
    name: "Neural Motivator",
    techType: "Biotic",
    description: "During the status phase, draw 2 action cards instead of 1.",
    isFactionTech: null,
    required: [0, 0, 0, 0],
  };

  const setTechType = (techType: TechType) => (e: Event) => {
    tech.techType = techType;
  };

  const handleSubmit = () => {
    if (!tech.name) return;

    let newTech: Tech = { ...tech };
    newTech.required = [...tech.required];

    // Add tech.
    techsStore.addTech(newTech);

    // Refocus nameInput
    nameInput.focus();
    nameInput.select();
  };

  // run each time `tech.name` change (every time `tech` change in reality)
  $: tech.name = tech.name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
</script>

<div class="main-wrapper">
  <form on:submit|preventDefault={handleSubmit}>
    <!-- Name -->
    <span class="no-wrap">name: </span>
    <input
      on:keydown={(e) => {
        if (e.key === "Enter") handleSubmit();
      }}
      label="label"
      type="text"
      bind:value={tech.name}
      bind:this={nameInput}
    />

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
      {#each factions as value}
        <option {value}>{value}</option>
      {/each}
    </select>

    <!-- Required -->
    <span class="grid-span-2">tech level required:</span>
    {#each techTypes as techType, i}
      <LevelCounter bind:count={tech.required[i]} /><span>{techType}</span>
    {/each}

    <!-- Description -->
    <textarea class="grid-span-2" bind:value={tech.description} />

    <!-- Buttons -->
    <div class="grid-span-2 text-center">
      <button on:click|preventDefault={() => log({ tech })}>logTech</button>
      <button type="submit">submit</button>
    </div>
  </form>

  <div>
    <TechCard {tech} />
  </div>
</div>

<style lang="scss">
  form {
    padding: 0.2rem;
    display: grid;
    gap: 0.2rem;
    grid-template-columns: min-content 1fr;
    border: 1px solid black;
    width: min-content;
    min-width: min-content;
    min-height: min-content;
    resize: both; // add 'resize draggable'
    overflow: auto; // add 'resize draggable'
  }

  .main-wrapper {
    // background: red;
    display: flex;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;

    & > * {
      flex-grow: 1;
    }
  }

  textarea {
    resize: vertical;
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
