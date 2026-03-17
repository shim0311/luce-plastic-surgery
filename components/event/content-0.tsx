"use client";

// ============================================================================
// CUSTOMIZATION - 커스터마이징 영역
// ============================================================================
const COLORS = {
  background: "#ffffff",
  text: "#222222",
  textMuted: "#999999",
  accent: "#333333",
  border: "#e5e5e5",
  filterActive: "#222222",
  filterInactive: "#888888",
  paginationActive: "#222222",
  paginationInactive: "#999999",
  cardBg: [
    "#2d2d3f",
    "#e8ddd0",
    "#f5e6d8",
    "#d4e4e0",
    "#3a3a3a",
    "#1a2632",
    "#2a2a3e",
    "#1e1e2e",
    "#e0c8b0",
    "#3b1a2e",
    "#f0e0d0",
    "#4a3a5a",
  ],
} as const;

interface EventItem {
  id: number;
  title: string;
  price: string;
  category: string;
  gradient: string;
  accent: string;
  darkText?: boolean;
  tag?: string;
}

const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "루체 얼굴지방흡입",
    price: "40.7만원~",
    category: "리프팅",
    gradient: "from-purple-900 via-purple-800 to-indigo-900",
    accent: "#c084fc",
  },
  {
    id: 2,
    title: "루체 풀페이스 지방이식",
    price: "77만원~",
    category: "리프팅",
    gradient: "from-amber-100 via-orange-50 to-yellow-100",
    accent: "#d97706",
    darkText: true,
  },
  {
    id: 3,
    title: "루체 눈밑지방재배치",
    price: "97.9만원~",
    category: "눈성형",
    gradient: "from-rose-100 via-pink-50 to-orange-50",
    accent: "#e11d48",
    darkText: true,
  },
  {
    id: 4,
    title: "루체 무보형물 코성형",
    price: "179.3만원~",
    category: "코성형",
    gradient: "from-teal-100 via-emerald-50 to-cyan-50",
    accent: "#0d9488",
    darkText: true,
  },
  {
    id: 5,
    title: "루체 자가늑 코성형",
    price: "344.3만원~",
    category: "코성형",
    gradient: "from-slate-800 via-gray-700 to-zinc-800",
    accent: "#94a3b8",
  },
  {
    id: 6,
    title: "루체 기능코 성형",
    price: "55만원~",
    category: "코성형",
    gradient: "from-indigo-900 via-blue-900 to-purple-900",
    accent: "#818cf8",
    tag: "3D-CT",
  },
  {
    id: 7,
    title: "루체 코재수술",
    price: "289.3만원~",
    category: "재수술",
    gradient: "from-slate-900 via-gray-800 to-zinc-900",
    accent: "#f59e0b",
  },
  {
    id: 8,
    title: "루체 남자 코성형",
    price: "179.3만원~",
    category: "남자성형",
    gradient: "from-neutral-800 via-stone-700 to-gray-800",
    accent: "#a78bfa",
  },
  {
    id: 9,
    title: "루체 눈재수술",
    price: "86.9만원~",
    category: "재수술",
    gradient: "from-rose-50 via-pink-50 to-amber-50",
    accent: "#be185d",
    darkText: true,
  },
  {
    id: 10,
    title: "루체 첫코성형",
    price: "179.3만원~",
    category: "코성형",
    gradient: "from-emerald-50 via-teal-50 to-cyan-50",
    accent: "#059669",
    darkText: true,
  },
  {
    id: 11,
    title: "루체 첫눈성형",
    price: "64.9만원~",
    category: "눈성형",
    gradient: "from-amber-50 via-yellow-50 to-orange-50",
    accent: "#d97706",
    darkText: true,
  },
  {
    id: 12,
    title: "루체 실리프팅",
    price: "7.7만원~",
    category: "리프팅",
    gradient: "from-violet-900 via-purple-800 to-fuchsia-900",
    accent: "#c084fc",
  },
];

