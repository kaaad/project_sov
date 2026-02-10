// "use client";

// import { motion } from "framer-motion";
// import { 
//   FileSearch, 
//   Users, 
//   GraduationCap, 
//   ClipboardCheck, 
//   Plane 
// } from "lucide-react";
// import { TimelineStep } from "./TimelineStep";

// const steps = [
//   {
//     icon: FileSearch,
//     title: "Tailored Workforce Solutions",
//     description: "We collaborate closely with European companies to understand their specific manpower requirements, ensuring the perfect match for every role.",
//   },
//   {
//     icon: Users,
//     title: "Rigorous Recruitment",
//     description: "Our team screens and selects skilled Nepali candidates, emphasizing technical expertise, language proficiency, and cultural adaptability.",
//   },
//   {
//     icon: GraduationCap,
//     title: "Comprehensive Training",
//     description: "We provide industry-specific training and certifications to ensure workers meet European standards.",
//   },
//   {
//     icon: ClipboardCheck,
//     title: "Hassle-Free Documentation",
//     description: "From visa processing to work permits, we handle all paperwork, ensuring full compliance with European regulations.",
//   },
//   {
//     icon: Plane,
//     title: "Seamless Deployment",
//     description: "We ensure workers reach their destination safely and provide ongoing support to both workers and employers.",
//   },
// ];

// export default function ProcessSection() {
//   return (
//     <section id="process" className="py-20 bg-background relative overflow-hidden">
//       <div className="container mx-auto px-4 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold mb-4">Our Process</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A streamlined journey from selection to placement, ensuring quality and compliance at every step
//           </p>
//         </motion.div>

//         {/* Timeline */}
//         <div className="relative max-w-5xl mx-auto">
//           {/* Steps */}
//           <div className="space-y-20">
//             {steps.map((step, index) => (
//               <TimelineStep
//                 key={index}
//                 {...step}
//                 stepNumber={index + 1}
//                 index={index}
//                 isLeft={index % 2 === 0}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { 
  FileSearch, 
  Users, 
  GraduationCap, 
  ClipboardCheck, 
  Plane 
} from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Tailored Workforce Solutions",
    description: "We collaborate closely with European companies to understand their specific manpower requirements, ensuring the perfect match for every role.",
  },
  {
    icon: Users,
    title: "Rigorous Recruitment",
    description: "Our team screens and selects skilled Nepali candidates, emphasizing technical expertise, language proficiency, and cultural adaptability.",
  },
  {
    icon: GraduationCap,
    title: "Comprehensive Training",
    description: "We provide industry-specific training and certifications to ensure workers meet European standards.",
  },
  {
    icon: ClipboardCheck,
    title: "Hassle-Free Documentation",
    description: "From visa processing to work permits, we handle all paperwork, ensuring full compliance with European regulations.",
  },
  {
    icon: Plane,
    title: "Seamless Deployment",
    description: "We ensure workers reach their destination safely and provide ongoing support to both workers and employers.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined journey from selection to placement, ensuring quality and compliance at every step
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-10 top-0 h-full w-1 bg-gradient-to-b from-[#0663aa]/20 via-[#0663aa] to-[#0663aa]/20"></div>

          {/* Steps */}
          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative flex items-start pl-16 group"
              >
                {/* Icon */}
                <div className="absolute -left-8 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#f47622]/80 to-[#f47622]/40 text-white rounded-full shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                  <step.icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <div className="flex-1 ml-8">
                  <h3 className="text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

