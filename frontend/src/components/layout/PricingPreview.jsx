"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Daily Pass",
    price: "₹299",
    period: "per day",
    description: "Perfect for occasional visits",
    features: ["Any available desk", "High-speed Wi-Fi", "Complimentary beverages", "Locker access"],
    popular: false,
  },
  {
    name: "Weekly Pass",
    price: "₹1,499",
    period: "per week",
    description: "Great for short-term projects",
    features: [
      "Reserved desk",
      "High-speed Wi-Fi",
      "Complimentary beverages",
      "Locker access",
      "2 hours meeting room",
    ],
    popular: true,
  },
  {
    name: "Monthly",
    price: "₹4,999",
    period: "per month",
    description: "Best value for regulars",
    features: [
      "Dedicated desk",
      "24/7 access",
      "All beverages",
      "Personal locker",
      "8 hours meeting room",
      "Mail handling",
    ],
    popular: false,
  },
];

export function PricingPreview() {
  return (
    <section className="py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Flexible Plans
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No hidden fees. Choose the plan that works for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-foreground text-background shadow-large scale-105"
                  : "bg-card border border-border shadow-soft"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center gap-2">
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}

              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-sm text-muted-foreground"> {plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <Check className="w-4 h-4 text-accent" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full" asChild>
                <Link href="/book">Choose Plan</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="link" asChild className="gap-2">
            <Link href="/pricing">
              View All Pricing Options
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
