import React from 'react'
import { Link } from 'react-router-dom'
interface heroCardProps {
  id: string;
  superhero: string;
  publisher: string;
  alterEgo: string;
  firstAppearance: string;
  characters: string;
}
export const HeroCard = ({
  id,
  superhero,
  publisher,
  alterEgo,
  firstAppearance,
  characters
}: heroCardProps) => {
  const vCharacters = characters.split(',').filter(character => character !== alterEgo)
  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img src={`/assets/${id}.jpg`} alt={superhero} className="card-img" />
          </div>
          <div className="col-8">
            <div className="card-body">
                <h5 className='card-title'>{superhero}</h5>
                <p className='card-text'>{alterEgo}</p>
                <p>{vCharacters}</p>
                <p className='card-text'>
                  <small className='text-muted'>{firstAppearance}</small>
                </p>
                <Link to={`/hero/${id}`}>
                 Mas ...
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
