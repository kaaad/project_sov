"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, Users, Award } from "lucide-react";

export default function JobPlacementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">Job Placement</h1>
          <p className="text-lg text-gray-600 mb-12">Direct placement with leading European companies across various sectors</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building2 className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Partner Companies</h3>
              <p className="text-gray-600">Access to leading European employers across various industries</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized Matching</h3>
              <p className="text-gray-600">Tailored job matching based on skills and preferences</p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Our Placement Process</h2>
            <ol className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <h4 className="font-semibold">Profile Assessment</h4>
                  <p className="text-gray-600">Comprehensive evaluation of skills, experience, and career goals</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <h4 className="font-semibold">Job Matching</h4>
                  <p className="text-gray-600">Identifying suitable positions with our European partners</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <h4 className="font-semibold">Interview Preparation</h4>
                  <p className="text-gray-600">Guidance and support throughout the interview process</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                <div>
                  <h4 className="font-semibold">Placement & Support</h4>
                  <p className="text-gray-600">Assistance with job offer negotiation and onboarding</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Success Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-gray-600">Placement Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1000+</div>
                <p className="text-gray-600">Workers Placed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-gray-600">Partner Companies</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}