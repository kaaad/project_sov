"use client";

import { motion } from "framer-motion";
import { HeartHandshake, MessageCircle, LifeBuoy, Clock } from "lucide-react";

export default function OngoingSupportPage() {
  return (
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">Ongoing Support</h1>
          <p className="text-lg text-gray-600 mb-12">Continuous assistance throughout your employment period in Europe</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <MessageCircle className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Regular Check-ins</h3>
              <p className="text-gray-600">Scheduled support sessions and progress monitoring</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <LifeBuoy className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Problem Resolution</h3>
              <p className="text-gray-600">Quick assistance for any workplace or personal issues</p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Support Services</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Workplace Support</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Regular performance feedback</li>
                  <li>Workplace culture adaptation</li>
                  <li>Communication assistance</li>
                  <li>Career development guidance</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Personal Support</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Cultural integration assistance</li>
                  <li>Healthcare guidance</li>
                  <li>Family support services</li>
                  <li>Social networking opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Support Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Clock className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">24/7 Availability</h3>
                  <p className="text-gray-600">Round-the-clock access to support team</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <HeartHandshake className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Dedicated Support</h3>
                  <p className="text-gray-600">Personal support coordinator for each worker</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
  );
}