import { useMemo, useState, type CSSProperties } from "react";
import Header from "@/components/Header";

const categories = ["All", "Hoodies", "T-shirts", "Vinyls"] as const;

type Category = (typeof categories)[number];

const heroImage =
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=2000&q=80";

const merchGrid = [
  {
    id: "hoodie-midnight",
    name: "Midnight Signal Hoodie",
    price: "$68",
    category: "Hoodies",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "hoodie-amber",
    name: "Amber Pulse Hoodie",
    price: "$72",
    category: "Hoodies",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tee-neon",
    name: "Neon Echo Tee",
    price: "$42",
    category: "T-shirts",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "tee-slate",
    name: "Slate Frequency Tee",
    price: "$45",
    category: "T-shirts",
    image:
      "https://images.unsplash.com/photo-1484519332611-516457305ff6?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "vinyl-hologram",
    name: "Hologram Nights Vinyl",
    price: "$30",
    category: "Vinyls",
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "vinyl-aurora",
    name: "Aurora Live Sessions",
    price: "$34",
    category: "Vinyls",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80",
  },
] as const;

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredMerch = useMemo(() => {
    if (selectedCategory === "All") return merchGrid;
    return merchGrid.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Header />
      <main>
        <section className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-24 sm:px-10">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Concert crowd"
            className="h-full w-full object-cover opacity-35 transition-opacity duration-700"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

        <div className="relative flex w-full max-w-5xl flex-col items-center text-center">
          <div className="relative">
            <div className="text-[18vw] font-black leading-none tracking-[0.12em] text-transparent sm:text-[12vw] lg:text-[9vw]">
              <span
                className="block bg-[image:var(--hero-img)] bg-cover bg-center bg-no-repeat bg-clip-text text-transparent drop-shadow-[0_15px_45px_rgba(0,0,0,0.9)]"
                style={
                  {
                    "--hero-img": `url(${heroImage})`,
                  } as CSSProperties
                }
              >
                MERCHANDISE
              </span>
            </div>
            <div className="absolute inset-0 -z-10 blur-[120px] opacity-70">
              <div className="h-full w-full bg-gradient-to-r from-[#f97316]/60 via-transparent to-[#f97316]/60" />
            </div>
          </div>
          <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            Limited drops for the urban music faithful. Built for nightfall,
            basslines, and sweat-soaked encores.
          </p>
        </div>
        </section>

        <section className="relative z-10 w-full px-4 pb-24 sm:px-10 lg:px-20">
        <div className="-mt-12 w-full rounded-3xl border border-white/5 bg-[#0b0b0b]/90 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur">
          <div className="flex flex-wrap items-center justify-center gap-3 border-b border-white/5 pb-6">
            {categories.map((category) => {
              const isActive = category === selectedCategory;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-widest transition duration-300 sm:text-base ${
                    isActive
                      ? "bg-white text-black shadow-[0_10px_40px_rgba(255,255,255,0.2)]"
                      : "border border-white/30 text-white/70 hover:border-white hover:text-white"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMerch.map((item) => (
              <article
                key={item.id}
                className="group relative overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-96 w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <div className="translate-y-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-lg font-bold uppercase tracking-[0.2em]">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/80">{item.price}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        </section>
      </main>
    </div>
  );
};

export default Store;

