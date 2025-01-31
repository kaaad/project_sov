"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, MapPin, MessageCircleMore } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import Link from "next/link";

const footerSections = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Services", href: "/#services" },
      { label: "Process", href: "/#process" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Contact Us", href: "/#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Job Placement", href: "/services/job-placement" },
      { label: "Skills Training", href: "/services/skills-training" },
      { label: "Documentation", href: "/services/documentation" },
      { label: "Travel Support", href: "/services/travel-support" },
      { label: "Settlement Support", href: "/services/settlement-support" },
    ],
  },
  {
    title: "Contact Info",
    content: [
      { icon: MapPin, text: "Goushala, Kathmandu 09, Nepal" },
      { icon: Phone, text: "+977 01-5914606" },
      { icon: MessageCircleMore, text: "+977 9867231523" },
      { icon: Mail, text: "contact.shrinkhalaoverseas@gmail.com" },
    ],
  },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/shrinkhala-overseas" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Logo color={"text-white"}/>
            <p className="mt-4 text-sm opacity-80">
              Connecting skilled Nepali workers with European opportunities,
              building bridges for a prosperous future.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-foreground/80 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-lg">{section.title}</h3>
              {section.links && (
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {section.content && (
                <ul className="space-y-3">
                  {section.content.map((item, contentIndex) => {
                    const Icon = item.icon;
                    return (
                      <li key={contentIndex} className="flex items-center gap-2">
                        <Icon className="h-4 w-4 opacity-80" />
                        <span className="text-sm opacity-80">{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} Shrinkhala Overseas Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm opacity-80 hover:opacity-100">
                Privacy Policy
              </a>
              <a href="#" className="text-sm opacity-80 hover:opacity-100">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}