"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import TestimonialCard from "@/src/components/landing/testimonialCard";
import SliderButton from "@/src/components/landing/sliderButton";
import testimonials from "@/src/data/testimonials.json";

export default function TestimonialsSection(): React.ReactNode {
  const [sliderRef, instanceRef] = useKeenSlider({
    defaultAnimation: {
      duration: 300,
    },
    loop: true,
    slides: {
      perView: 1.05,
      spacing: 32,
      origin: "center",
    },
  });

  return (
    <section className="flex flex-col gap-16 items-center text-center py-32 bg-amber-400">
      <h2 className="text-amber-800 mb-8 px-4 text-2xl sm:text-3xl font-bold">
        Qué opinan nuestros clientes
      </h2>
      <div className="keen-slider max-w-180" ref={sliderRef}>
        {testimonials.map((testimonial) => (
          <TestimonialCard name={testimonial.name}>
            {testimonial.testimonial}
          </TestimonialCard>
        ))}
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
