import { ADD_TOCART, REMOVE_FROMCART } from '../actions/actionsTypes'

const INITIAL_DATA = [
       {
           id: 0,
           name: 'Cappucino',
           quantity: 0,
           rate: 50,
       },
       {
           id:1,
           name: 'Coffee Latte',
           quantity: 0,
           rate: 70,
       },
       {
           id: 2,
           name: 'Espresso',
           quantity: 0,
           rate: 80,
       },
       {
           id:3,
           name: 'Machiato',
           quantity: 0,
           rate: 60,
       },
   ]

const CartReducer = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ADD_TOCART:
      return state.map(item =>
        (item.id === action.id)
          ? { ...item, quantity: (parseInt(item.quantity)+1) }
          : item
      )
     case REMOVE_FROMCART:
      return state.map(item =>
        (item.id === action.id)
          ? { ...item, quantity: (parseInt(item.quantity)-1) }
          : item
      )
    default:
      return state
  }
}

export default CartReducer