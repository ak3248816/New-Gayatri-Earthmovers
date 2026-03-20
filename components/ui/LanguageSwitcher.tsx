"use client";

import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  const handleSwitch = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    if (newLocale === locale) return;
    
    let newPath = pathname;
    
    // Remove any existing locale prefix from pathname (e.g. '/en' or '/hi') safely
    // next/navigation usePathname() can return internal rewritten paths like '/en/catalog'
    newPath = newPath.replace(/^\/(en|hi)(\/|$)/, '/');
    
    // Add new locale if it's not the default ('en')
    if (newLocale === 'hi') {
      newPath = `/hi${newPath === '/' ? '' : newPath}`;
    }
    
    // Add prefix if it resulted in empty string
    if (newPath === '') newPath = '/';
    
    // Ensure no double slashes like /hi//something
    newPath = newPath.replace(/\/\//g, '/');
    
    // Set the NEXT_LOCALE cookie so the middleware knows the user's explicit preference
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Force a full reload to let next-intl middleware handle the locale correctly
    window.location.href = newPath;
  };

  return (
    <div className="relative flex items-center group">
      <Globe className="w-4 h-4 text-muted-foreground mr-1 absolute left-2 pointer-events-none group-hover:text-primary transition-colors" />
      <select
        value={locale}
        onChange={handleSwitch}
        className="appearance-none bg-transparent hover:bg-secondary border border-transparent hover:border-border text-foreground text-sm font-medium py-1.5 pl-7 pr-6 rounded-full focus:outline-none focus:ring-2 focus:ring-primary transition-colors cursor-pointer"
        aria-label="Select Language"
      >
        <option value="en" className="bg-background text-foreground">English</option>
        <option value="hi" className="bg-background text-foreground">हिंदी</option>
      </select>
      {/* Custom arrow indicator */}
      <div className="absolute right-2 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity">
        <svg fill="none" height="12" width="12" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </div>
    </div>
  );
}
