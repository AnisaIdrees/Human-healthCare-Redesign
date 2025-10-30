"use client";
import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-r from-[#cab2dfcc] via-white to-[#f1b5f1de] py-16 md:py-24">
            {/* ---------- Decorative Blur Circles ---------- */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#f4d3ff] blur-3xl opacity-40 rounded-full" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#e4b4ff] blur-3xl opacity-30 rounded-full" />

            {/* ---------- Hero Container ---------- */}
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 gap-10">

                {/* ---------- Text Section ---------- */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:text-left max-w-xl"
                >
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                        World-Class{" "}
                        <span className="text-[#630963]">Healthcare</span>,<br /> Right at Your Doorstep
                    </h1>

                    <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                        You can’t be there for every appointment, but we can. <br />
                        Get real-time updates and complete reassurance with our premium,
                        doctor-led home healthcare. We are your trusted hands on the ground.
                    </p>

                    <a
                        href="https://wa.me/923192060174"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 border border-[#6C088B] text-[#6C088B] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white hover:bg-[#6C088B] hover:text-white transition-all duration-500 shadow-md hover:shadow-lg"
                    >
                        <span>Book Appointment</span>
                        <FiArrowUpRight
                            size={20}
                            className="group-hover:rotate-45 transition-transform duration-300"
                        />
                    </a>
                </motion.div>

                {/* ---------- Image Section ---------- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center items-center"
                >
                    <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                        <Image
                            src="/patient.jpg"
                            alt="Patient"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
