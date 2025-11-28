import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Sparkles, ShoppingCart } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { findProductById } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

const currencyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const product = useMemo(() => (productId ? findProductById(productId) : undefined), [productId]);
  const { addToCart, getItemQuantity } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center px-6 py-16 text-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-red-500">Product missing</p>
            <h1 className="mt-4 text-4xl font-black">That drop sold out.</h1>
            <p className="mt-2 text-muted-foreground">Choose another piece from the store.</p>
            <Button className="mt-8" variant="outline" onClick={() => navigate("/store")}>
              Back to Store
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const quantityInCart = getItemQuantity(product.id);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative isolate flex flex-col lg:flex-row w-full">
          <div className="relative w-full lg:w-1/2 h-[60vh] lg:h-auto">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <button
              className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] hover:bg-black/80"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>
          </div>

          <div className="w-full lg:w-1/2 bg-black px-6 py-10 sm:px-10 lg:px-16 lg:py-16">
            <p className="text-xs uppercase tracking-[0.4em] text-red-500">VerseDrop Exclusive</p>
            <h1 className="mt-3 text-4xl sm:text-5xl font-black tracking-tight">{product.name}</h1>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-3xl font-black text-white">
                {currencyFormatter.format(product.price)}
              </span>
              {quantityInCart > 0 && (
                <span className="rounded-full border border-white/20 px-4 py-1 text-xs uppercase tracking-[0.3em] text-green-400">
                  In cart ×{quantityInCart}
                </span>
              )}
            </div>

            {product.highlights && (
              <div className="mt-10 space-y-4">
                {product.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600/10 text-red-500">
                      <Sparkles className="h-5 w-5" />
                    </span>
                    <p className="text-base font-medium leading-relaxed text-white/80">{highlight}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="flex-1 rounded-none bg-red-600 text-white hover:bg-red-500"
                onClick={() => addToCart(product.id)}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                size="lg"
                className="flex-1 rounded-none bg-black text-white border border-white/30 hover:bg-black/80"
                onClick={() => navigate("/store")}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;

