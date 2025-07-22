"use client";

import { motion } from "framer-motion";
import { Shield, Users, Award, Globe, CheckCircle, Building2, Target, Heart, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const stats = [
  { icon: Users, value: "600+", label: "Nepali Workers Deployed" },
  { icon: Building2, value: "10+", label: "European Partner Companies" },
  { icon: Award, value: "98%", label: "Success Rate" },
  { icon: Globe, value: "6", label: "European Countries" }
];

const values = [
  {
    icon: Shield,
    title: "Trust & Compliance",
    description: "Full legal compliance with both Nepali and European regulations, ensuring secure and legitimate employment opportunities."
  },
  {
    icon: Target,
    title: "Excellence in Service",
    description: "Committed to providing exceptional service quality in recruitment, training, and deployment of skilled Nepali workers."
  },
  {
    icon: Heart,
    title: "Worker Welfare",
    description: "Prioritizing the well-being and success of every Nepali worker we deploy, with ongoing support throughout their journey."
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Meeting international standards in manpower supply while maintaining the highest levels of professionalism."
  }
];

const licenses = [
  {
    title: "Department of Foreign Employment License",
    description: "Official license from Government of Nepal",
    image: "/licence.png"
  },
  {
    title: "Manpower Agency Registration",
    description: "Registered manpower recruitment agency",
    image: "/company-register.png"
  },
  {
    title: "Permanent Accounts Number (PAN) Registration Certificate",
    description: "Certified to operate in European markets",
    image: "/pan.png"
  },
  {
    title: "Company Registration Certificate",
    description: "ISO certified recruitment processes",
    image: "/company-register-nepali.png"
  }
];

export default function AboutPage() {

    const [activeIndex, setActiveIndex] = useState<number | null>(null)
  return (
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Shrinkhala Overseas
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Licensed manpower agency in Nepal specializing in recruiting and deploying skilled Nepali workers 
            to European employers. We bridge the gap between talented Nepali professionals and European 
            opportunities with complete legal compliance and ongoing support.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Our Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded with a vision to connect skilled Nepali workers with European opportunities, 
                Shrinkhala Overseas has become a trusted bridge between Nepal and Europe's growing 
                labor market demands.
              </p>
              <p>
                Since our establishment, we have successfully deployed over 500 skilled Nepali workers 
                to leading European companies across Croatia, Serbia, Romania, Bulgaria, Greece and Portugal. Our commitment 
                to excellence and legal compliance has earned us recognition as a premier manpower agency in Nepal.
              </p>
              <p>
                We understand the challenges faced by both European employers seeking reliable workforce 
                and Nepali workers aspiring for international career opportunities. Our comprehensive 
                approach ensures successful placements that benefit all parties involved.
              </p>
            </div>
          </div>
          <div className="bg-primary/5 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To be the leading manpower agency connecting skilled Nepali workers with European employers, 
              ensuring mutual success through professional recruitment, comprehensive training, and ongoing support.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">100% Legal Compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Comprehensive Support Services</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-gray-700">Long-term Partnership Approach</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Licenses & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Licenses & Certifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our official licenses and certifications demonstrate our commitment to legal compliance 
              and professional standards in manpower recruitment and deployment.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {licenses.map((license, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={license.image}
                    alt={`${license.title} - Shrinkhala Overseas official license document`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{license.title}</h3>
                  <p className="text-gray-600">{license.description}</p>
                </div>
              </motion.div>
            ))}
          </div> */}

          <div className="relative">
            {/* Dark overlay when active */}
            {activeIndex !== null && (
                <div
                className="fixed inset-0 bg-black/60 z-40 transition-opacity duration-300"
                onClick={() => setActiveIndex(null)}
                />
            )}

            {/* Cards Grid */}
            <div className="relative z-0 grid grid-cols-1 md:grid-cols-2 gap-8">
                {licenses.map((license, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 cursor-pointer"
                    onClick={() => setActiveIndex(index)}
                >
                    <div className="relative h-64">
                    <Image
                        src={license.image}
                        alt={`${license.title} - Shrinkhala Overseas official license document`}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-4 left-4">
                        <Shield className="h-8 w-8 text-white" />
                    </div>
                    </div>
                    <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{license.title}</h3>
                    <p className="text-gray-600">{license.description}</p>
                    </div>
                </motion.div>
                ))}
            </div>

            {/* Zoomed-out floating image (not inside grid) */}
            {activeIndex !== null && (
                <div className="fixed z-50 inset-0 flex items-center justify-center p-6 pointer-events-none">
                <div
                    className="relative w-full max-w-4xl h-[70vh] bg-white rounded-xl overflow-hidden pointer-events-auto shadow-2xl"
                    onClick={(e) => e.stopPropagation()} // prevent overlay click
                >
                    <Image
                    src={licenses[activeIndex].image}
                    alt={`Zoomed license - ${licenses[activeIndex].title}`}
                    fill
                    className="object-contain"
                    />

                    {/* Close button */}
                    <button
                    onClick={() => setActiveIndex(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-1 hover:bg-black"
                    >
                    <X className="h-5 w-5" />
                    </button>
                </div>
                </div>
            )}
            </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary text-white rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Why European Employers Choose Us</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            We provide more than just manpower - we deliver skilled, trained, and culturally prepared 
            Nepali workers who integrate seamlessly into European workplaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="opacity-90">Workers Successfully Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="opacity-90">Client Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Ongoing Support</div>
            </div>
          </div>
        </motion.div>
       </div>
  );
}