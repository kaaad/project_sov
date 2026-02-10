"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Building2, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 mt-0"
          >
            <Shield className="h-5 w-5 text-green-400" />
            <span className="text-sm font-medium">Licensed by Department of Foreign Employment, Nepal • License No. <span className="text-gray-300 font-bold">1603/079/080</span></span>
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-300 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your Gateway to European 
            <span className="text-white"> Career Opportunities</span>
          </motion.h1>

          <motion.p 
            className="text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Connecting skilled Nepali professionals with leading European companies. 
            Build your future with our trusted recruitment solutions.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/jobs">
              <Button size="lg" className="bg-[#0663aa] hover:bg-primary/50">
                Find Opportunities <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/meeting">
              <Button size="lg" variant="outline" className="text-dark border-white hover:bg-white/10">
                Partner With Us
              </Button>
            </Link>
          </motion.div>
          

          {/* Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-8 mt-16 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-white" />
              <div>
                <p className="text-3xl font-bold text-white">600+</p>
                <p className="text-gray-300">Placements</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8 text-white" />
              <div>
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="text-gray-300">Partner Companies</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-white" />
              <div>
                <p className="text-3xl font-bold text-white">7+</p>
                <p className="text-gray-300">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}




