"use client";

import * as React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Menu, Phone, Globe } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("products"), href: "/catalog" },
    { name: t("about"), href: "/#about" },
    { name: t("whyUs"), href: "/#why-us" },
    { name: t("brands"), href: "/#brands" },
    { name: t("contact"), href: "/#contact" },
  ];

  const switchLocale = () => {
    const nextLocale = locale === "en" ? "hi" : "en";
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
    window.location.reload();
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* GE Dual-Tone Hexagon Logo */}
          <div className="relative flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
            <svg width="46" height="46" viewBox="0 0 100 100" className="drop-shadow-sm flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="geGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F5C400" />
                  <stop offset="100%" stopColor="#D4A800" />
                </linearGradient>
              </defs>
              {/* Right Half (Yellow) */}
              <polygon points="50,5 90,27.5 90,72.5 50,95 50,5" fill="url(#geGrad)"/>
              {/* Left Half (Black) */}
              <polygon points="50,5 50,95 10,72.5 10,27.5 50,5" fill="#111111"/>
              
              {/* Letters */}
              <text x="32" y="55" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="38" fill="#FFFFFF" textAnchor="middle" dominantBaseline="middle">G</text>
              <text x="68" y="55" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="38" fill="#111111" textAnchor="middle" dominantBaseline="middle">E</text>
            </svg>
          </div>
          <div className="font-heading font-bold text-lg sm:text-2xl tracking-wider hidden sm:block md:hidden lg:block">
            <span className="text-foreground transition-colors group-hover:text-primary-dark">NEW GAYATRI</span>
            <span className="text-primary ml-2 transition-colors">
              EARTHMOVERS
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-primary transition-colors text-sm font-medium relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={switchLocale}
            className="flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>{locale === "en" ? "HI" : "EN"}</span>
          </button>

          <Button className="hidden sm:flex bg-primary text-primary-foreground hover:bg-primary-dark font-bold font-heading">
            <Phone className="w-4 h-4 mr-2" />
            {t("callNow")}
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-primary hover:bg-secondary">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-l-border w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors border-b border-border pb-4"
                  >
                    {link.name}
                  </Link>
                ))}
                <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary-dark font-bold font-heading text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  {t("callNow")}
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
