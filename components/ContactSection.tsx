"use client";

import { motion } from "framer-motion";
import { ContactForm } from "@/components/ui/contact-form";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take the first step towards your European career
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-semibold mb-6">Our Office</h3>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <span className="font-semibold">Address:</span>
                Goushala,Kathmandu 09, Nepal
              </p>
              <p className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold">Email:</span>
                contact.shrinkhalaoverseas@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Phone:</span>
                +977 01-5914606
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">WhatsApp:</span>
                +977 9867231523 <br />
                +977 9768389807
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Hours:</span>
                Mon - Fri: 9:00 AM - 6:00 PM
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}