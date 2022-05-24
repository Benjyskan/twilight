export type TechType = "Biotic" | "Cybernetic" | "Propulsion" | "Warfare"
export type Faction = "The Arborec" | "The L1Z1X"

export type RessourceCost = [Biotic: number, Cybernetic: number, Propulsion: number, Warfare: number]

export type Tech = {
  techType: TechType | null
  name: string
  description: string
  required: RessourceCost
  isFactionTech: Faction | null
}

export type Strat = {
  link: string,
  name: string,
  color: string,
  initiative: number,
  primary_abilities: string[],
  secondary_abilities: string[]
}
