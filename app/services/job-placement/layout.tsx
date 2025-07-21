import React from "react";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Job Placement of Nepali Workers for Europe | Shrinkhala Overseas",
  description: "We place skilled Nepali workers in European jobs across construction, hospitality, caregiving, and manufacturing. Trusted manpower placement agency in Nepal.",
  openGraph: {
    title: "Nepali Job Placement Services for Europe",
    type: 'website',
    siteName: "Shrinkhala Overseas",
    description: "Hire reliable Nepali workers through our job placement services. We connect European employers with pre-screened candidates across key industries.",
    url: "https://shrinkhalaoverseas.com/services/job-placement",
    images: [
      {
        url: "https://shrinkhalaoverseas.com/opengraph.png",
        width: 1200,
        height: 1200,
        alt: "Nepali Job Placement for Europe"
      }
    ]
  }
};



const JobPlacementLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24">
            {children}
        </div>   
    )
}

export default JobPlacementLayout;