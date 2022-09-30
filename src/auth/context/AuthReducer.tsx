import { AuthReducerProps, StateProps, types } from '../types/types'
const initialState:StateProps = {
  logged: false,
  name: ''
}
export const authReducer = (state:any = initialState, { type, payload }:AuthReducerProps) => {
  switch (type) {
    case types.login:
      return {
        ...state,
        logged: true,
        name: payload.name
      }

    case types.logout:
      return initialState

    default:
      return state
  }
}
