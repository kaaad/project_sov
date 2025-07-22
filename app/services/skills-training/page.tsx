"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { BookOpen, MoveLeftIcon, MoveRightIcon, Target } from "lucide-react";
import Link from "next/link";

export default function SkillsTrainingPage() {
  return (
    <>
      <div className="w-[70%] mx-auto flex items-center justify-between mb-12">
        <Link href="/services/job-placement" className="text-blue-500 hover:underline">
          <Button>
            <MoveLeftIcon className="inline h-4 w-4" /> Job Placement 
          </Button>
        </Link>
        <Link href="/services/documentation" className="text-blue-500 hover:underline">
          <Button>
            Documentation <MoveRightIcon className="inline h-4 w-4" />
          </Button>
        </Link>
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">Skills Training</h1>
          <p className="text-lg text-gray-600 mb-12">Pre-departure training and skill development programs</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Language Training</h3>
              <p className="text-gray-600">Intensive language courses focused on workplace communication</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Target className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
              <p className="text-gray-600">Industry-specific technical training and certification</p>
            </div>
          </div>

          <div className="bg-primary/5 p-8 rounded-lg mb-12">
            <h2 className="text-2xl font-bold mb-4">Training Programs</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Language Proficiency</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Basic to advanced language courses</li>
                  <li>Industry-specific terminology</li>
                  <li>Cultural integration modules</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Technical Training</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Hands-on practical training</li>
                  <li>Safety certifications</li>
                  <li>Equipment operation</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Soft Skills Development</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Communication skills</li>
                  <li>Teamwork and collaboration</li>
                  <li>Work ethics and professionalism</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Training Outcomes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-gray-600">Pass Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2000+</div>
                <p className="text-gray-600">Trained Workers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <p className="text-gray-600">Training Programs</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>  
  );
}