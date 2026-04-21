"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PartCard, Part } from "@/components/catalog/PartCard";
import { motion, AnimatePresence } from "framer-motion";
import partsData from "@/data/parts.json";
import { Search } from "lucide-react";

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category');
  
  const [parts, setParts] = useState<Part[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);

  // Load parts data
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

  const toggleBrand = (brand: string) => {
    const newBrands = new Set(selectedBrands);
    if (newBrands.has(brand)) {
      newBrands.delete(brand);
    } else {
      newBrands.add(brand);
    }
    setSelectedBrands(newBrands);
  };

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
        selectedBrands.size === 0 || 
        part.brands.some(b => selectedBrands.has(b));

      // Category matching
      const matchesCategory = 
        !selectedCategory || 
        part.category === selectedCategory;

      return matchesSearch && matchesBrand && matchesCategory;
    });
  }, [parts, searchQuery, selectedBrands, selectedCategory]);

  return (
    <div className="min-h-screen bg-background pt-20">
      
      {/* Catalog Header */}
      <section className="bg-background px-8 pt-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-widest text-sm uppercase">Precision Engineered</span>
              <h1 className="text-6xl font-bold tracking-tight text-foreground mt-4 mb-6 leading-none">
                Product Catalog
              </h1>
              <p className="text-muted-foreground text-lg max-w-lg">
                Source high-performance earthmover components with technical precision. Engineered for JCB, CAT, and Komatsu heavy machinery.
              </p>
            </div>
            
            {/* Search Bar Integrated into Header */}
            <div className="relative w-full md:w-96">
              <input 
                className="w-full bg-background border border-border px-6 py-4 pr-12 text-foreground focus:outline-primary focus:ring-1 focus:ring-primary transition-all rounded-lg" 
                placeholder="Search by Part No. or Name..." 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Layout */}
      <section className="px-8 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Filters */}
          <aside className="lg:col-span-3 space-y-10">
            {/* Brand Categories */}
            <div>
              <h3 className="font-bold text-lg mb-6 tracking-tight text-foreground">Brands</h3>
              <div className="space-y-3">
                {availableBrands.map(brand => (
                  <label key={brand} className="flex items-center group cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="rounded border-border text-primary focus:ring-primary h-4 w-4"
                      checked={selectedBrands.has(brand)}
                      onChange={() => toggleBrand(brand)}
                    />
                    <span className="ml-3 text-muted-foreground group-hover:text-primary transition-colors">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Part Categories */}
            <div>
              <h3 className="font-bold text-lg mb-6 tracking-tight text-foreground">Categories</h3>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 text-xs font-bold rounded-full transition-colors ${!selectedCategory ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
                >
                  All Parts
                </button>
                {availableCategories.map(category => (
                  <button 
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-xs font-bold rounded-full transition-colors ${selectedCategory === category ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground hover:bg-muted/80'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

          </aside>

          {/* Product Grid */}
          <div className="lg:col-span-9">
            {/* Grid View Options */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-border">
              <span className="text-sm text-muted-foreground font-medium">Showing {filteredParts.length} Parts</span>
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-muted-foreground uppercase">Sort By:</span>
                <select className="bg-transparent border-none text-sm font-bold text-primary focus:ring-0 cursor-pointer">
                  <option>Most Relevant</option>
                  <option>Recently Added</option>
                  <option>Part Number (A-Z)</option>
                </select>
              </div>
            </div>

            {/* Bento-ish Grid */}
            <div className="min-h-[500px]">
              <AnimatePresence mode="popLayout">
                {filteredParts.length > 0 ? (
                  <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
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
                    className="flex flex-col items-center justify-center p-16 text-center bg-muted/30 rounded-3xl border border-border border-dashed"
                  >
                    <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mb-6 text-muted-foreground">
                      <Search className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">No Parts Found</h3>
                    <p className="text-muted-foreground max-w-md">
                      We couldn&apos;t find any parts matching your specific filters. Try adjusting your search criteria or changing categories.
                    </p>
                    <button 
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedBrands(new Set());
                        setSelectedCategory(null);
                      }}
                      className="mt-8 text-primary font-bold hover:text-primary/80 transition-colors underline underline-offset-4"
                    >
                      Clear All Filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="bg-muted py-24 px-8 border-t border-border mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 bg-background p-12 relative overflow-hidden rounded-2xl border border-border">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-foreground tracking-tight mb-4">Can&apos;t find a specific part?</h2>
            <p className="text-muted-foreground text-lg">Send us your requirements and our sourcing experts will find it for you.</p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <input 
              className="px-6 py-4 bg-muted border-none focus:outline-primary focus:ring-1 focus:ring-primary w-full md:w-80 rounded-md" 
              placeholder="Part Number or Machine Model" 
              type="text"
            />
            <button className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest hover:brightness-110 transition-colors rounded-md">
              Expert Assistance
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

// Ensure Suspense wrapper for useSearchParams hook
export default function CatalogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center pt-32 pb-24">
        <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    }>
      <CatalogContent />
    </Suspense>
  );
}
