import { useQuery } from "@tanstack/react-query";
import { getProductBySlug } from "../api/productsApi";
import { Container } from "../components/common/Container";
import { TerminatorBookingSection } from "../components/terminator/TerminatorBookingSection";
import { TerminatorHero } from "../components/terminator/TerminatorHero";

const terminatorSlug = "the-terminator-mechanical-bull";

export function TerminatorPage() {
  const { data: product, isLoading } = useQuery({
    queryKey: ["products", "slug", terminatorSlug],
    queryFn: () => getProductBySlug(terminatorSlug),
  });

  if (isLoading) {
    return (
      <section className="bg-stone-950 py-20">
        <Container>
          <div className="h-[620px] animate-pulse rounded-[2rem] bg-stone-900" />
        </Container>
      </section>
    );
  }

  if (!product) {
    return (
      <section className="bg-stone-950 py-20 text-white">
        <Container>
          <h1 className="text-4xl font-black">Mechanical bull rental not found</h1>
        </Container>
      </section>
    );
  }

  return (
    <>
      <TerminatorHero product={product} />
      <TerminatorBookingSection product={product} />
    </>
  );
}
