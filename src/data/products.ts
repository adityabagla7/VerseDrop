export const productCategories = ["Hoodies", "T-shirts"] as const;

export type ProductCategory = (typeof productCategories)[number];

export type Product = {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  image: string;
  description: string;
  highlights?: string[];
};

export const products: Product[] = [
  {
    id: "hoodie-midnight",
    name: "Midnight Signal Hoodie",
    price: 9000,
    category: "Hoodies",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    description:
      "Crafted with premium heavyweight fleece, the Midnight Signal Hoodie wraps you in studio warmth while the reflective ink print keeps every spotlight on you.",
    highlights: [
      "Oversized drop-shoulder fit",
      "3D reflective front print",
      "Hidden phone sleeve pocket",
    ],
  },
  {
    id: "hoodie-amber",
    name: "Amber Pulse Hoodie",
    price: 6000,
    category: "Hoodies",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",
    description:
      "Amber Pulse keeps the energy glowing with contrast piping and a breathable double-knit interior built for green rooms and after parties alike.",
    highlights: [
      "Midweight double-knit cotton",
      "Contrast piping & cuffs",
      "Embroidered VerseDrop crest",
    ],
  },
  {
    id: "tee-neon",
    name: "Neon Echo Tee",
    price: 5000,
    category: "T-shirts",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80",
    description:
      "Cut from enzyme-washed cotton, the Neon Echo Tee lays soft while the UV-reactive ink ignites under stage lighting.",
    highlights: [
      "Relaxed unisex fit",
      "UV-reactive screen print",
      "Pre-shrunk, no-fade wash",
    ],
  },
  {
    id: "tee-slate",
    name: "Slate Frequency Tee",
    price: 4800,
    category: "T-shirts",
    image:
      "https://images.unsplash.com/photo-1484519332611-516457305ff6?auto=format&fit=crop&w=900&q=80",
    description:
      "Slate Frequency channels tour visuals with a tonal glitch pattern and breathable cotton knit built for daily rotation.",
    highlights: [
      "Premium combed cotton",
      "All-over tonal glitch graphic",
      "Reinforced neckline",
    ],
  },
] as const;

export const findProductById = (id: string) => products.find((product) => product.id === id);

