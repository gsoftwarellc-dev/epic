import { Button } from "../components/common/Button";
import { Container } from "../components/common/Container";

export function NotFoundPage() {
  return (
    <section className="bg-cream py-20">
      <Container className="text-center">
        <h1 className="text-5xl font-black text-slate-950">Page not found</h1>
        <p className="mt-4 text-lg text-slate-600">That page does not exist in the Epic Bouncers frontend.</p>
        <div className="mt-8">
          <Button to="/">Go Home</Button>
        </div>
      </Container>
    </section>
  );
}
