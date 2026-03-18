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
      className="bg-card rounded-2xl border border-border overflow-hidden group flex flex-col h-full transition-all duration-300 relative shadow-sm"
    >
      {/* Type badge (OEM / Aftermarket) */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
          part.type === 'OEM' ? 'bg-primary/20 text-primary-dark border border-primary/30' : 'bg-secondary text-muted-foreground border border-border'
        }`}>
          {part.type}
        </span>
      </div>

      <div className="p-6 flex-grow flex flex-col">
        {/* Placeholder Image/Icon */}
        <div className="w-full h-40 bg-secondary/50 rounded-xl border border-border mb-6 flex items-center justify-center group-hover:bg-secondary transition-colors">
          <Wrench className="w-12 h-12 text-muted-foreground/30 group-hover:text-primary transition-colors" />
        </div>

        {/* Content */}
        <div className="mb-2">
          <span className="text-xs text-muted-foreground font-bold uppercase tracking-wider">{part.category}</span>
        </div>
        
        <h3 className="text-xl font-heading font-bold text-foreground mb-1 group-hover:text-primary-dark transition-colors line-clamp-2">
          {part.name}
        </h3>
        
        <div className="flex items-center gap-2 mb-4">
          <Package className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-mono text-muted-foreground font-medium bg-secondary px-2 py-0.5 rounded border border-border">
            Part #: {part.partNumber}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground mb-6 line-clamp-2 flex-grow">
          {part.description}
        </p>

        {/* Brands Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {part.brands.map(brand => (
            <span key={brand} className="text-xs bg-secondary text-muted-foreground border border-border px-2.5 py-1 rounded-full whitespace-nowrap">
              {brand}
            </span>
          ))}
        </div>
        
        {/* CTA */}
        <Button 
          onClick={handleInquire}
          className="w-full bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground font-heading font-bold transition-all duration-300 border border-border hover:border-primary mt-auto"
        >
          <ShieldCheck className="w-4 h-4 mr-2" />
          Inquire on WhatsApp
        </Button>
      </div>
    </motion.div>
  );
}
