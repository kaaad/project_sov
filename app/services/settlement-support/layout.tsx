import React from "react";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Settlement Support for Nepali Workers in Europe | Shrinkhala Overseas",
  description: "We assist Nepali workers with accommodation, transport, and orientation after their arrival in Europe to ensure smooth integration and safety.",
  openGraph: {
    title: "Nepali Worker Settlement Assistance in Europe",
    type: 'website',
    siteName: "Shrinkhala Overseas",
    description: "Comprehensive settlement support for deployed Nepali manpower including housing, local integration, and post-arrival orientation in Europe.",
    url: "https://shrinkhalaoverseas.com/services/settlement-support",
    images: [
      {
        url: "https://shrinkhalaoverseas.com/opengraph.png",
        width: 1200,
        height: 1200,
        alt: "Settlement Support Europe"
      }
    ]
  }
};




const SettlementSupportLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24">
            {children}
        </div>   
    )
}

export default SettlementSupportLayout;