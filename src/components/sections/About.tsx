import { motion } from "framer-motion"
import { CheckCircle2, Truck, Award } from "lucide-react"

export function About() {
  const trustSignals = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "25+ Years Experience",
      desc: "Consistently professional standard of work"
    },
    {
      icon: <Truck className="w-6 h-6 text-primary" />,
      title: "Free Local Collection",
      desc: "Pickup & delivery available on request"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-primary" />,
      title: "Former Wellsmead Lead",
      desc: "Continuing the high quality service legacy"
    }
  ]

  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/lee-in-workshop.jpg"
                alt="Lee Gallier, owner of LG Mower Services, working on a lawnmower engine in his workshop"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-xl border border-border max-w-xs animate-in zoom-in duration-700 delay-300 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Expert Engineer</p>
                  <p className="text-sm text-muted-foreground">Lee Gallier</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 space-y-8"
          >
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Welcome to <span className="text-primary">LG Mower Services</span>
              </h3>
            </div>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                LG Mower Services is the new lawnmower and garden machinery servicing and repair company founded by me, Lee Gallier, the former lead garden machinery engineer of Wellsmead Mower Services. 
              </p>
              <p>
                Although Wellsmead Mower Services ceased trading in 2018, I am pleased to be able to continue to offer the same high quality of service to which their customers have become accustomed.
              </p>
              <p>
                With over 25 years of trade experience, I am able to repair and service all types of garden machinery to a consistently professional standard.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-border/60">
              {trustSignals.map((signal, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 shrink-0">{signal.icon}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{signal.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{signal.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
