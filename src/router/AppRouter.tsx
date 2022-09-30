import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HeroesRoutes } from '../heroes'
import { Login } from '../auth'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/login'/>}></Route>
        <Route path='login/*' element={
            <PublicRoute>
              {/* <Login /> */}
              <Routes>
                <Route path="/*" element={<Login/>} />

              </Routes>
            </PublicRoute>
          }>

        </Route>
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
        {/* <Route path="/*" element={<HeroesRoutes/>} /> */}
      </Routes>
    </>
  )
}
