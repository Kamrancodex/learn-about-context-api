import { createContext } from "react";

export const CartContext = createContext({
  items: [],
  onAddToCart: () => {},
  onUpdateItemQuantity: () => {},
  //no use but needed for autocompletiions
});
