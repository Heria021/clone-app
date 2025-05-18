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
        {/* Feature 1 */}
        <FeatureCard
          title="Network Management and Monitoring"
          description="Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure."
          videoSrc="https://www.centralaxis.com/landing/SinglePane-b.mp4"
          poster="/posters/networking.png"
          isReversed={true}
          features={[
            "Real-time network performance monitoring and bandwidth optimization",
            "Automated network security and threat detection",
            "Advanced network diagnostics and troubleshooting tools"
          ]}
        />

        {/* Feature 2 */}
        <FeatureCard
          title="Advanced Monitoring"
          description="CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability."
          videoSrc="https://www.centralaxis.com/landing/__compliance.mp4"
          poster="/posters/monitoring.png"
          isReversed={false}
          features={[
            "Real-time performance metrics and predictive analytics",
            "Automated alerts and intelligent incident response",
            "Comprehensive reporting and trend analysis"
          ]}
        />

        {/* Feature 3 */}
        <FeatureCard
          title="A Single Pane of Glass"
          description="A unified view across all of your BMS and EPMS systems, tailored to your needs."
          videoSrc="https://www.centralaxis.com/landing/__compliance.mp4"
          poster=""
          isReversed={true}
          features={[
            "Comprehensive visibility across all of your colocation infrastructure",
            "Customizable interface tailored to your specific operational requirements and priorities.",
            "Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management."
          ]}
        />

        {/* Feature 4 */}
        <FeatureCard
          title="Built-In Compliance"
          description="CentralAxis provides compliance as a service for data centers."
          videoSrc="https://www.centralaxis.com/landing/SinglePane-b.mp4"
          poster=""
          isReversed={false}
          features={[
            "Track data for EU, US, and global regulatary standards.",
            "We guarantee compliance and handle every step between monitoring and reporting."
          ]}
        />
      </div>
    </div>
  );
}
