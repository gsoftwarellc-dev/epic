import { CalendarCheck } from "lucide-react";
import { Button } from "../common/Button";
import { Container } from "../common/Container";

export function CTASection() {
  return (
    <section className="bg-epicPurple py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-purple-100">Ready to reserve?</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
              Check a date, fill out the booking form, and keep party planning moving.
            </h2>
          </div>
          <Button to="/rentals" variant="secondary" size="lg" icon={<CalendarCheck aria-hidden="true" />}>
            Check Availability
          </Button>
        </div>
      </Container>
    </section>
  );
}
