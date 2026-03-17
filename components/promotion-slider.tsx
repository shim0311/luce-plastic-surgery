"use client";

// ============================================================================
// CUSTOMIZATION - 커스터마이징 영역
// ============================================================================
const COLORS = {
  background: "#ffffff",
  textPrimary: "#1a1a1a",
  textSecondary: "#5e5e5e",
  textWatermark: "rgba(0,0,0,0.04)",
  dotActive: "#1a1a1a",
  dotInactive: "#999999",
  buttonBg: "#000000",
} as const;

const IMAGES = {
  promo1: "/assets/home-image-70.jpg",
  promo2: "/assets/home-image-71.jpg",
  promo3: "/assets/home-image-73.jpg",
  promo4: "/assets/home-image-75.jpg",
} as const;
// ============================================================================

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface Feature4Props {
  title?: string;
  subtitle?: string;
  description?: string;
  promotions?: { image: string; href: string }[];
}

export default function Feature4({
  title = "LUCE Promotion",
  subtitle = "차원이 다른 예쁨",
  description = "루체에서 자연스럽지만 화려하게!",
  promotions = [
    { image: IMAGES.promo1, href: "#" },
    { image: IMAGES.promo2, href: "#" },
    { image: IMAGES.promo3, href: "#" },
    { image: IMAGES.promo4, href: "#" },
  ],
}: Feature4Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  // 2개씩 보여주므로 총 페이지 수
  const itemsPerPage = 2;
  const totalPages = Math.ceil(promotions.length / itemsPerPage);

  const goToPage = useCallback(
    (page: number) => {
      if (page >= 0 && page < totalPages) {
        setCurrentIndex(page);
      }
    },
    [totalPages]
  );

  // 자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
  };

  const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const clientX =
      "changedTouches" in e ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStartX - clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < totalPages - 1) {
        goToPage(currentIndex + 1);
      } else if (diff < 0 && currentIndex > 0) {
        goToPage(currentIndex - 1);
      }
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundColor: COLORS.background,
        padding: "80px 0",
      }}
    >
      {/* 우측 하단 워터마크 텍스트 */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          bottom: "-20px",
          right: "-40px",
          fontSize: "clamp(200px, 20vw, 340px)",
          fontWeight: 700,
          color: COLORS.textWatermark,
          lineHeight: 0.85,
          letterSpacing: "-0.02em",
          fontFamily: "'Satoshi Variable', sans-serif",
        }}
      >
        Promotion
      </div>

      {/* 우측 상단 회전 텍스트 배지 */}
      <div className="absolute top-16 right-16 z-10 hidden lg:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[159px] h-[159px] relative"
        >
          <svg viewBox="0 0 159 159" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 79.5, 79.5 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
            </defs>
            <text
              fontSize="12.5"
              fontWeight="500"
              letterSpacing="5"
              fill={COLORS.textPrimary}
              style={{ fontFamily: "'Satoshi Variable', sans-serif" }}
            >
              <textPath href="#circlePath">
                PROMOTION LUCE PROMOTION LUCE{" "}
              </textPath>
            </text>
          </svg>
        </motion.div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0">
          {/* 좌측 텍스트 영역 (4/12) */}
          <motion.div
            className="lg:w-4/12 flex-shrink-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* 타이틀 */}
            <p
              className="mb-5"
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                color: COLORS.textPrimary,
                lineHeight: 1.1,
                letterSpacing: "-0.5px",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {title}
            </p>

            {/* 서브텍스트 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  color: COLORS.textPrimary,
                  lineHeight: 1.7,
                }}
              >
                {subtitle}
                <br />
                {description}
              </p>
            </motion.div>

            {/* 더 보기 버튼 */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <a
                href="#"
                className="inline-flex items-center gap-3 group"
                style={{ textDecoration: "none" }}
              >
                <span
                  style={{
                    fontSize: "19px",
                    fontWeight: 400,
                    color: COLORS.textPrimary,
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  view more
                </span>
                <span
                  className="inline-flex items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1"
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: COLORS.buttonBg,
                  }}
                >
                  <ArrowRight size={16} color="#ffffff" strokeWidth={2} aria-hidden="true" />
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* 우측 캐러셀 영역 (8/12) */}
          <div className="lg:w-8/12 relative" style={{ paddingTop: "60px" }}>
            <div
              className="overflow-hidden cursor-grab active:cursor-grabbing"
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
              onMouseLeave={() => setIsDragging(false)}
              onTouchStart={handleDragStart}
              onTouchEnd={handleDragEnd}
            >
              <motion.div
                className="flex"
                style={{ gap: "30px" }}
                animate={{
                  x: `-${currentIndex * 100}%`,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                {promotions.map((promo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0"
                    style={{
                      width: `calc((100% - 30px) / 2)`,
                    }}
                  >
                    <a
                      href={promo.href}
                      className="block overflow-hidden rounded-sm"
                      onClick={(e) => isDragging && e.preventDefault()}
                    >
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.4 }}
                        style={{ maxWidth: "340px", margin: "0 auto", aspectRatio: "1/1" }}
                      >
                        <Image
                          src={promo.image}
                          alt={`프로모션 ${index + 1}`}
                          width={340}
                          height={340}
                          className="w-full object-contain"
                          draggable={false}
                        />
                      </motion.div>
                    </a>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* 도트 네비게이션 */}
            <div className="flex items-center gap-3 mt-8 justify-center lg:justify-start lg:pl-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className="transition-[width,height,background-color,border] duration-300 rounded-full touch-manipulation"
                  style={{
                    width: currentIndex === index ? "12px" : "8px",
                    height: currentIndex === index ? "12px" : "8px",
                    border:
                      currentIndex === index
                        ? `2px solid ${COLORS.dotActive}`
                        : "none",
                    backgroundColor:
                      currentIndex === index
                        ? "transparent"
                        : COLORS.dotInactive,
                  }}
                  aria-label={`페이지 ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
