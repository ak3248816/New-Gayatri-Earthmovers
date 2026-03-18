"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function BrandsSection() {
  const t = useTranslations("Brands");

  const brands = [
    { name: "JCB", color: "#F5C400" },
    { name: "CAT", color: "#FFB300" },
    { name: "Komatsu", color: "#004B87" },
    { name: "Hitachi", color: "#E60012" },
    { name: "L&T Case", color: "#D12229" },
    { name: "Volvo", color: "#14253A" },
    { name: "BEML", color: "#0055A4" },
    { name: "& More", color: "#333333" },
  ];

  const brandCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.4,
      }
    }
  };

  return (
    <section id="brands" className="py-12 sm:py-16 md:py-20 bg-secondary border-t border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground uppercase tracking-wide">
            {t("heading")}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full opacity-80" />
        </motion.div>

        {/* Desktop Grid View */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name + index}
              variants={brandCardVariants}
              whileHover={{ 
                y: -5,
                borderColor: brand.color,
                boxShadow: `0 10px 30px -10px ${brand.color}40`
              }}
              className="bg-white rounded-xl p-8 flex items-center justify-center border-2 border-transparent transition-all duration-300 filter grayscale hover:grayscale-0 cursor-pointer group"
            >
              <h3 
                className="text-3xl font-heading font-bold transition-colors duration-300 group-hover:!text-[--brand-color]"
                style={{ 
                  color: '#666',
                  // @ts-expect-error - css variable injected for hover
                  "--brand-color": brand.color 
                }}
              >
                {brand.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Marquee View */}
        <div className="md:hidden relative w-full flex overflow-x-hidden group">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-dark to-transparent" />
          
          <div className="animate-marquee flex whitespace-nowrap group-hover:pause gap-4 py-4">
            {/* First set */}
            {brands.map((brand, index) => (
              <div 
                key={brand.name + index + 'm1'}
                className="bg-white rounded-xl px-5 py-4 mx-1.5 min-w-[140px] flex items-center justify-center border-2 border-transparent transition-all duration-300 hover:border-primary filter grayscale hover:grayscale-0"
              >
                <h3 className="text-lg font-heading font-bold text-muted-foreground hover:text-foreground">
                  {brand.name}
                </h3>
              </div>
            ))}
            {/* Duplicated set for seamless infinite scroll */}
            {brands.map((brand, index) => (
              <div 
                key={brand.name + index + 'm2'}
                className="bg-white rounded-xl px-5 py-4 mx-1.5 min-w-[140px] flex items-center justify-center border-2 border-transparent transition-all duration-300 hover:border-primary filter grayscale hover:grayscale-0"
              >
                <h3 className="text-lg font-heading font-bold text-muted-foreground hover:text-foreground">
                  {brand.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-dark to-transparent" />
        </div>
      </div>
      
      {/* Required CSS for Marquee in global or inline */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .pause {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
