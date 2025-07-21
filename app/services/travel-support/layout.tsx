import React from "react";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Travel & Departure Support for Nepali Workers to Europe | Shrinkhala Overseas",
  description: "We arrange air tickets, airport transfers, pre-departure briefings, and emergency contact support for workers traveling from Nepal to Europe.",
  openGraph: {
    title: "Travel Assistance for Deployed Nepali Workers",
    type: 'website',
    siteName: "Shrinkhala Overseas",
    description: "Shrinkhala Overseas ensures smooth travel support for Nepali manpower flying to Europe, including logistics and compliance checks.",
    url: "https://shrinkhalaoverseas.com/services/travel-support",
    images: [
      {
        url: "https://shrinkhalaoverseas.com/opengraph.png",
        width: 1200,
        height: 1200,
        alt: "Nepali Worker Travel Support"
      }
    ]
  }
};




const TravelSupportLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24">
            {children}
        </div>   
    )
}

export default TravelSupportLayout;