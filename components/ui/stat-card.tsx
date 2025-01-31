"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  description: string;
  index: number;
}

export function StatCard({ value, label, description, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <p className="text-5xl font-bold mb-2">{value}</p>
      <h3 className="text-xl font-semibold mb-1">{label}</h3>
      <p className="text-primary-foreground/80">{description}</p>
    </motion.div>
  );
}