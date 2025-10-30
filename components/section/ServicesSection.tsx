"use client";
import React from "react";
import { FiUser, FiHeart, FiActivity, FiSmartphone } from "react-icons/fi";

const services = [
  {
    icon: <FiUser size={40} />,
    title: "Doctor Home Visits",
    text: "Your Personal Doctor on Call. No more crowded waiting rooms. Our senior doctors visit your parents at their convenience, providing unhurried, respectful, and thorough consultations."
  },
  {
    icon: <FiHeart size={40} />,
    title: "Nursing Care at Home",
    text: "Compassionate & Skilled Nursing. Go beyond basic care. Our trained, vetted nurses manage chronic conditions (diabetes, BP), handle post-op recovery, and act as your eyes and ears on the ground."
  },
  {
    icon: <FiActivity size={40} />,
    title: "Physiotherapy at Home",
    text: "Expert In-Home Rehabilitation. Our certified physiotherapists help restore mobility, strength, and independence, allowing your parents to live life to the fullest in the comfort of their own home."
  },
  {
    icon: <FiSmartphone size={40} />,
    title: "Health Monitoring & Support",
    text: "Your Digital Link to Their Health. Receive digital updates, medication logs, and reports from our team after every visit. You'll be the first to know, always."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-14">
        Our Core Services
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            {/* Icon container with flip animation */}
            <div className="relative w-20 h-20 mx-auto mb-5">
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-[#7c0e7c] shadow text-white text-4xl transition-transform duration-700 group-hover:rotate-y-180 group-hover:bg-[#470366]">
                {service.icon}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-[#110514] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
