export const loginUserReducer = (state=false, action) => {
  switch(action.type) {
    case 'LOGIN_USER':
    console.log('hello')
      return action.loggedIn
    default: 
    console.log(action)
      return state
  }
}