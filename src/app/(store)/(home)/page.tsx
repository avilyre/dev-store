import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api("/products/featured", {
    next: {
      revalidate: 60 * 60, // 1hour
    },
  });

  const products = await response.json();

  return products;
}

export default async function HomePage() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();

  return (
    <main className="grid grid-cols-9 grid-rows-6 gap-6 max-h-[860px]">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="product-item group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
      >
        <Image
          className="group-hover:scale-105 transition-transform duration-500"
          src={highlightedProduct.image}
          height={860}
          width={860}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map(product => (
        <Link
          key={product.id}
          href={`/product/${product.slug}`}
          className="product-item group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-center"
        >
          <Image
            className="group-hover:scale-105 transition-transform duration-500"
            src={product.image}
            height={860}
            width={860}
            quality={100}
            alt=""
          />

          <div className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">{product.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">
              {product.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
        </Link>
      ))}
    </main>
  );
}
