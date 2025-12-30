"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Clock, ShieldCheck, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-background text-foreground py-24 md:py-32 lg:py-40">
       {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/hero-bg.png" 
          alt="Havana Sunset" 
          fill 
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/90 dark:bg-background/80 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          
          {/* Top Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-600 dark:text-orange-500 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-orange-600 dark:bg-orange-500 mr-2 animate-pulse" />
            {t.hero.badge}
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {t.hero.title}{" "}
              <span className="text-orange-600 dark:text-orange-500 relative">
                {t.hero.titleHighlight}
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl"
            >
              {t.hero.subtitle}
            </motion.p>
          </div>

          {/* Tracking Input */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full max-w-lg"
          >
             <div className="bg-background/60 backdrop-blur-md p-2 rounded-full border border-border/50 shadow-lg flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  className="w-full pl-10 h-12 rounded-full bg-transparent border-none text-base focus-visible:ring-0 placeholder:text-muted-foreground/70"
                  placeholder={t.hero.placeholder}
                />
              </div>
              <Button size="lg" className="rounded-full h-12 px-8 bg-orange-600 hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-600 text-white font-bold">
                {t.hero.track}
              </Button>
            </div>
             <p className="text-sm text-muted-foreground mt-2">{t.hero.try}</p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 w-full border-t border-border/10 mt-8"
          >
            {[
              { icon: Clock, title: t.hero.trust.fast, desc: t.hero.trust.fastDesc },
              { icon: ShieldCheck, title: t.hero.trust.secure, desc: t.hero.trust.secureDesc },
              { icon: HeadphonesIcon, title: t.hero.trust.support, desc: t.hero.trust.supportDesc }
            ].map((item, index) => (
               <div key={index} className="flex flex-col items-center space-y-3">
                 <div className="h-12 w-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                    <item.icon className="text-orange-600 dark:text-orange-500 w-6 h-6" />
                 </div>
                 <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                 </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
