import CartActionTypes from "./actions-types";
const initialState = {
    products : [],
    productsTotalPrice: 0
};

const cartReducer = (state =initialState, action ) =>{
    switch (action.type){
        case CartActionTypes.ADD_PRODUCT:
            //verificar se o produto ja esta no carrinho
            const productIsAlreadyInCart = state.products.some(
                (product) => product.id === action.payload.id
            )
            //se ele estiver deve aumentar a quantidade dele
            if(productIsAlreadyInCart){
                return {
                    ...state, 
                    products : state.products.map((product) =>
                 product.id===action.payload.id 
                    ? {...product, quantity: product.quantity + 1} : product
                )
                }
            }
            //se ele nao estiver adicona-lo
            return {...state, products: [...state.products ,{...action.payload, quantity:1} ]}
           
        default:
            return state
    }

}
export default cartReducer;