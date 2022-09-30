import { createContext } from 'react'

export const AuthContext = createContext({
  login: (name:string) => {},
  logout: () => {},
  user: {
    logged: false,
    name: ''
  }
})
