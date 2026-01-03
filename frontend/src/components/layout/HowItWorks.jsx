"use client";

import { motion } from "framer-motion";
import { MousePointer2, Calendar, CreditCard, Laptop } from "lucide-react";

const steps = [
  { icon: MousePointer2, step: "01", title: "Choose Space", desc: "Select desks, library seats, or pods." },
  { icon: Calendar, step: "02", title: "Select Slot", desc: "Daily, weekly, monthly, or hourly." },
  { icon: CreditCard, step: "03", title: "Pay Online", desc: "UPI or card with instant confirmation." },
  { icon: Laptop, step: "04", title: "Start Working", desc: "Arrive and be productive instantly." },
];

export function HowItWorks() {
  return (
    <section className="py-28 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold">
            Book in <span className="text-primary">4 Easy Steps</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Getting started takes less than a minute.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 text-center shadow-soft"
            >
              <s.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <div className="text-primary font-bold mb-1">{s.step}</div>
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
