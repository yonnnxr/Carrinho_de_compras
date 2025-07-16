// Adicionar item ao carrinho
async function addItemToCart(cart,item) {
    // Garante que o item possua o campo subtotal antes de ser adicionado
    const newItem = {
        ...item,
        subtotal: (typeof item.subtotal === "number" ? item.subtotal : item.price * item.quantity)
    };
    cart.push(newItem);
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
        // Recalcula o subtotal para refletir a nova quantidade
        cart[index].subtotal = cart[index].price * cart[index].quantity;
        // Remove o item se a quantidade chegar a zero ou negativa
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
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
