import centralAxisProducts from './data';
import { FeatureCard } from './FeatureCard';
import { Badge } from '@/components/ui/badge';

export default function FeaturesSection() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px]">
      <div className="flex flex-col items-center gap-3 self-center">
        <Badge variant={'default'} className='text-base px-3 font-medium bg-primary text-muted-foreground rounded-full'>Built for AI</Badge>
        <div className="flex max-w-[800px] flex-col items-center justify-center gap-1 self-center">
          <h4 className="text-pretty text-center text-3xl font-medium md:text-4xl text-secondary">Modernizing the Digital Backbone</h4>
        </div>
        <p className="text-muted-foreground text-pretty text-center text-lg font-light md:text-xl">Data center software (DCIM, BMS and EPMS) has stagnated. We've built a better way.</p>
      </div>

      <div className="flex flex-col gap-6">
        {centralAxisProducts.map((product, index) => (
          <FeatureCard
            key={index}
            title={product.title}
            description={product.description}
            videoSrc={`https://www.centralaxis.com${product.videoSrc}`}
            poster={product.posterSrc ? `https://www.centralaxis.com${product.posterSrc}` : ""}
            isReversed={index % 2 == 0}
            features={product.features}
          />
        ))}
      </div>
    </div>
  );
}