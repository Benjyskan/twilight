<script lang="ts">
  import { techsStore } from "../stores/tech_store";
  import TechCard from "./TechCard.svelte";

  export let name: string;

  const techs = $techsStore;
  let tech = techs.find((t) => t.name === name);
  let visible = false;
  let x = 0;
  let y = 0;

  function mouseenter() {
    visible = true;
  }
  function mouseleave() {
    visible = false;
  }
  function mousemove(e: MouseEvent) {
    x = e.clientX;
    y = e.clientY;
  }
</script>

<div
  id="card_hover"
  on:mouseenter={mouseenter}
  on:mouseleave={mouseleave}
  on:mousemove={mousemove}
>
  {name}
</div>
{#if visible}
  <div id="card_preview" style={`top: ${y - 10}px; left: ${x + 10}px`}>
    {#if tech}
      <TechCard {tech} color="#bbb" />
    {:else}
      <div>not found...</div>
    {/if}
  </div>
{/if}

<style lang="scss">
  #card_hover {
    text-decoration: underline;
    cursor: help;
  }

  #card_preview {
    position: absolute;
  }
</style>
