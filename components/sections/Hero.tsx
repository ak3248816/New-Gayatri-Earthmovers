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
      {/* Background - Realistic Earthmoving Machine Images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Excavator - top left */}
        <div className="absolute top-[3%] left-[1%] w-[25%] max-w-[320px] opacity-55">
          <img src="/machines/excavator.png" alt="" className="w-full h-auto" loading="eager" />
        </div>
        {/* JCB 3DX - top right */}
        <div className="absolute top-[3%] right-[1%] w-[25%] max-w-[320px] opacity-55">
          <img src="/machines/jcb-3dx.png" alt="" className="w-full h-auto" loading="eager" />
        </div>
        {/* Bulldozer - bottom left */}
        <div className="absolute bottom-[8%] left-[1%] w-[25%] max-w-[320px] opacity-55">
          <img src="/machines/bulldozer.png" alt="" className="w-full h-auto" loading="eager" />
        </div>
        {/* Wheel Loader - bottom right */}
        <div className="absolute bottom-[8%] right-[1%] w-[25%] max-w-[320px] opacity-55">
          <img src="/machines/wheel-loader.png" alt="" className="w-full h-auto" loading="eager" />
        </div>
        {/* Gradient overlay to blend into black */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
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
