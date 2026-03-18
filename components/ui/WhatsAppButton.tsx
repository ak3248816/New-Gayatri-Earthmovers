"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay appearance slightly for better UX
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-2"
        >
          {/* Tooltip */}
          <div className="bg-white text-black text-xs font-bold py-1.5 px-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-gray-200">
            Chat with us
          </div>

          <a
            href="https://wa.me/919430192911?text=Hello%2C%20I%20am%20interested%20in%20spare%20parts."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all transform hover:-translate-y-1"
            aria-label="Contact us on WhatsApp"
          >
            {/* Ping animation effect */}
            <span className="absolute inset-0 rounded-full w-full h-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none"></span>
            
            <MessageCircle className="w-8 h-8 relative z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
