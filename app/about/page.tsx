
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FeaturesSection from "@/components/section/FeaturesSection";

const team = [
  { src: "/atif-.png", name: "Atif Zafar, MD", title: "Neurologist & Consultant, Stroke Medicine" },
  { src: "/mudassir.jpg", name: "Mudassir Farooqui, MBBS, MPH", title: "Public Health Specialist" },
  { src: "/mahwash.jpg", name: "Mahwash Siddiqui, MD", title: "Internist & Endocrinology Specialist" },
  { src: "/shoib.jpg", name: "Shoib Ghayas, MRCGP", title: "Consultant – General Physician" },
  { src: "/chaudhary-sana.jpg", name: "Sana Chaudahry, MD – USA", title: "Rheumatology" },
  { src: "/Dr.-Syed-Hammad.jpg", name: "Syed Hammad Alam, MD – USA", title: "Nephrology and Hypertension" },
];


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/*---------------------------------------- Hero Section --------------------------------------*/}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/aboutbg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 text-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl  font-extrabold text-white"
          >
            American-Standard Healthcare at Your Doorstep
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 text-white/90 max-w-2xl mx-auto"
          >
            Compassionate, personalized, and professional care bringing
            world-class, doctor-led home healthcare to families in Karachi.
          </motion.p>
        </div>
      </section>

      <FeaturesSection />

      {/*-------------------------------------- Story Section ----------------------------------*/}

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-30 h-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Our Story Every Pakistani’s Story
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Human Health Care Services Pvt. Ltd. (Human-Healthcare.com) is headquartered in Karachi and is an idea of Human Health LLC (USA).
            It brings doctor-led home healthcare to families in Karachi. The journey began when Dr. Atif Zafar received a call from his father
            — “Tumhari Ammi ko doctors ne cancer diagnose kia hai.” That helpless moment led to the creation of a platform to help others
            experiencing the same pain, ensuring families never face such isolation again.
          </p>
        </motion.div>
      </section>

      {/*-------------------------------- Team Section --------------------------------- */}

      <section className="bg-[#faf8ff] py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-15">
            Meet Our Human Team
          </h2>
          <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-4 px-7 py-6 rounded shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center"
              >
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={member.src}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 font-semibold text-sm">{member.name}</div>
                <div className="text-xs text-gray-500 mt-1">{member.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*---------------------------------------- Stats Section --------------------------------*/}
      <section className="relative bg-[#630963] text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/stats-bg.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid gap-8 lg:grid-cols-3 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold">Don't Wait for a Health Scare</h3>
            <p className="mt-3 text-gray-100">
              Give your parents the gift of security and give yourself peace of mind.
            </p>
            <a
              href="tel:+923192060174"
              className="inline-block mt-6 bg-white text-[#6C088B] px-6 py-3 rounded-full font-semibold"
            >
              Call 0319-2060174
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:col-span-2"
          >
            {[
              { num: "80%", text: "Reduced Emergencies" },
              { num: "93%", text: "Trust & Retention" },
              { num: "0", text: "COVID Cases" },
              { num: "100%", text: "Money-back Guarantee" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold">{s.num}</div>
                <div className="text-sm text-gray-200 mt-1">{s.text}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
