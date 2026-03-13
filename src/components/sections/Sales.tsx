import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  {
    title: "Mowers",
    img: "/mowers.jpg",
    alt: "Range of lawnmowers and garden machinery available at LG Mower Services, Sutton Coldfield",
    desc: "With a comprehensive range of machines for every type of garden available from stock, the chances are high that I can immediately supply the optimum mower for your needs. Machines for more specialist demands can be ordered for rapid delivery."
  },
  {
    title: "Spares",
    img: "/spares.jpg",
    alt: "Spares counter and parts inventory at LG Mower Services — Authorised Briggs & Stratton Service Centre",
    desc: "I carry a large inventory of spare parts and consumables for all of the most common makes of garden machinery. Why not drop by and see if I have what you need? If not, I'll order it for you!"
  },
  {
    title: "Tools",
    img: "/tools.jpg",
    alt: "Wilkinson Sword and CEuk garden tools display including protective clothing at LG Mower Services",
    desc: "Gardening isn't just about mowing the lawn! In addition to lawnmowers, I carry a good stock of other garden tools and protective clothing for all the other work needed to keep your garden looking its best."
  }
]

export function Sales() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">What We Offer</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Sales & Supply</h3>
          <p className="text-lg text-muted-foreground">
            As well as carrying out repairs and servicing work, I am also able to supply a range of new lawnmowers, spares and garden tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full overflow-hidden flex flex-col group border-0 shadow-xl bg-white">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {product.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
