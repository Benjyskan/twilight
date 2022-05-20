<script lang="ts">
  import type { Tech } from "./types/tech.types";
  import TechCard from "./lib/TechCard.svelte";
  import TechForm from "./lib/TechForm.svelte";
  import { flip } from "svelte/animate";
  import { scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { getTechs, postTech } from "./api";

  let techs: Tech[] = [];
</script>

<div class="main">
  <h1>TI tech editor</h1>

  <TechForm bind:techs />

  <div class="flex">
    {#each techs as tech (tech.required)}
      <div
        animate:flip={{ duration: 300 }}
        in:scale={{ easing: quintOut, duration: 300 }}
      >
        <TechCard {tech} />
      </div>
    {/each}
  </div>
  <hr />
  <button on:click={getTechs}>get techs</button>
  <button on:click={postTech}>post techs</button>
  <hr />
  {JSON.stringify(techs)}
</div>

<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .main {
    padding: 1em;
    margin: 0 auto;
  }

  .flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
