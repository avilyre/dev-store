import Link from "next/link";
import Image from "next/image";
import { CartWidget } from "./cart-widget";
import { SearchForm } from "./search-form";
import { Suspense } from "react";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>

        <Suspense fallback={null}>
          <SearchForm />
        </Suspense>
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="h-4 w-px bg-zinc-700"></div>

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">
            <Image
              className="w-7 h-7 rounded-full"
              src="https://github.com/avilyre.png"
              width="27"
              height="27"
              alt=""
            />
          </span>
        </Link>
      </div>
    </header>
  );
}
