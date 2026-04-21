import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Toaster } from "@/components/ui/toaster";
import { MapPin, Phone, Mail, MoveRight } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-background pt-20">
        {/* Hero Section */}
        <section className="relative h-[409px] min-h-[400px] flex items-center overflow-hidden bg-zinc-900">
          <div className="absolute inset-0 opacity-40">
            <img 
              alt="Heavy industrial machinery in a construction yard" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_TG1iOEwSh0T4ZHXVijWDiodToxhXAomXIhGDxsjoWTjuIFFMCqgQrkR-dUUwHBY5sf-kKWTa1sGtgbWk-oyqEKZ4jyB1dCXV4evYriBXzwbiI-5rjhOmn3EPtfnqFXHH79Hv2ctcWkX0GriR3TA3WAFS4M6kL4wZDgIuIn8eMeNsbDZUyFLWc0i54gzBFUBQT-lMFL2508r7QoDafPZvl5bYurCkC0UZvZxp9mvGxBrSYWZX2n8GXjqbm3Fgzq1YI8sjse21jmf6"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/60 to-transparent"></div>
          <div className="relative z-10 px-8 md:px-12 w-full max-w-7xl mx-auto">
            <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-4 rounded-full">
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-none">
              ENGINEERING <br/>
              <span className="text-primary">SOLUTIONS.</span>
            </h1>
            <p className="max-w-xl text-zinc-300 text-lg leading-relaxed">
              Reliable spare parts and machinery services for the heavy industries of Jharkhand. Connect with our technical experts today.
            </p>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="px-8 md:px-12 py-24 bg-background max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Info Column */}
            <div className="lg:col-span-5 flex flex-col space-y-12">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-8">Contact Information</h2>
                <div className="space-y-8">
                  
                  {/* Address */}
                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mr-6 shrink-0 transition-colors group-hover:bg-primary/20">
                      <MapPin className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Regional Office</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        NH-31, Near Ranchi Patna Road,<br/>
                        Jhumri Telaiya, Koderma,<br/>
                        Jharkhand - 825409
                      </p>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mr-6 shrink-0 transition-colors group-hover:bg-primary/20">
                      <Phone className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Sales &amp; Inquiries</h3>
                      <p className="text-muted-foreground">+91 6290049389</p>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mr-6 shrink-0 transition-colors group-hover:bg-primary/20">
                      <Mail className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Digital Support</h3>
                      <p className="text-muted-foreground">info@newgayatriearthmovers.com</p>
                    </div>
                  </div>
                  
                </div>
              </div>
              
              {/* Map Placeholder */}
              <div className="relative overflow-hidden rounded-xl bg-muted h-64 border border-border">
                <img 
                  alt="Map location" 
                  className="w-full h-full object-cover opacity-50 grayscale contrast-125" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmrFDhmMDrdiRetgUemzrWsFmBisQj3NQSCqx4KZXjKjEEhy0-Xok0oboq1dvTgkcu5wgZy_0SpVzUAm6CzeoKhm1xnWXWRGITyWPktCeMim8tVfviedZAdQ76-HK6bY-7AlLWoEl_dPJ4wh2-1Vwo2YISPXkfMwcVtig_5NfWsQ4w7dB8-37xwjktzdTVc0Gbu8zhc8nYEHv7Kl68gldNgHEPXuscz_HK8zSA7DISsz3BC7D7xyuokP3rrTOhcNusF0IdeP3YZnXZ"
                />
                <a href="https://maps.google.com/?q=New+Gayatri+Earthmovers" target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center cursor-pointer">
                  <div className="bg-background/90 backdrop-blur px-6 py-4 shadow-xl flex items-center space-x-4 border border-border rounded-lg hover:scale-105 transition-transform">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                    <span className="font-bold text-sm tracking-widest uppercase">Open in Google Maps</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-muted/50 p-8 md:p-12 rounded-xl relative overflow-hidden border border-border">
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold tracking-tight mb-2">Request a Quote</h2>
                  <p className="text-muted-foreground mb-10">Fill out the technical specification requirements below.</p>
                  
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-1">
                      <label className="block text-sm font-semibold text-muted-foreground mb-2">Full Name</label>
                      <input 
                        className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors rounded-md" 
                        placeholder="John Doe" 
                        type="text"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-sm font-semibold text-muted-foreground mb-2">Company Name</label>
                      <input 
                        className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors rounded-md" 
                        placeholder="Industrial Corp Ltd." 
                        type="text"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-sm font-semibold text-muted-foreground mb-2">Email Address</label>
                      <input 
                        className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors rounded-md" 
                        placeholder="john@example.com" 
                        type="email"
                      />
                    </div>
                    <div className="md:col-span-1">
                      <label className="block text-sm font-semibold text-muted-foreground mb-2">Phone Number</label>
                      <input 
                        className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors rounded-md" 
                        placeholder="+91 00000 00000" 
                        type="tel"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-muted-foreground mb-2">Subject / Machine Model</label>
                      <select className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors rounded-md appearance-none">
                        <option>Excavator Spare Parts</option>
                        <option>Backhoe Loader Components</option>
                        <option>Engine Overhaul Kit</option>
                        <option>Hydraulic System Support</option>
                        <option>Other Inquiry</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-semibold text-muted-foreground mb-2">Detailed Message</label>
                      <textarea 
                        className="w-full bg-background border border-border px-4 py-3 focus:outline-none focus:border-primary transition-colors rounded-md" 
                        placeholder="Describe your requirements in detail..." 
                        rows={5}
                      ></textarea>
                    </div>
                    <div className="md:col-span-2 pt-4">
                      <button 
                        className="w-full md:w-auto px-10 py-4 bg-primary text-primary-foreground font-bold text-lg tracking-tight hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center space-x-3 rounded-lg" 
                        type="button"
                      >
                        <span>Submit Technical Request</span>
                        <MoveRight className="w-5 h-5" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-24 bg-muted border-t border-border">
          <div className="px-8 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold tracking-tighter mb-4">Stay ahead with the latest machinery guides.</h2>
              <p className="text-muted-foreground text-lg">Subscribe to our monthly technical bulletin for maintenance tips and part catalogs.</p>
            </div>
            <div className="flex w-full md:w-auto gap-4">
              <input 
                className="bg-background border border-border px-6 py-4 w-full md:w-72 rounded-md" 
                placeholder="Work email address" 
                type="email"
              />
              <button className="bg-foreground text-background px-8 py-4 font-bold hover:bg-foreground/90 transition-colors rounded-md">
                Join
              </button>
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
