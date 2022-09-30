import { types } from '../../../src/auth/types/types'

describe('testing de parametros de reducer', () => {
  test('deberia de regresar types validos', () => {
    expect(types).toEqual({
      login: 'Login',
      logout: 'Logout'
    }
    )
  })
})
