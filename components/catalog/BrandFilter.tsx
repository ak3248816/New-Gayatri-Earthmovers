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
          "rounded-full border-border hover:border-primary hover:text-primary-foreground font-medium transition-colors",
          currentBrand === null ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground"
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
            "rounded-full border-border hover:border-primary hover:text-primary-foreground font-medium transition-colors",
            currentBrand === brand ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground"
          )}
        >
          {brand}
        </Button>
      ))}
    </div>
  );
}
