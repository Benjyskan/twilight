import type { Faction, TechType } from "./types/tech.types";

export const techTypes: TechType[] = [
  "Biotic",
  "Cybernetic",
  "Propulsion",
  "Warfare",
];
export const factions: Faction[] = ["The Arborec"];

export const apiPath = 'https://deno-vercel-serverless-functions-benjyskan.vercel.app/api'
// export const apiPath = 'http://localhost:3000/api'

// console.log('PROCESS:', process.env.VERCEL_ENV)
console.log('PROCESS:', import.meta.env)
