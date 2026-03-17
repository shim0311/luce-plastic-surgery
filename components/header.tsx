"use client";

// ============================================================================
// CUSTOMIZATION - 커스터마이징 영역
// ============================================================================
const COLORS = {
  bg: "#ffffff",
  bgTransparent: "transparent",
  text: "#2C3E50",
  textLight: "#ffffff",
  textMuted: "#888888",
  accent: "#C9A96E",
  border: "#eeeeee",
  dropdownBg: "#ffffff",
  dropdownHover: "#FAFAF8",
  overlay: "rgba(0,0,0,0.03)",
} as const;

const FLAGS = [
  { code: "US", emoji: "🇺🇸" },
  { code: "CN", emoji: "🇨🇳" },
  { code: "JP", emoji: "🇯🇵" },
  { code: "ID", emoji: "🇮🇩" },
  { code: "TH", emoji: "🇹🇭" },
  { code: "KR", emoji: "🇰🇷" },
] as const;

const MENU_ITEMS = [
  {
    title: "진료과목",
    href: "#",
    children: [
      {
        title: "코성형",
        href: "#",
        children: [
          { title: "LUCE 코성형", href: "#" },
          { title: "미니절개 자가늑코성형", href: "#" },
          { title: "기능코성형", href: "#" },
          { title: "무보형물 코성형", href: "#" },
          { title: "유형별 코성형", href: "#" },
          { title: "콧볼성형", href: "#" },
          { title: "비주성형", href: "#" },
        ],
      },
      {
        title: "눈성형",
        href: "#",
        children: [
          { title: "LUCE 눈성형", href: "#" },
          { title: "자연유착", href: "#" },
          { title: "절개쌍꺼풀", href: "#" },
          { title: "눈매교정", href: "#" },
          { title: "트임성형", href: "#" },
          { title: "눈밑지방재배치", href: "#" },
          { title: "내시경 이마거상술", href: "#" },
        ],
      },
      {
        title: "리프팅",
        href: "#",
        children: [
          { title: "LUCE SMAS 안면거상", href: "#" },
          { title: "LUCE SMAS 미니거상", href: "#" },
          { title: "LUCE 미니리프팅", href: "#" },
          { title: "실리프팅", href: "#" },
          { title: "윤곽수술 후 처짐 리프팅", href: "#" },
          { title: "스킨부스터", href: "#" },
        ],
      },
      {
        title: "가슴성형",
        href: "#",
        children: [
          { title: "가슴확대술", href: "#" },
          { title: "가슴리프팅", href: "#" },
          { title: "가슴축소술", href: "#" },
        ],
      },
      {
        title: "재수술",
        href: "#",
        children: [
          { title: "코재수술", href: "#" },
          { title: "눈재수술", href: "#" },
          { title: "리프팅 재수술", href: "#" },
        ],
      },
      {
        title: "윤곽성형",
        href: "#",
        children: [
          { title: "사각턱축소", href: "#" },
          { title: "광대축소", href: "#" },
          { title: "턱끝성형", href: "#" },
        ],
      },
    ],
  },
  {
    title: "루체소개",
    href: "/introduction",
    children: [
      { title: "루체소개", href: "/introduction" },
      { title: "의료진소개", href: "/introduction" },
      { title: "병원둘러보기", href: "/introduction" },
      { title: "진료시간/오시는 길", href: "/introduction" },
      { title: "공지사항", href: "/introduction" },
      { title: "안전성형시스템", href: "/introduction" },
    ],
  },
  {
    title: "REVIEW",
    href: "/review",
    children: [
      { title: "전후사진", href: "/review" },
      { title: "리얼셀피", href: "/review" },
      { title: "리얼후기", href: "/review" },
    ],
  },
  {
    title: "상담·예약",
    href: "/reservation",
    children: [
      { title: "온라인 상담", href: "/reservation" },
      { title: "카카오톡 상담", href: "/reservation" },
      { title: "온라인 예약", href: "/reservation" },
    ],
  },
  {
    title: "이벤트",
    href: "/event",
    children: [],
  },
] as const;
// ============================================================================

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, ChevronRight, User, UserPlus } from "lucide-react";

interface HeaderProps {
  transparent?: boolean;
}

