import { Button } from "../common/Button";
import { Container } from "../common/Container";
import { SectionHeading } from "../common/SectionHeading";

const galleryItems = [
  { src: "/images/princess-main.jpg", caption: "Backyard Birthday Setup" },
  { src: "/images/space-main.jpg", caption: "Wet Slide Party Day" },
  { src: "/images/pirate-1.jpg", caption: "School Event Favorite" },
  { src: "/images/dino-main.jpg", caption: "Family Reunion Fun" },
];

export function GalleryPreviewSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Gallery"
              title="Colorful Rentals That Look Great on Party Day"
              description="Preview the kind of setups Epic Bouncers can bring to birthdays, parks, school events, and family gatherings."
            />
            <div className="mt-7">
              <Button to="/gallery" variant="outline">
                View Gallery
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {galleryItems.map((item) => (
              <figure key={item.src} className="overflow-hidden rounded-3xl bg-cream shadow-bounce">
                <div className="aspect-[4/3]">
                  <img src={item.src} alt={item.caption} className="h-full w-full object-cover" />
                </div>
                <figcaption className="p-4 text-sm font-black text-slate-700">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
