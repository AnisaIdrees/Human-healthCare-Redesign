"use client";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const testimonials = [
  {
    name: "G Perven",
    rating: 5,
    time: "3 months ago",
    text: "I’m extremely pleased with the services provided by HHC to my mom. She received prompt care and we got frequent updates.",
  },
  {
    name: "Mushtaq Mohiuddin",
    rating: 5,
    time: "3 months ago",
    text: "Having used these services for our family, I can confidently say they provide unmatched care and professionalism.",
  },
  {
    name: "Syed Hashmi",
    rating: 5,
    time: "11 months ago",
    text: "The Human Healthcare team provided an exceptional experience! The examination and follow-ups were all top-notch.",
  },
  {
    name: "Omair Atiq",
    rating: 5,
    time: "1 year ago",
    text: "They’ve been taking care of my parents for over a year — professional, responsive, and kind. Highly recommended!",
  },
  {
    name: "Zeeshan Hasan",
    rating: 5,
    time: "1 year ago",
    text: "You can never outsource your parents’ well-being, but HHC has truly been a reliable partner with consistent care.",
  },
  {
    name: "Ehrima Fatima",
    rating: 5,
    time: "2 years ago",
    text: "They treat our parents as their own — such a relief knowing a dedicated team oversees their health compassionately.",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-[#fff5ff] to-[#f3e7ff]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-14">
          What Our Clients Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials
            .slice(index, index + 3)
            .concat(
              testimonials.slice(0, Math.max(0, index + 3 - testimonials.length))
            )
            .map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
              >
                <Image
                  src="/avatar.png"
                  alt="avatar"
                  width={70}
                  height={90}
                  className="rounded-full h-15 w-15 mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{review.time}</p>
                <div className="flex justify-center text-yellow-400 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {review.text}
                </p>
              </div>
            ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full ${
                i === index ? "bg-[#630963]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
