import * as cartService from "./services/cart.js";
import items from "./data/items.js";

const cart = [];
const desejos = [];

await cartService.addItemToCart(cart, items[0]);
await cartService.addItemToCart(cart, items[1]);

console.log(await cartService.calculateTotal(cart));









