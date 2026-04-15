"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
  tags?: string;
  year?: string;
}

interface Gallery6Props {
  heading?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "Selected Work",
  items = [],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) return;

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <div>
      {/* Header row */}
      <div className="mb-10 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
        <div>
          <h2
            className="font-poppins font-[800] text-3xl md:text-5xl"
            style={{ color: "var(--white)" }}
          >
            {heading}
          </h2>
        </div>
        <div className="mt-6 flex shrink-0 items-center justify-start gap-3 md:mt-0">
          <Button
            size="icon"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="h-11 w-11 rounded-full border transition-all duration-200 disabled:opacity-30"
            style={{
              borderColor: "rgba(165,106,189,0.3)",
              background: "transparent",
              color: "var(--white)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.background = "rgba(165,106,189,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(165,106,189,0.3)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <ArrowLeft className="size-5" />
          </Button>
          <Button
            size="icon"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="h-11 w-11 rounded-full border transition-all duration-200 disabled:opacity-30"
            style={{
              borderColor: "rgba(165,106,189,0.3)",
              background: "transparent",
              color: "var(--white)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.background = "rgba(165,106,189,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(165,106,189,0.3)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: false,
              },
            },
          }}
        >
          <CarouselContent className="-ml-4">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-full sm:basis-[70%] md:basis-[48%] lg:basis-[35%] xl:basis-[30%]"
              >
                <a
                  href={item.url}
                  className="group flex flex-col justify-between h-full"
                >
                  {/* Image */}
                  <div className="flex aspect-[3/2] overflow-clip rounded-lg"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    <div className="flex-1">
                      <div className="relative h-full w-full origin-bottom transition duration-500 group-hover:scale-105">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover object-center"
                        />
                        {/* Overlay gradient */}
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: "linear-gradient(to top, rgba(13,4,20,0.6) 0%, transparent 50%)",
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Tags + Year */}
                  {(item.tags || item.year) && (
                    <div className="flex items-center justify-between mt-4">
                      {item.tags && (
                        <span
                          className="font-poppins text-[0.65rem] tracking-[0.15em] uppercase"
                          style={{ color: "var(--accent)" }}
                        >
                          {item.tags}
                        </span>
                      )}
                      {item.year && (
                        <span
                          className="font-poppins text-[0.65rem] tracking-[0.1em]"
                          style={{ color: "var(--muted)" }}
                        >
                          {item.year}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Title */}
                  <div
                    className="mb-2 line-clamp-2 break-words pt-2 font-poppins font-bold text-lg md:text-xl lg:text-2xl"
                    style={{ color: "var(--white)" }}
                  >
                    {item.title}
                  </div>

                  {/* Summary */}
                  <div
                    className="mb-6 line-clamp-2 font-poppins text-sm leading-relaxed"
                    style={{ color: "var(--muted)" }}
                  >
                    {item.summary}
                  </div>

                  {/* Read more */}
                  <div
                    className="flex items-center font-poppins text-sm font-medium transition-colors duration-200 group-hover:text-[var(--accent-bright)]"
                    style={{ color: "var(--accent)" }}
                  >
                    View project
                    <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export { Gallery6 };
