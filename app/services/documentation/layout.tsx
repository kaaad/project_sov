import React from "react";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Recruitment Documentation Services | Nepal to Europe | Shrinkhala Overseas",
  description: "We handle visa, work permit, and legal documentation for Nepali workers headed to Europe. Fully compliant with Nepalese and EU regulations.",
  openGraph: {
    title: "Legal Documentation for Nepali Worker Deployment to Europe",
    type: 'website',
    siteName: "Shrinkhala Overseas",
    description: "We assist with complete recruitment paperwork including contracts, visas, permits, and approvals for deploying Nepali manpower to Europe.",
    url: "https://shrinkhalaoverseas.com/services/documentation",
    images: [
      {
        url: "https://shrinkhalaoverseas.com/opengraph.png",
        width: 1200,
        height: 1200,
        alt: "Documentation for Nepali Workers"
      }
    ]
  }
};


const DocumentationLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24">
            {children}
        </div>   
    )
}

export default DocumentationLayout;