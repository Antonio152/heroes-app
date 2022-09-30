import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers'

export const Hero = () => {
  const { id } = useParams()
  /* useMemo: Memorizar valores,
  useCallBack: Memorizar funciones */
  const hero = useMemo(() => getHeroById(id!), [id])

  if (id?.includes('dc') && !hero) {
    return <Navigate to='/dc'/>
  } else if (id?.includes('marvel') && !hero) {
    return <Navigate to='/marvel'/>
  }
  const navigate = useNavigate()
  const onNavigateBack = () => {
    if (id?.includes('dc')) {
      navigate('/dc', {
        replace: true
      })
    }
    navigate('/marvel', {
      replace: true
    })
  }

  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img
          src={`/assets/${id}.jpg`}
          alt={hero?.superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft' />
      </div>
      <div className="col-8">
        <h3>{hero?.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b> {hero?.alterEgo}</li>
          <li className='list-group-item'><b>Publisher:</b> {hero?.publisher}</li>
          <li className='list-group-item'><b>First Appareance:</b> {hero?.firstAppearance}</li>
        </ul>
        <h5 className='mt-4'>Caracters</h5>
        <p>{hero?.characters}</p>
        <button className='btn btn-info' onClick={onNavigateBack}>Regresar</button>
      </div>
    </div>
  )
}
