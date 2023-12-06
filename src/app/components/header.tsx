import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <form className="flex items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 w-[320px] ring-zinc-700">
          <Search className="w-5 h-5 text-zinc-500" />

          <input
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          <span className="text-sm">Cart (0)</span>
        </div>

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
