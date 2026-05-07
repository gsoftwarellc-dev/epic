import { Globe, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "../components/common/Container";
import { Button } from "../components/common/Button";
import { SectionHeading } from "../components/common/SectionHeading";

const contactCards = [
  { title: "Phone", value: "(801) 555-0138", icon: Phone },
  { title: "Email", value: "hello@epicbouncers.com", icon: Mail },
  { title: "Website", value: "EpicBouncers.com", icon: Globe },
  { title: "Service area", value: "Utah and nearby event areas", icon: MapPin },
];

export function ContactPage() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about your event"
          description="Share the date, rental ideas, and event location so the right setup can be planned."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <article key={card.title} className="rounded-3xl bg-cream p-5 shadow-bounce">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-epicPurple">
                  <Icon aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-black text-slate-950">{card.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{card.value}</p>
              </article>
            );
          })}
        </div>

        <form
          className="mx-auto mt-10 grid max-w-3xl gap-5 rounded-[2rem] bg-cream p-6 shadow-bounce sm:p-8"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Name
              <input className="min-h-12 rounded-2xl border border-purple-100 px-4 outline-none focus:ring-4 focus:ring-purple-100" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-slate-700">
              Email
              <input
                type="email"
                className="min-h-12 rounded-2xl border border-purple-100 px-4 outline-none focus:ring-4 focus:ring-purple-100"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm font-bold text-slate-700">
            Event details
            <textarea
              rows={5}
              className="rounded-2xl border border-purple-100 px-4 py-3 outline-none focus:ring-4 focus:ring-purple-100"
            />
          </label>
          <Button type="submit" variant="secondary">
            Send Message
          </Button>
        </form>
      </Container>
    </section>
  );
}
