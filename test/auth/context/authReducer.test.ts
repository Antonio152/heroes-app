import { authReducer } from '../../../src/auth/context'
import { types } from '../../../src/auth/types/types'
describe('Testing de componente context', () => {
  test('Deberia de retornar el estado por defecto', () => {
    const initialState = {
      logged: false,
      name: 'prueba'
    }
    const action = {
      type: '',
      payload: initialState
    }
    const response = authReducer(initialState, action)
    expect(response).toBe(initialState)
  })
  // debe de llamar el login
  test('deberia de ejecutar la función de Login', () => {
    const initialState = {
      logged: false,
      name: 'prueba'
    }
    const action = {
      type: types.login,
      payload: {
        logged: true,
        name: 'Antonio'
      }
    }
    const response = authReducer(initialState, action)
    expect(response).toEqual({ logged: true, name: 'Antonio' })
  })
  // debe de hacer logged
  test('deberia de ejecutar la función de Logout', () => {
    const initialState = {
      logged: false,
      name: ''
    }
    const action = {
      type: types.logout,
      payload: {
        logged: true,
        name: 'Antonio'
      }
    }
    const response = authReducer(initialState, action)
    expect(response).toEqual(initialState)
  })
})
