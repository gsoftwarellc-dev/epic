import { CalendarCheck } from "lucide-react";
import type { Product } from "../../types/product";
import { formatCurrency } from "../../utils/formatCurrency";
import { Container } from "../common/Container";

interface TerminatorHeroProps {
  product: Product;
}

export function TerminatorHero({ product }: TerminatorHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-stone-950 text-white">
      <div className="absolute inset-0">
        <img src={product.images[0]} alt="" className="h-full w-full object-cover opacity-38" />
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.92), rgba(59,36,22,0.78), rgba(193,18,31,0.42)), linear-gradient(0deg, rgba(0,0,0,0.72), transparent)",
        }}
        aria-hidden="true"
      />
      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full border border-red-500 bg-red-950/60 px-4 py-2 text-sm font-black uppercase text-red-100">
            Mechanical bull rental
          </span>
          <h1 className="mt-6 text-5xl font-black leading-none sm:text-6xl lg:text-7xl">Come Get Your Cowboy On!</h1>
          <p className="mt-5 text-2xl font-black text-red-200">{product.name}</p>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-200">{product.description}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#terminator-booking"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-terminatorRed px-7 text-lg font-black text-white shadow-terminator transition hover:bg-red-800 focus:outline-none focus-visible:ring-4 focus-visible:ring-red-700"
            >
              <CalendarCheck aria-hidden="true" /> Check Availability
            </a>
            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-black">
              Starting at {formatCurrency(product.priceCents)}
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
