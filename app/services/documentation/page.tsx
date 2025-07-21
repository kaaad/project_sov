"use client";

import { motion } from "framer-motion";
import { FileCheck, ClipboardCheck, FileText, Shield } from "lucide-react";

export default function DocumentationPage() {
  return (
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">Documentation Support</h1>
          <p className="text-lg text-gray-600 mb-12">Complete visa and work permit assistance for your European journey</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FileText className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Document Preparation</h3>
              <p className="text-gray-600">Expert assistance in preparing all required documentation</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Legal Compliance</h3>
              <p className="text-gray-600">Ensuring all documentation meets European legal requirements</p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Documentation Process</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Required Documents</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Passport and identification</li>
                  <li>Educational certificates</li>
                  <li>Professional qualifications</li>
                  <li>Work experience letters</li>
                  <li>Language proficiency certificates</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Our Support Services</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Document verification and authentication</li>
                  <li>Translation services</li>
                  <li>Visa application assistance</li>
                  <li>Work permit processing</li>
                  <li>Legal document review</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Why Choose Our Documentation Service</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <ClipboardCheck className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Expert Guidance</h3>
                  <p className="text-gray-600">Professional support throughout the documentation process</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">100% Compliance</h3>
                  <p className="text-gray-600">All documents prepared according to European standards</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
  );
}