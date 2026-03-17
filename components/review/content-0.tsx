"use client";

// ============================================================================
// CUSTOMIZATION - 커스터마이징 영역
// ============================================================================
const COLORS = {
  primary: "#2C3E50",
  accent: "#C9A96E",
  background: "#FAFAF8",
  text: "#1A1A1A",
  subtitleText: "#565656",
  disclaimerText: "#333333",
  cardBg: "#ffffff",
  beforeOverlay: "rgba(0, 0, 0, 0.55)",
  tabBorder: "#C9A96E",
  tabText: "#666666",
  tabActiveText: "#ffffff",
  tabActiveBg: "#2C3E50",
  paginationActive: "#2C3E50",
  paginationDefault: "#cccccc",
  lockBg: "rgba(0, 0, 0, 0.65)",
} as const;

const CATEGORIES = [
  "전체",
  "코성형",
  "눈성형",
  "재수술",
  "리프팅",
  "가슴성형",
  "지방성형",
] as const;

const CASES = [
  {
    id: 1,
    category: "눈성형",
    title: "자연유착+눈매교정",
    afterLabel: "수술 후 2달",
  },
  {
    id: 2,
    category: "코성형",
    title: "콧대(실리콘)+코끝(귀연골)+복코+비주+콧볼축소(외측)",
    afterLabel: "수술 후 1달",
  },
  {
    id: 3,
    category: "재수술",
    title: "코재수술+콧대(실리콘)+코끝(기증늑)+매부리+복코",
    afterLabel: "수술 후 1달",
  },
  {
    id: 4,
    category: "코성형",
    title: "콧대(실리콘)+코끝(귀연골)+복코+콧볼축소(매몰)",
    afterLabel: "수술 후 3달",
  },
  {
    id: 5,
    category: "눈성형",
    title: "절개쌍꺼풀+눈매교정+뒷트임",
    afterLabel: "수술 후 2달",
  },
  {
    id: 6,
    category: "리프팅",
    title: "LUCE SMAS 안면거상+이마거상술",
    afterLabel: "수술 후 1달",
  },
  {
    id: 7,
    category: "코성형",
    title: "미니절개 자가늑코성형+비주+콧볼축소(외측)",
    afterLabel: "수술 후 2달",
  },
  {
    id: 8,
    category: "가슴성형",
    title: "가슴확대술(모티바 라운드)",
    afterLabel: "수술 후 3달",
  },
  {
    id: 9,
    category: "지방성형",
    title: "브이라인 얼굴지방흡입+지방이식(이마,볼)",
    afterLabel: "수술 후 1달",
  },
] as const;
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Lock, ChevronLeft, ChevronRight } from "lucide-react";

