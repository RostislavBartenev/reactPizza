export const addPizzaToCart = pizzaObj => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj
})

export const removeAll = () => ({
  type: 'REMOVE_ALL',
})

export const removeGroup = id => ({
  type: 'REMOVE_GROUP',
  payload: id
})

export const removeItem = id => ({
  type: 'REMOVE_ITEM',
  payload: id
})

export const addItem = id => ({
  type: 'ADD_ITEM',
  payload: id
})