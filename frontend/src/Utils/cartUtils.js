export const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
}

export const updateCart = (state) => {

    state.itemsPrice = addDecimals(state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))

    // calculate the shipping prrice ( if order is over 100$ then free else 10$ shipping) 

    state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10)

    // calculate the tax price (15%) :

    state.taxPrice = addDecimals(Number((0.15 * state.itemsPrice).toFixed(2)))

    // calculate the total price : 

    state.totalPrice = addDecimals((
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
    ).toFixed(2));

    //save the cart to local storage
    localStorage.setItem("cart", JSON.stringify(state))
    return state;
}