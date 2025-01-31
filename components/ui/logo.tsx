"use client";

import { color, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
    color: string
}

export function Logo({color}: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${color}`}>
      <motion.div
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image src="./shrinkhala_logo.png" alt="Logo" width={30} height={10} />
      </motion.div>
      <motion.span
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-bold text-xl"
      >
        Shrinkhala Overseas
      </motion.span>
    </Link>
  );
}