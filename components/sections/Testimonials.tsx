"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Testimonials() {
  const t = useTranslations("Testimonials");

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      role: "Contractor, Lucknow",
      quote: "New Gayatri Earthmovers ne hume JCB 3DX ke engine parts bahut jaldi deliver kiye. Quality ekdum sahi thi aur price bhi competitive tha.",
      machine: "JCB 3DX",
    },
    {
      id: 2,
      name: "Suresh Singh",
      role: "Fleet Manager, Patna",
      quote: "We order spare parts for our entire fleet of excavators from them. Bulk pricing is very good and delivery is always on time.",
      machine: "Excavator Fleet",
    },
    {
      id: 3,
      name: "Mohan Verma",
      role: "Workshop Owner, Varanasi",
      quote: "Best shop for CAT parts in this region. They have stock of almost everything. Highly recommended for mechanics.",
      machine: "CAT Machinery",
    },
    {
      id: 4,
      name: "Deepak Sharma",
      role: "Machine Owner, Delhi",
      quote: "Very helpful staff. They helped me identify the exact hydraulic pump I needed for my Komatsu machine. Excellent service.",
      machine: "Komatsu",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-24 bg-black border-t border-white/10 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex justify-center mb-4">
            <span className="bg-white/5 text-gray-300 border border-white/10 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider uppercase font-heading">
              Trusted Excellence
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-wide">
            {t("heading")}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="max-w-5xl mx-auto px-4 sm:px-12"
        >
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={() => plugin.current.play()}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-4 sm:-ml-6">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 sm:pl-6 md:basis-1/2 lg:basis-1/2">
                  <div className="h-full bg-dark rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-colors relative group">
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-primary/10 transition-colors" />
                    
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <p className="text-lg text-gray-300 italic mb-8 relative z-10 font-sans min-h-[120px]">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    
                    <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                      <div>
                        <h4 className="text-white font-heading font-bold text-lg">{testimonial.name}</h4>
                        <p className="text-primary text-sm font-medium">{testimonial.role}</p>
                      </div>
                      <span className="text-xs text-black font-bold bg-white/90 px-3 py-1 rounded-full uppercase tracking-wider">
                        {testimonial.machine}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="bg-dark text-white border-white/20 hover:bg-primary hover:text-black hover:border-primary -left-12 h-12 w-12" />
              <CarouselNext className="bg-dark text-white border-white/20 hover:bg-primary hover:text-black hover:border-primary -right-12 h-12 w-12" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
