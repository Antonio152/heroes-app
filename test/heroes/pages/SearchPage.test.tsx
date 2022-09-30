import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Search } from '../../../src/heroes/pages/Search'
const mockedUsedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate
}))
describe('Testing de componente de SearchPage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  test('Debe de renderizarse con los valores por defecto', () => {
    const { getByText, getByPlaceholderText } = render(
        <MemoryRouter>
            <Search/>
        </MemoryRouter>
    )
    expect(getByText('Buscar')).toBeTruthy()
    expect(getByPlaceholderText('Superman')).toHaveProperty('value', '')
  })
  test('Debe de mostrar a Superman', () => {
    const { getByText, getByRole } = render(
        <MemoryRouter initialEntries={['/search?q=superman']}>
            <Search/>
        </MemoryRouter>
    )
    expect(getByText('Superman')).toBeTruthy()
    expect(getByRole('img')).toHaveProperty('src', 'http://localhost/assets/dc-superman.jpg')
    expect(getByText('Mas ...')).toHaveProperty('href', 'http://localhost/hero/dc-superman')
    expect(getByText('Buscar un heroe').style.display).toContain('none')
  })
  test('debe de mostrar un error si no se encuentrea el hero', () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/search?q=xxxx']}>
            <Search/>
        </MemoryRouter>
    )
    expect(getByText('xxxx')).toBeTruthy()
    expect(getByText('No se encontro el heroe con el nombre:').style.display).toContain('')
  })
  test('debe de llamar el navigate a la pantalla nueva', () => {
    const { getByPlaceholderText, getByText } = render(
        <MemoryRouter initialEntries={['/search']}>
            <Search/>
        </MemoryRouter>
    )
    fireEvent.change(getByPlaceholderText('Superman'), { target: { name: 'searchHero', value: 'Batman' } })
    fireEvent.click(getByText('Search'))
    expect(mockedUsedNavigate).toHaveBeenCalledWith('?q=batman')
  })
})