export default function Header0({ transparent = true }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<number | null>(null);
  const [mobileSubSubmenu, setMobileSubSubmenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleMenuEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(index);
  };

  const handleMenuLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const isTransparent = transparent && !scrolled;
  const textColor = isTransparent ? COLORS.textLight : COLORS.text;
  const borderColor = isTransparent ? "rgba(255,255,255,0.4)" : COLORS.border;

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-[9999] transition-[background-color,box-shadow] duration-300"
        style={{
          backgroundColor: isTransparent ? COLORS.bgTransparent : COLORS.bg,
          boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.08)" : "none",
        }}
      >
        {/* Main header */}
        <div className="flex items-center justify-between px-6 lg:px-10 py-4 lg:py-5">
          {/* Logo */}
          <a href="/" className="flex-shrink-0 relative z-10 flex flex-col items-center">
            <span
              className="text-[22px] lg:text-[28px] font-bold tracking-[0.15em] transition-colors duration-300"
              style={{ color: isTransparent ? COLORS.textLight : "#2C3E50", fontFamily: "'Playfair Display', serif" }}
            >
              LUCE
            </span>
            <span
              className="text-[8px] lg:text-[9px] tracking-[0.15em] -mt-1 transition-colors duration-300"
              style={{ color: isTransparent ? "rgba(255,255,255,0.8)" : "#C9A96E" }}
            >
              PLASTIC SURGERY
            </span>
          </a>

          {/* Desktop Navigation - left aligned near logo */}
          <nav className="hidden lg:flex items-center gap-0 ml-3 mr-auto">
            {MENU_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => handleMenuEnter(idx)}
                onMouseLeave={handleMenuLeave}
              >
                <a
                  href={item.href}
                  className="block px-2 xl:px-3 py-5 text-[17px] font-normal tracking-wide transition-colors duration-200 whitespace-nowrap touch-manipulation"
                  style={{
                    color: activeMenu === idx ? COLORS.accent : textColor,
                  }}
                >
                  {item.title}
                </a>

                {/* Dropdown - 진료과목 (mega menu) */}
                {item.children.length > 0 && idx === 0 && (
                  <AnimatePresence>
                    {activeMenu === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-1"
                        onMouseEnter={() => handleMenuEnter(idx)}
                        onMouseLeave={handleMenuLeave}
                      >
                        <div
                          className="rounded-lg shadow-xl overflow-hidden min-w-[700px]"
                          style={{ backgroundColor: COLORS.dropdownBg }}
                        >
                          <div className="grid grid-cols-4 gap-0 p-5">
                            {(item.children as readonly { title: string; href: string; children?: readonly { title: string; href: string }[] }[]).map(
                              (sub, sIdx) => (
                                <div key={sIdx} className="px-3 py-2">
                                  <a
                                    href={sub.href}
                                    className="block text-[14px] font-bold mb-2 pb-1.5 border-b"
                                    style={{
                                      color: COLORS.text,
                                      borderColor: COLORS.border,
                                    }}
                                  >
                                    {sub.title}
                                  </a>
                                  {sub.children && (
                                    <ul className="space-y-1">
                                      {sub.children.map((child, cIdx) => (
                                        <li key={cIdx}>
                                          <a
                                            href={child.href}
                                            className="block text-[13px] py-0.5 transition-colors duration-150 hover:translate-x-0.5 transform"
                                            style={{ color: COLORS.textMuted }}
                                            onMouseEnter={(e) =>
                                              (e.currentTarget.style.color = COLORS.accent)
                                            }
                                            onMouseLeave={(e) =>
                                              (e.currentTarget.style.color = COLORS.textMuted)
                                            }
                                          >
                                            {child.title}
                                          </a>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}

                {/* Regular dropdown */}
                {item.children.length > 0 && idx !== 0 && (
                  <AnimatePresence>
                    {activeMenu === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 top-full pt-1"
                        onMouseEnter={() => handleMenuEnter(idx)}
                        onMouseLeave={handleMenuLeave}
                      >
                        <div
                          className="rounded-lg shadow-xl overflow-hidden min-w-[200px]"
                          style={{ backgroundColor: COLORS.dropdownBg }}
                        >
                          <ul className="py-2">
                            {(item.children as readonly { title: string; href: string }[]).map(
                              (sub, sIdx) => (
                                <li key={sIdx}>
                                  <a
                                    href={sub.href}
                                    className="block px-5 py-2.5 text-[13px] transition-colors duration-150"
                                    style={{ color: COLORS.textMuted }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.color = COLORS.accent;
                                      e.currentTarget.style.backgroundColor = COLORS.dropdownHover;
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.color = COLORS.textMuted;
                                      e.currentTarget.style.backgroundColor = "transparent";
                                    }}
                                  >
                                    {sub.title}
                                  </a>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right section: Flags + Auth + Hamburger */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Country Flags */}
            <div className="flex items-center gap-1.5">
              {FLAGS.map((flag) => (
                <button
                  key={flag.code}
                  className="text-[18px] leading-none hover:scale-110 transition-transform duration-150 touch-manipulation"
                  aria-label={flag.code}
                >
                  {flag.emoji}
                </button>
              ))}
            </div>

            {/* 로그인/회원가입 - bordered buttons */}
            <div className="flex items-center gap-2">
              <a
                href="#"
                className="px-4 py-1.5 text-[13px] rounded-sm border transition-all duration-200 whitespace-nowrap touch-manipulation"
                style={{
                  color: textColor,
                  borderColor: borderColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                로그인
              </a>
              <a
                href="#"
                className="px-4 py-1.5 text-[13px] rounded-sm border transition-all duration-200 whitespace-nowrap touch-manipulation"
                style={{
                  color: textColor,
                  borderColor: borderColor,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                회원가입
              </a>
            </div>

            {/* Desktop Hamburger Menu */}
            <button
              className="relative z-10 p-1 touch-manipulation"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="메뉴 열기"
            >
              <Menu size={24} style={{ color: textColor }} aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative z-10 p-2 touch-manipulation"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {mobileOpen ? (
              <X size={26} style={{ color: COLORS.text }} aria-hidden="true" />
            ) : (
              <Menu size={26} style={{ color: textColor }} aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9998] bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] z-[10000] overflow-y-auto"
            style={{ backgroundColor: COLORS.bg, overscrollBehavior: "contain" }}
          >
            {/* Mobile header */}
            <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: COLORS.border }}>
              <a href="/" className="flex flex-col items-center">
                <span className="text-[20px] font-bold tracking-[0.15em]" style={{ color: "#2C3E50", fontFamily: "'Playfair Display', serif" }}>LUCE</span>
                <span className="text-[8px] tracking-[0.3em] -mt-1" style={{ color: "#C9A96E" }}>PLASTIC SURGERY</span>
              </a>
              <button onClick={() => setMobileOpen(false)} className="p-1 touch-manipulation" aria-label="메뉴 닫기">
                <X size={24} style={{ color: COLORS.text }} aria-hidden="true" />
              </button>
            </div>

            {/* Mobile auth */}
            <div className="flex items-center gap-4 px-5 py-3 border-b text-[13px]" style={{ borderColor: COLORS.border, color: COLORS.textMuted }}>
              <a href="#" className="flex items-center gap-1 hover:text-black transition-colors touch-manipulation" style={{ color: COLORS.textMuted }}>
                <User size={14} aria-hidden="true" /> 로그인
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-black transition-colors touch-manipulation" style={{ color: COLORS.textMuted }}>
                <UserPlus size={14} aria-hidden="true" /> 회원가입
              </a>
            </div>

            {/* Mobile menu items */}
            <nav className="py-2">
              {MENU_ITEMS.map((item, idx) => (
                <div key={idx} className="border-b" style={{ borderColor: COLORS.border }}>
                  <button
                    className="flex items-center justify-between w-full px-5 py-3.5 text-[15px] font-medium text-left"
                    style={{ color: COLORS.text }}
                    onClick={() =>
                      setMobileSubmenu(mobileSubmenu === idx ? null : idx)
                    }
                  >
                    {item.title}
                    {item.children.length > 0 && (
                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        className={`transition-transform duration-200 ${
                          mobileSubmenu === idx ? "rotate-180" : ""
                        }`}
                        style={{ color: COLORS.textMuted }}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {mobileSubmenu === idx && item.children.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                        style={{ backgroundColor: "#fafafa" }}
                      >
                        {(item.children as readonly { title: string; href: string; children?: readonly { title: string; href: string }[] }[]).map(
                          (sub, sIdx) => (
                            <div key={sIdx}>
                              {"children" in sub && sub.children && sub.children.length > 0 ? (
                                <>
                                  <button
                                    className="flex items-center justify-between w-full px-7 py-2.5 text-[14px] text-left"
                                    style={{ color: COLORS.text }}
                                    onClick={() =>
                                      setMobileSubSubmenu(
                                        mobileSubSubmenu === `${idx}-${sIdx}`
                                          ? null
                                          : `${idx}-${sIdx}`
                                      )
                                    }
                                  >
                                    {sub.title}
                                    <ChevronRight
                                      size={14}
                                      aria-hidden="true"
                                      className={`transition-transform duration-200 ${
                                        mobileSubSubmenu === `${idx}-${sIdx}`
                                          ? "rotate-90"
                                          : ""
                                      }`}
                                      style={{ color: COLORS.textMuted }}
                                    />
                                  </button>
                                  <AnimatePresence>
                                    {mobileSubSubmenu === `${idx}-${sIdx}` && (
                                      <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                        style={{ backgroundColor: "#f3f3f3" }}
                                      >
                                        {sub.children.map((child, cIdx) => (
                                          <a
                                            key={cIdx}
                                            href={child.href}
                                            className="block px-9 py-2 text-[13px]"
                                            style={{ color: COLORS.textMuted }}
                                          >
                                            {child.title}
                                          </a>
                                        ))}
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </>
                              ) : (
                                <a
                                  href={sub.href}
                                  className="block px-7 py-2.5 text-[14px]"
                                  style={{ color: COLORS.textMuted }}
                                >
                                  {sub.title}
                                </a>
                              )}
                            </div>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
