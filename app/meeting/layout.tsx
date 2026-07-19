import React from "react";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Schedule a Recruitment Interview | Hire Nepali Workers – Shrinkhala Overseas",
  description: "Book a call to hire skilled Nepali workers for European job placements. Schedule your manpower recruitment meeting with Shrinkhala Overseas today.",
  openGraph: {
    title: "Schedule Interview to Hire Nepali Workers | Shrinkhala Overseas",
    type: 'website',
    siteName: "Shrinkhala Overseas",
    description: "European employers can schedule an interview to discuss hiring Nepali workers for construction, hospitality, caregiving, and other jobs.",
    url: "https://shrinkhalaoverseas.com/meeting",
    images: [
      {
        url: "https://shrinkhalaoverseas.com/opengraph.png",
        width: 1200,
        height: 1200,
        alt: "Schedule Meeting with Shrinkhala Overseas"
      }
    ]
  }
};



const MeetingLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <html lang="en">
          <head>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5852321424840124"
     crossOrigin="anonymous"></script>
          </head>
          <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24">
              {children}
          </section>  
        </html> 
    )
}

export default MeetingLayout;