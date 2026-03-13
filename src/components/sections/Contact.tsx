import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    reset()
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for getting in touch. I'll get back to you shortly.",
      variant: "default",
    })
  }

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-foreground">Contact Me</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-10"
          >
            <div className="bg-muted/40 rounded-3xl p-8 border border-border/50 shadow-sm">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Address</h4>
                    <address className="not-italic text-muted-foreground space-y-1">
                      <p>Unit 3B</p>
                      <p>Pole Position, London Road</p>
                      <p>Bassetts Pole</p>
                      <p>Sutton Coldfield</p>
                      <p className="font-medium text-foreground">B75 5SA</p>
                    </address>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Contact Info</h4>
                    <div className="text-muted-foreground space-y-2">
                      <p className="flex items-center gap-2">
                        <span>Phone:</span>
                        <a href="tel:07402849074" className="text-primary font-medium hover:underline">07402 849074</a>
                      </p>
                      <p className="flex items-center gap-2">
                        <span>Email:</span>
                        <a href="mailto:lee@lgmowerservices.co.uk" className="text-primary font-medium hover:underline break-all">lee@lgmowerservices.co.uk</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center shrink-0 shadow-md">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Working Hours</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p className="flex justify-between gap-4"><span>Mon - Fri:</span> <span className="font-medium text-foreground">08:00 - 17:00</span></p>
                      <p className="flex justify-between gap-4"><span>Saturday:</span> <span className="font-medium text-foreground">08:00 - 13:00</span></p>
                      <p className="flex justify-between gap-4 text-destructive font-medium mt-2"><span>Sunday:</span> <span>CLOSED</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-3xl shadow-sm border border-border overflow-hidden h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.3853177651017!2d-1.7820696841712496!3d52.57321687982245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870a41db3e6a98b%3A0xc3b5443fb80a91ea!2sBassetts%20Pole%2C%20Sutton%20Coldfield%20B75%205SA%2C%20UK!5e0!3m2!1sen!2sus!4v1689363012345!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '1rem' }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>

          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Leave me a message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      {...register("name")} 
                      className={errors.name ? "border-destructive focus-visible:ring-destructive/10" : ""}
                    />
                    {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      {...register("email")}
                      className={errors.email ? "border-destructive focus-visible:ring-destructive/10" : ""}
                    />
                    {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="How can I help you with your garden machinery?" 
                    {...register("message")}
                    className={errors.message ? "border-destructive focus-visible:ring-destructive/10" : ""}
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg h-14"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  )}
                </Button>
                
                <div className="mt-8 flex flex-col items-center gap-4 pt-6 border-t border-border">
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">We Accept</p>
                  <img 
                    src="http://lgmowerservices.co.uk/img/credit-card-icons.png" 
                    alt="Accepted Credit Cards" 
                    className="h-8 object-contain opacity-80"
                  />
                </div>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
