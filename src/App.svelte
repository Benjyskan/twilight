<script lang="ts">
  import TechCard from "./lib/TechCard.svelte";
  import TechForm from "./lib/TechForm.svelte";
  import type { Tech } from "./types/tech.types";

  let techs: Tech[] = [];
</script>

<div class="main">
  <h1>TI tech editor</h1>

  <TechForm bind:techs />

  <div class="flex">
    {#each techs as tech (tech.required)}
      <TechCard {tech} />
    {/each}
  </div>
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
