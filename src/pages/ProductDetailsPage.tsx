import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductBySlug } from "../api/productsApi";
import { Button } from "../components/common/Button";
import { Container } from "../components/common/Container";
import { AvailabilityChecker } from "../components/rentals/AvailabilityChecker";
import { BookingForm } from "../components/rentals/BookingForm";
import { ProductGallery } from "../components/rentals/ProductGallery";
import { RentalFeatureList } from "../components/rentals/RentalFeatureList";
import type { AvailabilityResponse } from "../types/availability";
import { formatCurrency } from "../utils/formatCurrency";

export function ProductDetailsPage() {
  const { slug } = useParams();
  const [availableDate, setAvailableDate] = useState<AvailabilityResponse | null>(null);

  const { data: product, isLoading } = useQuery({
    queryKey: ["products", "slug", slug],
    queryFn: () => getProductBySlug(slug ?? ""),
    enabled: Boolean(slug),
  });

  if (isLoading) {
    return (
      <section className="bg-cream py-16">
        <Container>
          <div className="h-[640px] animate-pulse rounded-[2rem] bg-purple-100" />
        </Container>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="bg-cream py-16">
        <Container className="text-center">
          <h1 className="text-4xl font-black text-slate-950">Rental not found</h1>
          <p className="mt-4 text-slate-600">That rental may no longer be active.</p>
          <div className="mt-8">
            <Button to="/rentals">Back to Rentals</Button>
          </div>
        </Container>
      </section>
    );
  }

  const tone = product.brandType === "terminator" ? "terminator" : "epic";
  const isTerminator = tone === "terminator";
  const availableForThisProduct =
    availableDate?.available && availableDate.productId === product.id ? availableDate : null;

  return (
    <section className={isTerminator ? "bg-stone-950 py-14 text-white sm:py-20" : "bg-cream py-14 sm:py-20"}>
      <Container>
        <Link
          to={isTerminator ? "/terminator-mechanical-bull" : "/rentals"}
          className={isTerminator ? "font-bold text-red-200" : "font-bold text-epicPurple"}
        >
          Back to {isTerminator ? "Mechanical Bull" : "Rentals"}
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <ProductGallery images={product.images} name={product.name} tone={tone} />

          <div className="grid gap-6">
            <div>
              <p className={isTerminator ? "text-sm font-black uppercase text-red-300" : "text-sm font-black uppercase text-epicPink"}>
                {isTerminator ? "Mechanical bull rental" : "Epic Bouncers rental"}
              </p>
              <h1 className={isTerminator ? "mt-3 text-4xl font-black text-white sm:text-5xl" : "mt-3 text-4xl font-black text-slate-950 sm:text-5xl"}>
                {product.name}
              </h1>
              <p className={isTerminator ? "mt-5 text-lg leading-8 text-stone-300" : "mt-5 text-lg leading-8 text-slate-600"}>
                {product.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className={isTerminator ? "rounded-3xl bg-stone-900 p-5" : "rounded-3xl bg-white p-5 shadow-bounce"}>
                <p className="font-bold text-slate-500">Rental price</p>
                <p className={isTerminator ? "mt-1 text-3xl font-black text-red-200" : "mt-1 text-3xl font-black text-epicPurple"}>
                  {formatCurrency(product.priceCents)}
                </p>
              </div>
              <div className={isTerminator ? "rounded-3xl bg-stone-900 p-5" : "rounded-3xl bg-white p-5 shadow-bounce"}>
                <p className="font-bold text-slate-500">Deposit</p>
                <p className={isTerminator ? "mt-1 text-3xl font-black text-red-200" : "mt-1 text-3xl font-black text-epicOrange"}>
                  {formatCurrency(product.depositCents)}
                </p>
              </div>
            </div>

            <AvailabilityChecker
              productId={product.id}
              tone={tone}
              onAvailable={setAvailableDate}
              onUnavailable={() => setAvailableDate(null)}
            />

            {availableForThisProduct ? (
              <BookingForm
                key={`${product.id}-${availableForThisProduct.date}`}
                product={product}
                availability={availableForThisProduct}
                tone={tone}
              />
            ) : null}

            <RentalFeatureList features={product.features} tone={tone} />

            <div className={isTerminator ? "rounded-[2rem] bg-stone-900 p-6" : "rounded-[2rem] bg-white p-6 shadow-bounce"}>
              <h2 className="text-2xl font-black">Specs</h2>
              <dl className="mt-4 grid gap-3 text-sm">
                {Object.entries(product.specs).map(([label, value]) =>
                  value ? (
                    <div key={label} className="grid grid-cols-[120px_1fr] gap-4">
                      <dt className="font-black capitalize text-slate-500">{label.replace(/([A-Z])/g, " $1")}</dt>
                      <dd className={isTerminator ? "text-stone-200" : "text-slate-700"}>{value}</dd>
                    </div>
                  ) : null,
                )}
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
