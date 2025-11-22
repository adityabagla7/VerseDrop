import { useMemo, useState, useEffect, useRef, type CSSProperties } from "react";
import { ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const categories = ["All", "Hoodies", "T-shirts", "Vinyls"] as const;

type Category = (typeof categories)[number];

type SortOption = "alphabetical" | "price-high-low" | "price-low-high";

const heroImage =
  "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=2000&q=80";

export const merchGrid = [
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
  const [sortOption, setSortOption] = useState<SortOption>("alphabetical");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
    };

    if (isSortOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSortOpen]);

  // Helper function to extract price as number
  const getPriceNumber = (priceString: string): number => {
    return parseInt(priceString.replace("$", ""), 10);
  };

  const filteredAndSortedMerch = useMemo(() => {
    // First filter by category
    let filtered = selectedCategory === "All" 
      ? [...merchGrid] 
      : merchGrid.filter((item) => item.category === selectedCategory);
    
    // Then sort
    switch (sortOption) {
      case "alphabetical":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price-high-low":
        filtered.sort((a, b) => getPriceNumber(b.price) - getPriceNumber(a.price));
        break;
      case "price-low-high":
        filtered.sort((a, b) => getPriceNumber(a.price) - getPriceNumber(b.price));
        break;
    }
    
    return filtered;
  }, [selectedCategory, sortOption]);

  const getSortLabel = () => {
    switch (sortOption) {
      case "alphabetical":
        return "Alphabetically";
      case "price-high-low":
        return "Price: High to Low";
      case "price-low-high":
        return "Price: Low to High";
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <section className="relative isolate flex min-h-[90vh] items-center justify-center overflow-hidden py-24">
        <div className="absolute inset-0 w-screen">
          <img
            src={heroImage}
            alt="Concert crowd"
            className="h-full w-full object-cover animate-slide-in-right"
            style={{ animationFillMode: "forwards" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/50" />

        <div className="relative flex w-full max-w-5xl flex-col items-center text-center px-4 sm:px-10">
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
          <p className="mt-6 max-w-xl text-base text-black/80 sm:text-lg font-medium">
            Limited drops for the urban music faithful. Built for nightfall,
            basslines, and sweat-soaked encores.
          </p>
        </div>
        </section>

        <section className="relative z-10 w-full pb-24">
        <div className="-mt-12 w-full border-t border-red-600/20 bg-black">
          <div className="border-b border-red-600/20 pb-6 pt-6 px-4">
            {/* Sort Button and Categories on Same Line */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* Categories */}
              {categories.map((category) => {
                const isActive = category === selectedCategory;
                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-8 py-3 text-base font-black uppercase tracking-widest transition duration-300 sm:text-lg ${
                      isActive
                        ? "bg-red-600 text-white shadow-[0_10px_40px_rgba(220,38,38,0.3)]"
                        : "border-2 border-red-600/50 text-white hover:border-red-600 hover:text-red-600"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
              
              {/* Sort Dropdown Button */}
              <div className="relative" ref={sortDropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsSortOpen(!isSortOpen)}
                  className="flex items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-black uppercase tracking-widest transition duration-300 sm:text-lg border-2 border-red-600/50 text-white hover:border-red-600 hover:text-red-600"
                >
                  Sort: {getSortLabel()}
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isSortOpen ? "rotate-180" : ""}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isSortOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-black border-2 border-red-600/50 rounded-lg shadow-lg z-50">
                    <div className="flex flex-col p-2">
                      <button
                        onClick={() => {
                          setSortOption("alphabetical");
                          setIsSortOpen(false);
                        }}
                        className={`text-left px-4 py-3 rounded-lg font-bold uppercase tracking-wide transition duration-300 ${
                          sortOption === "alphabetical"
                            ? "bg-red-600 text-white"
                            : "text-white hover:text-red-600 hover:bg-red-600/10"
                        }`}
                      >
                        Alphabetically
                      </button>
                      <button
                        onClick={() => {
                          setSortOption("price-high-low");
                          setIsSortOpen(false);
                        }}
                        className={`text-left px-4 py-3 rounded-lg font-bold uppercase tracking-wide transition duration-300 ${
                          sortOption === "price-high-low"
                            ? "bg-red-600 text-white"
                            : "text-white hover:text-red-600 hover:bg-red-600/10"
                        }`}
                      >
                        Price: High to Low
                      </button>
                      <button
                        onClick={() => {
                          setSortOption("price-low-high");
                          setIsSortOpen(false);
                        }}
                        className={`text-left px-4 py-3 rounded-lg font-bold uppercase tracking-wide transition duration-300 ${
                          sortOption === "price-low-high"
                            ? "bg-red-600 text-white"
                            : "text-white hover:text-red-600 hover:bg-red-600/10"
                        }`}
                      >
                        Price: Low to High
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-0 sm:grid-cols-2 lg:grid-cols-3 w-full">
            {filteredAndSortedMerch.map((item) => (
              <article
                key={item.id}
                className="group relative overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-96 w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <div className="translate-y-6 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <h3 className="text-lg font-black uppercase tracking-[0.2em] text-white">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm font-bold text-red-600">{item.price}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Store;

