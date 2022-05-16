<script lang="ts">
  // import logo from "./assets/svelte.png";
  import TechDisplay from "./lib/TechDisplay.svelte";
  import TechForm from "./lib/TechForm.svelte";
  import type { Tech } from "./types/tech.types";

  let techs: Tech[] = [];
</script>

<main>
  <h1>Hello Typescript!</h1>

  <TechForm bind:techs />
  <button
    on:click={() => {
      console.log("techs before", techs);
      techs = [...techs];
      console.log("techs after", techs);
    }}>refresh</button
  >
  {#each techs as tech}
    <div>
      <hr />
      <TechDisplay {tech} />
      {JSON.stringify(tech)}
    </div>
  {/each}
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    /* display: flex; */
    /* text-align: center; */
    padding: 1em;
    margin: 0 auto;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
