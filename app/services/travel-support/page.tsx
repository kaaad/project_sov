"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Plane, Map, Calendar, Headphones, MoveLeftIcon, MoveRightIcon } from "lucide-react";
import Link from "next/link";

export default function TravelSupportPage() {
  return (
    <>
      <div className="w-[70%] mx-auto flex items-center justify-between mb-12">
        <Link href="/services/documentation" className="text-blue-500 hover:underline">
          <Button>
            <MoveLeftIcon className="inline h-4 w-4" /> Documentation 
          </Button>
        </Link>
        <Link href="/services/settlement-support" className="text-blue-500 hover:underline">
          <Button>
            Settlement Support <MoveRightIcon className="inline h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">Travel Support</h1>
          <p className="text-lg text-gray-600 mb-12">Comprehensive travel arrangements and support for your journey to Europe</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Plane className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flight Bookings</h3>
              <p className="text-gray-600">Hassle-free flight arrangements to your destination</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Map className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Travel Planning</h3>
              <p className="text-gray-600">Detailed travel itinerary and guidance</p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Travel Services</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Pre-Travel Support</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Flight booking and confirmation</li>
                  <li>Travel insurance arrangement</li>
                  <li>Pre-departure briefing</li>
                  <li>Travel document organization</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Arrival Assistance</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Airport pickup service</li>
                  <li>Initial accommodation arrangement</li>
                  <li>Local transportation guidance</li>
                  <li>Emergency contact support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Travel Support Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Calendar className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">24/7 Assistance</h3>
                  <p className="text-gray-600">Round-the-clock support throughout your journey</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Headphones className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Emergency Support</h3>
                  <p className="text-gray-600">Immediate assistance for any travel-related issues</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>  
  );
}