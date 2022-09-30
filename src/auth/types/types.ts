export const types = {
  login: 'Login',
  logout: 'Logout'
}

export interface StateProps{
    logged:boolean,
    name:string
}
export interface AuthReducerProps{
    type:string,
    payload:StateProps
}
