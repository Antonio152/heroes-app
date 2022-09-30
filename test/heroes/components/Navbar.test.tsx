import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { AuthContext } from '../../../src/auth'
import { MemoryRouter } from 'react-router-dom'
import { AppRouter } from '../../../src/router/AppRouter'
const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate
}))
describe('Testing del componente Navbar', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('deberia de mostrar el nombre del usuario en el navbar', () => {
    const valuesProvider = {
      login: jest.fn(),
      logout: jest.fn(),
      user: {
        logged: true,
        name: 'Antonio'
      }
    }
    const { getByText } = render(
      <MemoryRouter initialEntries={['/login']}>
        <AuthContext.Provider value={valuesProvider}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    )
    expect(getByText('Antonio')).toBeTruthy()
  })

  test('deberia de mandar a llamar la función de Logout', () => {
    const valuesProvider = {
      login: jest.fn(),
      logout: jest.fn(),
      user: {
        logged: true,
        name: 'Antonio'
      }
    }
    const { getByText } = render(
        <MemoryRouter initialEntries={['/login']}>
          <AuthContext.Provider value={valuesProvider}>
            <AppRouter />
          </AuthContext.Provider>
        </MemoryRouter>
    )
    fireEvent.click(getByText('Logout'))
    expect(valuesProvider.logout).toHaveBeenCalled()
  })

  test('deberia de mandar a llamar la función de navigate y redirigir al login', () => {
    const valuesProvider = {
      login: jest.fn(),
      logout: jest.fn(),
      user: {
        logged: true,
        name: 'Antonio'
      }
    }
    const { getByText } = render(
        <MemoryRouter initialEntries={['/login']}>
          <AuthContext.Provider value={valuesProvider}>
            <AppRouter />
          </AuthContext.Provider>
        </MemoryRouter>
    )
    fireEvent.click(getByText('Logout'))
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/login', {
      replace: true
    })
  })
})
