"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
    
      <main className="pt-32 pb-24">
        <section className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* LEFT: CONTACT INFO */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Contact
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Get in <span className="text-primary">Touch</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  Have questions? We'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <Info
                  icon={MapPin}
                  title="Visit Us"
                  text={`123 Business Park, Tech City\nNear Central Metro Station\nTC 12345`}
                />

                <Info
                  icon={Phone}
                  title="Call Us"
                  text={`+1 (555) 123-4567\n+1 (555) 987-6543`}
                  accent
                />

                <Info
                  icon={Mail}
                  title="Email Us"
                  text={`hello@workspacehub.com\nsupport@workspacehub.com`}
                />

                <Info
                  icon={Clock}
                  title="Working Hours"
                  text={`Mon–Fri: 8:00 AM – 9:00 PM\nSaturday: 9:00 AM – 6:00 PM\nSunday: Closed`}
                  accent
                />
              </div>

              {/* MAP PLACEHOLDER */}
              <div className="aspect-video rounded-2xl bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto text-muted-foreground/50" />
                  <p className="text-sm text-muted-foreground">
                    Interactive map
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border shadow-soft">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">Send a Message</h2>
                    <p className="text-sm text-muted-foreground">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Name"
                      value={formData.name}
                      onChange={(v) =>
                        setFormData({ ...formData, name: v })
                      }
                    />
                    <Input
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={(v) =>
                        setFormData({ ...formData, email: v })
                      }
                    />
                  </div>

                  <Input
                    label="Subject"
                    value={formData.subject}
                    onChange={(v) =>
                      setFormData({ ...formData, subject: v })
                    }
                  />

                  <Textarea
                    label="Message"
                    value={formData.message}
                    onChange={(v) =>
                      setFormData({ ...formData, message: v })
                    }
                  />

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

     
    </div>
  );
}

/* ---------------- SMALL COMPONENTS ---------------- */

function Info({ icon: Icon, title, text, accent }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          accent ? "bg-accent/10" : "bg-primary/10"
        }`}
      >
        <Icon className={`w-6 h-6 ${accent ? "text-accent" : "text-primary"}`} />
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground whitespace-pre-line">
          {text}
        </p>
      </div>
    </div>
  );
}

function Input({ label, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary outline-none"
        required
      />
    </div>
  );
}

function Textarea({ label, value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <textarea
        rows={5}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary outline-none resize-none"
        required
      />
    </div>
  );
}
