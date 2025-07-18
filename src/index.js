import * as cartService from "./services/cart.js";
import items from "./data/items.js";

const cart = [];

(async () => {
  await cartService.interactiveCart(cart, items);
})();









