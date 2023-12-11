import { CartContextProvider } from "@/contexts/CartContext";
import { Header } from "../components/header";
import { StoreLayoutProps } from "./interface";

export default function StoreLayouts(props: StoreLayoutProps) {
  const { children } = props;
  return (
    <CartContextProvider>
      <div className="mx-auto grid  grid-rows-[min-content_max-content] min-h-screen w-full max-w-[1600px] gap-5 p-8">
        <Header />
        {children}
      </div>
    </CartContextProvider>
  );
}
