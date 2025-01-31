"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Euro,
  Search,
  Building2,
  GraduationCap,
  Languages
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { JobCard } from "@/components/job-card";
import { JobApplicationModal } from "@/components/job-application-modal";
import { Jobs } from "@/types";

// Sample job data - replace with actual API call
const jobs = [
  {
    id: 1,
    title: "Construction Worker",
    company: "BuildTech GmbH",
    location: "Munich, Germany",
    type: "Full-time",
    salary: "€2,800 - €3,500/month",
    description: "Experienced construction worker needed for commercial building projects.",
    requirements: [
      "3+ years of construction experience",
      "Knowledge of safety regulations",
      "Basic German language skills",
      "Physical fitness"
    ],
    benefits: [
      "Health insurance",
      "Accommodation assistance",
      "Travel support",
      "Training opportunities"
    ]
  },
  {
    id: 2,
    title: "Healthcare Assistant",
    company: "MediCare Plus",
    location: "Vienna, Austria",
    type: "Full-time",
    salary: "€2,500 - €3,200/month",
    description: "Caring healthcare assistant required for elderly care facility.",
    requirements: [
      "Healthcare certification",
      "1+ year experience in elderly care",
      "Basic German language",
      "Empathetic nature"
    ],
    benefits: [
      "Comprehensive insurance",
      "Paid overtime",
      "Professional development",
      "Relocation package"
    ]
  },
  {
    id: 3,
    title: "Industrial Technician",
    company: "TechnoFab s.r.o.",
    location: "Bratislava, Slovakia",
    type: "Full-time",
    salary: "€2,200 - €2,800/month",
    description: "Skilled technician needed for manufacturing plant maintenance.",
    requirements: [
      "Technical certification",
      "2+ years industrial experience",
      "Equipment maintenance skills",
      "Team player"
    ],
    benefits: [
      "Performance bonuses",
      "Housing allowance",
      "Skills training",
      "Career growth opportunities"
    ]
  }
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApply = (job: any) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6">Job Opportunities in Europe</h1>
          <p className="text-lg text-gray-600 mb-8">
            Discover exciting career opportunities across Europe with competitive packages and full relocation support.
          </p>

          {/* Search Bar */}
          <div className="relative mb-12">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search jobs by title, company, or location..."
              className="pl-12 py-6 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <JobCard
                key={job.id}
                job={job}
                onApply={() => handleApply(job)}
              />
            ))}
          </div>

          {/* No Results */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No jobs found matching your search criteria.</p>
            </div>
          )}
        </motion.div>

        {/* Application Modal */}
        {selectedJob && (
          <JobApplicationModal
            job={selectedJob}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  )
};