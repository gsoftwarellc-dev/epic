import { CheckCircle2 } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { Container } from "../components/common/Container";

export function CheckoutSuccessPage() {
  const [searchParams] = useSearchParams();
  const bookingId = searchParams.get("bookingId");

  return (
    <section className="bg-cream py-20">
      <Container className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-700">
          <CheckCircle2 size={44} aria-hidden="true" />
        </div>
        <h1 className="mt-6 text-4xl font-black text-slate-950">Checkout Success</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Your mock booking has been created{bookingId ? ` with booking ID ${bookingId}` : ""}. Later this page can
          confirm Stripe payment status from Laravel.
        </p>
        <Link className="mt-8 inline-flex font-black text-epicPurple" to="/rentals">
          Back to rentals
        </Link>
      </Container>
    </section>
  );
}
