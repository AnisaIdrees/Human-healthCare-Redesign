"use client"
import Image from "next/image"
import { FiPhoneCall, FiMessageSquare } from "react-icons/fi"
import { motion } from "framer-motion"

export default function PressSection() {
    const pressLogos = [
        {
            src: "https://images-cdn3.welcomesoftware.com/assets/yahoo+finance.jpg/Zz0yNWFjNTk0NjlkMmQxMWVmYjhlNjFlYTY2MTI5N2IyNg==?width=1200",
            alt: "MSN",
        },
        {
            src: "https://www.techi.com/wp-content/uploads/2011/09/TBI-versus.jpg",
            alt: "Dunya Blog",
        },
        {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSICGSvKpT-XzrElu9L_F6_NET_jtbFBaWZ31-7WQBBwiZKafcjWq03Yn7MabnR5HZ8AiM&usqp=CAU",
            alt: "Express Tribune",
        },
    ]

    return (
        <section className="relative py-20 px-6 md:px-16 text-center overflow-hidden">

            {/* Background image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/backgroundimage.jpg')" }}
            ></div>

            {/* Black overlay with transparency */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 max-w-3xl mx-auto mb-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Serving Karachi’s Most Trusted Families
                    </h2>
                    <p className="text-gray-200 mb-6">
                        In Gulshan, PECHS, Defence, Malir Cantt, North Nazimabad, and Clifton.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 font-medium">
                        <a
                            href="tel:03192060174"
                            className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#6C088B] text-[#6C088B] bg-white hover:bg-[#6C088B] hover:text-white transition-all duration-300 shadow-md"
                        >
                            <FiPhoneCall size={20} /> Call 0319-2060174
                        </a>
                        <a
                            href="https://wa.me/13199363574"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#6C088B] text-[#6C088B] bg-white hover:bg-[#6C088B] hover:text-white transition-all duration-300 shadow-md"
                        >
                            <FiMessageSquare size={20} /> WhatsApp +1 (319) 936-3574
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 mt-10"
            >
                <h3 className="text-2xl font-semibold text-gray-100 mb-8">
                    As Seen In Press
                </h3>

                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {pressLogos.map((logo, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                            className="w-32 h-20 flex items-center justify-center bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={120}
                                height={50}
                                className="object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
