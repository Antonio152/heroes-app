import { heroes } from '../data/heroes'

export const getHeroByName = (name:string) => {
  const nameLower = name.toLocaleLowerCase().trim()
  if (nameLower.length === 0) return []
  return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(nameLower))
}
