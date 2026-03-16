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
          ? "bg-black/90 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="font-heading font-bold text-lg sm:text-2xl tracking-wider">
            <span className="text-white">NEW GAYATRI</span>
            <span className="text-primary ml-2 group-hover:text-primary-dark transition-colors">
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
              className="text-white hover:text-primary transition-colors text-sm font-medium relative group"
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
            className="flex items-center gap-1.5 text-sm font-medium text-white hover:text-primary transition-colors"
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
              <Button variant="ghost" size="icon" className="text-white hover:text-primary hover:bg-white/10">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-l-white/10 w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-white hover:text-primary transition-colors border-b border-white/10 pb-4"
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
