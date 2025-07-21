"use client";

import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import { Calendar } from "lucide-react";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Schedule a Recruitment Meeting | Hire Nepali Workers – Shrinkhala Overseas",
  description: "European employers can schedule a meeting to hire skilled Nepali workers for construction, caregiving, factory, and hospitality jobs. Discuss your manpower demand today.",
  openGraph: {
    title: "Schedule a Recruitment Meeting with Shrinkhala Overseas",
    type: 'website',
    siteName: "Shrinkhala Overseas",
    description: "Book a meeting to submit your manpower demand for skilled Nepali workers. Trusted manpower agency in Nepal for Europe.",
    url: "https://shrinkhalaoverseas.com/meeting",
    images: [
      {
        url: "https://shrinkhalaoverseas.com/opengraph.png",
        width: 1200,
        height: 1200,
        alt: "Shrinkhala Overseas – Meeting"
      }
    ],
  }
};


export default function ScheduleConsultation() {
  return (
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl font-bold mb-4">Book a Meeting with Us.</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Book a short video call with us to discuss your Company's workforce needs.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4"
        >
          <InlineWidget
            url= "https://calendly.com/contact-shrinkhalaoverseas" // Replace with your Calendly URL
            styles={{
              height: '700px',
              width: '100%',
              zIndex: 1
            }}
          />
        </motion.div>
      </div>
)
};