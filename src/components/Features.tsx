import Image from "next/image";
import Reveal from "./Reveal";

type FeatureCard = {
  title: string;
  image: string;
};

const features: FeatureCard[] = [
  {
    title: "Block by Default",
    image: "/features/block-by-default.png",
  },
  {
    title: "Real Brain Challenges",
    image: "/features/real-brain-challenges.png",
  },
  {
    title: "A Coin Economy You Control",
    image: "/features/coin-economy-you-control.png",
  },
  {
    title: "Weekly Budget Insights",
    image: "/features/weekly-budget-insights.png",
  },
  {
    title: "Custom App Pricing",
    image: "/features/custom-app-pricing.png",
  },
  {
    title: "Streaks That Mean Something",
    image: "/features/streaks-that-mean-something.png",
  },
];

const ROW_WIDTH_CLASSES: Record<0 | 1, [string, string]> = {
  0: [
    "sm:w-[250px] md:w-[310px] lg:w-[420px]",
    "sm:w-[310px] md:w-[380px] lg:w-[520px]",
  ],
  1: [
    "sm:w-[310px] md:w-[380px] lg:w-[520px]",
    "sm:w-[250px] md:w-[310px] lg:w-[420px]",
  ],
};

function FeatureCard({
  feature,
  index,
  widthClass,
}: {
  feature: FeatureCard;
  index: number;
  widthClass: string;
}) {
  return (
    <Reveal delay={index * 80}>
      <div
        className={`w-full sm:shrink-0 ${widthClass} group relative h-full min-h-70 sm:min-h-80 lg:min-h-95 overflow-hidden rounded-2xl border border-border bg-surface hover:border-accent/40 transition-all duration-300`}
      >
        <div className='absolute inset-0'>
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            className='object-cover opacity-60 group-hover:opacity-75 transition-opacity duration-500'
          />
          <div className='absolute inset-0 bg-linear-to-t from-bg via-bg/80 to-bg/10' />
        </div>

        <div className='absolute inset-0 flex flex-col justify-end p-6 sm:p-8 text-left z-10'>
          <h3 className='font-display font-semibold text-[20px] sm:text-[24px] lg:text-[28px] text-text-primary'>
            {feature.title}
          </h3>
        </div>
      </div>
    </Reveal>
  );
}

export default function Features() {
  const rows: FeatureCard[][] = [];
  for (let i = 0; i < features.length; i += 2) {
    rows.push(features.slice(i, i + 2));
  }

  return (
    <section id='features' className='py-28 px-6 border-t border-border-soft'>
      <div className='mx-auto max-w-7xl'>
        <Reveal>
          <div className='text-center mb-16 lg:mb-20'>
            <span className='inline-block rounded-full border border-border-soft bg-surface px-5 py-2 text-[13px] sm:text-[14px] font-medium text-text-secondary mb-5'>
              App Features
            </span>
            <h2 className='font-display font-semibold text-[32px] sm:text-[38px] lg:text-[44px] tracking-tight text-text-primary max-w-3xl mx-auto leading-tight'>
              Explore the Features
            </h2>
          </div>
        </Reveal>

        <div className='flex flex-col gap-5 lg:gap-7'>
          {rows.map((row, rowIndex) => {
            const widthClasses = ROW_WIDTH_CLASSES[(rowIndex % 2) as 0 | 1];
            return (
              <div
                key={rowIndex}
                className='flex flex-col sm:flex-row sm:justify-center gap-5 lg:gap-7'
              >
                {row.map((feature, colIndex) => (
                  <FeatureCard
                    key={feature.title}
                    feature={feature}
                    index={rowIndex * 2 + colIndex}
                    widthClass={widthClasses[colIndex]}
                  />
                ))}
              </div>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className='mt-20 flex justify-center'>
            <a
              href='#get'
              className='min-w-50 sm:min-w-60 text-center rounded-full bg-text-primary text-bg text-[15px] font-medium px-10 py-4 hover:bg-accent transition-colors'
            >
              Get Rebuild
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
