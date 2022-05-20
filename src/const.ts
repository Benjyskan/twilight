import type { Faction, TechType } from "./types/tech.types";

export const techTypes: TechType[] = [
	"Biotic",
	"Cybernetic",
	"Propulsion",
	"Warfare",
];
export const factions: Faction[] = ["The Arborec"];

// export const api = 'https://deno-vercel-serverless-functions-benjyskan.vercel.app/api'
export const apiPath = 'http://localhost:3000/api'

// console.log('PROCESS:', process)