export type TechType = "Biotic" | "Cybernetic" | "Propulsion" | "Warfare"
export type Faction = "The Arborec"

// export type RessourceCost = { type: TechType, cost: number }[]
export type RessourceCost = {
	Biotic?: number
	Cybernetic?: number
	Propulsion?: number
	Warfare?: number
}

export type Tech = {
	// techType: TechType
	techType: TechType | null
	name: string
	description: string
	required: RessourceCost
	level: number
	isFactionTech: Faction | null
}