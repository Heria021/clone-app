import React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function FutureDataCentersSection() {
  return (
    
    <Card className="container mx-auto bg-black border-none p-10 md:py-[72px]">
      <CardContent className="bg-[#8B5CF6]/12 flex flex-col justify-between gap-9 rounded-xl p-6 lg:flex-row lg:p-10">
        
        <div className="space-y-2 font-light">
          <h4 className="text-3xl font-normal text-secondary lg:text-4xl">
            We've Built the Future of Data Centers
          </h4>
          <p className="text-lg text-primary-foreground lg:text-xl">
            Contact our team for a demo
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 items-center md:flex lg:flex-col">
          <Button
            className="bg-[#8B5CF6] hover:bg-[#7C3AED] text-white h-8 rounded-full px-3.5 text-sm font-normal md:px-5"
          >
            Set Up a Time
          </Button>

          <Button
            variant="outline"
            className="bg-[#1a1a1a] hover:bg-[#262626] border-[#333] text-white h-8 rounded-full px-3.5 text-sm font-normal md:px-5"
          >
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}