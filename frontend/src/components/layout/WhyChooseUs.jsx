"use client";

import { motion } from "framer-motion";
import { Wifi, Clock, Volume2, CreditCard, Coffee, Shield } from "lucide-react";

const features = [
  { icon: Wifi, title: "Lightning-Fast Wi-Fi", description: "500 Mbps fiber internet." },
  { icon: Clock, title: "Flexible Hours", description: "Daily, weekly, monthly plans." },
  { icon: Volume2, title: "Quiet Zones", description: "Soundproof and silent areas." },
  { icon: CreditCard, title: "Easy Payments", description: "UPI and cards supported." },
  { icon: Coffee, title: "Premium Amenities", description: "Free beverages & lounges." },
  { icon: Shield, title: "Secure Access", description: "CCTV & secure lockers." },
];

export function WhyChooseUs() {
  return (
    <section className="py-28 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            Why <span className="text-primary">WorkspaceHub</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Everything you need to stay productive.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 shadow-soft"
            >
              <f.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
