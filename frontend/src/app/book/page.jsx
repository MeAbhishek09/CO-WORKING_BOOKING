"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  Monitor,
  BookOpen,
  Users,
  ArrowRight,
  Check,
  CreditCard,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useToast } from "@/hooks/use-toast";

/* -------------------- DATA -------------------- */

const today = new Date();

const dates = Array.from({ length: 14 }, (_, i) => {
  const d = new Date(today);
  d.setDate(today.getDate() + i);
  return d;
});

const spaceTypes = [
  {
    id: "regular",
    name: "Regular Desk",
    icon: Monitor,
    price: 299,
    description: "Standard desk with ergonomic chair",
  },
  {
    id: "library",
    name: "Library Seat",
    icon: BookOpen,
    price: 249,
    description: "Quiet zone for focused work",
  },
  {
    id: "pod",
    name: "Meeting Pod",
    icon: Users,
    price: 299,
    priceUnit: "per hour",
    description: "Private room for teams",
  },
];

const slots = [
  { id: "morning", name: "Morning", time: "8:00 AM – 1:00 PM", price: 149 },
  { id: "evening", name: "Evening", time: "2:00 PM – 7:00 PM", price: 149 },
  { id: "fullday", name: "Full Day", time: "8:00 AM – 7:00 PM", price: 299 },
];

const podHours = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

/* -------------------- PAGE -------------------- */

export default function Book() {
  const { toast } = useToast();

  const [step, setStep] = useState(1);
  const [selectedSpace, setSelectedSpace] = useState("");
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [selectedPodStart, setSelectedPodStart] = useState("");
  const [selectedPodEnd, setSelectedPodEnd] = useState("");
  const [dateOffset, setDateOffset] = useState(0);

  const formatDate = (date) =>
    date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

  const calculateTotal = () => {
    if (selectedSpace === "pod" && selectedPodStart && selectedPodEnd) {
      const start = podHours.indexOf(selectedPodStart);
      const end = podHours.indexOf(selectedPodEnd);
      return (end - start) * 299;
    }
    return slots.find((s) => s.id === selectedSlot)?.price || 0;
  };

  const canProceed = () => {
    if (step === 1) return selectedSpace !== "";
    if (step === 2) return selectedDate >= 0;
    if (step === 3) {
      return selectedSpace === "pod"
        ? selectedPodStart && selectedPodEnd
        : selectedSlot !== "";
    }
    return true;
  };

  const handleBooking = () => {
    toast({
      title: "Booking Confirmed!",
      description: "Your workspace has been reserved successfully.",
    });

    setStep(1);
    setSelectedSpace("");
    setSelectedSlot("");
    setSelectedPodStart("");
    setSelectedPodEnd("");
  };

  const visibleDates = dates.slice(dateOffset, dateOffset + 7);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* ---------------- PROGRESS ---------------- */}
          <div className="flex justify-between mb-12">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  s <= step
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {s < step ? <Check className="w-5 h-5" /> : s}
              </div>
            ))}
          </div>

          {/* ---------------- STEP CONTENT ---------------- */}
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <h1 className="text-3xl font-bold mb-6 text-center">
                  Choose Your Space
                </h1>

                <div className="grid md:grid-cols-3 gap-4">
                  {spaceTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedSpace(type.id)}
                      className={`p-6 rounded-2xl border text-left ${
                        selectedSpace === type.id
                          ? "border-primary bg-primary/5"
                          : "border-border bg-card"
                      }`}
                    >
                      <type.icon className="w-6 h-6 mb-3 text-primary" />
                      <h3 className="font-semibold">{type.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {type.description}
                      </p>
                      <p className="font-bold text-primary mt-2">
                        ₹{type.price}
                      </p>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <>
                <h1 className="text-3xl font-bold mb-6 text-center">
                  Select Date
                </h1>

                <div className="grid grid-cols-7 gap-2">
                  {visibleDates.map((d, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedDate(dateOffset + i)}
                      className={`p-3 rounded-xl ${
                        selectedDate === dateOffset + i
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <div className="text-sm">
                        {d.toLocaleDateString("en-US", { weekday: "short" })}
                      </div>
                      <div className="text-xl font-bold">{d.getDate()}</div>
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <>
                <h1 className="text-3xl font-bold mb-6 text-center">
                  Select Time
                </h1>

                {selectedSpace === "pod" ? (
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      value={selectedPodStart}
                      onChange={(e) => setSelectedPodStart(e.target.value)}
                      className="p-3 rounded-xl bg-muted"
                    >
                      <option value="">Start Time</option>
                      {podHours.slice(0, -1).map((h) => (
                        <option key={h}>{h}</option>
                      ))}
                    </select>

                    <select
                      value={selectedPodEnd}
                      onChange={(e) => setSelectedPodEnd(e.target.value)}
                      className="p-3 rounded-xl bg-muted"
                    >
                      <option value="">End Time</option>
                      {podHours
                        .slice(podHours.indexOf(selectedPodStart) + 1)
                        .map((h) => (
                          <option key={h}>{h}</option>
                        ))}
                    </select>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-3 gap-4">
                    {slots.map((slot) => (
                      <button
                        key={slot.id}
                        onClick={() => setSelectedSlot(slot.id)}
                        className={`p-6 rounded-2xl border ${
                          selectedSlot === slot.id
                            ? "border-primary bg-primary/5"
                            : "border-border bg-card"
                        }`}
                      >
                        <Clock className="w-5 h-5 mb-2 text-primary" />
                        <h3 className="font-semibold">{slot.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {slot.time}
                        </p>
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <>
                <h1 className="text-3xl font-bold mb-6 text-center">
                  Confirm Booking
                </h1>

                <div className="bg-card p-6 rounded-2xl border">
                  <p>
                    <strong>Total:</strong>{" "}
                    <span className="text-primary font-bold">
                      ₹{calculateTotal()}
                    </span>
                  </p>
                </div>
              </>
            )}

            {/* NAV */}
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
              >
                Back
              </Button>

              {step < 4 ? (
                <Button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                >
                  Continue <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button onClick={handleBooking}>
                  Confirm & Pay <Check className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
