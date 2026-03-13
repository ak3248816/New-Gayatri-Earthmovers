"use client";

import { motion } from "framer-motion";
import { Wrench, Package, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface Part {
  id: string;
  name: string;
  partNumber: string;
  category: string;
  brands: string[];
  description: string;
  type: "OEM" | "Aftermarket";
}

interface PartCardProps {
  part: Part;
}

export function PartCard({ part }: PartCardProps) {
  const handleInquire = () => {
    const text = `Hello, I need ${part.name} (Part No: ${part.partNumber}) for my machine.`;
    const url = `https://wa.me/919430192911?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, borderColor: "#F5C400" }}
      className="bg-dark-card rounded-2xl border border-white/10 overflow-hidden group flex flex-col h-full transition-all duration-300 relative"
    >
      {/* Type badge (OEM / Aftermarket) */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
          part.type === 'OEM' ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-white/10 text-gray-300 border border-white/20'
        }`}>
          {part.type}
        </span>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        {/* Placeholder Image/Icon */}
        <div className="w-full h-40 bg-black/50 rounded-xl border border-white/5 mb-6 flex items-center justify-center group-hover:bg-black/70 transition-colors">
          <Wrench className="w-12 h-12 text-white/20 group-hover:text-primary/40 transition-colors" />
        </div>

        {/* Content */}
        <div className="mb-2">
          <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{part.category}</span>
        </div>
        
        <h3 className="text-xl font-heading font-bold text-white mb-1 group-hover:text-primary transition-colors line-clamp-2">
          {part.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-4">
          <Package className="w-4 h-4 text-gray-500" />
          <span className="text-sm font-mono text-gray-400 font-medium bg-black/50 px-2 py-0.5 rounded">
            Part #: {part.partNumber}
          </span>
        </div>
        
        <p className="text-sm text-gray-400 mb-6 line-clamp-2 flex-grow">
          {part.description}
        </p>

        {/* Brands Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {part.brands.map(brand => (
            <span key={brand} className="text-xs bg-white/5 text-gray-300 border border-white/10 px-2.5 py-1 rounded-full whitespace-nowrap">
              {brand}
            </span>
          ))}
        </div>
        
        {/* CTA */}
        <Button 
          onClick={handleInquire}
          className="w-full bg-white/10 hover:bg-primary text-white hover:text-black font-heading font-bold transition-all duration-300 border border-white/5 hover:border-primary mt-auto"
        >
          <ShieldCheck className="w-4 h-4 mr-2" />
          Inquire on WhatsApp
        </Button>
      </div>
    </motion.div>
  );
}
