// Adicionar item ao carrinho
async function addItemToCart(cart,item) {
    cart.push(item);
}
// Remover item do carrinho
async function removeItemFromCart(cart, item) {
    const index = cart.findIndex((i) => i.name === item.name);
    if (index !== -1) {
        cart.splice(index, 1);
    }
}
// deletar uma unidade do item
async function deleteItemFromCart(cart, item) {
    const index = cart.findIndex((i) => i.name === item.name);
    if (index !== -1) {
        cart[index].quantity--;
    }
}
// Calcular o total do carrinho
async function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.subtotal, 0);
}
export {
    addItemToCart,
    removeItemFromCart,
    deleteItemFromCart,
    calculateTotal
}
