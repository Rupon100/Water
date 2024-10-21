

const getStoredCaet = () => {
    const localStorageCartString = localStorage.getItem('cart');
    if(localStorageCartString){
        return JSON.parse(localStorageCartString);
    }
    return []
}

const saveCartToLs = (cart) => {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString)
}

const addToLs = (id) => {
    const cart = getStoredCaet();
    cart.push(id);
    //savetoLocal storage
    saveCartToLs(cart);
}

const removeItem = (id) => {
    const cart = getStoredCaet();
    const remaining = cart.filter(item => item !== id)
    saveCartToLs(remaining)
}

export {addToLs, getStoredCaet, removeItem}





