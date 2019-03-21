export const loginUserReducer = (state=false, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.loggedIn
    default: 
      return state
  }
}