import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productsApi";
import { Container } from "../components/common/Container";
import { SectionHeading } from "../components/common/SectionHeading";

const captions = [
  "Birthday bounce house centerpiece",
  "Wet slide summer setup",
  "Backyard combo rental",
  "Colorful jumper ready to go",
  "School event activity zone",
  "Neighborhood party favorite",
  "Sports-themed party rental",
  "Water slide day with friends",
];

export function GalleryPage() {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const epicProducts = products.filter((product) => product.brandType === "epic");

  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          title="Party-ready rental inspiration"
          description="Browse colorful setup previews for birthdays, school events, family parties, and summer splash days."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {isLoading
            ? Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="h-72 animate-pulse rounded-3xl bg-purple-100" />
              ))
            : epicProducts.map((product, index) => (
                <figure key={product.id} className="overflow-hidden rounded-3xl bg-cream shadow-bounce">
                  <div className="aspect-[4/3]">
                    <img src={product.images[0]} alt={captions[index]} className="h-full w-full object-cover" />
                  </div>
                  <figcaption className="p-4 font-black text-slate-700">{captions[index]}</figcaption>
                </figure>
              ))}
        </div>
      </Container>
    </section>
  );
}
