export const initialState = {
    cart: [],
    user: null,
}

export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0)


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // Logic for adding item to cart
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case 'EMPTY_BASKET':
            return {
                ...state,
                cart: []
            }
        
        case 'REMOVE_FROM_CART':
            // Logic for removing item from cart
            const newCart = [...state.cart]

            const index = state.cart.findIndex(
                item => item.id === action.payload
            )

            if (index >= 0)
                newCart.splice(index, 1)
            else
                console.warn(`can't remove product as ID ${action.payload} is not available`)

            return {
                ...state,
                cart: newCart
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;