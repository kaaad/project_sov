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
    id: 7,
    title: "Lathe Operator",
    company: "************",
    location: "Romania",
    type: "Full-time",
    salary: "€900/month",
    description: "Experienced lathe operator needed for precision machining, part fabrication, and equipment operation in an industrial workshop.",
    requirements: [
      "2+ years of experience operating manual or CNC lathe machines",
      "Ability to read and interpret technical drawings",
      "Knowledge of measuring tools (calipers, micrometers, gauges)",
      "Understanding of machining tolerances and safety procedures",
      "Basic English communication skills"
    ],
    benefits: [
      "Accommodation provided",
      "Meals provided",
      "Relocation bonus after 6 months",
      "Medical insurance",
      "Work equipment provided"
    ]
  },
  {
    id: 6,
    title: "Auto Mechanic",
    company: "************",
    location: "Romania",
    type: "Full-time",
    salary: "€800/month",
    description: "Skilled auto mechanic needed for vehicle diagnostics, repairs, and routine maintenance in a professional workshop environment.",
    requirements: [
      "2+ years of auto mechanic experience",
      "Knowledge of engine repair, electrical systems, and diagnostics",
      "Ability to use workshop tools and equipment",
      "Basic English communication skills",
      "Ability to follow safety and maintenance procedures"
    ],
    benefits: [
      "Accommodation provided",
      "Meals provided",
      "Relocation bonus after 6 months",
      "Medical insurance",
      "Work equipment provided"
    ]
  },
  {
    id: 4,
    title: "Construction Worker",
    company: "************",
    location: "Romania",
    type: "Full-time",
    salary: "€600/month basic",
    description: "Experienced construction worker needed for commercial building projects.",
    requirements: [
      "1+ years of construction experience",
      "Knowledge of safety regulations",
      "Basic English language skills",
      "Physical fitness",
    ],
    benefits: [
      "Health insurance",
      "Accommodation provided",
      "Food provided",
      "Transportation provided"
    ]
  },
  {
    id: 5,
    title: "Housekeeper",
    company: "************",
    location: "Romania",
    type: "Full-time",
    salary: "€550–€600/month basic",
    description: "Responsible and detail-oriented housekeeper needed for maintaining cleanliness in residential and hotel facilities.",
    requirements: [
      "1+ years of housekeeping or cleaning experience",
      "Basic English language skills",
      "Knowledge of cleaning tools and chemicals",
      "Ability to follow hygiene and safety standards",
      "Physical fitness and stamina"
    ],
    benefits: [
      "Accommodation provided",
      "Food provided",
      "Health insurance",
      "Uniform provided",
      "Transportation provided"
    ]
  },
  {
    id: 1,
    title: "Construction Worker (Mason, Steel Fixture, Carpenter)",
    company: "************",
    location: "Slovenia",
    type: "Full-time",
    salary: "€960/month basic",
    description: "Experienced construction worker needed for commercial building projects.",
    requirements: [
      "1+ years of construction experience",
      "Knowledge of safety regulations",
      "Basic English language skills",
      "Physical fitness",
      "Driving license preferred (category B)"
    ],
    benefits: [
      "Health insurance",
      "Accommodation provided",
      "Food provided",
      "Transportation provided"
    ]
  },
  {
    id: 2,
    title: "Construction Supervisor",
    company: "*************",
    location: "Slovenia",
    type: "Full-time",
    salary: "€1160/month starting salary",
    description: "Skilled supervisor needed for overseeing residential construction projects.",
    requirements: [
      "3+ years supervisory experience",
      "Minimum 3 years of professional experience",
	    "B-level English proficiency (spoken and written)",
	    "Valid category B driving license",
      "Proficiency in English"
    ],
    benefits: [
      "Health insurance",
      "Accommodation provided",
      "Food provided",
      "Transportation provided"
    ]
  },
  {
    id: 3,
    title: "HOUSEKEEPER.",
    company: "*************",
    location: "Slovenia",
    type: "Full-time",
    salary: "€950/month",
    description: "Looking for a dedicated housekeeper to maintain cleanliness and order in hotel industry.",
    requirements: [
      "Previous housekeeping experience",
      "Good Communication Skills",
      "Fast & Efficient Workers"
    ],
    benefits: [
      "Health insurance",
      "Accommodation provided",
      "Food provided",
      "Transportation provided"
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
  )
};