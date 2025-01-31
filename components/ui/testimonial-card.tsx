"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  index: number;
}

export function TestimonialCard({ name, role, company, image, content, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar>
            <AvatarImage className="object-cover" src={image} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-600">{role}</p>
            <p className="text-sm text-gray-600">{company}</p>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{content}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}