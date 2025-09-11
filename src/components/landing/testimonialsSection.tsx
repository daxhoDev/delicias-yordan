"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import TestimonialCard from "./testimonialCard";

export default function TestimonialsSection(): React.ReactNode {
  const [sliderRef, instanceRef] = useKeenSlider({
    defaultAnimation: {
      duration: 300,
    },
    loop: true,
    slides: {
      number: 3,
      perView: 1.02,
      spacing: 32,
      origin: "center",
    },
  });

  return (
    <section className="flex flex-col gap-12 items-center text-center py-16 bg-amber-400">
      <h2 className="text-amber-800 text-2xl font-bold">
        Qué opinan nuestros clientes
      </h2>
      <div className="keen-slider w-95/100 max-w-180" ref={sliderRef}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
}
