// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi";

// const navLinks = [
//     { id: "home", label: "Home", href: "/" },
//     { id: "about", label: "About Us", href: "/about" },
//     { id: "services", label: "Services", href: "/services" },
//     { id: "contact", label: "Contact", href: "/contact" },
// ];

// export default function Header() {
//     const [active, setActive] = useState("home");
//     const [sidebarOpen, setSidebarOpen] = useState(false);

//     const handleNavClick = (id: string) => {
//         setActive(id);
//         setSidebarOpen(false);
//     };

//     return (
//         <header className="sticky top-0 z-50 bg-white shadow p-2">

//             {/* --------------------------------- Main navbar -------------------------------*/}
//             <nav className="flex justify-between items-center px-2 sm:px-5 md:px-6 py-3 text-[#3b0a55]">
//                 {/* Logo */}
//                 <Link href="/" className="text-xl font-bold tracking-wide text-[#6C088B]">
//                     Human HealthCare
//                 </Link>

//                 {/* Desktop Nav Links */}
//                 <ul className="hidden md:flex gap-6 font-medium">
//                     {navLinks.map((link) => (
//                         <li key={link.id}>
//                             <Link
//                                 href={link.href}
//                                 onClick={() => handleNavClick(link.id)}
//                                 className={`relative pb-1 transition-all duration-300 hover:text-[#6C088B] ${active === link.id ? "text-[#6C088B]" : ""
//                                     }`}
//                             >
//                                 {link.label}
//                                 {active === link.id && (
//                                     <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#6C088B] rounded-md"></span>
//                                 )}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>

//                 {/* Contact button (Desktop) */}
//                 <Link
//                     href="/contact"
//                     className="hidden md:block bg-[#6C088B] text-white px-4 py-2 rounded-full hover:bg-[#52066b] transition-all"
//                 >
//                     Contact Us
//                 </Link>

//                 {/* Toggle button (Mobile) */}
//                 <button
//                     className="md:hidden text-[#6C088B] text-2xl"
//                     onClick={() => setSidebarOpen(!sidebarOpen)}
//                 >
//                     {sidebarOpen ? <FiX /> : <FiMenu />}
//                 </button>
//             </nav>

//             {/*------------------------------ Sidebar for Mobile Screen -------------------------*/}
//             <aside
//                 className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg border-r border-gray-200 transform transition-transform duration-500 ease-in-out z-40 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
//                     }`}
//             >
//                 <div className="flex justify-between items-center px-5 py-4 border-b border-gray-300">
//                     <span className="text-lg font-bold text-[#6C088B]">Human Health Care</span>
//                     <button
//                         className="text-[#6C088B] text-2xl"
//                         onClick={() => setSidebarOpen(false)}
//                     >
//                         <FiX />
//                     </button>
//                 </div>
//                 <ul className="flex flex-col px-5 py-6 gap-6 font-medium text-[#3b0a55]">
//                     {navLinks.map((link) => (
//                         <li key={link.id}>
//                             <Link
//                                 href={link.href}
//                                 onClick={() => handleNavClick(link.id)}
//                                 className={`w-full text-left transition-all duration-300 hover:text-[#6C088B] ${active === link.id ? "text-[#6C088B]" : ""
//                                     }`}
//                             >
//                                 {link.label}
//                             </Link>
//                         </li>
//                     ))}
//                     <Link
//                         href="/contact"
//                         className="bg-[#6C088B] text-white px-4 py-2 rounded-full hover:bg-[#52066b] transition-all w-full mt-4 text-center"
//                     >
//                         Contact Us
//                     </Link>
//                 </ul>
//             </aside>

//             {/* Overlay */}
//             {sidebarOpen && (
//                 <div
//                     className="fixed inset-0 bg-white/30 backdrop-blur-md z-30"
//                     onClick={() => setSidebarOpen(false)}
//                 ></div>
//             )}
//         </header>

//     );
// }
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About Us", href: "/about" },
    { id: "services", label: "Services", href: "/services" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  const handleNavClick = (id: string) => {
    setActive(id);
    setSidebarOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow p-2">
      {/* ------------------- Main Navbar ------------------- */}
      <nav className="flex justify-between items-center px-2 sm:px-5 md:px-6 py-3 text-[#4A0072]">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide text-[#6C088B]">
          Human Health Care
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex gap-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`relative pb-1 group transition-all duration-300 hover:text-[#6C088B] ${active === link.id ? "text-[#6C088B]" : ""
                  }`}
              >
                {link.label}
                {active === link.id && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#6C088B] rounded-md opacity-0 group-hover:opacity-100 transition-all duration-500"></span>

                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* WhatsApp Button (Desktop) */}
        <a
          href="https://wa.me/923192060174"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-[#6C088B] text-white px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:bg-[#5a0773]"
        >
          <FaWhatsapp size={20} />
          <span>WhatsApp</span>
        </a>

        {/* Toggle Button (Mobile) */}
        <button
          className="md:hidden text-[#6C088B] text-2xl"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* ------------------- Sidebar (Mobile) ------------------- */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg border-r border-gray-200 transform transition-transform duration-500 ease-in-out z-40 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center px-5 py-4 border-b border-gray-300">
          <span className="text-lg font-bold text-[#6C088B]">Human Health Care</span>
          <button
            className="text-[#6C088B] text-2xl"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX />
          </button>
        </div>
        <ul className="flex flex-col px-5 py-6 gap-6 font-medium text-[#4A0072]">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left transition-all duration-300 hover:text-[#6C088B] ${active === link.id ? "text-[#6C088B]" : ""
                  }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <a
            href="https://wa.me/923192060174"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 border bg-white border-[#6C088B] text-[#6C088B] px-4 py-2 rounded-full transition-all duration-500 ease-in-out hover:bg-[#6C088B] hover:text-white hover:scale-105 w-full mt-4"

          >
            <FaWhatsapp size={20} />
            WhatsApp
          </a>
        </ul>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-white/20 backdrop-blur-md z-30"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </header>
  );
}

