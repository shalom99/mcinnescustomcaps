import { CartItem } from "../types";

export const calculateTotal = (cartItems: CartItem[]): number => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.subtotal;
    });
    return total;
  };



