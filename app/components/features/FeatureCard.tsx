import { Check } from 'lucide-react';
import { FeatureCardProps } from './types';
import { Card, CardContent } from '@/components/ui/card'; // shadcn/ui

export function FeatureCard({
  title,
  description,
  videoSrc,
  poster,
  isReversed,
  features
}: FeatureCardProps) {
  return (
    // Feature Card container with reversed layout support
    <Card className={`bg-secondary-foreground border-muted-foreground/30 p-px flex w-full min-h-96 max-w-[380px] flex-col rounded-lg sm:max-w-full md:w-full md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''} xl:gap-16`}>
      {/* Video Section */}
      <div className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
        <div className="relative block w-full h-full aspect-video overflow-hidden rounded-md">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={poster}
            className="absolute w-full h-full object-contain rounded-md"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Text and Features Section */}
      <CardContent className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
        {/* Title and Description */}
        <div className="flex flex-col items-start gap-2">
          <h5 className="text-secondary text-2xl font-medium md:text-3xl">{title}</h5>
          <p className="text-muted/70 font-normal md:text-lg">{description}</p>
        </div>

        {/* Feature List */}
        <ul className="flex flex-col gap-3 pl-2 md:text-lg">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-4 text-muted/70 font-normal">
              <span className="flex items-center justify-center size-6 rounded-full bg-gray-500/30 min-w-[1.5rem]">
                {/* Check Icon */}
               <Check className='h-3 w-3'/>
              </span>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}