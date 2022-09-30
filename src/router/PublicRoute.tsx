import React, { PropsWithChildren, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../auth'

export const PublicRoute = ({ children }: PropsWithChildren) => {
  const { user } = useContext(AuthContext)
  return (
    <>
      {!user
        ? (
            children
          )
        : !user.logged
            ? (
                children
              )
            : (
                <Navigate to="/marvel" />
              )}
    </>
  )
}
