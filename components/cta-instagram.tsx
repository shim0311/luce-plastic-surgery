"use client";

// ============================================================================
// CUSTOMIZATION - 커스터마이징 영역
// ============================================================================
const INSTAGRAM_URL = "https://www.instagram.com/luce_plasticsurgery/";
const INSTAGRAM_HANDLE = "@luce_plasticsurgery";
// ============================================================================

import { motion } from "motion/react";

export default function CtaInstagram() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background: "#ffffff",
        padding: "100px 80px",
      }}
    >
      {/* 오른쪽 장식 사선 */}
      <div
        className="absolute right-0 top-0 h-full w-[3px] opacity-20"
        style={{
          background: "linear-gradient(180deg, transparent, #c87060, transparent)",
        }}
      />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* 왼쪽: 텍스트 */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-xs tracking-[0.35em] uppercase mb-5"
              style={{ color: "#b07060" }}
            >
              For International Patients
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-light leading-[1.05] mb-5"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.8rem, 4.5vw, 5rem)",
                color: "#2a1a14",
                letterSpacing: "-0.02em",
              }}
            >
              Connect with us<br />
              <em style={{ fontStyle: "italic", color: "#c87060" }}>on Instagram</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-base mb-3 font-medium"
              style={{
                color: "#7a5a50",
                fontFamily: "'Noto Sans KR', sans-serif",
              }}
            >
              외국인 환자 인스타그램 DM 상담 가능
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
              className="text-sm leading-relaxed max-w-[420px]"
              style={{ color: "#9a7a70" }}
            >
              DM us on Instagram for consultations in English.
              Our international patient team responds quickly.
            </motion.p>
          </div>

          {/* 오른쪽: 인스타그램 카드 */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-6 cursor-pointer"
              style={{ textDecoration: "none" }}
            >
              {/* 인스타그램 아이콘 원형 카드 */}
              <div
                className="relative flex items-center justify-center transition-all duration-500 group-hover:scale-105"
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #f09433 0%, #e6683c 22%, #dc2743 45%, #cc2366 72%, #bc1888 100%)",
                  boxShadow: "0 20px 60px rgba(200, 80, 60, 0.25)",
                }}
              >
                <svg width="72" height="72" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>

                {/* 호버 시 화살표 오버레이 */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundColor: "rgba(0,0,0,0.25)",
                    borderRadius: "50%",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>

              {/* DM 텍스트 버튼 */}
              <div className="text-center">
                <p
                  className="text-base font-medium tracking-widest uppercase mb-1 group-hover:opacity-70 transition-opacity"
                  style={{ color: "#2a1a14" }}
                >
                  Send a DM
                </p>
                <p
                  className="text-sm"
                  style={{ color: "#b07060" }}
                >
                  {INSTAGRAM_HANDLE}
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
