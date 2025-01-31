"use client";

import { StatCard } from "@/components/ui/stat-card";

const stats = [
  {
    value: "98%",
    label: "Success Rate",
    description: "Placement success across industries"
  },
  {
    value: "24/7",
    label: "Support",
    description: "Round-the-clock assistance"
  },
  {
    value: "7+",
    label: "Countries",
    description: "European nations covered"
  },
  {
    value: "2000+",
    label: "Workers Placed",
    description: "Successfully working in Europe"
  }
];

export default function Statistics() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}