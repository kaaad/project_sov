"use client";

import { motion } from "framer-motion";
import { Shield, Globe, Clock, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { FeatureCard } from "@/components/ui/feature-card";

const features = [
  {
    icon: Shield,
    title: "Licensed & Certified",
    description: "Fully licensed by the Government of Nepal and certified by European authorities"
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Strong partnerships with leading employers across Europe"
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Efficient documentation and visa processing systems"
  },
  {
    icon: Award,
    title: "Success Rate",
    description: "98% successful placement rate with high retention"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your trusted partner in international recruitment with proven expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}