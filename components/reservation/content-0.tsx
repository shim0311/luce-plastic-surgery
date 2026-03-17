"use client";

// ============================================================================
// CUSTOMIZATION - 커스터마이징 영역
// ============================================================================
const COLORS = {
  background: "#ffffff",
  headerBg: "#f5f5f5",
  borderColor: "#e5e5e5",
  titleColor: "#222222",
  subtitleColor: "#999999",
  textColor: "#333333",
  mutedText: "#888888",
  badgeBg: "#333333",
  badgeText: "#ffffff",
  accent: "#d4a76a",
  buttonBorder: "#333333",
  buttonText: "#333333",
  searchBtnBg: "#333333",
  searchBtnText: "#ffffff",
  paginationActive: "#333333",
  paginationInactive: "#999999",
  lockIcon: "#d4a76a",
  replyCount: "#d4a76a",
} as const;

const CONSULTATION_DATA = [
  { id: 41, category: "코성형", title: "콧대 재수술 견적 문의", isSecret: true, replies: 1, status: "답변완료", author: "솔", date: "2026.03.13" },
  { id: 40, category: "재수술", title: "눈재수술(쌍커풀+눈매교정), 밑트임+ 코수술(자가늑)", isSecret: true, replies: 1, status: "답변완료", author: "김윤정", date: "2026.03.12" },
  { id: 39, category: "코성형", title: "코 재수술 상담 요청드립니다", isSecret: true, replies: 1, status: "답변완료", author: "손시연", date: "2026.02.20" },
  { id: 38, category: "눈성형", title: "눈매교정 재수술 문의드립니다", isSecret: true, replies: 1, status: "답변완료", author: "이수현", date: "2025.12.25" },
  { id: 37, category: "코성형", title: "매부리코 재수술 문의", isSecret: true, replies: 1, status: "답변완료", author: "김민준", date: "2025.11.29" },
  { id: 36, category: "코성형", title: "기능코 무보형물 상담", isSecret: false, replies: 1, status: "답변완료", author: "주희", date: "2025.10.30" },
  { id: 35, category: "재수술", title: "눈재수술", isSecret: true, replies: 1, status: "답변완료", author: "지은영", date: "2025.10.15" },
  { id: 34, category: "재수술", title: "문의드려요", isSecret: true, replies: 0, status: "답변완료", author: "크로스", date: "2025.09.19" },
  { id: 33, category: "가슴성형", title: "가슴 재수술 상담 문의드립니다", isSecret: true, replies: 1, status: "답변완료", author: "강민서", date: "2025.09.08" },
  { id: 32, category: "리프팅", title: "리프팅 상담 문의", isSecret: true, replies: 1, status: "답변완료", author: "OOO", date: "2025.09.05" },
];
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Search, Lock, ChevronRight, PenSquare } from "lucide-react";

interface ReservationContent0Props {
  title?: string;
  subtitle?: string;
}

