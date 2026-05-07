import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "../../api/productsApi";
import { Button } from "../common/Button";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";

const captions = ["Backyard birthday setup", "Wet slide party day", "School event favorite", "Family reunion fun"];

export function GalleryPreviewSection() {
  const { data: products = [] } = useQuery({
    queryKey: ["products", "featured"],
    queryFn: getFeaturedProducts,
  });

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Gallery"
              title="Colorful rentals that look great on party day"
              description="Preview the kind of setups Epic Bouncers can bring to birthdays, parks, school events, and family gatherings."
            />
            <div className="mt-7">
              <Button to="/gallery" variant="outline">
                View Gallery
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {products.slice(0, 4).map((product, index) => (
              <figure key={product.id} className="overflow-hidden rounded-3xl bg-cream shadow-bounce">
                <div className="aspect-[4/3]">
                  <img src={product.images[0]} alt={captions[index]} className="h-full w-full object-cover" />
                </div>
                <figcaption className="p-4 text-sm font-black text-slate-700">{captions[index]}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
