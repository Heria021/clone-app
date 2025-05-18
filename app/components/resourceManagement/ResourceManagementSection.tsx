import React from "react";
import {
  Card,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const features = [
  {
    icon: "https://assets.basehub.com/fa068a12/4tjfOxi91wk29BRy6jH1p/mail.svg",
    title: "Resource Management",
    desc: "See all of your resources in one place, update issues, and dynamically plan your resources.",
  },
  {
    icon: "https://assets.basehub.com/fa068a12/xGzl38RZpWQq8bij8Hzhu/zap.svg",
    title: "Deployment Automation",
    desc: "From design, sourcing, supply, manufacturing, and deployment - our system automates the entire process.",
  },
  {
    icon: "https://assets.basehub.com/fa068a12/bp99UZ-NioE-mvd_ZLLh-/bar-chart-2.svg",
    title: "Networking",
    desc: "Ensure that your networking infrastructure is always in place and ready to scale with your deployments.",
  },
  {
    icon: "https://assets.basehub.com/fa068a12/ZJG_2vVCKgVzSUrxdDMHo/smile.svg",
    title: "Firmware Versioning",
    desc: "Ensure that your firmware is always up to date and secure with our automated versioning system.",
  },
  {
    icon: "https://assets.basehub.com/fa068a12/IDiRkDVimmZ2V_id1-FX7/command.svg",
    title: "Digital Twins",
    desc: "Plan capacity intelligently with our digital twin technology.",
  },
];

export default function ResourceManagementSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-10  py-6 px-6 lg:p-36 lg:container mx-auto">
      <div className="lg:w-1/2 flex flex-col gap-4 px-6 lg:pl-0 lg:pr-12 xl:pr-20">
        <Badge className="text-base px-3 font-medium text-muted-foreground rounded-full">Built for Scale</Badge>
        <h2 className="text-white text-3xl md:text-4xl font-medium max-w-xl">
          Dynamic Resource Management
        </h2>
        <p className=" text-muted-foreground text-lg lg:text-xl max-w-screen-md font-light">
          Seamlessly expand from racks to data centers. Our system grows with
          you, automatically managing resources across your entire
          infrastructure.
        </p>
      </div>

      {/* Right Feature Cards */}
      <div className="lg:w-1/2 flex flex-row md:flex-col overflow-x-auto  gap-10 w-full">
        {features.map(({ icon, title, desc }) => (
          <Card
            key={title}
            className="bg-secondary-foreground border-1 border-muted-foreground/30 rounded-lg p-5 flex flex-col min-w-[328px] md:flex-row  items-start gap-4"
          >
            <div className="flex-shrink-0 p-3 bg-primary rounded-full">
              <Image
                src={icon}
                alt={title}
                width={24}
                height={24}
                className="invert"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-1">
              <CardTitle className="text-secondary text-lg">{title}</CardTitle>
              <CardContent className="p-0 text-muted-foreground text-base font-light">
                {desc}
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}