export default function Content0() {
  const [activeCategory, setActiveCategory] = useState<string>("전체");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredCases =
    activeCategory === "전체"
      ? CASES
      : CASES.filter((c) => c.category === activeCategory);

  const totalPages = Math.max(1, Math.ceil(filteredCases.length / itemsPerPage));
  const paginatedCases = filteredCases.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: COLORS.background,
        fontFamily:
          "'Pretendard', 'Malgun Gothic', malgungothic, sans-serif",
      }}
    >
      {/* Title Section */}
      <div className="text-center" style={{ paddingTop: 100, paddingBottom: 40 }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4"
          style={{
            fontFamily: "'Mulish', sans-serif",
            fontSize: 32,
            fontWeight: 400,
            lineHeight: 1.3,
            color: COLORS.subtitleText,
            letterSpacing: "0.5px",
          }}
        >
          Before and After
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            fontSize: 55,
            fontWeight: 600,
            lineHeight: 1.2,
            color: COLORS.text,
            letterSpacing: "-2px",
            margin: 0,
            textWrap: "balance",
          } as React.CSSProperties}
        >
          전후사진
        </motion.h2>

        <div style={{ height: 28 }} />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            fontSize: 18,
            fontWeight: 300,
            lineHeight: 1.8,
            color: COLORS.disclaimerText,
            letterSpacing: "-0.8px",
            maxWidth: 800,
            margin: "0 auto",
            padding: "0 20px",
          }}
        >
          ※ 수술 후 출혈, 감염, 염증등 일반적으로 발생 할 수 있는 합병증은
          개인에 따라 정도의 차이가 있을 수 있으므로 주의가 필요합니다.
        </motion.p>
      </div>

      {/* Category Tabs */}
      <div className="max-w-[1260px] mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className="relative px-6 py-2.5 rounded-full text-sm font-medium transition-[background-color,color,border-color] duration-300 border touch-manipulation"
              style={{
                backgroundColor:
                  activeCategory === cat ? COLORS.tabActiveBg : "transparent",
                color:
                  activeCategory === cat
                    ? COLORS.tabActiveText
                    : COLORS.tabText,
                borderColor:
                  activeCategory === cat ? COLORS.tabActiveBg : "#ddd",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {paginatedCases.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                viewport={{ once: true }}
                className="group"
              >
                {/* Before / After Photo Card */}
                <div
                  className="rounded-lg overflow-hidden shadow-sm"
                  style={{ backgroundColor: COLORS.cardBg }}
                >
                  <div className="grid grid-cols-2 aspect-[2/1.15]">
                    {/* Before - Locked */}
                    <div className="relative overflow-hidden">
                      {/* Placeholder background */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #e8e0d8 0%, #d4c8bc 100%)",
                        }}
                      />
                      {/* Dark overlay */}
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center z-10"
                        style={{ backgroundColor: COLORS.beforeOverlay }}
                      >
                        <div
                          className="flex items-center justify-center w-12 h-12 rounded-full mb-2"
                          style={{ backgroundColor: COLORS.lockBg }}
                        >
                          <Lock className="w-5 h-5 text-white/80" aria-hidden="true" />
                        </div>
                        <span
                          className="text-white/70 text-xs tracking-wide"
                          style={{ fontFamily: "'Mulish', sans-serif" }}
                        >
                          로그인 후 확인
                        </span>
                      </div>
                      {/* BEFORE label */}
                      <div className="absolute bottom-3 left-3 z-20">
                        <span
                          className="text-white/60 text-xs font-medium tracking-widest"
                          style={{ fontFamily: "'Mulish', sans-serif" }}
                        >
                          BEFORE
                        </span>
                      </div>
                      {/* Top left label */}
                      <div className="absolute top-3 left-3 z-20">
                        <span
                          className="px-2 py-0.5 text-[10px] rounded text-white/80"
                          style={{
                            backgroundColor: "rgba(201,169,110,0.7)",
                            fontFamily: "'Mulish', sans-serif",
                          }}
                        >
                          수술 전
                        </span>
                      </div>
                    </div>

                    {/* After - Visible */}
                    <div className="relative overflow-hidden">
                      {/* Placeholder - simulated after photo */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #f0e8e0 0%, #e8ddd4 50%, #ddd0c4 100%)",
                        }}
                      />
                      {/* Simulated face silhouette */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-16 h-20 rounded-full opacity-20"
                          style={{
                            background:
                              "radial-gradient(ellipse, #c4a882 0%, transparent 70%)",
                          }}
                        />
                      </div>
                      {/* LUCE watermark */}
                      <div className="absolute top-3 right-3 z-20">
                        <span
                          className="text-[10px] tracking-wider opacity-40"
                          style={{
                            fontFamily: "'Mulish', sans-serif",
                            color: COLORS.primary,
                          }}
                        >
                          LUCE
                        </span>
                      </div>
                      {/* After label */}
                      <div className="absolute top-3 left-3 z-20">
                        <span
                          className="px-2 py-0.5 text-[10px] rounded text-white"
                          style={{
                            backgroundColor: COLORS.accent,
                            fontFamily: "'Mulish', sans-serif",
                          }}
                        >
                          {item.afterLabel}
                        </span>
                      </div>
                      {/* AFTER label bottom */}
                      <div className="absolute bottom-3 left-3 z-20">
                        <span
                          className="text-xs font-medium tracking-widest"
                          style={{
                            fontFamily: "'Mulish', sans-serif",
                            color: COLORS.primary,
                            opacity: 0.5,
                          }}
                        >
                          AFTER
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Surgery Name */}
                  <div className="px-4 py-3.5 border-t border-gray-100">
                    <p
                      className="text-sm leading-relaxed truncate"
                      style={{
                        color: COLORS.text,
                        fontWeight: 400,
                        letterSpacing: "-0.3px",
                      }}
                      title={item.title}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 pb-20"
        >
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="이전 페이지"
            className="w-9 h-9 flex items-center justify-center rounded-full transition-colors disabled:opacity-30 touch-manipulation"
            style={{ color: COLORS.primary }}
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className="w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium transition-[background-color,color,border] duration-200 touch-manipulation"
              style={{
                backgroundColor:
                  currentPage === page ? COLORS.paginationActive : "transparent",
                color:
                  currentPage === page ? "#fff" : COLORS.tabText,
                border:
                  currentPage === page
                    ? "none"
                    : "1px solid #ddd",
              }}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            aria-label="다음 페이지"
            className="w-9 h-9 flex items-center justify-center rounded-full transition-colors disabled:opacity-30 touch-manipulation"
            style={{ color: COLORS.primary }}
          >
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
