"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BrandFilterProps {
  currentBrand: string | null;
  onBrandSelect: (brand: string | null) => void;
  availableBrands: string[];
}

export function BrandFilter({ currentBrand, onBrandSelect, availableBrands }: BrandFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mb-8">
      <Button
        variant="outline"
        size="sm"
        onClick={() => onBrandSelect(null)}
        className={cn(
          "rounded-full border-white/10 hover:border-primary hover:text-black font-medium transition-colors",
          currentBrand === null ? "bg-primary text-black border-primary" : "bg-dark text-gray-400"
        )}
      >
        All Brands
      </Button>
      
      {availableBrands.map(brand => (
        <Button
          key={brand}
          variant="outline"
          size="sm"
          onClick={() => onBrandSelect(brand)}
          className={cn(
            "rounded-full border-white/10 hover:border-primary hover:text-black font-medium transition-colors",
            currentBrand === brand ? "bg-primary text-black border-primary" : "bg-dark text-gray-400"
          )}
        >
          {brand}
        </Button>
      ))}
    </div>
  );
}
