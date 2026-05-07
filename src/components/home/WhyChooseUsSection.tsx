import { BadgeCheck, Droplets, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";

const reasons = [
  {
    title: "Licensed & insured",
    description: "Professional rental practices with safety-minded event setup.",
    icon: ShieldCheck,
    color: "bg-purple-100 text-epicPurple",
  },
  {
    title: "8 options to choose from",
    description: "Castles, combos, slides, and wet/dry units for different ages and spaces.",
    icon: Sparkles,
    color: "bg-pink-100 text-epicPink",
  },
  {
    title: "Wet / dry options",
    description: "Summer splash parties or dry setups when water is not part of the plan.",
    icon: Droplets,
    color: "bg-blue-100 text-epicBlue",
  },
  {
    title: "Setup and take-down included",
    description: "The rental arrives event-ready and leaves without adding work to your day.",
    icon: BadgeCheck,
    color: "bg-green-100 text-epicGreen",
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Why families book"
          title="Easy planning, safe setup, bigger smiles"
          description="From first click to setup day, rental planning stays simple, colorful, and event-ready."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article key={reason.title} className="rounded-3xl bg-white p-6 shadow-bounce">
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${reason.color}`}>
                  <Icon aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-black text-slate-950">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{reason.description}</p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
