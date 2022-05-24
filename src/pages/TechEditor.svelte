<script lang="ts">
  import TechForm from "../lib/TechForm.svelte";
  import { flip } from "svelte/animate";
  import { scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { getTechs, postTech } from "../api";
  import { techsStore } from "../stores/tech_store";
  import TechCard from "../lib/TechCard.svelte";
</script>

<h1>TI tech editor</h1>
<div id="main">
  <TechForm />
  <hr />

  <div class="flex">
    {#each $techsStore as tech (tech.required)}
      <div
        class="wrapper"
        animate:flip={{ duration: 300 }}
        in:scale={{ easing: quintOut, duration: 300 }}
      >
        <TechCard {tech} isDeletable />
      </div>
    {/each}
  </div>

  {#if $techsStore.length}
    <hr />
    <button on:click={getTechs}>get techs</button>
    <button on:click={postTech}>post techs</button>
    <hr />
  {/if}

  <textarea id="json-output">{JSON.stringify($techsStore)}</textarea>
</div>

<style>
  #main {
    padding: 1em;
    margin: 0 auto;
  }

  .flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .wrapper {
    padding: 0.2rem;
  }

  textarea#json-output {
    width: -webkit-fill-available;
    resize: vertical;
  }
</style>
