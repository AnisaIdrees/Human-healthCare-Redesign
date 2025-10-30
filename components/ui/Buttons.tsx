import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

interface ButtonProps {
    text:string
}
export default function Buttons({text}:ButtonProps) {
    return (
        <div>
            <a
                href="https://wa.me/923192060174"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 border border-[#6C088B] text-[#6C088B] px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white hover:bg-[#6C088B] hover:text-white transition-all duration-500 shadow-md hover:shadow-lg"
            >
                <span>{text}</span>
                <FiArrowUpRight
                    size={20}
                    className="group-hover:rotate-45 transition-transform duration-300"
                />
            </a>
        </div>
    )
}
