"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFloat() {
  return (
    <a
      href="https://wa.me/919137405818"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}