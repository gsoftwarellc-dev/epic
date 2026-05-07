import { ArrowRight, CalendarCheck } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "../../api/productsApi";
import { Button } from "../common/Button";
import { Container } from "../common/Container";

const heroBackground =
  "linear-gradient(90deg, rgba(36, 18, 67, 0.9), rgba(124, 58, 237, 0.68), rgba(249, 115, 22, 0.52)), linear-gradient(135deg, #7c3aed, #ec4899 32%, #0ea5e9 66%, #f97316)";

export function HeroSection() {
  const { data: products = [] } = useQuery({
    queryKey: ["products", "featured"],
    queryFn: getFeaturedProducts,
  });
  const heroImage = products[1]?.images[0];

  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: heroImage ? `${heroBackground}, url("${heroImage}")` : heroBackground }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(255,255,255,0.16) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.16) 50%, rgba(255,255,255,0.16) 75%, transparent 75%, transparent)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />
      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl text-white">
          <span className="inline-flex rounded-full bg-white/18 px-4 py-2 text-sm font-black uppercase">
            Epic Bouncers rentals
          </span>
          <h1 className="mt-6 text-5xl font-black leading-none sm:text-6xl lg:text-7xl">Epic Fun for All Ages!</h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-white/90">
            Bounce house rentals, wet/dry options, delivery, setup, and take-down for birthdays, school events, church
            parties, and family celebrations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/rentals" variant="secondary" size="lg" icon={<ArrowRight aria-hidden="true" />}>
              View Rentals
            </Button>
            <Button to="/rentals" variant="ghost" size="lg" icon={<CalendarCheck aria-hidden="true" />}>
              Check Availability
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
