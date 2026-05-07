import { Droplets, ShieldCheck } from "lucide-react";
import { Button } from "../common/Button";
import type { Product } from "../../types/product";
import { formatCurrency } from "../../utils/formatCurrency";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-purple-100 bg-white shadow-bounce transition hover:-translate-y-1 hover:shadow-warm">
      <div className="aspect-[4/3] overflow-hidden bg-purple-100">
        <img
          src={product.images[0]}
          alt={`${product.name} rental preview`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div>
          <h3 className="text-xl font-black text-slate-950">{product.name}</h3>
          <p className="mt-2 min-h-14 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl bg-purple-50 p-3">
            <span className="block font-bold text-slate-500">Price</span>
            <span className="text-lg font-black text-epicPurple">{formatCurrency(product.priceCents)}</span>
          </div>
          <div className="rounded-2xl bg-orange-50 p-3">
            <span className="block font-bold text-slate-500">Deposit</span>
            <span className="text-lg font-black text-epicOrange">{formatCurrency(product.depositCents)}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-xs font-black uppercase text-slate-600">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-2 text-epicBlue">
            <Droplets size={14} aria-hidden="true" /> {product.specs.wetDry ?? "Dry only"}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-3 py-2 text-epicGreen">
            <ShieldCheck size={14} aria-hidden="true" /> Setup included
          </span>
        </div>
        <div className="mt-auto pt-2">
          <Button to={`/rentals/${product.slug}`} variant="primary" fullWidth>
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
}
