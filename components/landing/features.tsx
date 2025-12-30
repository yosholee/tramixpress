"use client"

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";

export function Features() {
  const { t } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="bg-background text-foreground py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
          >
            {t.features.badge}
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl md:text-5xl font-bold tracking-tight"
          >
            {t.features.title}
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="text-muted-foreground max-w-2xl text-lg"
          >
            {t.features.subtitle}
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {t.features.items.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-card border border-border p-8 rounded-2xl hover:bg-accent hover:text-accent-foreground transition-colors group cursor-pointer shadow-sm"
            >
              <div className="mb-6 inline-flex p-3 rounded-lg bg-orange-500/10 text-orange-500">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 group-hover:text-accent-foreground/80">
                {feature.description}
              </p>
              <div className="flex items-center text-sm font-medium text-foreground/80 group-hover:text-primary transition-colors">
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4 }}
           className="flex justify-center"
        >
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold h-12 px-8 rounded-full text-base">
               {t.features.cta} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
        </motion.div>
      </div>
    </section>
  );
}
