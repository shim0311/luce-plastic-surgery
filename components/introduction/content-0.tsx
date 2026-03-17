"use client";

// ============================================================================
// CUSTOMIZATION - 커스터마이징 영역
// ============================================================================
const COLORS = {
  heroBg: "#8a7a6a",
  heroText: "#ffffff",
  heroSubText: "rgba(255,255,255,0.7)",
  sectionBg: "#ffffff",
  titleText: "#222222",
  bodyText: "#555555",
  accent: "#9b8b7a",
  signatureText: "#333333",
  lightGray: "#e8e8e8",
} as const;

const IMAGES = {
  heroBanner: "/assets/introduction-image-22.jpg",
  doctorProfile: "/assets/home-image-97.jpg",
} as const;
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface Content0Props {
  clinicName?: string;
  clinicNameEn?: string;
  doctorName?: string;
  heroTitle?: string;
  mainTitle?: string;
  description?: string[];
  signature?: string;
}

export default function Content0({
  clinicName = "루체",
  clinicNameEn = "LUCE",
  doctorName = "김서윤 원장",
  heroTitle = "루체 소개",
  mainTitle = "원하는 나의 모습을\n루체에서",
  description = [
    "아름다움은 단순히 외면의 변화가 아닌, 내면의 자신감을 되찾는 여정입니다. 루체성형외과는 환자 한 분 한 분의 고유한 아름다움을 존중하며, 자연스럽고 조화로운 결과를 추구합니다.",
    "풍부한 임상 경험과 끊임없는 연구를 바탕으로, 획일적인 미의 기준이 아닌 개인의 얼굴 비율과 특성에 맞춘 맞춤형 성형을 실현합니다. 최신 의료 장비와 안전한 수술 환경을 갖추고, 수술 전 충분한 상담을 통해 환자분의 기대와 불안을 함께 나눕니다.",
    "루체는 '빛'을 의미합니다. 환자분들이 본연의 빛을 되찾고, 더 밝은 일상으로 나아갈 수 있도록 최선을 다하겠습니다. 진정한 아름다움은 자연스러움에서 시작됩니다.",
  ],
  signature = "김서윤 원장",
}: Content0Props) {
  return (
    <section>
      {/* Hero Banner */}
      <div className="relative w-full h-[320px] md:h-[400px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src={IMAGES.heroBanner}
            alt={`${clinicName}성형외과 내부`}
            fill
            priority
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(120,105,90,0.55) 0%, rgba(120,105,90,0.45) 100%)",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-semibold tracking-wide"
            style={{ color: COLORS.heroText }}
          >
            {heroTitle}
            <span
              className="ml-3 text-sm md:text-base font-light tracking-[0.25em] uppercase"
              style={{ color: COLORS.heroSubText }}
            >
              PLASTIC SURGERY
            </span>
          </motion.h1>
        </div>

        {/* Rotating ABOUT circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="absolute bottom-[-48px] left-1/2 -translate-x-1/2 z-20 w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
        >
          <svg
            viewBox="0 0 120 120"
            className="w-full h-full animate-spin"
            style={{ animationDuration: "12s" }}
          >
            <defs>
              <path
                id="aboutCirclePath"
                d="M60,60 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
              />
            </defs>
            <text
              className="text-[11px] tracking-[0.35em] uppercase"
              fill={COLORS.titleText}
              fontWeight="300"
            >
              <textPath href="#aboutCirclePath">
                ABOUT&nbsp;&nbsp;&nbsp;ABOUT&nbsp;&nbsp;&nbsp;ABOUT&nbsp;&nbsp;&nbsp;ABOUT&nbsp;&nbsp;&nbsp;
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Bottom Curve SVG */}
        <div className="absolute bottom-0 left-0 w-full z-10">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 80V40C360 0 720 0 1080 40C1260 60 1380 70 1440 80V80H0Z"
              fill={COLORS.sectionBg}
            />
          </svg>
        </div>
      </div>

      {/* Doctor Profile Section */}
      <div
        className="relative pt-16 md:pt-24 pb-20 md:pb-32"
        style={{ backgroundColor: COLORS.sectionBg }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
            {/* Doctor Photo - Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full lg:w-[45%] flex-shrink-0"
            >
              <div className="relative w-full max-w-[480px] mx-auto lg:mx-0">
                <div
                  className="w-full bg-gradient-to-b from-[#d4c8bb] via-[#c5b8aa] to-[#b0a090] flex items-end justify-center"
                  style={{ aspectRatio: "3/4" }}
                >
                  <svg className="w-[60%] h-[75%] text-[#bfb3a4] opacity-40" viewBox="0 0 200 300" fill="currentColor" aria-hidden="true">
                    <circle cx="100" cy="70" r="45" />
                    <path d="M30 300 C30 200 50 160 100 150 C150 160 170 200 170 300 Z" />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Text Content - Right */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full lg:w-[55%] pt-0 lg:pt-8"
            >
              {/* Main Title */}
              <h2
                className="text-2xl md:text-3xl lg:text-[34px] font-semibold leading-snug mb-8 md:mb-10 whitespace-pre-line"
                style={{
                  color: COLORS.titleText,
                  lineHeight: 1.45,
                  fontFamily: "'Noto Serif KR', serif",
                  textWrap: "balance",
                } as React.CSSProperties}
              >
                {mainTitle}
              </h2>

              {/* Divider */}
              <div
                className="w-10 h-[1px] mb-8"
                style={{ backgroundColor: COLORS.lightGray }}
              />

              {/* Description Paragraphs */}
              <div className="space-y-5">
                {description.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.15,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    className="text-[14px] md:text-[15px] leading-[1.9] tracking-tight"
                    style={{ color: COLORS.bodyText }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Signature */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="mt-10 md:mt-14 flex items-center gap-3"
              >
                <span
                  className="text-sm tracking-[0.15em] uppercase font-light"
                  style={{ color: COLORS.accent }}
                >
                  {clinicNameEn} PLASTIC SURGERY
                </span>
                <span
                  className="inline-block w-8 h-[1px]"
                  style={{ backgroundColor: COLORS.accent }}
                />
                <span
                  className="text-[15px] font-medium"
                  style={{ color: COLORS.signatureText }}
                >
                  {signature}
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
