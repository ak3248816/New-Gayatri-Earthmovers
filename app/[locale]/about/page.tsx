import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { Toaster } from "@/components/ui/toaster";
import { MoveRight, BadgeCheck, Headset, Truck, Handshake } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col bg-background pt-20">
        {/* Hero Section */}
        <section className="relative h-[819px] flex items-center bg-background overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
            <img 
              alt="Industrial Machinery" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbZ74ws-bZu8n1cgzoHDC1AXh0qiRGE5Nejyy-tJHiG_2akI4zwmE22_i_mKrkA0cO49Uqvr-Dt9aJxwlTWzKzqfAlJhwnRX2U_g2-n3ING_WueIZmYxup8S8G4F57b5hzubB8RG5vrb4CE6Bg87EJvTG1PzOaJf-tEAilZyAOlYn5ETV8jDVzqNU5Udh4BRvMecFcVDqZmYm65xjr0TngtxDC2xgGprxb7gy3YGmX0xDLJedQ9-5vfoIb-ACdwuOyl-27Ln83CmaF" 
            />
          </div>
          <div className="relative z-20 px-12 max-w-5xl">
            <div className="inline-flex items-center px-4 py-1 mb-8 bg-primary/20 text-primary rounded-full text-xs font-bold tracking-widest uppercase">
              Since 2003
            </div>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-tight text-foreground mb-6">
              ENGINEERED <br/> <span className="text-primary">LEGACY.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
              Two decades of providing heavy earthmoving solutions across Jharkhand. We don&apos;t just sell parts; we fuel progress.
            </p>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="bg-muted py-24 px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="bg-background p-12 flex flex-col justify-between min-h-[300px] shadow-sm rounded-2xl border border-border">
              <span className="text-primary font-black text-6xl tracking-tighter">21+</span>
              <div>
                <h3 className="font-bold text-xl mb-2">Years of Excellence</h3>
                <p className="text-muted-foreground">Founded in 2003, we&apos;ve navigated the evolving landscape of Jharkhand&apos;s mining and construction sectors.</p>
              </div>
            </div>
            <div className="bg-primary text-primary-foreground p-12 flex flex-col justify-between min-h-[300px] md:mt-12 rounded-2xl shadow-lg">
              <span className="font-black text-6xl tracking-tighter">15k+</span>
              <div>
                <h3 className="font-bold text-xl mb-2">Parts in Inventory</h3>
                <p className="text-primary-foreground/80">From hydraulic seals to massive engine blocks, our warehouse is built for speed and availability.</p>
              </div>
            </div>
            <div className="bg-background p-12 flex flex-col justify-between min-h-[300px] shadow-sm rounded-2xl border border-border">
              <span className="text-primary text-6xl font-black tracking-tighter">Jharkhand</span>
              <div>
                <h3 className="font-bold text-xl mb-2">Wide Network</h3>
                <p className="text-muted-foreground">Strategic distribution network serving Ranchi, Dhanbad, Jamshedpur, and beyond.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="bg-background py-32 px-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-start">
            <div className="w-full md:w-1/2 sticky top-32">
              <h2 className="text-5xl font-black tracking-tighter mb-12 leading-[1.1]">FROM A LOCAL OUTLET <br/>TO REGIONAL <span className="text-primary">AUTHORITY.</span></h2>
              <div className="space-y-8 text-muted-foreground leading-relaxed text-lg">
                <p>New Gayatri Earthmovers began as a vision to fill the gap in quality spare parts accessibility for the heavy machinery operating in the mineral-rich heartland of Jharkhand.</p>
                <p>Our commitment to sourcing only genuine and high-performance aftermarket parts has made us the preferred partner for individual operators and large-scale mining contractors alike.</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-16">
              <div className="group relative overflow-hidden bg-muted aspect-[4/5] rounded-3xl">
                <img 
                  alt="Industrial Workshop" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARr4oNZHz3U4AzPsZFnsxc3mWeiZ5mr6YV6L9q-l26WqeREoeYtNYjHyb2962FCy-pWx096wEghvizwXPGTKf8cX5410MBFos1Zwv3jGYAtNmbXR9ECeKJH-F8o3N58rw0G17d6zJSReJAbNpAGUKcsvlQAFYZ8W_1rN9oZdPQ2M5anXK6aQYmhGnxiGRD6Pyb4D6WLVSlvstjeFYz8KfA3orKJGiQdngptvcWnkiGNRN9Qu4LyNojUiaklBKzoH2nHKLsc3WwSUPI" 
                />
                <div className="absolute bottom-0 left-0 p-8 bg-background/90 backdrop-blur-md w-3/4 rounded-tr-3xl">
                  <p className="text-xs font-bold text-primary uppercase mb-2 tracking-widest">Quality Assurance</p>
                  <p className="text-sm italic">&quot;Precision isn&apos;t an option; it&apos;s our foundational requirement for every part that leaves our floor.&quot;</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted py-32 px-12">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
              <h2 className="text-4xl font-black tracking-tighter text-foreground">CORE VALUES</h2>
              <div className="w-16 h-1 bg-primary mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-background p-10 rounded-2xl border border-border transition-colors hover:border-primary">
                <BadgeCheck className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-bold text-xl mb-4 text-foreground">Unmatched Quality</h3>
                <p className="text-sm text-muted-foreground">Rigorous testing protocols ensure every component meets international industrial standards.</p>
              </div>
              <div className="bg-background p-10 rounded-2xl border border-border transition-colors hover:border-primary">
                <Headset className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-bold text-xl mb-4 text-foreground">Client First</h3>
                <p className="text-sm text-muted-foreground">Personalized consultancy to help you choose the right part for specific terrain challenges.</p>
              </div>
              <div className="bg-background p-10 rounded-2xl border border-border transition-colors hover:border-primary">
                <Truck className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-bold text-xl mb-4 text-foreground">Rapid Response</h3>
                <p className="text-sm text-muted-foreground">Logistics optimized for Jharkhand&apos;s unique geography, ensuring fast delivery to remote sites.</p>
              </div>
              <div className="bg-background p-10 rounded-2xl border border-border transition-colors hover:border-primary">
                <Handshake className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-bold text-xl mb-4 text-foreground">Ethical Trade</h3>
                <p className="text-sm text-muted-foreground">Transparent pricing and genuine business practices that have stood the test of 21 years.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground text-background py-24 px-12 relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black tracking-tighter mb-6 text-background">READY TO POWER YOUR NEXT PROJECT?</h2>
              <p className="text-xl text-muted mb-8 text-background/80">Connect with our specialists for technical consultation or a quote on specific machinery requirements.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="/en/contact" className="bg-primary text-primary-foreground px-10 py-4 font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all text-center">
                Talk to a Specialist
              </a>
              <a href="/en/catalog" className="border border-background/20 hover:bg-background/10 text-background px-10 py-4 font-bold rounded-lg active:scale-95 transition-all flex items-center justify-center gap-2">
                Browse Catalog <MoveRight className="w-5 h-5" />
              </a>
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
