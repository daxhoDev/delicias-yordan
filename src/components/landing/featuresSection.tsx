import FeatureCard from "@/src/components/landing/featureCard";
import features from "@/src/data/features";

export default function FeaturesSection(): React.ReactNode {
  return (
    <section className="flex flex-col items-center gap-12 text-center py-16 sm:px-16 bg-gradient-to-tl bg-amber-400">
      <h2 className="text-amber-800 text-2xl font-bold">
        Por qué contactarnos
      </h2>
      <div className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            align={feature.align}
          />
        ))}
      </div>
    </section>
  );
}
