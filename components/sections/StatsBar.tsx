"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Award, Wrench, Users, Settings } from "lucide-react";

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });
  
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  // To store the display value state
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    // We subscribe to the motion value to update our React state
    // so that the component definitely re-renders.
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (isInView) {
      animate(count, to, { duration, ease: "easeOut" });
    }
  }, [isInView, count, to, duration]);

  return <span ref={nodeRef}>{displayValue}</span>;
}

export function StatsBar() {
  const t = useTranslations("Stats");

  const stats = [
    {
      id: "years",
      value: 21,
      suffix: "+",
      label: t("years"),
      icon: Award,
    },
    {
      id: "parts",
      value: 10000,
      suffix: "+",
      label: t("parts"),
      icon: Wrench,
    },
    {
      id: "customers",
      value: 5000,
      suffix: "+",
      label: t("customers"),
      icon: Users,
    },
    {
      id: "brands",
      value: 8,
      suffix: "+",
      label: t("brands"),
      icon: Settings,
    },
  ];

  return (
    <section className="bg-primary border-y border-primary-dark py-12 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-2 sm:p-4 rounded-2xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/10 flex items-center justify-center mb-2 sm:mb-4 text-black group-hover:scale-110 group-hover:bg-black group-hover:text-primary transition-all duration-300">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black mb-1 sm:mb-2 flex items-center">
                  <Counter from={0} to={stat.value} duration={2.5} />
                  <span className="text-black/70 ml-1">{stat.suffix}</span>
                </div>
                <p className="text-black/80 font-medium text-sm md:text-base">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
