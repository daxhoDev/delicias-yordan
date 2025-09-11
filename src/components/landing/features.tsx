import FeatureCard from "@/src/components/landing/featureCard";

export default function Features(): React.ReactNode {
  return (
    <section className="flex flex-col items-center min-h-dvh gap-12 text-center py-16 sm:px-16 bg-gradient-to-tl bg-amber-300">
      <h2 className="text-amber-900 text-2xl font-bold">
        Por qué contactarnos
      </h2>
      <div className="flex flex-col justify-center sm:flex-row sm:flex-wrap gap-8">
        <FeatureCard align="left" />
        <FeatureCard align="right" />
        <FeatureCard align="left" />
        <FeatureCard align="right" />
      </div>
    </section>
  );
}
