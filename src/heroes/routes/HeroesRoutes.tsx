import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar, Dc, Marvel, Search, Hero } from '..'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className='container'>
          <Routes>
            <Route path="marvel" element={<Marvel/>} />
            <Route path="dc" element={<Dc/>} />
            {/* Nuevas rutas */}
            <Route path="search" element={<Search/>} />
            <Route path="hero/:id" element={<Hero/>} />
          </Routes>
        </div>
    </>
  )
}
