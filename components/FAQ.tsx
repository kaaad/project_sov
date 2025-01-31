"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What qualifications do I need to work in Europe?",
    answer: "Requirements vary by position and country, but generally include relevant work experience, professional certifications, and basic language skills. We'll assess your qualifications and match you with suitable opportunities."
  },
  {
    question: "How long does the visa process take?",
    answer: "The visa process typically takes 2-3 months, depending on the destination country and position. Our documentation team handles all paperwork to ensure a smooth process."
  },
  {
    question: "Do you provide language training?",
    answer: "Yes, we offer comprehensive language training programs tailored to your destination country and job requirements, ensuring you can communicate effectively in your workplace."
  },
  {
    question: "What costs are involved in the process?",
    answer: "Our transparent fee structure covers recruitment, documentation, training, and placement services. Specific costs vary by destination and position. Contact us for detailed information."
  },
  {
    question: "How do you ensure job security?",
    answer: "We partner only with reputable European employers and provide legally binding contracts. Our ongoing support team maintains regular contact to ensure your workplace satisfaction."
  },
  {
    question: "What support do you offer after arrival?",
    answer: "Our settlement support includes accommodation assistance, local registration, banking setup, and continuous support throughout your employment period."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services and processes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-lg">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}