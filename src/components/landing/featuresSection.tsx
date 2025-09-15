import FeatureCard from "@/src/components/landing/featureCard";
import features from "@/src/data/features";

export default function FeaturesSection(): React.ReactNode {
  return (
    <section className="flex flex-col items-center gap-12 text-center pt-16 pb-32 sm:px-16 bg-gradient-to-tl bg-amber-400">
      <h2 className="text-amber-800 px-4 text-2xl sm:text-3xl font-bold mb-8">
        Por qué contactarnos
      </h2>
      <div className="flex flex-col text-amber-800 items-center justify-center sm:flex-row sm:flex-wrap gap-12">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
}
