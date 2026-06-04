import { ArrowRight, CalendarCheck } from "lucide-react";
import heroBackgroundImage from "../../assets/epic-main-page.jpg";
import { Button } from "../common/Button";
import { Container } from "../common/Container";

const heroBackground =
  `linear-gradient(rgba(23, 10, 51, 0.42), rgba(23, 10, 51, 0.42)), url("${heroBackgroundImage}")`;

export function HeroSection() {
  return (
    <section className="relative isolate flex overflow-hidden bg-slate-950" style={{ height: "calc(100svh - 120px)" }}>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: heroBackground, backgroundSize: "cover", backgroundPosition: "15% center" }}
        aria-hidden="true"
      />
      <Container className="relative flex h-full w-full items-center justify-center py-12">
        <div className="max-w-3xl text-center text-white">
          <span className="inline-flex rounded-full bg-white/18 px-4 py-2 text-sm font-black uppercase">
            Epic Bouncers Bounce House Rentals
          </span>
          <h1 className="mt-6 text-5xl font-black leading-none sm:text-6xl lg:text-7xl">Epic Fun for All Ages!</h1>
          <p className="mt-6 mx-auto max-w-2xl text-xl leading-8 text-white/90">
            Bounce house rentals, wet/dry options, delivery, setup, and take-down for birthdays, school events, church
            parties, and family celebrations.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