const CATEGORIES = [
  "전체",
  "재수술",
  "코성형",
  "눈성형",
  "리프팅",
  "가슴성형",
  "중년성형",
  "남자성형",
] as const;
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function Content0() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEvents =
    activeCategory === "전체"
      ? EVENTS
      : EVENTS.filter((e) => e.category === activeCategory);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const paginatedEvents = filteredEvents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <section
      className="w-full py-16 md:py-24"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p
            className="text-sm tracking-widest uppercase mb-2"
            style={{ color: COLORS.textMuted, fontFamily: "'Satoshi', sans-serif" }}
          >
            Event
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: COLORS.text, textWrap: "balance" } as React.CSSProperties}
          >
            이벤트
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className="relative pb-1 text-sm md:text-[15px] transition-colors duration-200 touch-manipulation"
              style={{
                color:
                  activeCategory === cat
                    ? COLORS.filterActive
                    : COLORS.filterInactive,
                fontWeight: activeCategory === cat ? 600 : 400,
              }}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="categoryUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2px]"
                  style={{ backgroundColor: COLORS.filterActive }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Event Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5"
          >
            {paginatedEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                {/* Card Image */}
                <div
                  className={`relative aspect-[4/5] rounded-md overflow-hidden bg-gradient-to-br ${event.gradient} mb-2 transition-transform duration-300 group-hover:scale-[1.02] group-hover:shadow-lg`}
                >
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  {/* Brand tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span
                      className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-sm"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.15)",
                        color: event.darkText ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.7)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      LUCE
                    </span>
                  </div>

                  {/* Tag if exists */}
                  {event.tag && (
                    <div
                      className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-sm"
                      style={{
                        backgroundColor: event.accent,
                        color: "#fff",
                      }}
                    >
                      {event.tag}
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p
                      className="text-[11px] mb-1 font-medium"
                      style={{
                        color: event.darkText
                          ? "rgba(0,0,0,0.5)"
                          : "rgba(255,255,255,0.6)",
                      }}
                    >
                      루체 성형외과
                    </p>
                    <h3
                      className="text-base md:text-lg font-bold leading-tight mb-2"
                      style={{
                        color: event.darkText ? "#1a1a1a" : "#ffffff",
                      }}
                    >
                      {event.title.replace("루체 ", "")}
                    </h3>
                    <div className="flex items-end gap-1">
                      <span
                        className="text-2xl md:text-3xl font-extrabold leading-none"
                        style={{ color: event.accent, fontVariantNumeric: "tabular-nums" }}
                      >
                        {event.price.replace("만원~", "")}
                      </span>
                      <span
                        className="text-sm font-medium pb-0.5"
                        style={{
                          color: event.darkText
                            ? "rgba(0,0,0,0.6)"
                            : "rgba(255,255,255,0.7)",
                        }}
                      >
                        만원~
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Title */}
                <p
                  className="text-xs md:text-sm text-center mt-1 transition-colors duration-200 group-hover:text-black"
                  style={{ color: COLORS.textMuted }}
                >
                  {event.title}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mt-14"
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className="w-8 h-8 flex items-center justify-center text-sm rounded transition-[color,font-weight,border-color] duration-200 touch-manipulation"
              style={{
                color:
                  currentPage === page
                    ? COLORS.paginationActive
                    : COLORS.paginationInactive,
                fontWeight: currentPage === page ? 700 : 400,
                borderBottom:
                  currentPage === page
                    ? `2px solid ${COLORS.paginationActive}`
                    : "2px solid transparent",
              }}
            >
              {page}
            </button>
          ))}
          {totalPages > 1 && currentPage < totalPages && (
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              aria-label="다음 페이지"
              className="w-8 h-8 flex items-center justify-center transition-colors duration-200 hover:text-black touch-manipulation"
              style={{ color: COLORS.paginationInactive }}
            >
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          )}
          {totalPages > 1 && (
            <button
              onClick={() => setCurrentPage(totalPages)}
              aria-label="마지막 페이지"
              className="text-xs ml-1 transition-colors duration-200 hover:text-black touch-manipulation"
              style={{ color: COLORS.paginationInactive }}
            >
              마지막
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
