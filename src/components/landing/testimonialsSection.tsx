"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import TestimonialCard from "@/src/components/landing/testimonialCard";
import SliderButton from "@/src/components/landing/sliderButton";

export default function TestimonialsSection(): React.ReactNode {
  const [sliderRef, instanceRef] = useKeenSlider({
    defaultAnimation: {
      duration: 300,
    },
    loop: true,
    slides: {
      number: 3,
      perView: 1.05,
      spacing: 32,
      origin: "center",
    },
  });

  return (
    <section className="flex flex-col gap-12 items-center text-center py-16 bg-amber-400">
      <h2 className="text-amber-800 text-2xl font-bold">
        Qué opinan nuestros clientes
      </h2>
      <div className="keen-slider max-w-180" ref={sliderRef}>
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <div className="flex justify-center items-center gap-4">
        <SliderButton
          direction="left"
          onClick={() => instanceRef.current?.prev()}
        />
        <SliderButton
          direction="right"
          onClick={() => instanceRef.current?.next()}
        />
      </div>
    </section>
  );
}
