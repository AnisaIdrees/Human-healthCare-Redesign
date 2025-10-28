import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


export default function Header() {
    return (
        <header>

            <nav>
                <ul>
                    <li><a href="#"></a>Home</li>
                    <li><a href="#"></a>About us</li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div>
                <ul>
                    <li><a href=""><FaPhoneAlt /> : </a></li>
                    <li><a href="+1 (319) 936-3574"><FaWhatsapp size={25} color='green' /></a></li>
                    <li><a href=""><MdOutlineEmail size={25} /></a></li>
                </ul>
            </div>

        </header>
    )
}
