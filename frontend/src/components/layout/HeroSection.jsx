"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Check } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-secondary" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Now Open • 30+ Seats Available
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Work Smarter.
              <br />
              <span className="text-primary">Book Instantly.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
              Flexible workspaces designed for freelancers, startups, and teams.
              Book your perfect spot in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="hero" asChild>
                <Link href="/book" className="gap-3">
                  Book Your Seat
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>

              <Button size="xl" variant="hero-outline" asChild>
                <Link href="/availability" className="gap-3">
                  <Calendar className="w-5 h-5" />
                  Check Availability
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {["Fast Wi-Fi", "24/7 Access", "Free Coffee"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-accent" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* VISUAL */}
     <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="hidden lg:block"
>
  <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
    <div className="w-full h-full rounded-2xl bg-card shadow-xl flex items-center justify-center">
      <p className="text-muted-foreground font-medium">
        Workspace Preview
      </p>
    </div>
  </div>
</motion.div>


        </div>
      </div>
    </section>
  );
}
