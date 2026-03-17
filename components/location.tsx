"use client";

// ============================================================================
// CUSTOMIZATION - 커스터마이징 영역
// ============================================================================
const COLORS = {
  background: "#ffffff",
  text: "#1a1a1a",
  textMuted: "#515151",
  accent: "#C9A96E",
  mapBorder: "#e5e5e5",
} as const;

const CONTENT = {
  title: "Location",
  address: "서울시 강남구 테헤란로 123 (루체빌딩), 12층",
  hours: [
    "월 – 목 : 10:00 AM ~ 7:00 PM",
    "금요일 : 10:00 AM ~ 8:00 PM",
    "토요일 : 10:00 AM ~ 4:00 PM",
  ],
  closed: "일요일 휴진",
  phone: "T. 02-1234-5678",
  viewMore: { label: "view more", href: "#" },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3!2d127.024!3d37.497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca15012e04a73%3A0x5b0!2sOPUS+407!5e0!3m2!1sko!2skr",
} as const;
// ============================================================================

import { motion } from "motion/react";

export default function Location() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-[80px] py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <motion.div
            className="w-full lg:w-[30%] flex-shrink-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Title */}
            <h2
              className="mb-10"
              style={{
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 400,
                color: COLORS.text,
                letterSpacing: "-0.5px",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {CONTENT.title}
            </h2>

            {/* Address */}
            <p
              className="mb-8"
              style={{
                fontSize: "18px",
                fontWeight: 700,
                color: COLORS.text,
                lineHeight: 1.6,
              }}
            >
              {CONTENT.address}
            </p>

            {/* Operating Hours */}
            <div className="mb-2">
              {CONTENT.hours.map((line, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: COLORS.textMuted,
                    lineHeight: 1.8,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>

            {/* Closed Day */}
            <p
              className="mb-10"
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: COLORS.textMuted,
                lineHeight: 1.8,
              }}
            >
              {CONTENT.closed}
            </p>

            {/* Phone */}
            <p
              className="mb-10"
              style={{
                fontSize: "clamp(24px, 3vw, 32px)",
                fontWeight: 400,
                color: COLORS.accent,
                letterSpacing: "-0.5px",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {CONTENT.phone}
            </p>

            {/* View More */}
            <a
              href={CONTENT.viewMore.href}
              className="inline-flex items-center gap-4 group"
              style={{ textDecoration: "none" }}
            >
              <span
                className="block transition-all duration-300 group-hover:w-16"
                style={{
                  width: "48px",
                  height: "1px",
                  backgroundColor: COLORS.text,
                }}
              />
              <span
                style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: COLORS.text,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {CONTENT.viewMore.label}
              </span>
            </a>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            className="w-full lg:w-[70%]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <div
              className="w-full overflow-hidden"
              style={{ border: `1px solid ${COLORS.mapBorder}` }}
            >
              <iframe
                src={CONTENT.mapEmbed}
                width="100%"
                height="520"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="루체 성형외과 위치"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
