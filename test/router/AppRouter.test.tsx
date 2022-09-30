import React from 'react'

import { render } from '@testing-library/react'
import { AuthContext } from '../../src/auth'
import { MemoryRouter } from 'react-router-dom'
import { AppRouter } from '../../src/router/AppRouter'
describe('Pruebas en AppRouter', () => {
  test('debe de mostrar el login si no esta autenticado', () => {
    const valuesProvider = {
      login: jest.fn(),
      logout: jest.fn(),
      user: {
        logged: false,
        name: ''
      }
    }
    const { getAllByText } = render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={valuesProvider}>
                <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
    )
    expect(getAllByText('Login')[0]).toBeTruthy()
  })

  test('debe de mostrar el componente de marvel si esta autenticado', () => {
    const valuesProvider = {
      login: jest.fn(),
      logout: jest.fn(),
      user: {
        logged: true,
        name: 'Antonio'
      }
    }
    const { getAllByText } = render(
              <MemoryRouter initialEntries={['/login']}>
                  <AuthContext.Provider value={valuesProvider}>
                  <AppRouter/>
                  </AuthContext.Provider>
              </MemoryRouter>
    )
    expect(getAllByText('Marvel').length).toBe(2)
  })
})
