import { ArrowRight } from "lucide-react";
import { Button } from "../common/Button";
import { Container } from "../common/Container";

export function MechBullSection() {
  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20" style={{ backgroundColor: "#2C2420" }}>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 12px)",
        }}
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[1.5rem] shadow-2xl">
            <img
              src="/images/mech-bull-main.jpg"
              alt="The Terminator Mechanical Bull"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-white">
            <span className="inline-flex rounded-full border border-red-500 bg-red-950/60 px-4 py-2 text-sm font-black uppercase text-red-200">
              Also Available
            </span>
            <h2 className="mt-4 text-4xl font-black leading-none sm:text-5xl">
              The Terminator
              <br />
              <span className="text-red-400">Mechanical Bull</span>
            </h2>
            <p className="mt-4 text-lg leading-7 text-stone-300">
              Are you Cowboy enough? Add a western thrill to any event with our American-made mechanical bull — operated by an experienced pro to keep the fun going all night long.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-black uppercase">
              <span className="rounded-full border border-stone-600 bg-stone-800 px-4 py-2 text-stone-300">Operator Included</span>
              <span className="rounded-full border border-stone-600 bg-stone-800 px-4 py-2 text-stone-300">Inflatable Arena</span>
              <span className="rounded-full border border-stone-600 bg-stone-800 px-4 py-2 text-stone-300">All Ages</span>
            </div>
            <div className="mt-8">
              <Button to="/terminator-mechanical-bull" variant="secondary" size="lg" icon={<ArrowRight aria-hidden="true" />}>
                View &amp; Book
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
