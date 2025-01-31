"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stepNumber: number;
  index: number;
  isLeft: boolean;
}

export function TimelineStep({ 
  icon: Icon, 
  title, 
  description, 
  stepNumber, 
  index,
  isLeft 
}: TimelineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={cn(
        "flex items-center gap-8",
        isLeft ? "flex-row" : "flex-row-reverse"
      )}
    >
      {/* Content */}
      <div className={cn(
        "flex-1 p-6 bg-card rounded-lg shadow-lg hover:shadow-xl transition-shadow",
        isLeft ? "text-right" : "text-left"
      )}>
        <h3 className="text-2xl font-bold mb-2 text-primary">
          Step {stepNumber}: {title}
        </h3>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* Timeline Node */}
      <div className="relative flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
          className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
        >
          <Icon className="h-8 w-8 text-primary" />
        </motion.div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
          {stepNumber}
        </div>
      </div>
    </motion.div>
  );
}