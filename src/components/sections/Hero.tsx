import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { PhoneCall, Wrench, ShieldCheck } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with green wash */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero scenic grass lawn */}
        <img
          src="/hero-lawnmower.png"
          alt="Close-up of a green lawnmower cutting lush grass — LG Mower Services, Sutton Coldfield"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium tracking-wide">Trusted Local Service in Sutton Coldfield</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-sm">
              Garden Machinery <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-200">
                Servicing & Repairs
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-light leading-relaxed">
              Professional repair and servicing for all types of garden machinery. Founded by Lee Gallier, former lead engineer of Wellsmead Mower Services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 border-none text-lg">
                <a href="#contact">
                  <Wrench className="mr-2 w-5 h-5" />
                  Book a Service
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary backdrop-blur-sm text-lg">
                <a href="tel:07402849074">
                  <PhoneCall className="mr-2 w-5 h-5" />
                  07402 849074
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
