"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, FileCheck, Plane, HomeIcon, HeartHandshake } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from "next/link";

const services = [
  {
    icon: Briefcase,
    title: "Job Placement",
    description: "Direct placement with leading European companies across various sectors",
    link: "/services/job-placement"
  },
  {
    icon: GraduationCap,
    title: "Skills Training",
    description: "Pre-departure training and skill development programs",
    link: "/services/skills-training"
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description: "Complete visa and work permit assistance",
    link: "/services/documentation"
  },
  {
    icon: Plane,
    title: "Travel Support",
    description: "Flight bookings and travel arrangements",
    link: "/services/travel-support"
  },
  {
    icon: HomeIcon,
    title: "Settlement Support",
    description: "Initial accommodation and local registration assistance",
    link: "/services/settlement-support"
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "Continuous support throughout your employment period",
    link: "/services/ongoing-support"
  }
];

export default function Services() {

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support services to ensure your successful transition to European employment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="group hover:shadow-lg transition-shadow duration-300 h-full relative overflow-hidden">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={service.link} className="absolute bottom-0 left-0 right-0 bg-[#f47622] text-primary-foreground py-2 text-center transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                      Learn More
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




