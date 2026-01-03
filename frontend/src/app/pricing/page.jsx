"use client";

import { motion } from "framer-motion";
import Link from "next/link";
// import Navbar from "@/components/layout/Navbar";
// import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Check,
  Star,
  Clock,
  Users,
  Calendar,
  ArrowRight,
} from "lucide-react";

/* -------------------- DATA -------------------- */

const deskPlans = [
  {
    name: "Day Pass",
    price: "₹299",
    period: "per day",
    description: "Perfect for occasional visits",
    features: [
      "Any available desk",
      "High-speed Wi-Fi",
      "Complimentary tea & coffee",
      "Locker access",
      "Printing (10 pages)",
    ],
    popular: false,
  },
  {
    name: "Weekly Pass",
    price: "₹1,499",
    period: "per week",
    description: "Great for short-term projects",
    features: [
      "Reserved desk spot",
      "High-speed Wi-Fi",
      "Unlimited beverages",
      "Personal locker",
      "Printing (50 pages)",
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
      "All beverages included",
      "Personal locker",
      "Unlimited printing",
      "8 hours meeting room",
      "Mail & package handling",
      "Guest passes (2/month)",
    ],
    popular: false,
  },
];

const slotPlans = [
  {
    name: "Morning Slot",
    price: "₹149",
    time: "8:00 AM – 1:00 PM",
    description: "5 hours of focused work",
    icon: "🌅",
  },
  {
    name: "Evening Slot",
    price: "₹149",
    time: "2:00 PM – 7:00 PM",
    description: "5 hours of productive time",
    icon: "🌆",
  },
];

const podPricing = [
  {
    name: "Meeting Pod - Hourly",
    price: "₹299",
    period: "per hour",
    capacity: "4–6 people",
    features: ["Video conferencing", "Whiteboard", "Screen sharing"],
  },
  {
    name: "Meeting Pod - Half Day",
    price: "₹999",
    period: "4 hours",
    capacity: "4–6 people",
    features: [
      "Video conferencing",
      "Whiteboard",
      "Screen sharing",
      "Beverages included",
    ],
  },
  {
    name: "Meeting Pod - Full Day",
    price: "₹1,799",
    period: "8 hours",
    capacity: "4–6 people",
    features: [
      "Video conferencing",
      "Whiteboard",
      "Screen sharing",
      "Beverages included",
      "Lunch break flexibility",
    ],
  },
];

/* -------------------- PAGE -------------------- */

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}

      <main className="pt-32 pb-24">

        {/* HERO */}
        <section className="container mx-auto px-4 mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Pricing
            </span> */}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Flexible Plans for
              <br />
              <span className="text-primary">Every Need</span>
            </h1>

            <p className="text-lg text-muted-foreground">
              From hourly slots to monthly memberships. Choose what works best.
            </p>
          </motion.div>
        </section>

        {/* DESK SEATS */}
        <section className="container mx-auto px-4 mb-24">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Desk Seats
            </h2>
            <p className="text-muted-foreground">
              Regular desk and library-style seating
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deskPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-foreground text-background shadow-xl"
                    : "bg-card border border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm flex items-center gap-1 shadow-glow">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                )}

                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>

                <div className="text-4xl font-bold mb-6">
                  {plan.price}{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button className="w-full" asChild>
                  <Link href="/book">Get Started</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* HALF DAY SLOTS */}
        <section className="container mx-auto px-4 mb-24">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Half-Day Slots
            </h2>
            <p className="text-muted-foreground">
              Perfect for focused work sessions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
            {slotPlans.map((slot) => (
              <div
                key={slot.name}
                className="bg-card p-8 rounded-2xl border border-border"
              >
                <span className="text-3xl">{slot.icon}</span>
                <h3 className="text-xl font-semibold mt-2">{slot.name}</h3>
                <p className="text-muted-foreground">{slot.description}</p>

                <div className="flex items-center gap-2 mt-4 text-sm">
                  <Clock className="w-4 h-4" />
                  {slot.time}
                </div>

                <Button className="mt-6 w-full" variant="outline" asChild>
                  <Link href="/book">Book Slot</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* MEETING PODS */}
        <section className="container mx-auto px-4 mb-24">
          <div className="mb-12 flex items-center gap-3">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Meeting Pods
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {podPricing.map((pod) => (
              <div
                key={pod.name}
                className="bg-card p-8 rounded-2xl border border-border"
              >
                <h3 className="font-semibold">{pod.name}</h3>
                <p className="text-muted-foreground">{pod.capacity}</p>

                <div className="text-3xl font-bold my-4">
                  {pod.price}{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    / {pod.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {pod.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button className="mt-6 w-full" variant="outline" asChild>
                  <Link href="/book">Reserve Pod</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="bg-foreground text-background rounded-3xl p-12 text-center">
            <Calendar className="w-12 h-12 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl font-bold mb-4">
              Ready to Book?
            </h2>
            <p className="text-background/70 mb-8">
              Check real-time availability and secure your perfect workspace in minutes.
            </p>

            <Button size="lg" asChild>
              <Link href="/book" className="flex items-center gap-2">
                Book Now <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}