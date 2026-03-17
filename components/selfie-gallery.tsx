"use client";

// ============================================================================
// CUSTOMIZATION - 커스터마이징 영역
// ============================================================================
const COLORS = {
  background: "#ffffff",
  titleLight: "#1A1A1A",
  subtitleLight: "#999999",
} as const;

const IMAGES = {
  selfies: [
    // Row 1
    "/assets/home-image-42.jpg",
    "/assets/home-image-50.jpg",
    "/assets/home-image-43.jpg",
    "/assets/home-image-53.jpg",
    "/assets/home-image-55.jpg",
    "/assets/home-image-46.jpg",
    // Row 2
    "/assets/home-image-47.jpg",
    "/assets/home-image-48.jpg",
    "/assets/home-image-51.jpg",
    "/assets/home-image-44.jpg",
    "/assets/home-image-52.jpg",
    "/assets/home-image-56.jpg",
    // Row 3
    "/assets/home-image-54.jpg",
    "/assets/home-image-57.jpg",
    "/assets/home-image-45.jpg",
    "/assets/home-image-53.jpg",
    "/assets/home-image-42.jpg",
    "/assets/home-image-55.jpg",
  ],
} as const;
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface Feature2Props {
  title?: string;
  subtitle?: string;
  images?: string[];
  linkHref?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Feature2({
  title = "LUCE Real Selfie",
  subtitle,
  images = [...IMAGES.selfies],
  linkHref = "#",
}: Feature2Props) {
  return (
    <section
      className="w-full py-12 md:py-20"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="px-6 md:px-[80px]">
        {/* Title Area */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {subtitle && (
            <p
              className="text-xs tracking-[0.2em] uppercase mb-3"
              style={{ color: COLORS.subtitleLight }}
            >
              {subtitle}
            </p>
          )}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl tracking-wide"
            style={{
              color: COLORS.titleLight,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
              letterSpacing: "-0.5px",
            }}
          >
            {title}
          </h2>
        </motion.div>

        {/* Photo Grid - 6 columns, 3 rows */}
        <motion.div
          className="grid grid-cols-3 md:grid-cols-6 gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {images.slice(0, 18).map((src, index) => (
            <motion.a
              key={index}
              href={linkHref}
              className="relative aspect-square overflow-hidden group block"
              variants={itemVariants}
            >
              <Image
                src={src}
                alt={`리얼 셀피 ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
