"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Monitor,
  BookOpen,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* -------------------- DATA -------------------- */

const today = new Date();

const dates = Array.from({ length: 7 }, (_, i) => {
  const d = new Date(today);
  d.setDate(today.getDate() + i);
  return d;
});

const slots = [
  { id: "morning", name: "Morning Slot", time: "8:00 AM – 1:00 PM" },
  { id: "evening", name: "Evening Slot", time: "2:00 PM – 7:00 PM" },
  { id: "fullday", name: "Full Day", time: "8:00 AM – 7:00 PM" },
];

const seatTypes = [
  {
    id: "regular",
    name: "Regular Desks",
    icon: Monitor,
    total: 20,
    availability: { morning: 14, evening: 12, fullday: 10 },
  },
  {
    id: "library",
    name: "Library Seats",
    icon: BookOpen,
    total: 10,
    availability: { morning: 7, evening: 5, fullday: 4 },
  },
];

const pods = [
  {
    id: "pod1",
    name: "Meeting Pod 1",
    capacity: "4–6 people",
    availability: [
      { time: "8:00 AM – 10:00 AM", available: true },
      { time: "10:00 AM – 12:00 PM", available: false },
      { time: "12:00 PM – 2:00 PM", available: true },
      { time: "2:00 PM – 4:00 PM", available: true },
      { time: "4:00 PM – 6:00 PM", available: false },
    ],
  },
  {
    id: "pod2",
    name: "Meeting Pod 2",
    capacity: "4–6 people",
    availability: [
      { time: "8:00 AM – 10:00 AM", available: true },
      { time: "10:00 AM – 12:00 PM", available: true },
      { time: "12:00 PM – 2:00 PM", available: false },
      { time: "2:00 PM – 4:00 PM", available: true },
      { time: "4:00 PM – 6:00 PM", available: true },
    ],
  },
];

/* -------------------- PAGE -------------------- */

export default function Availability() {
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("morning");

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

  const isToday = (date) => date.toDateString() === today.toDateString();

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-32 pb-24">
        {/* HERO */}
        <section className="container mx-auto px-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Live Updates
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Real-Time <span className="text-primary">Availability</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              See what’s available right now. Book instantly.
            </p>
          </motion.div>
        </section>

        {/* DATE SELECTOR */}
        <section className="container mx-auto px-4 mb-8">
          <div className="flex gap-2 overflow-x-auto">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(index)}
                className={`flex flex-col items-center px-4 py-3 rounded-xl min-w-[80px] transition-all ${
                  selectedDate === index
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-card border border-border"
                }`}
              >
                <span className="text-xs opacity-70">
                  {isToday(date) ? "Today" : date.toLocaleDateString("en-US", { weekday: "short" })}
                </span>
                <span className="text-lg font-bold">{date.getDate()}</span>
              </button>
            ))}
          </div>
        </section>

        {/* SLOT SELECTOR */}
        <section className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap gap-3">
            {slots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => setSelectedSlot(slot.id)}
                className={`px-4 py-2 rounded-lg ${
                  selectedSlot === slot.id
                    ? "bg-foreground text-background"
                    : "bg-muted"
                }`}
              >
                <Clock className="inline w-4 h-4 mr-2" />
                {slot.name}
              </button>
            ))}
          </div>
        </section>

        {/* SEATS */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-xl font-bold mb-6">
            Seat Availability — {formatDate(dates[selectedDate])}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {seatTypes.map((type) => {
              const available = type.availability[selectedSlot];
              const percent = (available / type.total) * 100;

              return (
                <div
                  key={type.id}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="flex justify-between mb-4">
                    <h3 className="font-semibold">{type.name}</h3>
                    <span className="text-sm">{available}/{type.total}</span>
                  </div>

                  <div className="h-2 bg-muted rounded-full mb-4">
                    <div
                      className="h-2 bg-primary rounded-full"
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  <Button asChild className="w-full">
                    <Link href="/book">
                      Book Now <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </section>

        {/* PODS */}
        <section className="container mx-auto px-4">
          <h2 className="text-xl font-bold mb-6">
            Meeting Pods — {formatDate(dates[selectedDate])}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {pods.map((pod) => (
              <div
                key={pod.id}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="font-semibold mb-4">{pod.name}</h3>

                {pod.availability.map((slot, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-sm mb-2"
                  >
                    <span>{slot.time}</span>
                    <span className={slot.available ? "text-accent" : "text-muted-foreground"}>
                      {slot.available ? "Available" : "Booked"}
                    </span>
                  </div>
                ))}

                <Button variant="outline" className="w-full mt-4" asChild>
                  <Link href="/book">Book Pod</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
