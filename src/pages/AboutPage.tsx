import { HeartHandshake, PartyPopper, ShieldCheck } from "lucide-react";
import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";

const values = [
  {
    title: "Safe setup",
    description: "Rentals are placed with attention to space, anchoring needs, and event flow.",
    icon: ShieldCheck,
  },
  {
    title: "Fun rentals",
    description: "Bright bounce houses, wet/dry slides, combos, and a mechanical bull for bigger events.",
    icon: PartyPopper,
  },
  {
    title: "Reliable service",
    description: "Clear rental details, simple booking steps, and setup/take-down included.",
    icon: HeartHandshake,
  },
];

export function AboutPage() {
  return (
    <section className="bg-cream py-14 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionHeading
            align="left"
            eyebrow="About Epic Bouncers"
            title="Family-friendly event rentals with dependable setup"
            description="Epic Bouncers helps families, schools, churches, and event hosts create playful celebrations without turning rental planning into extra work."
          />
          <div className="rounded-[2rem] bg-white p-6 text-lg leading-8 text-slate-600 shadow-bounce sm:p-8">
            <p>
              Epic Bouncers is built around safe setup, fun rentals, and reliable service. The catalog includes colorful
              bounce houses, combos, wet/dry slides, and The Terminator Mechanical Bull for hosts who want a separate
              western-style attraction.
            </p>
            <p className="mt-5">
              Hosts can choose the rental that fits their event, check availability, and move into booking with a clear
              path from planning to party day.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article key={value.title} className="rounded-3xl bg-white p-6 shadow-bounce">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-epicOrange">
                  <Icon aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-2xl font-black text-slate-950">{value.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{value.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
