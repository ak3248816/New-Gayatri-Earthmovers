"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PartCard, Part } from "@/components/catalog/PartCard";
import { SearchBar } from "@/components/catalog/SearchBar";
import { BrandFilter } from "@/components/catalog/BrandFilter";
import { CategoryFilter } from "@/components/catalog/CategoryFilter";
import { motion, AnimatePresence } from "framer-motion";
import partsData from "@/data/parts.json";

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [parts, setParts] = useState<Part[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);

  // Load parts data (simulating fetch if needed, but it's static import here)
  useEffect(() => {
    setParts(partsData as Part[]);
  }, []);

  // Initialize selectedCategory if URL param changes
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Derived state for filters
  const availableBrands = useMemo(() => {
    const brands = new Set<string>();
    partsData.forEach((part) => part.brands.forEach((b) => brands.add(b)));
    return Array.from(brands).sort();
  }, []);

  const availableCategories = useMemo(() => {
    const categories = new Set<string>();
    partsData.forEach((part) => categories.add(part.category));
    return Array.from(categories).sort();
  }, []);

  // Filtering logic
  const filteredParts = useMemo(() => {
    return parts.filter((part) => {
      // Search matching
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        !query || 
        part.name.toLowerCase().includes(query) || 
        part.partNumber.toLowerCase().includes(query) ||
        part.description.toLowerCase().includes(query);

      // Brand matching
      const matchesBrand = 
        !selectedBrand || 
        part.brands.includes(selectedBrand);

      // Category matching
      const matchesCategory = 
        !selectedCategory || 
        part.category === selectedCategory;

      return matchesSearch && matchesBrand && matchesCategory;
    });
  }, [parts, searchQuery, selectedBrand, selectedCategory]);

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      {/* Decorative Header */}
      <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none mix-blend-screen" />
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-hero font-heading font-bold text-white uppercase tracking-wide mb-6">
            Spare Parts <span className="text-primary text-balance text-center">Catalog</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Search our extensive inventory of genuine OEM and high-quality aftermarket parts for your earthmoving machinery.
          </p>
          
          {/* Main Search */}
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar / Filters (Left) */}
          <aside className="w-full lg:w-1/4 flex-shrink-0">
             <CategoryFilter 
                currentCategory={selectedCategory} 
                onCategorySelect={setSelectedCategory} 
                availableCategories={availableCategories} 
             />
          </aside>

          {/* Main Content Area (Right) */}
          <main className="w-full lg:w-3/4">
            
            {/* Top Bar for Brands */}
            <div className="mb-8 p-6 bg-dark rounded-2xl border border-white/10">
               <h3 className="text-white text-sm font-bold uppercase tracking-wider mb-4 opacity-60">Filter by Brand</h3>
               <BrandFilter 
                  currentBrand={selectedBrand} 
                  onBrandSelect={setSelectedBrand} 
                  availableBrands={availableBrands} 
               />
               
               {/* Results Count Summary */}
               <div className="text-sm font-medium text-gray-400 mt-4 border-t border-white/10 pt-4 flex items-center justify-between">
                 <span>Showing {filteredParts.length} parts</span>
                 {selectedCategory && (
                   <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold font-heading uppercase tracking-wider border border-primary/20">
                     {selectedCategory}
                   </span>
                 )}
               </div>
            </div>

            {/* Results Grid */}
            <div className="min-h-[500px]">
              <AnimatePresence mode="popLayout">
                {filteredParts.length > 0 ? (
                  <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                  >
                    {filteredParts.map((part) => (
                      <PartCard key={part.id} part={part} />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center p-16 text-center bg-dark/50 rounded-3xl border border-white/5 border-dashed"
                  >
                    <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mb-6 text-gray-600">
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">No Parts Found</h3>
                    <p className="text-gray-400 max-w-md">
                      We couldn&apos;t find any parts matching your specific filters. Try adjusting your search criteria or changing categories.
                    </p>
                    <button 
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedBrand(null);
                        setSelectedCategory(null);
                      }}
                      className="mt-8 text-primary font-bold hover:text-white transition-colors underline underline-offset-4"
                    >
                      Clear All Filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </main>
        </div>

      </div>
    </div>
  );
}

// Ensure Suspense wrapper for useSearchParams hook
export default function CatalogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-black flex items-center justify-center pt-32 pb-24">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    }>
      <CatalogContent />
    </Suspense>
  );
}
