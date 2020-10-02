
export const setLoaded = payload => ({
  type: 'SET_LOADED',
  payload,
})

export const fetchPizzas = (category, sortBy) => dispatch => {

  dispatch(setLoaded( false))

  fetch(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(resp => resp.json())
    .then(data => dispatch(setPizzas(data)))

}

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
})
