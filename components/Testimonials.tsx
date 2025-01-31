"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/ui/testimonial-card";

const testimonials = [
  {
    name: "Khim Bahadur Bohara",
    role: "Welder - Construction Worker.",
    company: "Zagreb,Croatia",
    image: "/user-01.png",
    content: "The support I received throughout my journey was exceptional. Now I'm working with a leading construction company in Croatia."
  },
  {
    name: "Ranjeeta Khand",
    role: "Baker",
    company: "Vincovci, Croatia",
    image: "/user-02.png",
    content: "From documentation to settling in Croatia, they guided me at every step. I'm grateful for their professional service."
  },
  {
    name: "Labesh Sunuwar",
    role: "Construction Worker",
    company: "Zagreb, Croatia",
    image: "/user-03.jpeg",
    content: "Their training program prepared me well for working in Croatia. The transition was smooth and well-managed."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our successfully placed professionals across Europe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}