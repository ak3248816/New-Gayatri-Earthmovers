"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const t = useTranslations("Footer");

  const categories = [
    "Engine Parts",
    "Hydraulic Parts",
    "Undercarriage Parts",
    "Filters & Consumables",
    "Electrical Parts",
  ];

  return (
    <footer className="bg-black pt-16 pb-8 border-t-[4px] border-primary relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <div className="font-heading font-bold text-2xl tracking-wider">
                <span className="text-white">NEW GAYATRI</span>
                <span className="text-primary block mt-1">EARTHMOVERS</span>
              </div>
            </Link>
            <p className="text-gray-400 font-medium text-sm leading-relaxed">
              India&apos;s most trusted dealer for genuine and aftermarket earthmoving spare parts. Delivering quality since 21+ years.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="text-white font-heading font-bold text-lg uppercase tracking-wide">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Parts Catalog", href: "/catalog" },
                { name: "About Us", href: "/#about" },
                { name: "Contact Us", href: "/#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories Column */}
          <div className="space-y-6">
            <h4 className="text-white font-heading font-bold text-lg uppercase tracking-wide">
              {t("categories")}
            </h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category}>
                  <Link href={`/catalog?category=${encodeURIComponent(category)}`} className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">
                    {category}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/catalog" className="text-primary hover:text-white transition-colors text-sm font-bold">
                  View All Parts &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-white font-heading font-bold text-lg uppercase tracking-wide">
              {t("contact")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400 font-medium">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919430192911" className="hover:text-primary transition-colors">+91 9430192911</a>
                  <a href="tel:+919939563050" className="hover:text-primary transition-colors">+91 9939563050</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400 font-medium">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:ak3248816@gmail.com" className="hover:text-primary transition-colors break-all">
                  ak3248816@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400 font-medium">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Near Asnabad Petrol Pump,<br/>Jhumri Telaiya, Koderma,<br/>Jharkhand</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-medium text-center md:text-left">
            {t("rights")}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-medium">Privacy Policy</Link>
            <Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-medium">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
