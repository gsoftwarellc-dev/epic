import { useState } from "react";
import { AvailabilityChecker } from "../rentals/AvailabilityChecker";
import { BookingForm } from "../rentals/BookingForm";
import { Container } from "../common/Container";
import { RentalFeatureList } from "../rentals/RentalFeatureList";
import type { AvailabilityResponse } from "../../types/availability";
import type { Product } from "../../types/product";

interface TerminatorBookingSectionProps {
  product: Product;
}

const eventTypes = ["Parties", "Weddings", "Reunions", "Corporate Events"];

export function TerminatorBookingSection({ product }: TerminatorBookingSectionProps) {
  const [availableDate, setAvailableDate] = useState<AvailabilityResponse | null>(null);

  return (
    <section id="terminator-booking" className="bg-stone-950 py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-red-900 bg-stone-900 p-6 shadow-terminator">
            <h2 className="text-2xl font-black">Built for Big-Event Energy</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {eventTypes.map((eventType) => (
                <span key={eventType} className="rounded-2xl bg-red-950/70 px-4 py-3 text-center font-black">
                  {eventType}
                </span>
              ))}
            </div>
            <div className="mt-6">
              <RentalFeatureList features={product.features} tone="terminator" />
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-red-900 bg-stone-950/88 p-5 shadow-xl sm:p-6">
              <img
                src="/images/cow_boy_logo.jpg"
                alt="The Terminator Mechanical Bull Rental"
                className="w-full object-contain"
              />
              <div className="mt-5">
                <AvailabilityChecker
                  productId={product.id}
                  tone="terminator"
                  onAvailable={setAvailableDate}
                  onUnavailable={() => setAvailableDate(null)}
                  embedded
                />
              </div>
            </div>
            {availableDate?.available ? (
              <BookingForm
                key={`${product.id}-${availableDate.date}`}
                product={product}
                availability={availableDate}
                tone="terminator"
              />
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
