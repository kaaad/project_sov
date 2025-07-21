import React from "react";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Pre-Deployment Skills Training for Nepali Workers | Shrinkhala Overseas",
  description: "We provide job-specific and soft-skills training to prepare Nepali candidates for work in Europe—construction, caregiving, hospitality, and more.",
  openGraph: {
    title: "Skills Training for Europe-Bound Nepali Workers",
    type: 'website',
    siteName: "Shrinkhala Overseas",
    description: "Certified training programs for Nepali workers heading to Europe. Upskilling in language, safety, work culture, and technical skills.",
    url: "https://shrinkhalaoverseas.com/services/skills-training",
    images: [
      {
        url: "https://shrinkhalaoverseas.com/opengraph.png",
        width: 1200,
        height: 1200,
        alt: "Skills Training Nepal to Europe"
      }
    ]
  }
};




const SkillsTrainingLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24">
            {children}
        </div>   
    )
}

export default SkillsTrainingLayout;