"use client";

import React, { useState } from "react";
import { FiSend } from "react-icons/fi";



export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    // try {
    //   // You can connect API here (e.g., Redux, Node API, etc.)
    //   await new Promise((res) => setTimeout(res, 1500)); // demo delay
    //   setStatus("Message sent successfully!");
    //   setForm({ firstName: "", lastName: "", email: "", message: "" });
    // } catch {
    //   setStatus("Failed to send message. Please try again.");
    // }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#f9f4ff] to-[#f3e7ff] flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full text-center mb-10">
        <h1 className="text-4xl  font-bold text-gray-800 mb-3">
          Contact Us
        </h1>
        <p className="text-gray-600 text-lg">
          Get in touch for bookings, inquiries, or support.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white shadow rounded-2xl p-8 sm:p-10 space-y-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#6c088b80] outline-none transition"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#6c088b6e] outline-none transition"
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#6c088b91] outline-none transition"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#6c088b7e] outline-none transition resize-none"
        ></textarea>

        <button className="group inline-flex items-center gap-2 border border-[#6C088B] text-[#6C088B] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white hover:bg-[#6C088B] hover:text-white transition-all duration-500 shadow-md hover:shadow-lg">
          <span>Send</span>
          <FiSend
            size={20}
            className="group-hover:rotate-45 transition-transform duration-300"
          />
        </button>
        {status && (
          <p
            className={`text-center text-sm mt-2 ${status.includes("success") ? "text-green-600" : "text-red-600"
              }`}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
