"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number is required").max(15),
  brand: z.string().min(1, "Brand is required"),
  part: z.string().min(3, "Part description is required"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactUs() {
  const t = useTranslations("Contact");
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      brand: "",
      part: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Post to API route (logs the enquiry server-side)
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      // Build a pre-filled WhatsApp message with all enquiry details
      const waText = [
        `*New Spare Parts Enquiry*`,
        ``,
        `*Name:* ${data.name}`,
        `*Phone:* ${data.phone}`,
        `*Brand:* ${data.brand}`,
        `*Part Required:* ${data.part}`,
        data.message ? `*Additional Info:* ${data.message}` : "",
      ]
        .filter(Boolean)
        .join("\n");

      const waUrl = `https://wa.me/916290049389?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");

      toast({
        title: "Enquiry Sent!",
        description: "WhatsApp has opened with your enquiry details. Our team will respond shortly.",
        duration: 6000,
      });

      form.reset();
    } catch {
      toast({
        title: "Error Sending Enquiry",
        description: "Please try again or contact us directly via WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-secondary border-t border-border relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-foreground uppercase tracking-wide">
            {t("heading")}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-border shadow-xl relative overflow-hidden"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-0"></div>

            <h3 className="text-2xl font-heading font-bold text-foreground mb-6 relative z-10">Send Enquiry</h3>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">{t("name")} *</label>
                  <Input
                    {...form.register("name")}
                    className="bg-background border-border text-foreground focus:border-primary focus:ring-primary rounded-xl"
                  />
                  {form.formState.errors.name && (
                    <p className="text-primary-dark text-xs mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">{t("phone")} *</label>
                  <Input
                    {...form.register("phone")}
                    type="tel"
                    className="bg-background border-border text-foreground focus:border-primary focus:ring-primary rounded-xl"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-primary-dark text-xs mt-1">{form.formState.errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">{t("brand")} *</label>
                  <select
                    {...form.register("brand")}
                    className="flex h-10 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select Brand</option>
                    <option value="JCB">JCB</option>
                    <option value="CAT">CAT</option>
                    <option value="Komatsu">Komatsu</option>
                    <option value="Hitachi">Hitachi</option>
                    <option value="L&T Case">L&T Case</option>
                    <option value="Volvo">Volvo</option>
                    <option value="BEML">BEML</option>
                    <option value="Other">Other</option>
                  </select>
                  {form.formState.errors.brand && (
                    <p className="text-primary-dark text-xs mt-1">{form.formState.errors.brand.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">{t("part")} *</label>
                  <Input
                    {...form.register("part")}
                    placeholder="e.g. Hydraulic Pump"
                    className="bg-background border-border text-foreground placeholder:text-muted focus:border-primary focus:ring-primary rounded-xl"
                  />
                  {form.formState.errors.part && (
                    <p className="text-primary-dark text-xs mt-1">{form.formState.errors.part.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-muted-foreground">{t("message")}</label>
                <Textarea
                  {...form.register("message")}
                  rows={4}
                  className="bg-background border-border text-foreground focus:border-primary focus:ring-primary rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 bg-primary hover:bg-primary-dark text-black font-heading font-bold text-lg rounded-xl transition-all"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    {t("send")}
                  </span>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-primary-dark shrink-0 border border-border">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-heading font-bold text-xl mb-2">Call Us (Sales & Inquiry)</h4>
                  <div className="flex flex-col gap-1 text-muted-foreground font-medium">
                    <a href="tel:+919430192911" className="hover:text-primary transition-colors">+91 9430192911</a>
                    <a href="tel:+919939563050" className="hover:text-primary transition-colors">+91 9939563050</a>
                    <a href="tel:+917004525378" className="hover:text-primary transition-colors">+91 7004525378</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center shrink-0 border border-border">
                  <MessageCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="text-foreground font-heading font-bold text-xl mb-2">WhatsApp Support</h4>
                  <p className="text-muted-foreground font-medium mb-3">Fast responses for parts availability</p>
                  <Button asChild variant="outline" className="border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white rounded-full h-10 px-6">
                    <a href="https://wa.me/916290049389?text=Hello%2C%20I%20am%20interested%20in%20spare%20parts." target="_blank" rel="noopener noreferrer">
                      Chat Now
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-primary-dark shrink-0 border border-border">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-heading font-bold text-xl mb-2">Email Address</h4>
                  <a href="mailto:ak3248816@gmail.com" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                    ak3248816@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center text-primary-dark shrink-0 border border-border">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-foreground font-heading font-bold text-xl mb-2">Working Hours</h4>
                  <p className="text-muted-foreground font-medium">All Days: 9:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-40 sm:h-48 md:h-64 rounded-2xl sm:rounded-3xl overflow-hidden border border-border relative group mt-4 sm:mt-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14620.32356877227!2d85.51357062402244!3d24.45030272023594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f60cb0c0000001%3A0x6bba3bc30a91e0a2!2sAsnabad%20Petrol%20Pump!5e0!3m2!1sen!2sin!4v1715421234567!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-0 opacity-90 group-hover:opacity-100 transition-opacity"
              ></iframe>
              <div className="absolute top-4 left-4 right-4 sm:right-auto bg-background/90 backdrop-blur-md px-3 sm:px-4 py-2 rounded-xl border border-border flex items-center gap-2 z-10 pointer-events-none shadow-sm">
                <MapPin className="text-primary-dark w-4 h-4 shrink-0" />
                <span className="text-foreground text-xs sm:text-sm font-medium truncate">Near Asnabad Petrol Pump, Jhumri Telaiya</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
