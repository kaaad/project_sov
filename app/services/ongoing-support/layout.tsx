import React from "react";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Ongoing Support for Nepali Workers Abroad | Shrinkhala Overseas",
  description: "We provide continuous support for Nepali workers deployed in Europe to ensure job satisfaction, legal compliance, and employer-worker coordination.",
  openGraph: {
    title: "Ongoing Support Services for Nepalese Workers in Europe",
    type: 'website',
    siteName: "Shrinkhala Overseas",
    description: "Shrinkhala Overseas provides ongoing support to deployed Nepali workers—resolving issues, managing contracts, and ensuring productivity in Europe.",
    url: "https://shrinkhalaoverseas.com/services/ongoing-support",
    images: [
      {
        url: "https://shrinkhalaoverseas.com/opengraph.png",
        width: 1200,
        height: 1200,
        alt: "Ongoing Support for Nepalese Workers"
      }
    ]
  }
};




const OngoingSuportLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24">
            {children}
        </div>   
    )
}

export default OngoingSuportLayout;