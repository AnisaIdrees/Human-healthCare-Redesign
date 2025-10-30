"use client";

import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#f8f6fb] text-[#4b4b4b] border-t border-[#e6e6e6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

        {/* --------------- Company Info ------------- */}
        <div>
          <Image src='/logo.png' alt="logo" width={120} height={120}/>
          <p className="text-sm leading-relaxed mb-3">
            Human-Healthcare.com — top home health care, doctor, nurse,
            physiotherapy, attendant & maid services provider in Karachi, Pakistan.
          </p>
          <p className="text-sm">
            An idea of <b>Human Health LLC (USA)</b> — Pakistan operations managed by
            <b> Human Health Care Services Pvt Ltd</b>, headquartered at Gulshan-e-Iqbal, Karachi.
          </p>
        </div>

        {/* ------------- Get in Touch ------------- */}
        <div>
          <h3 className="text-lg font-semibold text-[#6C088B] mb-3">Get In Touch</h3>
          <ul className="text-sm space-y-2">
            <li><b>Main Office:</b> HQ40 c/o E40, PRECHS, Gulshan-e-Iqbal, Bl10A, Karachi, Pakistan</li>
            <li><b>Email:</b> <a href="mailto:service@human-healthcare.com" className="text-[#6C088B] hover:underline">service@human-healthcare.com</a></li>
            <li><b>Pakistan:</b> <a href="tel:+923192060174" className="text-[#6C088B] hover:underline">+92 319-2060174</a></li>
            <li><b>USA:</b> <a href="tel:+13199363574" className="text-[#6C088B] hover:underline">+1 319 936 3574</a></li>
            <li><b>Hours:</b> 09:00 AM - 06:00 PM</li>
          </ul>
        </div>

        {/* ------------- Quick Links ------------- */}
        <div>
          <h3 className="text-lg font-semibold text-[#6C088B] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "Our Story", href: "/about" },
              { name: "Register Now", href: "/register" },
              { name: "FAQ", href: "/faq" },
              { name: "Care Library", href: "/library" },
            ].map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="hover:text-[#6C088B] transition-colors duration-300">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ------------- Newsletter ------------- */}
        <div>
          <h3 className="text-lg font-semibold text-[#6C088B] mb-3">Newsletter</h3>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-[#c4b3cf] px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C088B]"
            />
            <button
              type="submit"
              className="bg-[#6C088B] text-white px-5 py-2 rounded-md hover:bg-[#5a0773] transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ------------- Bottom Bar ------------- */}
      <div className="border-t border-[#e6e6e6] mt-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p>© 2025 <b>Human-Healthcare</b> — All Rights Reserved.</p>

          <div className="flex items-center gap-4 text-[#6C088B]">
            <Link href="/service-agreement" className="hover:underline">Service Agreement</Link>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-[#6C088B] transition-all"><FaFacebookF size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#6C088B] transition-all"><FaLinkedinIn size={18} /></a>
            <a href="#" aria-label="TikTok" className="hover:text-[#6C088B] transition-all"><FaTiktok size={18} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#6C088B] transition-all"><FaInstagram size={18} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-[#6C088B] transition-all"><FaYoutube size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
