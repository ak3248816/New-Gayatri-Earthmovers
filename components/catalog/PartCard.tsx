"use client";

import { Wrench, ShieldCheck } from "lucide-react";
import Link from "next/link";

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
  return (
    <Link
      href={`/en/catalog/${part.id}`}
      className="group relative bg-background p-6 hover:shadow-2xl hover:shadow-foreground/5 transition-all duration-300 rounded-2xl border border-border flex flex-col h-full cursor-pointer"
    >
      <div className="aspect-square bg-muted mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
        {/* Placeholder image from HTML, ideally it would be dynamic if `part.image` exists */}
        <Wrench className="w-16 h-16 text-muted-foreground/30 group-hover:text-primary transition-colors group-hover:scale-110 duration-500" />
      </div>
      <div className="space-y-2 flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <span className="px-2 py-0.5 bg-muted text-[10px] font-bold tracking-tighter rounded-full uppercase text-foreground">
            {part.category}
          </span>
          <ShieldCheck className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        <h3 className="text-xl font-bold text-foreground leading-tight line-clamp-2">
          {part.name}
        </h3>
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex-grow">
          PN: {part.partNumber}
        </p>
        <div className="pt-4 flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-primary">View Details</span>
          <div className="w-10 h-10 flex items-center justify-center bg-muted/50 group-hover:bg-primary/20 text-foreground group-hover:text-primary transition-colors rounded-lg">
            <span className="text-xl leading-none">›</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
