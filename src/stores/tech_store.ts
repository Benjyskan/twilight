import type { Tech } from "src/types/tech.types";
import { writable } from "svelte/store"
const { log } = console

function createTechsStore() {
  const { subscribe, set, update } = writable([])

  const addTech = (newTech: Tech) => {
    update(techs => {
      const found = techs.find((t) => t.name === newTech.name);
      log("submit, found:", found);

      if (found === undefined) return [...techs, newTech];
      else {
        return techs.map((t) => (t.name == newTech.name ? newTech : t));
      }
    })
  }

  const removeTech = (name: string) => {
    update(techs => techs.filter((tech) => tech.name !== name))
  }

  return {
    subscribe,
    addTech,
    removeTech,
  }
}

export const techsStore = createTechsStore()
