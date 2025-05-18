"use client";

import { Badge } from "@/components/ui/badge";
import React from "react";

const faqs = [
  {
    question: "Are these solutions applicable to me if I am operating a co-location?",
    answer:
      "Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively.",
  },
  {
    question: "How do you ensure data privacy and security?",
    answer:
      "We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Depending on your requirements, we offer flexible pricing models.",
  },
  {
    question: "Do you provide ongoing support and maintenance for your solutions?",
    answer:
      "Absolutely - we offer comprehensive support and maintenance as well as customization for your needs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Set up a demo and we'll guide you through our offerings and start a trial!",
  },
];

export default function FAQBlock() {
  return (
    <div className="container mx-auto flex flex-col items-center gap-10 px-6 py-14 md:py-[72px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-3 self-center">
        <Badge className="text-base px-3 font-medium bg-primary text-muted-foreground rounded-full">
          FAQs
        </Badge>

        <div className="flex max-w-[800px] flex-col items-center justify-center gap-1 self-center">
          <h2 className="text-center text-secondary text-3xl font-medium md:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <p className="text-muted-foreground max-w-screen-md text-center text-lg font-light md:text-xl">
          Find answers to common questions about our solutions.
        </p>
      </div>

      {/* FAQ Grid */}
      <div className="mx-auto grid w-full grid-cols-1 items-start gap-8 self-stretch lg:grid-cols-3 lg:gap-14 lg:px-24">
        {faqs.map((faq, index) => (
          <div key={index} className="flex flex-col gap-1.5">
            <p className="font-medium leading-relaxed tracking-tight sm:text-lg text-secondary">
              {faq.question}
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed tracking-tight sm:text-base">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}