export default function ReservationContent0({
  title = "온라인 상담",
  subtitle = "Online consultation",
}: ReservationContent0Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["전체", "코성형", "눈성형", "재수술", "리프팅", "가슴성형"];

  return (
    <section
      className="w-full py-16 md:py-24"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-[1000px] mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p
            className="text-sm tracking-widest mb-2"
            style={{ color: COLORS.subtitleColor, fontFamily: "'Satoshi Variable', sans-serif" }}
          >
            {subtitle}
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: COLORS.titleColor }}
          >
            {title}
          </h2>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {/* Table Header */}
          <div
            className="grid items-center py-3.5 text-sm font-medium border-t-2 border-b"
            style={{
              gridTemplateColumns: "80px 90px 1fr 80px 80px 100px",
              backgroundColor: COLORS.headerBg,
              borderTopColor: COLORS.titleColor,
              borderBottomColor: COLORS.borderColor,
              color: COLORS.textColor,
            }}
          >
            <span className="text-center">번호</span>
            <span className="text-center">카테고리</span>
            <span className="text-center">제목</span>
            <span className="text-center">상태</span>
            <span className="text-center">작성자</span>
            <span className="text-center">작성일</span>
          </div>

          {/* Table Rows */}
          {CONSULTATION_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              viewport={{ once: true }}
              className="grid items-center py-4 border-b cursor-pointer transition-colors hover:bg-gray-50"
              style={{
                gridTemplateColumns: "80px 90px 1fr 80px 80px 100px",
                borderBottomColor: COLORS.borderColor,
              }}
            >
              <span
                className="text-center text-sm"
                style={{ color: COLORS.mutedText }}
              >
                {item.id}
              </span>
              <span
                className="text-center text-sm"
                style={{ color: COLORS.textColor }}
              >
                {item.category}
              </span>
              <div className="flex items-center gap-1.5 text-sm px-2">
                {item.isSecret && (
                  <Lock
                    size={13}
                    style={{ color: COLORS.lockIcon }}
                    className="flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
                <span style={{ color: COLORS.textColor }}>{item.title}</span>
                {item.replies > 0 && (
                  <span
                    className="text-sm ml-0.5"
                    style={{ color: COLORS.replyCount }}
                  >
                    ({item.replies})
                  </span>
                )}
              </div>
              <div className="flex justify-center">
                <span
                  className="text-xs px-2.5 py-1 rounded-sm"
                  style={{
                    backgroundColor: COLORS.badgeBg,
                    color: COLORS.badgeText,
                  }}
                >
                  {item.status}
                </span>
              </div>
              <span
                className="text-center text-sm"
                style={{ color: COLORS.mutedText }}
              >
                {item.author}
              </span>
              <span
                className="text-center text-sm"
                style={{ color: COLORS.mutedText }}
              >
                {item.date}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-1 mt-8 mb-6">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className="w-8 h-8 flex items-center justify-center text-sm transition-colors"
              style={{
                color:
                  currentPage === page
                    ? COLORS.paginationActive
                    : COLORS.paginationInactive,
                fontWeight: currentPage === page ? 700 : 400,
              }}
            >
              {page}
            </button>
          ))}
          <button
            className="w-8 h-8 flex items-center justify-center touch-manipulation"
            style={{ color: COLORS.paginationInactive }}
            aria-label="다음 페이지"
          >
            <ChevronRight size={14} aria-hidden="true" />
          </button>
          <button
            className="text-sm px-1 touch-manipulation"
            style={{ color: COLORS.paginationInactive }}
            aria-label="마지막 페이지"
          >
            마지막
          </button>
        </div>

        {/* Search */}
        <div className="flex justify-center items-center gap-1.5 mb-6">
          <select
            aria-label="검색 카테고리"
            className="h-9 px-2.5 text-sm border rounded-sm"
            style={{
              borderColor: COLORS.borderColor,
              color: COLORS.textColor,
            }}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            aria-label="검색어"
            className="h-9 px-3 text-sm border rounded-sm w-48"
            style={{
              borderColor: COLORS.borderColor,
              color: COLORS.textColor,
            }}
          />
          <button
            aria-label="검색"
            className="h-9 px-5 flex items-center justify-center rounded-sm transition-opacity hover:opacity-80 touch-manipulation"
            style={{
              backgroundColor: COLORS.searchBtnBg,
              color: COLORS.searchBtnText,
            }}
          >
            <Search size={15} aria-hidden="true" />
          </button>
        </div>

        {/* Write Button */}
        <div className="flex justify-end">
          <button
            className="flex items-center gap-2 px-6 py-2.5 text-sm border rounded-sm transition-colors hover:bg-gray-50"
            style={{
              borderColor: COLORS.buttonBorder,
              color: COLORS.buttonText,
            }}
          >
            글쓰기
          </button>
        </div>
      </div>
    </section>
  );
}
