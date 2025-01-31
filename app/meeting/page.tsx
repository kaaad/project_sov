"use client";

import { motion } from "framer-motion";
import { InlineWidget } from "react-calendly";
import { Calendar } from "lucide-react";

export default function ScheduleConsultation() {
  return (
    <section className="py-20 bg-gray-50">
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
    </section>
)
};