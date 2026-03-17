"use client";

// ============================================================================
// CUSTOMIZATION - 커스터마이징 영역
// ============================================================================
const COLORS = {
  background: "#ffffff",
  titleText: "#1A1A1A",
  playButtonBorder: "rgba(255, 255, 255, 0.8)",
  playIcon: "#ffffff",
} as const;

const IMAGES = {
  thumbnails: [
    "/assets/home-image-24.jpg",
    "/assets/home-image-25.jpg",
    "/assets/home-image-26.jpg",
    "/assets/home-image-27.jpg",
    "/assets/home-image-28.jpg",
    "/assets/home-image-29.jpg",
    "/assets/home-image-30.jpg",
    "/assets/home-image-31.jpg",
    "/assets/home-image-32.jpg",
    "/assets/home-image-33.jpg",
    "/assets/home-image-34.jpg",
    "/assets/home-image-35.jpg",
    "/assets/home-image-36.jpg",
  ],
} as const;

const VIDEO_LINKS = [
  "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#",
] as const;
// ============================================================================

import { useRef } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import Image from "next/image";

interface Feature0Props {
  title?: string;
}

export default function Feature0({
  title = "LUCE Shorts",
}: Feature0Props) {
  const trackRef = useRef<HTMLDivElement>(null);

  const images = IMAGES.thumbnails;
  const doubled = [...images, ...images];
  const cardW = 340;
  const cardH = 540;
  const gap = 20;
  const totalWidth = images.length * (cardW + gap);
  const speed = 40;
  const duration = totalWidth / speed;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: COLORS.background,
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center mb-12"
        style={{
          color: COLORS.titleText,
          fontSize: "clamp(28px, 3.5vw, 42px)",
          fontWeight: 400,
          letterSpacing: "-0.5px",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        {title}
      </motion.h2>

      {/* Marquee */}
      <div
        className="overflow-hidden"
        onMouseEnter={() => {
          if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
        }}
        onMouseLeave={() => {
          if (trackRef.current) trackRef.current.style.animationPlayState = "running";
        }}
      >
        <div
          ref={trackRef}
          className="marquee-track"
          style={{
            display: "flex",
            gap: `${gap}px`,
            width: `${totalWidth * 2}px`,
            animationDuration: `${duration}s`,
          }}
        >
          {doubled.map((thumb, index) => {
            const realIndex = index % images.length;
            const isEager = realIndex <= 1;
            return (
              <a
                key={`card-${index}`}
                href={VIDEO_LINKS[realIndex] || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex-shrink-0 block overflow-hidden cursor-pointer"
                style={{
                  width: cardW,
                  height: cardH,
                  borderRadius: 16,
                }}
              >
                {/* Thumbnail */}
                <Image
                  src={thumb}
                  alt={`루체 쇼츠 영상 ${realIndex + 1}`}
                  width={cardW}
                  height={cardH}
                  priority={isEager}
                  className="w-full h-full object-cover"
                  draggable={false}
                />

                {/* Play button - always visible */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{
                      width: 88,
                      height: 88,
                      border: `2px solid ${COLORS.playButtonBorder}`,
                      backgroundColor: "rgba(0,0,0,0.15)",
                      backdropFilter: "blur(2px)",
                      transition: "transform 0.3s ease, background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.15)";
                    }}
                  >
                    <Play
                      className="ml-1"
                      aria-hidden="true"
                      style={{
                        width: 32,
                        height: 32,
                        color: COLORS.playIcon,
                        fill: COLORS.playIcon,
                      }}
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-scroll linear infinite;
        }
      `}</style>
    </section>
  );
}
