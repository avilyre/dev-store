import { Skeleton } from "@/app/components/skeleton";

export default async function ProductPage() {
  return (
    <main className="relative grid grid-cols-3 max-h-[860px]">
      <div className="col-span-2 overflow-hidden">
        <Skeleton
          style={{
            height: 1000,
            width: 1000,
          }}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <Skeleton
          style={{
            height: 50,
          }}
        />

        <p className="mt-2 leading-relaxed text-zinc-400">
          <Skeleton
            style={{
              height: 50,
            }}
          />
        </p>

        <div className="mt-8 flex items-center gap-3">
          <Skeleton
            style={{
              height: 44,
              width: 110,
            }}
          />
          <Skeleton
            style={{
              height: 44,
              width: 175,
            }}
          />
        </div>

        <div className="mt-8 space-y-4">
          <Skeleton
            style={{
              height: 24,
              width: 110,
            }}
          />
          <div className="flex gap-2">
            <Skeleton
              style={{
                height: 36,
                width: 56,
                borderRadius: 999,
              }}
            />
            <Skeleton
              style={{
                height: 36,
                width: 56,
                borderRadius: 999,
              }}
            />
            <Skeleton
              style={{
                height: 36,
                width: 56,
                borderRadius: 999,
              }}
            />
          </div>
        </div>

        <Skeleton
          className="mt-8"
          style={{
            height: 48,
            width: "100%",
            borderRadius: 999,
          }}
        />
      </div>
    </main>
  );
}
