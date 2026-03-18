"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { 
  Settings2, 
  Banknote, 
  Award, 
  Headset, 
  CheckCircle2 
} from "lucide-react";

export function WhyChooseUs() {
  const t = useTranslations("WhyUs");

  const features = [
    {
      id: "oem",
      title: t("oem"),
      description: t("oemDesc"),
      icon: Settings2,
    },

    {
      id: "wholesale",
      title: t("wholesale"),
      description: t("wholesaleDesc"),
      icon: Banknote,
    },
    {
      id: "experience",
      title: t("experience"),
      description: t("experienceDesc"),
      icon: Award,
    },
    {
      id: "expert",
      title: t("expert"),
      description: t("expertDesc"),
      icon: Headset,
    },
    {
      id: "quality",
      title: t("quality"),
      description: t("qualityDesc"),
      icon: CheckCircle2,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        stiffness: 100,
        damping: 15
      } 
    },
  };

  return (
    <section id="why-us" className="py-12 sm:py-16 md:py-24 bg-dark relative border-t border-white/5">
      {/* Subtle Glow Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="inline-flex justify-center mb-4">
            <span className="bg-primary/10 text-primary border border-primary/20 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase font-heading">
              Our Advantages
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wide">
            {t("heading")}
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={cardVariants}
                className="group p-6 sm:p-8 rounded-2xl bg-black border border-white/5 hover:border-primary/50 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center"
              >
                {/* Top border accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary transition-all duration-500"></div>
                
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-dark-card border border-white/10 flex items-center justify-center mb-4 sm:mb-6 relative z-10 group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:text-black transition-colors" />
                </div>
                
                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-2 sm:mb-3 relative z-10 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 font-medium leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
