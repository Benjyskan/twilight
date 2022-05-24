<script lang="ts">
  import type { Tech } from "./types/tech.types";
  import TechCard from "./lib/TechCard.svelte";
  import TechForm from "./lib/TechForm.svelte";
  import Nav from "./layouts/Nav.svelte";
  import { flip } from "svelte/animate";
  import { scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { getTechs, postTech } from "./api";
  import { techsStore } from "./stores/tech_store";
</script>

<Nav>
  <h1>TI tech editor</h1>
  <main>
    <TechForm />
    <hr />

    <div class="flex">
      {#each $techsStore as tech (tech.required)}
        <div
          animate:flip={{ duration: 300 }}
          in:scale={{ easing: quintOut, duration: 300 }}
        >
          <TechCard {tech} isDeletable />
          <!-- <TechCard {tech} {removeTech} isDeletable /> -->
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
  </main>
</Nav>

<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    padding: 1em;
    margin: 0 auto;
  }

  .flex {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  textarea#json-output {
    width: -webkit-fill-available;
    resize: vertical;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }
  }
</style>
