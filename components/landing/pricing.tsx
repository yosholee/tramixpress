"use client"

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { motion } from "framer-motion";

export function Pricing() {
  const { t } = useLanguage();

  const plans = [
    {
      name: t.pricing.smallBox,
      price: t.pricing.smallBoxPrice,
      unit: t.pricing.smallBoxUnit,
      description: "Ideal for small gifts and essentials.",
      features: [
        t.pricing.features.dims12,
        t.pricing.features.delivery,
        t.pricing.features.tracking,
        t.pricing.features.insurance,
      ],
      featured: false,
    },
    {
      name: t.pricing.perLb,
      price: t.pricing.perLbPrice,
      unit: t.pricing.perLbUnit,
      description: "Best for custom weight packages.",
      features: [
        t.pricing.features.weight,
        t.pricing.features.delivery,
        t.pricing.features.tracking,
        t.pricing.features.customs,
      ],
      featured: true,
    },
    {
      name: t.pricing.largeBox,
      price: t.pricing.largeBoxPrice,
      unit: t.pricing.largeBoxUnit,
      description: "Maximum space for large shipments.",
      features: [
        t.pricing.features.dims16,
        t.pricing.features.delivery,
        t.pricing.features.tracking,
        t.pricing.features.insurance,
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-muted">
      <div className="container max-w-5xl px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 dark:border-orange-900/50 dark:bg-orange-900/20 px-3 py-1 text-sm font-medium text-orange-600 dark:text-orange-400"
          >
            {t.pricing.badge}
          </motion.div>
          <motion.h2 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            {t.pricing.title}
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="max-w-[700px] text-muted-foreground md:text-xl"
          >
            {t.pricing.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className={`relative flex flex-col p-8 rounded-2xl border ${
                plan.featured
                  ? "border-orange-500 shadow-xl z-10"
                  : "border-border shadow-sm hover:shadow-md transition-shadow"
              } bg-card text-card-foreground`}
              whileHover={{ y: -5 }}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-3 py-1 text-xs font-semibold text-white">
                  {t.pricing.popular}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight">
                  {plan.price}
                </span>
                <span className="text-muted-foreground font-medium">
                  {plan.unit}
                </span>
              </div>

              <ul className="mb-8 space-y-4 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 text-orange-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full h-11 font-semibold ${
                  plan.featured
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-primary/10 hover:bg-primary/20 text-primary border-0"
                }`}
                variant={plan.featured ? "default" : "outline"}
              >
                {t.pricing.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
