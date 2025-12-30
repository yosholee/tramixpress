"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/components/language-provider";
import { Send, Bell, Gift, Star } from "lucide-react";
import { motion } from "framer-motion";

export function Newsletter() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95, y: 20 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="bg-background dark:bg-muted border border-border rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-lg max-w-5xl mx-auto text-center space-y-10"
        >
          
          {/* Header */}
          <div className="space-y-4 max-w-2xl mx-auto">
             <div className="inline-flex items-center rounded-full border border-zinc-200 dark:border-orange-500 bg-zinc-50  dark:bg-zinc-900 px-3 py-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <Send className="w-3 h-3 mr-2 text-orange-500" />
                {t.newsletter.badge}
             </div>
             <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                {t.newsletter.title}
             </h2>
             <p className="text-muted-foreground text-lg md:text-xl">
                {t.newsletter.subtitle}
             </p>
          </div>

          {/* Input Form */}
          <div className="max-w-md mx-auto space-y-4">
             <div className="flex gap-2">
                <Input 
                   type="email" 
                   placeholder={t.newsletter.placeholder} 
                   className="h-12 bg-background  border-input dark:border-orange-500 dark:bg-muted text-foreground placeholder:text-muted-foreground/50 focus-visible:ring-orange-500" 
                />
                <Button size="lg" className="h-12 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6">
                   <Send className="w-5 h-5" />
                </Button>
             </div>
             <p className="text-xs text-muted-foreground">{t.newsletter.spam}</p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-8 text-left max-w-4xl mx-auto">
             {[
               { icon: Bell, title: t.newsletter.weekly.title, desc: t.newsletter.weekly.desc },
               { icon: Gift, title: t.newsletter.resources.title, desc: t.newsletter.resources.desc },
               { icon: Star, title: t.newsletter.early.title, desc: t.newsletter.early.desc }
             ].map((item, index) => (
                <motion.div 
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: 0.4 + (index * 0.1) }}
                   className="flex flex-col items-center text-center space-y-3"
                >
                   <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
                      <item.icon className="w-6 h-6" />
                   </div>
                   <div>
                      <h3 className="font-bold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                   </div>
                </motion.div>
             ))}
          </div>

          {/* Social Proof */}
          <motion.div 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.8 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-border/50 w-full max-w-md mx-auto"
          >
              <div className="flex -space-x-3">
                  {[
                    "from-zinc-100 to-zinc-200", 
                    "from-zinc-200 to-zinc-300", 
                    "from-zinc-300 to-zinc-400", 
                    "from-zinc-400 to-zinc-500"
                  ].map((gradient, i) => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-zinc-200 dark:bg-zinc-800 overflow-hidden relative">
                         {/* Placeholder avatars */}
                        <div className={`w-full h-full bg-gradient-to-br ${gradient}`} /> 
                     </div>
                  ))}
               </div>
               <p className="text-sm text-muted-foreground font-medium">{t.newsletter.joined}</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
