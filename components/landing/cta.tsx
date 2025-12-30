"use client"

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8 text-center lg:text-left"
          >
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              {t.cta.title}
            </h2>
            <p className="text-muted-foreground md:text-xl max-w-lg mx-auto lg:mx-0">
              {t.cta.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="h-14 px-8 bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1 transition-all">
                {t.cta.createAccount}
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 rounded-full border-2 text-lg font-medium">
                {t.cta.contactSales}
              </Button>
            </div>

            {/* Social Proof */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4"
            >
               <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-orange-100 dark:bg-orange-900/50 overflow-hidden relative" />
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-blue-100 dark:bg-blue-900/50 overflow-hidden relative" />
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-green-100 dark:bg-green-900/50 overflow-hidden relative" />
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-yellow-100 dark:bg-yellow-900/50 overflow-hidden relative" />
                  <div className="w-10 h-10 rounded-full border-2 border-background bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-900">
                     5k+
                  </div>
               </div>
               <div className="text-sm">
                  <div className="flex text-orange-500">
                     {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="font-medium text-muted-foreground">Trusted by 5,000+ customers</p>
               </div>
            </motion.div>
          </motion.div>

          {/* Image Grid (Right) */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
             <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="space-y-4 pt-8"
                >
                   <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] hover:scale-[1.02] transition-transform duration-500">
                      <Image src="/cta-1.png" alt="Havana Street" fill className="object-cover" />
                   </div>
                </motion.div>
                <div className="space-y-4">
                   <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square hover:scale-[1.02] transition-transform duration-500"
                   >
                      <Image src="/cta-3.png" alt="Happy Family" fill className="object-cover" />
                   </motion.div>
                   <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] hover:scale-[1.02] transition-transform duration-500"
                   >
                      <Image src="/cta-2.png" alt="Varadero Beach" fill className="object-cover scale-120" />
                   </motion.div>
                </div>
             </div>
             {/* Decorative Elements */}
             <motion.div 
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute -top-12 -right-12 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -z-10" 
             />
             <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10" 
             />
          </div>

        </div>
      </div>
    </section>
  );
}


