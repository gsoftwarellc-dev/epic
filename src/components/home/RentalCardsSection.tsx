import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "../../api/productsApi";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";
import { ProductCard } from "../rentals/ProductCard";

export function RentalCardsSection() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", "featured"],
    queryFn: getFeaturedProducts,
  });

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Bounce house rentals"
          title="Pick the party centerpiece"
          description="Eight colorful rentals with clean setup, clear pricing, and availability checks before booking."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="h-96 animate-pulse rounded-3xl bg-purple-100" />
              ))
            : products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </Container>
    </section>
  );
}
