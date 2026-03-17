"use client";

// ============================================================================
// CUSTOMIZATION - 커스터마이징 영역
// ============================================================================
const COLORS = {
  background: "#111111",
  text: "#888888",
  textLight: "#555555",
  linkText: "#bbbbbb",
  linkHover: "#ffffff",
  border: "#2a2a2a",
  quickBg: "rgba(30, 30, 30, 0.95)",
  quickHover: "rgba(50, 50, 50, 0.95)",
} as const;

const IMAGES = {
  footerLogo: "/assets/home-image-79.png",
  snsKakao: "/assets/home-image-80.png",
  snsBlog: "/assets/home-image-81.png",
  snsYoutube: "/assets/home-image-82.png",
  snsInstagram: "/assets/home-image-83.png",
  quickPhone: "/assets/home-image-85.png",
  quickReservation: "/assets/home-image-86.png",
  quickYoutube: "/assets/home-image-87.png",
  quickLocation: "/assets/home-image-88.png",
  quickInstagram: "/assets/home-image-89.png",
} as const;
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Phone, ChevronUp, MessageCircle, MapPin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer0() {
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);

  const navLinks = [
    { label: "진료안내", href: "#" },
    { label: "오시는길", href: "#" },
    { label: "이용약관", href: "#" },
    { label: "개인정보취급방침", href: "/privacy" },
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "비급여 진료비 안내", href: "#" },
  ];

  const snsLinks = [
    { icon: IMAGES.snsKakao, href: "#", title: "카카오톡" },
    { icon: IMAGES.snsBlog, href: "#", title: "네이버블로그" },
    { icon: IMAGES.snsYoutube, href: "#", title: "유튜브" },
    { icon: IMAGES.snsInstagram, href: "#", title: "인스타그램" },
  ];

  const quickLinks = [
    { icon: <Phone className="w-5 h-5 text-white" aria-hidden="true" />, href: "tel:02-1234-5678", title: "전화상담 02-1234-5678" },
    { icon: <MessageCircle className="w-5 h-5 text-white" aria-hidden="true" />, href: "#", title: "온라인예약" },
    { icon: <MapPin className="w-5 h-5 text-white" aria-hidden="true" />, href: "#", title: "오시는길" },
    { icon: <Instagram className="w-5 h-5 text-white" aria-hidden="true" />, href: "#", title: "인스타그램" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Footer Section */}
      <footer
        className="relative w-full"
        style={{ backgroundColor: COLORS.background }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-20">
          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-0">
            {/* Left - Logo */}
            <motion.div
              className="lg:w-1/5 flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-start">
                <span className="text-[22px] lg:text-[28px] font-bold tracking-[0.15em]" style={{ color: "#ffffff", fontFamily: "'Playfair Display', serif" }}>LUCE</span>
                <span className="text-[8px] lg:text-[9px] tracking-[0.15em] -mt-1" style={{ color: "#C9A96E" }}>PLASTIC SURGERY</span>
              </div>
            </motion.div>

            {/* Center - Nav + Info */}
            <motion.div
              className="lg:w-3/5 lg:pl-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              {/* Navigation Links */}
              <nav className="flex flex-wrap gap-x-8 gap-y-3 mb-6">
                {navLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="text-sm md:text-[15px] transition-colors duration-200 border-b border-transparent hover:border-current"
                    style={{
                      color: hoveredLink === i ? COLORS.linkHover : COLORS.linkText,
                    }}
                    onMouseEnter={() => setHoveredLink(i)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Company Info */}
              <div className="mt-6 space-y-1.5">
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: COLORS.text }}
                >
                  루체성형외과의원｜서울시 강남구 테헤란로 123 (루체빌딩), 12층｜사업자등록번호 : 000-00-00000
                </p>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: COLORS.text }}
                >
                  대표원장 : 홍길동｜TEL: 02-1234-5678｜FAX: 02-1234-5679
                </p>
              </div>

              {/* Copyright */}
              <p
                className="mt-8 text-[12px]"
                style={{ color: COLORS.textLight }}
              >
                &copy; Copyright&nbsp;&nbsp;LUCE PLASTIC SURGERY. All Rights Reserved
              </p>
            </motion.div>

            {/* Right - SNS Icons */}
            <motion.div
              className="lg:w-1/5 flex justify-start lg:justify-end"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                {snsLinks.map((sns, i) => (
                  <a
                    key={i}
                    href={sns.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={sns.title}
                    className="w-[52px] h-[45px] flex items-center justify-center rounded-sm transition-opacity duration-200 hover:opacity-80"
                  >
                    <Image
                      src={sns.icon}
                      alt={sns.title}
                      width={52}
                      height={45}
                      className="object-contain"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </footer>

      {/* Floating Quick Sidebar (Fixed on right) */}
      <div className="fixed right-4 bottom-8 z-50 hidden lg:flex flex-col gap-2">
        {quickLinks.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            title={item.title}
            className="w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 touch-manipulation"
            style={{
              backgroundColor: COLORS.quickBg,
            }}
          >
            {item.icon}
            {item.href === "tel:02-555-7070" && <span className="sr-only">전화상담</span>}
          </a>
        ))}
        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          aria-label="페이지 최상단으로 이동"
          className="w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 mt-1 touch-manipulation"
          style={{
            backgroundColor: COLORS.quickBg,
          }}
        >
          <ChevronUp className="w-5 h-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
