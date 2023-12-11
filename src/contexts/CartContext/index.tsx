"use client";

import { createContext, useContext, useState } from "react";

import {
  CartContextProviderProps,
  CartContextType,
  CartItem,
} from "./interface";

const CartContext = createContext<CartContextType>({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function addToCart(productId: number) {
    setCartItems(state => {
      const productInCart = state.some(
        product => product.productId === productId,
      );

      if (productInCart) {
        return state.map(product => {
          if (product.productId === productId) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          } else {
            return product;
          }
        });
      } else {
        return [...state, { productId, quantity: 1 }];
      }
    });
  }

  return (
    <CartContext.Provider value={{ addToCart, items: cartItems }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
