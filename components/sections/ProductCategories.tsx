"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { 
  Settings, 
  Droplets, 
  Tractor, 
  Filter, 
  Battery, 
  Hammer, 
  Cog, 
  ThermometerSnowflake 
} from "lucide-react";

export function ProductCategories() {
  const t = useTranslations("Categories");

  const categories = [
    {
      id: "engine",
      title: t("engine"),
      description: t("engineDesc"),
      icon: Settings,
    },
    {
      id: "hydraulic",
      title: t("hydraulic"),
      description: t("hydraulicDesc"),
      icon: Droplets,
    },
    {
      id: "undercarriage",
      title: t("undercarriage"),
      description: t("undercarriageDesc"),
      icon: Tractor,
    },
    {
      id: "filters",
      title: t("filters"),
      description: t("filtersDesc"),
      icon: Filter,
    },
    {
      id: "electrical",
      title: t("electrical"),
      description: t("electricalDesc"),
      icon: Battery,
    },
    {
      id: "body",
      title: t("body"),
      description: t("bodyDesc"),
      icon: Hammer,
    },
    {
      id: "transmission",
      title: t("transmission"),
      description: t("transmissionDesc"),
      icon: Cog,
    },
    {
      id: "cooling",
      title: t("cooling"),
      description: t("coolingDesc"),
      icon: ThermometerSnowflake,
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
  };

  return (
    <section id="products" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-1 bg-primary rounded-full"></div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wide">
              {t("heading")}
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto font-hindi text-lg">
            उच्च गुणवत्ता वाले स्पेयर पार्ट्स हर तरह की अर्थमूविंग मशीनों के लिए
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <motion.a
                href={`https://wa.me/919430192911?text=Hello%2C%20I%20am%20looking%20for%20${category.title}%20parts.`}
                target="_blank"
                rel="noopener noreferrer"
                key={category.id}
                variants={cardVariants}
                whileHover={{ y: -5, borderColor: "var(--primary)" }}
                className="group p-6 rounded-2xl bg-dark-card border border-border hover:bg-dark transition-all duration-300 relative overflow-hidden flex flex-col items-start block cursor-pointer"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300 pointer-events-none" />
                
                <div className="w-14 h-14 rounded-xl bg-black border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 text-primary">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-sm text-gray-400 font-medium">
                  {category.description}
                </p>
                
                {/* Subtle arrow indicator */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <svg className="w-4 h-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
