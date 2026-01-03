"use client";

import { motion } from "framer-motion";
import { Monitor, BookOpen, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const workspaces = [
  {
    icon: Monitor,
    title: "Regular Desk Seats",
    description:
      "Ergonomic desks with power outlets, fast Wi-Fi, and adjustable seating for all-day productivity.",
    features: ["Ergonomic Chair", "Power Outlets", "Dual Monitor Ready"],
    color: "primary",
    available: 18,
  },
  {
    icon: BookOpen,
    title: "Library-Style Seating",
    description:
      "Quiet, focused environment perfect for deep work and concentration without distractions.",
    features: ["Silent Zone", "Reading Lamps", "Minimal Distractions"],
    color: "accent",
    available: 8,
  },
  {
    icon: Users,
    title: "Meeting Pods",
    description:
      "Private, soundproof pods for team meetings, video calls, or collaborative brainstorming sessions.",
    features: ["Soundproof", "Screen Sharing", "Video Conference Ready"],
    color: "primary",
    available: 2,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function WorkspaceShowcase() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Spaces
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your Perfect
            <br />
            <span className="text-primary">Workspace</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From quiet focus zones to collaborative meeting pods, we have the
            right space for every work style.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {workspaces.map((workspace) => (
            <motion.div
              key={workspace.title}
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-border/50"
            >
              {/* Availability */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                {workspace.available} available
              </div>

              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl mb-6 flex items-center justify-center ${
                  workspace.color === "primary"
                    ? "bg-primary/10"
                    : "bg-accent/10"
                }`}
              >
                <workspace.icon
                  className={`w-8 h-8 ${
                    workspace.color === "primary"
                      ? "text-primary"
                      : "text-accent"
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">
                {workspace.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {workspace.description}
              </p>

              <div className="space-y-2 mb-6">
                {workspace.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/book"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all"
              >
                Book Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
