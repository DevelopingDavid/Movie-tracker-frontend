export const loginUserReducer = (state={}, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { id: action.id, name: action.name };
    default: 
      return state;
  }
}