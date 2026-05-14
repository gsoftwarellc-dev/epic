import { clsx } from "clsx";
import { ImageOff } from "lucide-react";
import { useState } from "react";

interface ProductGalleryProps {
  images: string[];
  name: string;
  tone?: "epic" | "terminator";
}

export function ProductGallery({ images, name, tone = "epic" }: ProductGalleryProps) {
  const hasImages = images.length > 0;
  const [activeImage, setActiveImage] = useState(hasImages ? images[0] : "");

  return (
    <div className="grid gap-4">
      <div
        className={clsx(
          "aspect-[4/3] overflow-hidden rounded-[2rem] border shadow-2xl",
          tone === "terminator" ? "border-red-900 bg-stone-900" : "border-purple-100 bg-purple-100",
        )}
      >
        {hasImages ? (
          <img src={activeImage} alt={`${name} gallery image`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-slate-400">
            <ImageOff size={48} />
            <span className="text-sm font-semibold">Photo coming soon</span>
          </div>
        )}
      </div>

      {images.length > 1 ? (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              className={clsx(
                "aspect-[4/3] overflow-hidden rounded-2xl border-4 transition",
                activeImage === image
                  ? tone === "terminator"
                    ? "border-terminatorRed"
                    : "border-epicOrange"
                  : "border-transparent opacity-75 hover:opacity-100",
              )}
              onClick={() => setActiveImage(image)}
            >
              <img src={image} alt={`${name} thumbnail ${index + 1}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
