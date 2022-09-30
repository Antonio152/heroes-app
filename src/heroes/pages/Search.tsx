import React, { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components'
import { getHeroByName } from '../helpers'

export const Search = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const { q = '' } = Object.fromEntries(searchParams.entries())
  const dataHeroes = getHeroByName(q)
  const heroes = dataHeroes.map(hero => <HeroCard key={hero.id} {...hero} />)
  const showSearch = (q.trim().length === 0)
  const showError = (q.trim().length > 0) && dataHeroes.length === 0
  const { searchHero, onChangeEvent, resetForm } = useForm({
    searchHero: ''
  })
  const onSearchInput = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const lowerSearch = String(searchHero).toLocaleLowerCase().trim()
    if (lowerSearch.length <= 1) return
    navigate(`?q=${lowerSearch}`)
    resetForm()
  }

  return (
    <div>
      <h1>Buscar</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Nombre de heroe: </h4>
          <hr />
          <form onSubmit={onSearchInput}>
            <input
              type="text"
              placeholder="Superman"
              className="form-control"
              name="searchHero"
              autoComplete="hero"
              value={searchHero}
              onChange={onChangeEvent}
            />
            <button className="btn btn-info mt-3">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados:</h4>
          <hr />
          <div className={'alert alert-primary animate__animated animate__fadeIn'} style={{ display: showSearch ? '' : 'none' }}> Buscar un heroe </div>
          <div className="alert alert-danger animate__animated animate__fadeIn" style={{ display: showError ? '' : 'none' }}> No se encontro el heroe con el nombre: <b>{q}</b> </div>
          {heroes}
        </div>
      </div>
    </div>
  )
}
