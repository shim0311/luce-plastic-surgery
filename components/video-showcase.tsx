"use client";

// ============================================================================
// CUSTOMIZATION - 커스터마이징 영역
// ============================================================================
const COLORS = {
  background: "#ffffff",
  title: "#222222",
  subtitle: "#333333",
  link: "#000000",
  linkHover: "#5e5e5e",
  playButton: "rgba(0, 0, 0, 0.6)",
  playButtonHover: "rgba(0, 0, 0, 0.8)",
  activeUnderline: "#3b82f6",
  tabCaption: "#222222",
  tabCaptionInactive: "#888888",
} as const;

const VIDEOS = [
  {
    id: "placeholder1",
    thumbnail: "/assets/home-image-40.jpg",
    caption: "치료과정&주의사항",
    subtitle: "수술 전·후 주의사항",
    youtubeUrl: "#",
  },
  {
    id: "placeholder2",
    thumbnail: "/assets/home-image-42.jpg",
    caption: "코재수술 케이스 리뷰",
    subtitle: "루체에서 진행한 코재수술 케이스 리뷰",
    youtubeUrl: "#",
  },
  {
    id: "placeholder3",
    thumbnail: "/assets/home-image-44.jpg",
    caption: "자연스러운 눈성형",
    subtitle: "자연스러운 쌍꺼풀을 위한 조건, 루체의 눈성형",
    youtubeUrl: "#",
  },
  {
    id: "placeholder4",
    thumbnail: "/assets/home-image-46.jpg",
    caption: "눈·코 동시 수술",
    subtitle: "눈·코 동시 수술의 장점, 루체가 알려드립니다",
    youtubeUrl: "#",
  },
] as const;
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Feature1() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const activeVideo = VIDEOS[activeIndex];

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(false);
  };

  return (
    <section
      className="w-full"
      style={{ backgroundColor: COLORS.background, padding: "135px 0 40px" }}
    >
      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center font-normal"
        style={{
          color: COLORS.title,
          fontSize: "clamp(22px, 3vw, 36px)",
          marginBottom: "60px",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Wanna Youtube
      </motion.p>

      {/* Content area */}
      <div className="max-w-[1200px] mx-auto px-8 lg:px-24 flex flex-col lg:flex-row items-stretch gap-0">
        {/* Left: Thumbnail tabs */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex lg:flex-col gap-2 lg:gap-2 lg:w-[100px] flex-shrink-0 mb-4 lg:mb-0 lg:mr-5 overflow-x-auto lg:overflow-visible"
        >
          {VIDEOS.map((video, index) => (
            <button
              key={video.id}
              onClick={() => handleTabClick(index)}
              className="relative flex-shrink-0 flex flex-col transition-opacity duration-300 touch-manipulation text-left"
              style={{
                width: "100px",
                opacity: activeIndex === index ? 1 : 0.5,
              }}
            >
              <div className="relative w-full rounded-sm overflow-hidden" style={{ height: "60px" }}>
                {video.thumbnail ? (
                  <Image
                    src={video.thumbnail}
                    alt={video.caption}
                    width={140}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                )}
              </div>
              {/* Active underline */}
              <div
                className="h-[2px] w-full mt-1 transition-all duration-300"
                style={{ backgroundColor: activeIndex === index ? COLORS.activeUnderline : "transparent" }}
              />
              {/* Caption */}
              <p
                className="text-[11px] mt-1 leading-snug"
                style={{ color: activeIndex === index ? COLORS.tabCaption : COLORS.tabCaptionInactive }}
              >
                {video.caption}
              </p>
            </button>
          ))}
        </motion.div>

        {/* Center: Main video player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex-1 min-w-0"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeVideo.id + (isPlaying ? "-playing" : "")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full overflow-hidden rounded-sm"
              style={{ aspectRatio: "16 / 9" }}
            >
              {!isPlaying ? (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="relative w-full h-full block group cursor-pointer"
                  aria-label="영상 재생"
                >
                  {activeVideo.thumbnail ? (
                    <Image
                      src={activeVideo.thumbnail}
                      alt={activeVideo.subtitle}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                  )}
                  {/* Play button overlay */}
                  <span
                    className="absolute inset-0 flex items-center justify-center transition-colors duration-300"
                  >
                    <span
                      className="w-[72px] h-[72px] rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: COLORS.playButton,
                      }}
                    >
                      <Play className="w-8 h-8 text-white ml-1" fill="white" aria-hidden="true" />
                    </span>
                  </span>
                </button>
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                  width="100%"
                  height="100%"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  title={activeVideo.subtitle}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Right: Subtitle + view more */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="lg:w-[180px] flex-shrink-0 lg:pl-8 pt-4 lg:pt-0 flex flex-col justify-end pb-2"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: COLORS.subtitle }}
              >
                {activeVideo.subtitle}
              </p>
            </motion.div>
          </AnimatePresence>

          <a
            href={activeVideo.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 group text-sm font-medium transition-colors duration-300"
            style={{ color: COLORS.link }}
          >
            <span className="group-hover:underline">view more</span>
            <span
              className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
              style={{ backgroundColor: COLORS.link }}
            >
              <ArrowRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
