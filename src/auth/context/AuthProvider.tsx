import React, { PropsWithChildren, useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './AuthReducer'

const init = () => {
  const user = JSON.parse(localStorage.getItem('user')!)
  return user
}
export const AuthProvider = ({ children }:PropsWithChildren) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init)
  const onlogin = (name:string = '') => {
    const action = {
      type: types.login,
      payload: {
        logged: true,
        name
      }
    }
    localStorage.setItem('user', JSON.stringify(action.payload))
    dispatch(action)
  }
  const onLogout = () => {
    localStorage.removeItem('user')
    const action = { type: types.logout, payload: { logged: false, name: '' } }
    dispatch(action)
  }
  return (
    <AuthContext.Provider value={{ login: onlogin, logout: onLogout, user: authState }}>
        {children}
    </AuthContext.Provider>
  )
}
