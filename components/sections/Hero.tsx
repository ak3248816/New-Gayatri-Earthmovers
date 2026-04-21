"use client";


import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MessageCircle, PhoneCall } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  const t = useTranslations("Hero");

  // Machines Array for looping
  const machines = [
    "/machines/excavator-trans.png",
    "/machines/jcb-3dx-trans.png",
    "/machines/bulldozer-trans.png",
    "/machines/wheel-loader-trans.png"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Split headline for word-by-word animation
  // "Jharkhand's Most Trusted Earthmoving Parts Dealer"
  // We want words at index 1 ("Most") and index 2 ("Trusted") highlighted
  const headlineWords = t("h1").split(" ");

  // Detect which word indices correspond to "Most" and "Trusted"
  const highlightedIndices = headlineWords.reduce<number[]>((acc, word, i) => {
    const clean = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
    if (clean === "most" || clean === "trusted") acc.push(i);
    return acc;
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-20 pb-20 sm:pt-20 sm:pb-0 overflow-hidden bg-background text-foreground">
      {/* Background - Realistic Earthmoving Machine Images */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-end justify-center lg:block">

        {/* Mobile Continuous Scrolling Marquee */}
        <div className="absolute inset-x-0 bottom-16 lg:hidden w-full overflow-hidden opacity-100 flex pointer-events-none">
          <div className="flex animate-hero-marquee w-max items-end">
            {/* First Set */}
            {machines.map((src, i) => (
              <div key={i + 'hero1'} className="h-[130px] sm:h-[160px] flex-shrink-0 mx-3 sm:mx-6 flex items-end justify-center relative hero-machine-fade">
                <Image
                  src={src}
                  width={240}
                  height={160}
                  className="h-full w-auto object-contain"
                  alt=""
                />
              </div>
            ))}
            {/* Duplicate Set for Seamless Loop */}
            {machines.map((src, i) => (
              <div key={i + 'hero2'} className="h-[130px] sm:h-[160px] flex-shrink-0 mx-3 sm:mx-6 flex items-end justify-center relative hero-machine-fade">
                <Image
                  src={src}
                  width={240}
                  height={160}
                  className="h-full w-auto object-contain"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Fixed Corners */}
        {/* Excavator - top left */}
        <div className="hidden lg:block absolute top-[3%] left-[1%] w-[25%] max-w-[320px] hero-machine-fade">
          <Image
            src="/machines/excavator-trans.png"
            alt=""
            width={320}
            height={240}
            className="w-full h-auto"
            priority
          />
        </div>
        {/* JCB 3DX - top right */}
        <div className="hidden lg:block absolute top-[3%] right-[1%] w-[25%] max-w-[320px] hero-machine-fade">
          <Image
            src="/machines/jcb-3dx-trans.png"
            alt=""
            width={320}
            height={240}
            className="w-full h-auto"
            priority
          />
        </div>
        {/* Bulldozer - bottom left */}
        <div className="hidden lg:block absolute bottom-[8%] left-[1%] w-[25%] max-w-[320px] hero-machine-fade">
          <Image
            src="/machines/bulldozer-trans.png"
            alt=""
            width={320}
            height={240}
            className="w-full h-auto"
            priority
          />
        </div>
        {/* Wheel Loader - bottom right */}
        <div className="hidden lg:block absolute bottom-[8%] right-[1%] w-[25%] max-w-[320px] hero-machine-fade">
          <Image
            src="/machines/wheel-loader-trans.png"
            alt=""
            width={320}
            height={240}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>

      <div className="container relative z-10 px-4 mx-auto text-center flex flex-col items-center max-w-5xl pb-40 sm:pb-0">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* No background on this wrapper — machines show through fully */}
          <div className="flex flex-col items-center px-6 py-8 sm:px-10 sm:py-10 rounded-2xl">

            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-8">
              <Badge variant="outline" className="text-primary border-primary/50 bg-primary/10 hover:bg-primary/20 transition-colors px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm md:text-base font-medium rounded-full">
                {t("badge")}
              </Badge>
            </motion.div>

            {/* Headline - Word by Word Stagger */}
            <motion.h1
              className="text-3xl sm:text-5xl md:text-7xl lg:text-hero font-heading font-bold leading-tight mb-4 sm:mb-6 text-balance px-2 sm:px-0"
              style={{ color: "#263238" }}
              variants={containerVariants}
            >
              {headlineWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-1.5 sm:mr-3"
                  style={
                    highlightedIndices.includes(index)
                      ? { color: "#F9A825" }
                      : { color: "#263238" }
                  }
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            {/* Body */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl max-w-3xl mb-6 sm:mb-10 leading-relaxed px-2 sm:px-0"
              style={{ color: "#546E7A" }}
            >
              {t("body")}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* WhatsApp Button - premium gradient */}
              <a
                href="https://wa.me/916290049389?text=Hello%2C%20I%20want%20to%20inquire%20about%20earthmoving%20spare%20parts."
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-whatsapp flex items-center justify-center gap-2 font-bold font-heading text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 rounded-full"
              >
                <MessageCircle className="h-5 w-5" />
                {t("whatsappUs")}
              </a>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Floating Phone Strip */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
        className="absolute bottom-0 left-0 w-full bg-primary/5 border-t border-primary/10 backdrop-blur-md z-30"
      >
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex flex-wrap justify-center items-center gap-1 sm:gap-4 text-[11px] sm:text-sm md:text-base font-medium font-heading">
          <PhoneCall className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
          <a href="tel:+919430192911" className="text-muted-foreground hover:text-primary-dark transition-colors">+91 9430192911</a>
          <span className="text-primary hidden sm:inline">|</span>
          <a href="tel:+919939563050" className="text-muted-foreground hover:text-primary-dark transition-colors">+91 9939563050</a>
          <span className="text-primary hidden sm:inline">|</span>
          <a href="tel:+917004525378" className="text-muted-foreground hover:text-primary-dark transition-colors">+91 7004525378</a>
        </div>
      </motion.div>

      {/* Required CSS for Hero Marquee & Premium Styling */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes hero-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-hero-marquee {
          animation: hero-marquee 25s linear infinite;
        }

        /* Ground fade: only the bottom ~20% of each machine fades out — body stays crisp */
        .hero-machine-fade {
          -webkit-mask-image: linear-gradient(to top, transparent 0%, black 22%);
          mask-image: linear-gradient(to top, transparent 0%, black 22%);
        }

        /* WhatsApp CTA: green gradient, premium feel */
        .hero-cta-whatsapp {
          background: linear-gradient(180deg, #43D966 0%, #22a74a 100%);
          color: #fff;
          box-shadow:
            0 4px 14px 0 rgba(34, 167, 74, 0.38),
            0 1px 3px 0 rgba(34, 167, 74, 0.22),
            inset 0 1px 0 rgba(255,255,255,0.18);
          transition: filter 0.18s ease, box-shadow 0.18s ease, transform 0.12s ease;
          text-shadow: 0 1px 2px rgba(0,0,0,0.12);
        }
        .hero-cta-whatsapp:hover {
          filter: brightness(1.06);
          box-shadow:
            0 6px 20px 0 rgba(34, 167, 74, 0.46),
            0 2px 6px 0 rgba(34, 167, 74, 0.28),
            inset 0 1px 0 rgba(255,255,255,0.18);
          transform: translateY(-1px);
        }
        .hero-cta-whatsapp:active {
          transform: translateY(0px);
          filter: brightness(0.97);
        }
      `}} />
    </section>
  );
}
