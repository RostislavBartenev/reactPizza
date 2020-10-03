

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
}



const cart = (state = initialState, action) => {

  const newItems = {
    ...state.items
  }

  const newItem = newItems[0]


  switch (action.type) {
    case 'ADD_PIZZA_CART':
      return {
        ...state,
        items: {
          ...state.items,
          [action.payload.id]:
            !state.items[action.payload.id] ? [action.payload] :
            [...state.items[action.payload.id], action.payload],
        },
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + action.payload.price
      }
    case 'REMOVE_ALL':
      return {
        ...initialState
      }
    case 'REMOVE_GROUP':

      console.log(newItems)

      const groupTotalPrice = newItems[action.payload][0].price * newItems[action.payload].length
      const groupTotalCount = newItems[action.payload].length

      delete newItems[action.payload]



      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - groupTotalPrice,
        totalCount: state.totalCount - groupTotalCount,
      }

    case 'REMOVE_ITEM':

      const oldRemoveTotalPrice = newItems[action.payload][0].price * newItems[action.payload].length
      const oldRemoveTotalCount = newItems[action.payload].length

      console.log(newItems)

      newItems[action.payload].shift()

      console.log(newItems)

      const newTotalPrice = newItems[action.payload][0].price * newItems[action.payload].length
      const newTotalCount = newItems[action.payload].length

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - oldRemoveTotalPrice + newTotalPrice,
        totalCount: state.totalCount - oldRemoveTotalCount + newTotalCount,
      }

    case 'ADD_ITEM':

      const oldAddTotalPrice = newItems[action.payload][0].price * newItems[action.payload].length
      const oldAddTotalCount = newItems[action.payload].length

      newItems[action.payload].push(newItem)

      const newAddTotalPrice = newItems[action.payload][0].price * newItems[action.payload].length
      const newAddTotalCount = newItems[action.payload].length

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - oldAddTotalPrice + newAddTotalPrice,
        totalCount: state.totalCount - oldAddTotalCount + newAddTotalCount,
      }

    default :
      return state
  }
}

export default cart