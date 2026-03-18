"use client";

import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  currentCategory: string | null;
  onCategorySelect: (category: string | null) => void;
  availableCategories: string[];
}

export function CategoryFilter({ currentCategory, onCategorySelect, availableCategories }: CategoryFilterProps) {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 sticky top-24 shadow-sm">
      <h3 className="text-foreground font-heading font-bold text-lg uppercase tracking-wider mb-6 pb-4 border-b border-border">
        Categories
      </h3>
      
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => onCategorySelect(null)}
            className={cn(
              "w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group",
              currentCategory === null 
                ? "bg-primary/10 text-primary-dark border border-primary/20" 
                : "text-muted-foreground hover:text-foreground hover:bg-secondary border border-transparent"
            )}
          >
            All Categories
            {currentCategory === null && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
          </button>
        </li>
        
        {availableCategories.map(category => (
          <li key={category}>
            <button
              onClick={() => onCategorySelect(category)}
              className={cn(
                "w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between group",
                currentCategory === category 
                  ? "bg-primary/10 text-primary-dark border border-primary/20" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary border border-transparent"
              )}
            >
              {category}
              {currentCategory === category && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
