import React from "react";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Latest Job Demands for Nepali Workers Abroad | Shrinkhala Overseas",
  description: "View the latest overseas job demands for Nepali workers. Apply for jobs in Europe including construction, hospitality, caregiving, and factory work.",
  openGraph: {
    title: "Overseas Job Openings for Nepali Workers | Apply Now",
    type: 'website',
    siteName: "Shrinkhala Overseas",
    description: "Find active manpower demands for Nepali workers. Apply for jobs in Germany, Croatia, Poland, Romania, and other European countries.",
    url: "https://shrinkhalaoverseas.com/jobs",
    images: [
      {
        url: "https://shrinkhalaoverseas.com/opengraph.png",
        width: 1200,
        height: 1200,
        alt: "Job Demands for Nepali Workers"
      }
    ]
  }
};




const JobsLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24">
            {children}
        </div>  
    )
}

export default JobsLayout;