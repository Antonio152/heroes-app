import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers'
import { heroListProps } from '../types'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publisher }:heroListProps) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher).map(hero => <HeroCard key={hero.id} {...hero} />), [publisher])
  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {heroes}
    </div>
  )
}
