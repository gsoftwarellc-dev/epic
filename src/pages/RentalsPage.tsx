import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productsApi";
import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";
import { ProductCard } from "../components/rentals/ProductCard";

export function RentalsPage() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const epicProducts = products.filter((product) => product.brandType === "epic");

  return (
    <section className="bg-cream py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Rentals"
          title="Bounce houses, combos, and slides"
          description="Choose a rental, check the event date, then complete the backend-ready booking form."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="h-96 animate-pulse rounded-3xl bg-purple-100" />
              ))
            : epicProducts.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </Container>
    </section>
  );
}
