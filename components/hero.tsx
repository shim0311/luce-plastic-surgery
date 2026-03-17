"use client";

// ============================================================================
// CUSTOMIZATION - 커스터마이징 영역
// ============================================================================
const SLIDES = [
  {
    image: "/assets/hero-1.jpg",
    overlayText: "luce\nnose\nsurgery",
    title: "루체 코성형",
    description: "화려함과 자연스러움이 공존하는 루체 코성형!",
    bgColor: "rgba(0, 0, 0, 0.02)",
  },
  {
    image: "/assets/hero-2.jpg",
    overlayText: "luce\neye\nsurgery",
    title: "루체 눈성형",
    description: "자연스러운 라인, 빛나는 눈매를 루체에서!",
    bgColor: "rgba(0, 0, 0, 0.02)",
  },
  {
    image: "/assets/hero-3.jpg",
    overlayText: "luce\nlifting",
    title: "루체 리프팅",
    description: "탄력 있는 윤곽, 젊음을 되찾는 루체 리프팅!",
    bgColor: "rgba(0, 0, 0, 0.02)",
  },
  {
    image: "/assets/hero-4.jpg",
    overlayText: "luce\ncontour",
    title: "루체 윤곽성형",
    description: "조화로운 비율, 자연스러운 윤곽을 루체에서!",
    bgColor: "rgba(0, 0, 0, 0.02)",
  },
] as const;

const AUTOPLAY_INTERVAL = 5000;
// ============================================================================

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function Hero0() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused]);

  const slide = SLIDES[current];

  return (
    <div style={{ backgroundColor: "#e8c8bf" }}>
    <section
      className="relative overflow-hidden mx-auto"
      style={{ height: "700px", maxWidth: "1400px", touchAction: "manipulation" }}
    >
      {/* Background Images with Ken Burns */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          {/* Background color layer */}
          <div
            className="absolute inset-0 z-0"
            style={{ backgroundColor: "#e8c8bf" }}
          />
          {/* Model image */}
          <Image
            src={slide.image}
            alt="루체 성형외과 메인 이미지"
            fill
            priority={current === 0}
            className="object-cover object-center"
          />
          {/* Color overlay for warm tone blending */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: slide.bgColor }}
          />
          {/* Bottom gradient for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.08) 35%, transparent 55%)",
            }}
          />
        </motion.div>
      </AnimatePresence>


      {/* Large Outline Typography - Fashion Editorial Style */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={`typo-${current}`}
          className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none select-none overflow-hidden"
          style={{ paddingBottom: "60px" }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 30 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2
            className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[130px] xl:text-[160px] leading-[1] tracking-tight whitespace-nowrap text-right pr-6 md:pr-14"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontStyle: "italic",
              color: "transparent",
              WebkitTextStroke: "0.5px rgba(255, 255, 255, 0.15)",
            }}
          >
            {slide.overlayText.replace(/\n/g, " ").toUpperCase()}
          </h2>
        </motion.div>
      </AnimatePresence>

      {/* Content - Left, Vertically Centered */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="px-6 md:px-10 lg:px-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1
                className="text-xl sm:text-2xl md:text-3xl text-white mb-2 md:mb-3"
                style={{
                  fontFamily: "'Noto Sans KR', sans-serif",
                  fontWeight: 400,
                  textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                }}
              >
                {slide.title}
              </h1>
              <p
                className="text-xs sm:text-sm md:text-base text-white/70 mb-4 max-w-sm"
                style={{
                  fontWeight: 300,
                  textShadow: "0 1px 10px rgba(0,0,0,0.3)",
                }}
              >
                {slide.description}
              </p>
              {/* View more link */}
              <a
                href="#"
                className="inline-flex items-center gap-3 text-white/80 text-sm tracking-widest uppercase group"
                style={{ touchAction: "manipulation" }}
              >
                <span
                  className="block w-8 h-px bg-white/60 transition-[width] duration-300 group-hover:w-12"
                />
                <span className="group-hover:text-white transition-colors duration-300">
                  더 보기
                </span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot Navigation - Bottom Center */}
      <div className="absolute bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`슬라이드 ${index + 1}`}
            className="relative flex items-center justify-center"
            style={{ touchAction: "manipulation" }}
          >
            {index === current ? (
              <motion.span
                layoutId="activeDot"
                className="w-4 h-4 rounded-full border-2 border-white/90"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            ) : (
              <span className="w-2 h-2 rounded-full bg-white/40 hover:bg-white/60 transition-colors duration-200" />
            )}
          </button>
        ))}
      </div>
    </section>
    </div>
  );
}
