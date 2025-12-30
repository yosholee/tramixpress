"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";

export function FAQ() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24 bg-muted text-foreground">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column: Header & CTA */}
          <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
             className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground">
              <HelpCircle className="h-4 w-4" />
              <span>{t.faq.badge}</span>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {t.faq.title}
              </h2>
              <p className="text-muted-foreground text-lg max-w-md leading-relaxed">
                {t.faq.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold h-12 px-8">
                {t.faq.contactSupport}
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 border-input bg-card hover:bg-accent hover:text-accent-foreground text-foreground">
                {t.faq.knowledgeBase}
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Accordion */}
          <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="lg:pt-2"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {t.faq.items.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-border">
                  <AccordionTrigger className="text-lg font-medium hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
