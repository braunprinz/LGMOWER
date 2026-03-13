import { Facebook } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold text-white">LG Mower Services</h3>
            <p className="text-muted/80 max-w-sm">
              Professional garden machinery servicing and repairs in Sutton Coldfield and surrounding areas.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Quick Links</h4>
            <ul className="space-y-2 text-muted/80">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Sales & Spares</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-lg text-white">Connect With Us</h4>
            <a 
              href="https://www.facebook.com/L-G-MOWER-services-2135315139881290/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-white/10 hover:bg-primary text-white transition-all duration-300"
            >
              <Facebook className="w-5 h-5" />
              <span className="font-medium">Follow us on Facebook</span>
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted/60">
          <p>&copy; Copyright &copy; LG Mower Services 2018. All rights reserved.</p>
          <p className="text-muted/50">
            Unit 3B, Pole Position, London Road, Bassetts Pole, Sutton Coldfield, B75 5SA
          </p>
        </div>

      </div>
    </footer>
  )
}
