<script lang="ts">
  import Nav from "./layouts/Nav.svelte";
  import CardPrev from "./lib/CardPrev.svelte";
  import TechEditor from "./pages/TechEditor.svelte";
  import { techsStore } from "./stores/tech_store";

  let page = document.location.hash;

  window.onpopstate = (event) => {
    page = document.location.hash;
  };
</script>

<Nav>
  <a href="#tech_editor">Tech Editor</a>
  <a href="#guide">Guide</a>
</Nav>
{#if page === "#tech_editor"}
  <TechEditor />
{:else if page === "#guide"}
  <div class="guide">
    <div class="container">
      <h2>Starting Units</h2>
      <ul>
        <li>1 Dreadnought</li>
        <li>1 Carrier</li>
        <li>3 Fighter</li>
        <li>5 Infantry</li>
        <li>1 Space Dock</li>
        <li>1 PDS</li>
      </ul>
    </div>

    <div class="container">
      <h2>Starting Techs</h2>
      <ul>
        <li><CardPrev name="Neural Motivator" /></li>
        <li><CardPrev name="Plasma Scoring" /></li>
      </ul>
    </div>

    <div class="container">
      <h2>Faction Abilities</h2>
      <ul>
        <li>
          <strong>ASSIMILATE</strong>: When you gain control of a planet,
          replace each PDS and space dock that is on that planet with a matching
          unit from your reinforcements.
        </li>
        <li>
          <strong>HARROW</strong>: At the end of each round of ground combat,
          your ships in the active system may use their Bombardment abilities
          against your opponent's ground forces on the planet.
        </li>
      </ul>
    </div>

    <div class="container">
      <h2>Factions Techs</h2>
      <ul>
        <li>Inhericance Systems</li>
      </ul>
    </div>

    <div class="container">
      <h2>Faction Specific Units</h2>
      <ul>
        <li>Super-DreadNought I</li>
        <li>Super-DreadNought II</li>
      </ul>
    </div>

    <div class="container">
      <h2>Faction Specific Units</h2>
      <p>L1Z1X Flagship</p>
    </div>
  </div>

  <textarea>{JSON.stringify($techsStore)}</textarea>
{:else}
  <p>not found...</p>
{/if}

<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .guide {
    display: flex;
    flex-wrap: wrap;
    & > .container {
      max-width: 30vw;
      border: 1px solid black;
      /* border-radius: 10px; */
      padding: 1rem;
      margin: 0.2rem;
    }
  }

  textarea {
    width: 100%;
  }
</style>
