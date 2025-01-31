"use client";

import { motion } from "framer-motion";
import { HomeIcon, MapPin, Phone, Users } from "lucide-react";

export default function SettlementSupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">Settlement Support</h1>
          <p className="text-lg text-gray-600 mb-12">Comprehensive assistance for a smooth transition to your new life in Europe</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <HomeIcon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accommodation</h3>
              <p className="text-gray-600">Assistance in finding and securing suitable housing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Registration</h3>
              <p className="text-gray-600">Support with necessary local registrations and paperwork</p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Settlement Services</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Initial Setup</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Temporary accommodation arrangement</li>
                  <li>Bank account setup assistance</li>
                  <li>Mobile phone connection</li>
                  <li>Local transportation guidance</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Administrative Support</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Local authority registration</li>
                  <li>Healthcare system enrollment</li>
                  <li>Tax registration assistance</li>
                  <li>Social security setup</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Additional Support</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">24/7 Helpline</h3>
                  <p className="text-gray-600">Round-the-clock assistance for any concerns</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Community Integration</h3>
                  <p className="text-gray-600">Connection with local Nepali communities</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}