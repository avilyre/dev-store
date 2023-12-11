import { ReactNode } from "react";

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (productId: string) => void;
}

export interface CartContextProviderProps {
  children: ReactNode;
}
