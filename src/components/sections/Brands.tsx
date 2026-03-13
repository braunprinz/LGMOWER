import { motion } from "framer-motion"

const brands = [
  { name: "Briggs & Stratton", src: "/brand-briggs-stratton.png" },
  { name: "CEuk", src: "/brand-ceuk.png" },
  { name: "Cobra", src: "/brand-cobra.png" },
  { name: "Efco", src: "/brand-efco.png" },
  { name: "EGO", src: "/brand-ego.png" },
  { name: "Lawnflite Pro", src: "/brand-lawnflite.png" },
  { name: "Masport", src: "/brand-masport.png" },
  { name: "MTD", src: "/brand-mtd.png" },
  { name: "Oleo-Mac", src: "/brand-oleomac.png" },
  { name: "Wilkinson Sword", src: "/brand-wilkinson-sword.png" },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export function Brands() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-sm font-bold tracking-widest text-primary uppercase mb-2">
            Brands We Service &amp; Repair
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Authorised to work on all major makes
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.name}
              variants={itemVariants}
              className="group bg-white rounded-2xl border border-border/60 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 p-5 flex flex-col items-center justify-center gap-3 aspect-[4/3]"
            >
              <img
                src={brand.src}
                alt={`${brand.name} logo — serviced at LG Mower Services, Sutton Coldfield`}
                className="w-full h-12 object-contain mix-blend-multiply"
                loading="lazy"
              />
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide text-center leading-tight">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
