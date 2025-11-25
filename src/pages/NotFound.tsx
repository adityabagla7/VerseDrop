import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-muted">
      <Header />
      <main className="flex items-center justify-center px-4 py-24">
        <div className="rounded-3xl bg-white/80 px-10 py-12 text-center shadow-xl backdrop-blur">
          <h1 className="mb-4 text-5xl font-black text-primary">404</h1>
          <p className="mb-6 text-lg text-muted-foreground">Oops! Page not found</p>
          <Link
            to="/"
            className="rounded-full bg-primary px-5 py-2 font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
