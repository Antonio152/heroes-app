import React from 'react'
import { render } from '@testing-library/react'
import { PublicRoute } from '../../src/router/PublicRoute'
import { AuthContext } from '../../src/auth'
import { MemoryRouter, Routes, Route } from 'react-router-dom'

describe('Testing en public route', () => {
  test('Si no esta autenticado debe de motrar el children', () => {
    const valuesProvider = {
      login: jest.fn(),
      logout: jest.fn(),
      user: {
        logged: false,
        name: ''
      }
    }
    const { getByText } = render(
      <AuthContext.Provider value={valuesProvider}>
        <PublicRoute>
          <h1>Esto es una Ruta publica</h1>
        </PublicRoute>
      </AuthContext.Provider>
    )
    expect(getByText('Esto es una Ruta publica')).toBeTruthy()
  })

  test('Debe de navegar si esta autenticado', () => {
    const valuesProvider = {
      login: jest.fn(),
      logout: jest.fn(),
      user: {
        logged: true,
        name: 'gg'
      }
    }
    const { getByText } = render(
      <AuthContext.Provider value={valuesProvider}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Esto es una Ruta publica</h1>
                </PublicRoute>
              }
            />
            <Route path="marvel" element={<h1>Página Marvel</h1>} />
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    )
    expect(getByText('Página Marvel')).toBeTruthy()
  })
})
