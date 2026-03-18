"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ShieldCheck, PackageCheck } from "lucide-react";

export function AboutUs() {
  const t = useTranslations("About");

  const highlights = [
    {
      icon: ShieldCheck,
      text: "Genuine OEM Parts",
    },

    {
      icon: PackageCheck,
      text: "Wholesale & Bulk Orders",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center space-x-2">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wide">
                {t("heading")}
              </h2>
            </div>
            
            <div className="prose prose-lg prose-invert text-gray-400 font-sans space-y-6">
              <p className="leading-relaxed text-base sm:text-lg">
                {t("p1")}
              </p>
              <p className="leading-relaxed text-base sm:text-lg shadow-sm border-l-4 border-primary pl-4 py-2 bg-white/5 rounded-r-lg">
                {t("p2")}
              </p>
              <p className="leading-relaxed text-base sm:text-lg">
                {t("p3")}
              </p>
            </div>

            <div className="pt-6 grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3 group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-heading font-bold text-white text-sm uppercase tracking-wider">{item.text}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[600px] rounded-3xl overflow-hidden"
          >
            {/* Abstract Graphic representing machinery/parts since we don't have a real image */}
            <div className="absolute inset-0 bg-dark-card border border-white/10 rounded-3xl overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-black via-dark to-primary/20 opacity-50"></div>
              
              {/* Decorative SVG */}
              <svg className="w-full h-full opacity-20 text-primary group-hover:text-primary group-hover:opacity-30 transition-all duration-700 transform group-hover:scale-105" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path fill="currentColor" d="M0 100V0l50 50 50-50v100L50 50z" />
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="10" fill="currentColor" />
              </svg>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-8 sm:left-8 sm:right-8 bg-black/80 backdrop-blur-md border border-white/10 p-4 sm:p-6 rounded-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary flex items-center justify-center text-black font-heading font-bold text-xl sm:text-2xl shrink-0">
                    21+
                  </div>
                  <div>
                    <h3 className="text-white font-heading font-bold text-lg sm:text-xl uppercase">Years of Trust</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">Delivering quality parts since establishment.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary rounded-tl-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary rounded-br-3xl opacity-50"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
