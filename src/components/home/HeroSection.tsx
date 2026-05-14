import { ArrowRight, CalendarCheck } from "lucide-react";
import heroBackgroundImage from "../../assets/epic-hero-bounce-party.webp";
import { Button } from "../common/Button";
import { Container } from "../common/Container";

const heroBackground =
  `linear-gradient(90deg, rgba(23, 10, 51, 0.9) 0%, rgba(74, 28, 138, 0.78) 36%, rgba(236, 72, 153, 0.22) 66%, rgba(249, 115, 22, 0.2) 100%), url("${heroBackgroundImage}")`;

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-9rem)] overflow-hidden bg-slate-950 sm:min-h-[calc(100svh-9.5rem)]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: heroBackground }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, rgba(255,255,255,0.2) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.2) 75%, transparent 75%, transparent)",
          backgroundSize: "56px 56px",
        }}
        aria-hidden="true"
      />
      <Container className="relative flex min-h-[calc(100svh-9rem)] items-center py-12 sm:min-h-[calc(100svh-9.5rem)] sm:py-16 lg:py-20">
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
