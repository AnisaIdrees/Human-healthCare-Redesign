"use client";
import ServicesSection from "@/components/section/ServicesSection";
import Buttons from "@/components/ui/Buttons";
import { motion } from "framer-motion";
        
const plans = [
  {
    name: "Humancare Essential",
    price: "$49.00 / Rs. 13,500 per month",
    desc: "Perfect for members who are overall healthy and desire minimal medical interventions with preventive primary care.",
    features: [
      "Access to primary care doctors and international specialists (US, Canada, UK).",
      "Weekly touchpoints with dedicated healthcare team.",
      "One home visit per month.",
      "48–72 hours urgent care access.",
      "Dedicated family doctor with annual screenings.",
    ],
    note: "Prescription delivery, weekend services, physiotherapy, and transport available at additional cost.",
  },
  {
    name: "Humancare Premium",
    price: "$99.00 / Rs. 27,000 per month",
    desc: "Best suited for parents or individuals with chronic health issues seeking regular monitoring and comprehensive care.",
    features: [
      "All Essential benefits plus enhanced 24–48 hour urgent care.",
      "Tele-visits and monthly doctor visits.",
      "Personal care advisor with appointment transport.",
      "2–4 monthly nurse companion visits.",
      "Weekly physiotherapy sessions.",
      "Free annual medical screenings and medication delivery.",
      "Money-back guarantee for chronic illness improvement within 60 days.",
    ],
  },
];

const stats = [
  { value: "80%", label: "Reduced Emergencies" },
  { value: "93%", label: "Trust & Retention" },
  { value: "0", label: "COVID Diagnoses" },
  { value: "100%", label: "Money-Back Guarantee" },
];

export default function ServicesPage() {
  return (
    <main className="bg-gradient-to-b from-[#eedefccc] via-white to-[#f0b0f0de]  text-gray-800">

      {/* ------------------------------------- Hero Section -----------------------------*/}

      <section className="text-center py-20 px-6 md:px-12 bg-gradient-to-r from-[#cab2dfcc] via-white to-[#f1b5f1de]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800"
        >
          HumanCare <span className="text-[#630963]">Services</span>
        </motion.h1>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          American-standard healthcare at your doorstep  professional, compassionate, and personalized.
        </p>
      </section>
      {/*------------------------------------------- services cards -------------------------------------*/}

      <ServicesSection />

      {/*------------------------------------------- Our Membership Plans -------------------------------------*/}

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Membership Plans
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/70 backdrop-blur-md rounded-3xl shadow-md hover:shadow-xl transition-all p-8 border border-[#e7d8f8]"
            >
              <h3 className="text-2xl font-semibold text-[#4a007f] mb-2">{plan.name}</h3>
              <p className="font-medium text-[#8a2be2] mb-4">{plan.price}</p>
              <p className="text-gray-600 mb-6">{plan.desc}</p>
              <ul className="space-y-2 mb-4 text-sm text-gray-700 list-disc list-inside">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              {plan.note && (
                <p className="text-xs text-gray-500 italic mb-4">Note: {plan.note}</p>
              )}
              <Buttons text="Book now" />

            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[purple] py-16 text-white text-center">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-4xl font-bold mb-2">{s.value}</h3>
              <p className="text-sm text-white/90">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6 bg-gradient-to-r from-[#faf0ff] to-[#f3e7ff]">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-gray-800 mb-4"
        >
          Don’t Wait for a Health Scare
        </motion.h3>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Give your parents the gift of security and yourself the peace of mind.
          It’s the next best thing to being there yourself.
        </p>
        <a
          href="tel:0319-2060174"
          className="bg-[#630963] text-white px-8 py-3 rounded-full hover:bg-[#5d00a6] transition-all"
        >
          Talk to a Human Care Advisor
        </a>
      </section>

    </main>
  );
}
