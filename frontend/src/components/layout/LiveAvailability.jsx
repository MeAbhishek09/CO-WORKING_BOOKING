"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

export function LiveAvailability() {
  return (
    <section className="py-28 bg-foreground text-background">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Real-Time <span className="text-primary">Availability</span>
        </h2>
        <p className="text-background/70 mb-10">
          Updated live so you always know what’s free.
        </p>

        <Button size="lg" asChild>
          <Link href="/availability" className="gap-2">
            View Full Availability
            <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>

        <div className="flex justify-center gap-2 text-sm text-background/50 mt-6">
          <Clock className="w-4 h-4" />
          Last updated: Just now
        </div>
      </div>
    </section>
  );
}
