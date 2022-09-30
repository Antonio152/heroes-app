import { render } from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { PrivateRoute } from '../../src/router/PrivateRoute'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
describe('Testing de PrivateRout', () => {
  test('Debe de mostrar el children si esta autenticado', () => {
    Storage.prototype.setItem = jest.fn()
    const valuesProvider = {
      login: jest.fn(),
      logout: jest.fn(),
      user: {
        logged: true,
        name: 'Antonio'
      }
    }
    const { getByText } = render(
      <AuthContext.Provider value={valuesProvider}>
        <MemoryRouter initialEntries={['/marvel']}>
          <PrivateRoute>
            <h1>Esto es una Ruta Privada</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(getByText('Esto es una Ruta Privada')).toBeTruthy()
    expect(localStorage.setItem).toHaveBeenCalledWith('lastRoute', '/marvel')
  })
})
