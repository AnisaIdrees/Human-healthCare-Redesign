"use client";
import { motion } from "framer-motion";

const features = [
    {
        title: "Home-based Comprehensive Care",
        desc: "Personalized, comprehensive care delivered at home.",
        img: "/home-base.jpg",
    },
    {
        title: "American & UK Specialist Opinion",
        desc: "Expert second opinions from international specialists.",
        img: "/american-uk.png",
    },
    {
        title: "Regular Health Screenings",
        desc: "Annual screening packages and lab coordination at home.",
        img: "/regular.jpg",
    },
    {
        title: "Flexible Hybrid Care",
        desc: "Choose in-person or virtual consultations as needed.",
        img: "/flexible.jpg",
    },
    {
        title: "In-home Phlebotomy",
        desc: "Blood draws at home — no lab visits required.",
        img: "/homelab.jpg",
    },
    {
        title: "24/7 Messaging Access",
        desc: "Instant messaging access to our medical team.",
        img: "/message.jpg",
    },
];

export default function FeaturesSection() {
    return (
        <section className="bg-gradient-to-r from-[#fff5ff] to-[#f3e7ff] py-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#050514]"
                >
                    Benefits & Features
                </motion.h2>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((f, index) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="h-48 w-full overflow-hidden">
                                <img
                                    src={f.img}
                                    alt={f.title}
                                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="font-semibold text-lg text-[#050514] group-hover:text-[#860a86] transition-colors">
                                    {f.title}
                                </h3>
                                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                    {f.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
