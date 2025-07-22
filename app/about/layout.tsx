import React from "react";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: 'About Shrinkhala Overseas - Licensed Manpower Agency Nepal | European Recruitment',
  description: 'Learn about Shrinkhala Overseas, a government-licensed manpower agency in Nepal specializing in recruiting skilled Nepali workers for European employers. 500+ successful deployments to Germany, Croatia, Poland, Romania.',
  keywords: 'about Shrinkhala Overseas, licensed manpower agency Nepal, Nepali workers Europe recruitment, Department of Foreign Employment license, European manpower supply company Nepal',
  openGraph: {
    title: 'About Shrinkhala Overseas - Licensed Manpower Agency Nepal',
    description: 'Government-licensed manpower agency with 500+ skilled Nepali workers successfully deployed to European employers across Germany, Croatia, Poland, and Romania.',
    type: 'website',
    locale: 'en_US',
    url: 'https://shrinkhalaoverseas.com/about',
  },
  alternates: {
    canonical: 'https://shrinkhalaoverseas.com/about',
  },
};


const AboutLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-24">
            {children}
        </div>  
    )
}

export default AboutLayout;