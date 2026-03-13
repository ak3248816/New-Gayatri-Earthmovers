"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Search, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function Hero() {
  const t = useTranslations("Hero");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Split headline for word-by-word animation
  const headlineWords = t("h1").split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black text-white">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="gear-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path fill="currentColor" d="M49.5 25A24.5 24.5 0 1 0 74 49.5 24.5 24.5 0 0 0 49.5 25zM49.5 64A14.5 14.5 0 1 1 64 49.5 14.5 14.5 0 0 1 49.5 64z"/>
              <path fill="currentColor" d="M54.7 15.6l-2-6.2a34.7 34.7 0 0 0-6.4 0l-2 6.2a27 27 0 0 0-5.8 2.4l-5.4-3.7a34.7 34.7 0 0 0-4.5 4.5l3.7 5.4a27 27 0 0 0-2.4 5.8l-6.2 2a34.7 34.7 0 0 0 0 6.4l6.2 2a27 27 0 0 0 2.4 5.8l-3.7 5.4a34.7 34.7 0 0 0 4.5 4.5l5.4-3.7a27 27 0 0 0 5.8 2.4l2 6.2a34.7 34.7 0 0 0 6.4 0l2-6.2a27 27 0 0 0 5.8-2.4l5.4 3.7a34.7 34.7 0 0 0 4.5-4.5l-3.7-5.4a27 27 0 0 0 2.4-5.8l6.2-2a34.7 34.7 0 0 0 0-6.4l-6.2-2a27 27 0 0 0-2.4-5.8l3.7-5.4a34.7 34.7 0 0 0-4.5-4.5l-5.4 3.7A27 27 0 0 0 54.7 15.6zM49.5 59A9.5 9.5 0 1 1 59 49.5 9.5 9.5 0 0 1 49.5 59z"/>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#gear-pattern)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center flex flex-col items-center max-w-5xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <Badge variant="outline" className="text-primary border-primary/50 bg-primary/10 hover:bg-primary/20 transition-colors px-4 py-1.5 text-sm md:text-base font-medium rounded-full">
              {t("badge")}
            </Badge>
          </motion.div>

          {/* Headline - Word by Word Stagger */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-hero font-heading font-bold leading-tight mb-6 text-balance"
            variants={containerVariants}
          >
            {headlineWords.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className={`inline-block mr-3 ${index > 2 ? 'text-primary' : 'text-white'}`}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2 
            variants={itemVariants} 
            className="text-xl md:text-3xl font-hindi text-gray-300 font-medium mb-6"
          >
            {t("subtitle")}
          </motion.h2>

          {/* Body */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mb-10 leading-relaxed"
          >
            {t("body")}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark font-bold font-heading text-lg h-14 px-8 rounded-full">
              <Link href="/catalog">
                <Search className="mr-2 h-5 w-5" />
                {t("searchParts")}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-white font-bold font-heading text-lg h-14 px-8 rounded-full">
              <a href="https://wa.me/919430192911?text=Hello%2C%20I%20want%20to%20inquire%20about%20earthmoving%20spare%20parts." target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5 text-green-500" />
                {t("whatsappUs")}
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Phone Strip */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-full bg-primary/10 border-t border-primary/20 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 py-3 flex flex-wrap justify-center items-center gap-4 text-sm md:text-base font-medium font-heading">
          <PhoneCall className="h-4 w-4 text-primary" />
          <span className="text-gray-300">+91 9430192911</span>
          <span className="text-primary hidden sm:inline">|</span>
          <span className="text-gray-300">+91 9939563050</span>
          <span className="text-primary hidden sm:inline">|</span>
          <span className="text-gray-300">+91 7004525378</span>
        </div>
      </motion.div>
    </section>
  );
}
