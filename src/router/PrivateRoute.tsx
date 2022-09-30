import React, { PropsWithChildren, useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../auth'

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { user } = useContext(AuthContext)
  const { pathname, search } = useLocation()
  const lastPath = pathname + search
  localStorage.setItem('lastRoute', lastPath)
  return (
    <>
      {!user
        ? (
        <Navigate to="/login" />
          )
        : user.logged
          ? (
              children
            )
          : (
        <Navigate to="/login" />
            )}
    </>
  )
}
