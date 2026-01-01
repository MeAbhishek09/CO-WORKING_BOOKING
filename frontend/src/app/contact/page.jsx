"use client";

import Navbar from "@/components/layout/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact & Location
            </h1>
            <p className="text-gray-700">
              Reach out to us or visit our workspace
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div className="bg-white rounded-2xl p-8 shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Get in Touch
              </h2>

              <div className="space-y-4 text-sm text-gray-700">
                <p>
                  <span className="font-medium">Address</span><br />
                  Co-Working Space,<br />
                  Sector 62, Noida,<br />
                  Uttar Pradesh, India
                </p>

                <p>
                  <span className="font-medium">Phone</span><br />
                  +91 98765 43210
                </p>

                <p>
                  <span className="font-medium">Email</span><br />
                  support@coworkspace.com
                </p>

                <p>
                  <span className="font-medium">Working Hours</span><br />
                  Mon – Sat, 9:00 AM – 9:00 PM
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl p-8 shadow-md flex items-center justify-center text-gray-500">
              Map integration will be added here
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
