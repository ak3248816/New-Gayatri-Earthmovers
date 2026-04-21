"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Toaster } from "@/components/ui/toaster";
import { ArrowLeft, ZoomIn, ArrowRight, ShieldCheck, Download, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import partsData from "@/data/parts.json";
import { Part } from "@/components/catalog/PartCard";

export default function PartDetailsPage({
  params: { id, locale }
}: {
  params: { id: string; locale: string }
}) {
  const part = (partsData as Part[]).find(p => p.id === id);

  if (!part) {
    return (
      <>
        <Navbar />
        <main className="flex min-h-[70vh] flex-col items-center justify-center bg-background pt-20">
          <h1 className="text-4xl font-bold">Part Not Found</h1>
          <Link href={`/${locale}/catalog`} className="mt-4 text-primary hover:underline">
            ← Back to Catalog
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const handleInquire = () => {
    const text = `Hello, I need to order ${part.name} (Part No: ${part.partNumber}).`;
    const url = `https://wa.me/916290049389?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-background min-h-screen">
        {/* Breadcrumbs & Header Section */}
        <section className="bg-background px-8 pt-12 pb-8">
          <div className="max-w-7xl mx-auto">
            <nav className="flex mb-6 text-muted-foreground font-medium text-sm items-center">
              <Link href={`/${locale}/catalog`} className="hover:text-primary transition-colors flex items-center">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Catalog
              </Link>
              <span className="mx-2">/</span>
              <span className="hover:text-primary cursor-pointer">{part.category}</span>
              <span className="mx-2">/</span>
              <span className="text-foreground">{part.name}</span>
            </nav>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-2 uppercase">
              {part.name}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              {part.description}
            </p>
          </div>
        </section>

        {/* Product Hero & Specification Grid */}
        <section className="px-8 pb-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Large Image Display */}
            <div className="lg:col-span-7 bg-muted relative overflow-hidden group rounded-2xl border border-border">
              <div className="absolute top-8 left-8 z-10">
                <span className="bg-primary/20 text-primary px-4 py-1 text-xs font-black tracking-widest uppercase rounded-full">
                  {part.type}
                </span>
              </div>
              <div className="w-full h-[600px] flex items-center justify-center bg-gradient-to-br from-muted to-muted/50 group-hover:scale-105 transition-transform duration-700">
                <ShieldCheck className="w-32 h-32 text-muted-foreground/30" />
              </div>
              <div className="absolute bottom-0 right-0 p-8 flex space-x-2">
                <div className="w-12 h-12 bg-background flex items-center justify-center cursor-pointer hover:bg-muted rounded-full shadow border border-border transition-colors">
                  <ZoomIn className="w-5 h-5 text-foreground" />
                </div>
              </div>
            </div>

            {/* Technical Specs Bento */}
            <div className="lg:col-span-5 flex flex-col space-y-8">
              <div className="bg-background p-8 border-l-4 border-l-primary rounded-xl shadow-sm border-t border-r border-b border-t-border border-r-border border-b-border">
                <div className="text-muted-foreground text-xs uppercase tracking-widest mb-4 font-bold">Identification</div>
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline border-b border-border pb-2">
                    <span className="text-muted-foreground">Part Number</span>
                    <span className="text-foreground font-bold">{part.partNumber}</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-border pb-2">
                    <span className="text-muted-foreground">Category</span>
                    <span className="text-foreground font-bold">{part.category}</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-border pb-2">
                    <span className="text-muted-foreground">Type</span>
                    <span className="text-foreground font-bold">{part.type}</span>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-primary/10 p-8 flex flex-col justify-between rounded-xl border border-primary/20">
                <div>
                  <h3 className="text-primary font-black text-2xl uppercase tracking-tight mb-2">Request Quote</h3>
                  <p className="text-foreground/80 text-sm mb-8 font-medium">Stock available in Regional Distribution Centers. Connect on WhatsApp for instant pricing.</p>
                </div>
                <button 
                  onClick={handleInquire}
                  className="bg-primary text-primary-foreground py-4 font-black uppercase tracking-widest hover:brightness-110 transition-colors flex items-center justify-center space-x-2 rounded-lg"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Compatibility Chips */}
              <div className="bg-muted/50 p-8 rounded-xl border border-border">
                <div className="text-muted-foreground text-xs uppercase tracking-widest mb-4 font-bold">Brand Compatibility</div>
                <div className="flex flex-wrap gap-2">
                  {part.brands.map(brand => (
                    <span key={brand} className="bg-background px-4 py-2 rounded-full text-xs font-bold border border-border shadow-sm">
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Specifications */}
        <section className="bg-muted py-24 px-8 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-black uppercase mb-8 border-b-4 border-primary inline-block text-foreground">Overview</h2>
                <div className="space-y-6">
                  <div className="group">
                    <h4 className="text-primary font-bold text-lg mb-1">Product Description</h4>
                    <p className="text-foreground">{part.description}</p>
                  </div>
                  <div className="group">
                    <h4 className="text-primary font-bold text-lg mb-1">Quality Assurance</h4>
                    <p className="text-foreground">Tested for durability and performance in demanding earthmoving applications.</p>
                  </div>
                </div>
              </div>
              <div className="bg-background p-12 relative overflow-hidden rounded-2xl border border-border">
                <h2 className="text-3xl font-black uppercase mb-8 text-foreground">Purchase Guide</h2>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Verify part number compatibility with your machine model.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Contact our team for bulk order discounts.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">Fast shipping across Jharkhand and major hubs.</span>
                  </li>
                </ul>
                <div className="flex items-center space-x-4 text-primary font-bold uppercase tracking-widest text-sm cursor-pointer hover:translate-x-2 transition-transform">
                  <span>Download Catalog PDF</span>
                  <Download className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster />
    </>
  );
}
