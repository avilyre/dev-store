import { ReactNode } from "react";

export interface CartItem {
  productId: number;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (productId: number) => void;
}

export interface CartContextProviderProps {
  children: ReactNode;
}
