import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "../config/contact";

const contactCards = [
  { title: "Phone", value: PHONE_DISPLAY, icon: Phone, href: PHONE_TEL },
  { title: "Email", value: EMAIL, icon: Mail, href: `mailto:${EMAIL}` },
  { title: "Service area", value: "Davis, Weber, Box Elder counties", icon: MapPin },
];

export function ContactPage() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Contact" title="Tell Us About Your Event" />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <article key={card.title} className="rounded-3xl bg-cream p-5 shadow-bounce">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-epicPurple">
                  <Icon aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-black text-slate-950">{card.title}</h2>
                {card.href ? (
                  <a href={card.href} className="mt-2 block text-sm leading-6 text-slate-600 hover:text-epicPurple">
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm leading-6 text-slate-600">{card.value}</p>
                )}
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2rem] shadow-bounce">
          <iframe
            title="Service area map"
            src="https://www.google.com/maps?q=Davis+County,+Weber+County,+Box+Elder+County,+Utah&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}
