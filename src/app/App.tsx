import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, Search, ShoppingCart, ChevronLeft } from "lucide-react";

// ── Inline SVG icons matching the Figma design ──────────────────────────────

function BookCheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 2.5h12a1.5 1.5 0 011.5 1.5v15A1.5 1.5 0 0116 20.5H4A1.5 1.5 0 012.5 19V4A1.5 1.5 0 014 2.5z"
        stroke="#885926"
        strokeWidth="1"
      />
      <path d="M8 12l2.5 2.5L14.5 10" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2.5C8.41 2.5 5.5 5.41 5.5 9c0 5.25 6.5 12 6.5 12s6.5-6.75 6.5-12c0-3.59-2.91-6.5-6.5-6.5z"
        stroke="#885926"
        strokeWidth="1"
      />
      <circle cx="12" cy="9" r="2.5" stroke="#885926" strokeWidth="1" />
      <path d="M6.5 20.5c0 .83 2.46 1.5 5.5 1.5s5.5-.67 5.5-1.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function BookOpenIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 4.5V19.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      <path d="M3.5 4.5V18" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      <path d="M20.5 4.5V18" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      <path d="M12 19.5c0 0 2.5-1 8.5-1.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      <path d="M12 19.5c0 0-2.5-1-8.5-1.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      <path d="M12 6.5c0 0 2.5-1.5 8.5-2" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      <path d="M12 6.5c0 0-2.5-1.5-8.5-2" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

// ── Reusable product card shapes ─────────────────────────────────────────────

function WhiteCard({ h = 300 }: { h?: number }) {
  return <div className="bg-white shrink-0" style={{ height: h }} />;
}

function GrayCard({ h = 300 }: { h?: number }) {
  return <div className="bg-[#f3f3f3] shrink-0" style={{ height: h }} />;
}

// ── Logo placeholder (no image file on disk) ─────────────────────────────────

function LogoMark({ light = false }: { light?: boolean }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: 45, width: 92 }}
    >
      <svg viewBox="0 0 92 45" fill="none" className="w-full h-full">
        <text
          x="46"
          y="30"
          textAnchor="middle"
          fontFamily="Playfair Display, serif"
          fontSize="18"
          fontWeight="400"
          fill={light ? "#ffffff" : "#885926"}
        >
          مكتبة
        </text>
        <text
          x="46"
          y="44"
          textAnchor="middle"
          fontFamily="Playfair Display, serif"
          fontSize="9"
          fill={light ? "rgba(255,253,245,0.8)" : "#867461"}
          letterSpacing="1"
        >
          BOOKSTORE
        </text>
      </svg>
    </div>
  );
}

function LogoMarkLarge({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center" style={{ height: 66, width: 135 }}>
      <svg viewBox="0 0 135 66" fill="none" className="w-full h-full">
        <text
          x="10"
          y="38"
          fontFamily="Playfair Display, serif"
          fontSize="24"
          fontWeight="400"
          fill={light ? "#ffffff" : "#885926"}
        >
          مكتبة
        </text>
        <text
          x="10"
          y="56"
          fontFamily="Playfair Display, serif"
          fontSize="12"
          fill={light ? "rgba(255,253,245,0.8)" : "#867461"}
          letterSpacing="1"
        >
          BOOKSTORE
        </text>
      </svg>
    </div>
  );
}

// ── Section heading pattern ──────────────────────────────────────────────────

function SectionHeader({
  title,
  viewAll = false,
  light = false,
}: {
  title: string;
  viewAll?: boolean;
  light?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between mb-3">
      <p
        className="font-['Playfair_Display',serif] text-[25px] leading-[0.95] tracking-[-1.5px]"
        style={{ color: light ? "#ffffff" : "#111111" }}
      >
        {title}
      </p>
      {viewAll && (
        <span
          className="font-['Playfair_Display',serif] text-[10px] leading-[1.53] tracking-[-0.3px]"
          style={{ color: light ? "#ffffff" : "#111111" }}
        >
          View all
        </span>
      )}
    </div>
  );
}

// ── FAQ Item ─────────────────────────────────────────────────────────────────

function FaqItem({ question, open, onToggle }: { question: string; open: boolean; onToggle: () => void }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full bg-[#f3f3f3] h-[41px] flex items-center justify-between px-4"
        style={{ marginBottom: 1 }}
      >
        <p className="font-['Playfair_Display',serif] text-black text-[20px] leading-[0.95] tracking-[-1.2px]">
          {question}
        </p>
        <ChevronDown
          size={15}
          className="text-[#1D1B20] transition-transform duration-200 shrink-0"
          style={{ transform: open ? "rotate(0deg)" : "rotate(180deg)" }}
        />
      </button>
      {open && (
        <div className="bg-[#f3f3f3] px-4 py-3 border-t border-[#e0e0e0]" style={{ marginBottom: 1 }}>
          <p className="font-['Playfair_Display',serif] text-black text-[14px] leading-[1.5]">
            Our checkout process is simple and secure. Add items to your cart, proceed to checkout,
            enter your shipping details, and complete payment. You will receive a confirmation email once your order is placed.
          </p>
        </div>
      )}
    </div>
  );
}

// ── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = ["Aqeedah", "Hadith", "Fiqh"];

  const faqItems = [
    "How does checkout work?",
    "How does checkout work?",
    "How does checkout work?",
    "How does checkout work?",
    "How does checkout work?",
  ];

  return (
    /* Outer centering shell – on wide screens the phone sits centered */
    <div className="min-h-screen bg-[#e8e4de] flex items-start justify-center py-0">
      {/* Phone frame – 393 px wide, matches the Figma iPhone 16 artboard */}
      <div
        className="relative bg-[#fffdf5] overflow-x-hidden"
        style={{ width: 393, minHeight: "100vh" }}
      >
        {/* ── NOTIFICATION BAR ─────────────────────────────────────── */}
        <div className="bg-[#885926] h-10 w-full flex items-center px-4 gap-2">
          <p
            className="flex-1 text-white text-center font-['Playfair_Display',serif] text-[12px] tracking-[-0.72px] leading-[0.95]"
            dir="auto"
          >
            International order fees added on whatspp
          </p>
          <div className="flex items-center gap-1 shrink-0">
            <ChevronDown size={11} className="text-white -rotate-90" />
            <span className="text-white text-[12px] font-['Playfair',serif]">INR</span>
            <span className="text-white text-[10px]">₹</span>
          </div>
        </div>

        {/* ── HEADER ───────────────────────────────────────────────── */}
        <div
          className="sticky top-0 z-50 flex items-center justify-between px-4"
          style={{
            height: 57,
            background: "rgba(255,253,245,0.8)",
            backdropFilter: "blur(8px)",
            borderBottom: "0.5px solid #a2a2a2",
          }}
        >
          <div className="flex items-center gap-4">
            <Menu size={20} className="text-[#111111]" />
            <Search size={20} className="text-[#111111]" />
          </div>
          <LogoMark />
          <div className="flex items-center gap-4">
            <ShoppingCart size={20} className="text-[#111111]" />
            {/* Globe/language icon */}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8.5" stroke="#111111" strokeWidth="1.2" />
              <path d="M10 1.5C10 1.5 7 5 7 10s3 8.5 3 8.5M10 1.5C10 1.5 13 5 13 10s-3 8.5-3 8.5" stroke="#111111" strokeWidth="1.2" />
              <path d="M1.5 10h17M2 7h16M2 13h16" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* ── HERO SECTION ─────────────────────────────────────────── */}
        <div className="bg-[#fffdf5] px-[80px] pt-[78px] pb-6" style={{ position: "relative" }}>
          <p
            className="font-['Playfair_Display',serif] font-normal text-[#885926] text-[40px] leading-[0.95] tracking-[-2.4px]"
            style={{ wordBreak: "break-word" }}
          >
            Finally afford
          </p>
          <p
            className="font-['Playfair_Display',serif] font-normal italic text-[#885926] text-[42px] leading-[0.95] tracking-[-2.52px] text-center mt-1"
            style={{ wordBreak: "break-word" }}
          >
            Beneficial knowledge
          </p>
          <p
            className="font-['Playfair_Display',serif] font-normal text-[18px] leading-[0.95] tracking-[-1.08px] mt-[52px]"
            style={{ color: "rgba(128,96,62,0.76)" }}
            dir="auto"
          >
            Knowledge is better than wealth{" "}
          </p>

          {/* Shop now */}
          <div className="flex justify-center mt-[44px]">
            <button className="bg-[#885926] text-white font-['Playfair_Display',serif] font-normal text-[22px] leading-[0.95] tracking-[-1.32px] h-[39px] px-[61px] flex items-center">
              Shop now
            </button>
          </div>

          {/* Browse add-ons */}
          <p
            className="font-['Playfair_Display',serif] font-normal text-[#885926] text-[22px] leading-[0.95] tracking-[-1.32px] text-center mt-[57px]"
          >
            Browse add-ons
          </p>
        </div>

        {/* ── FEATURES BAR ─────────────────────────────────────────── */}
        <div
          className="bg-white w-full flex items-center justify-around px-4"
          style={{ height: 46, borderTop: "0.5px solid rgba(162,162,162,0.39)", borderBottom: "0.5px solid rgba(162,162,162,0.39)" }}
        >
          <div className="flex items-center gap-2">
            <BookCheckIcon />
            <p className="font-['Playfair_Display',serif] text-[#885926] text-[10px] leading-[0.95] tracking-[-0.6px] text-center whitespace-nowrap">
              High quality prints
            </p>
          </div>
          <div className="flex items-center gap-2">
            <LocationPinIcon />
            <p className="font-['Playfair_Display',serif] text-[#885926] text-[10px] leading-[0.95] tracking-[-0.6px] text-center whitespace-nowrap">
              International shipping
            </p>
          </div>
          <div className="flex items-center gap-2">
            <BookOpenIcon />
            <p className="font-['Playfair_Display',serif] text-[#885926] text-[10px] leading-[0.95] tracking-[-0.6px] text-center whitespace-nowrap">
              affordable prices
            </p>
          </div>
        </div>

        {/* ── BROWN SECTION ────────────────────────────────────────── */}
        <div className="bg-[#885926] w-full" style={{ paddingBottom: 40 }}>
          {/* Category tabs */}
          <div className="flex justify-around pt-8 px-4 mb-6">
            {categories.map((cat, i) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(i)}
                className="font-['Playfair_Display',serif] font-normal text-[18px] leading-[0.95] tracking-[-1.08px] whitespace-nowrap transition-opacity"
                style={{ color: "#ffffff", opacity: activeCategory === i ? 1 : 0.7 }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Horizontal product cards scroll */}
          <div className="flex gap-3 overflow-x-auto px-[26px] pb-2 mb-10 no-scrollbar">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-white h-[122px] w-[107px] shrink-0" />
            ))}
          </div>

          {/* Our picks heading */}
          <div className="px-4 mb-4">
            {/* Arrow nav */}
            <div className="flex justify-center gap-4 mb-3">
              <button className="flex items-center justify-center">
                <ChevronLeft size={10} className="text-[#FEF7FF]" />
              </button>
              <button className="flex items-center justify-center">
                <ChevronRight size={10} className="text-[#FEF7FF]" />
              </button>
            </div>
            <p className="font-['Playfair_Display',serif] font-normal text-white text-[20px] leading-[0.95] tracking-[-1.2px] text-center">
              Our picks
            </p>
            <p className="font-['Playfair_Display',serif] font-normal text-[18px] leading-[0.95] tracking-[-1.08px] text-center mt-2 whitespace-nowrap"
               style={{ color: "rgba(255,253,245,0.69)" }}>
              Learn what we recommend for you
            </p>
          </div>

          {/* 2-column product grid (3 rows = 6 cards) */}
          <div className="grid grid-cols-2 gap-3 px-[19px]">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white" style={{ height: 300 }} />
            ))}
          </div>

          {/* See all button */}
          <div className="flex justify-center mt-8">
            <button
              className="font-['Playfair_Display',serif] font-normal text-[#f3f3f3] text-[18px] leading-[0.95] tracking-[-1.08px] h-[28px] px-8 flex items-center"
              style={{ border: "0.4px solid white" }}
            >
              See all
            </button>
          </div>
        </div>

        {/* ── ADDITIONAL ITEMS (cream section) ────────────────────── */}
        <div className="bg-[#fffdf5] px-[19px] pt-8 pb-10">
          <SectionHeader title="Additional Items" viewAll />
          <p
            className="font-['Playfair_Display',serif] font-normal text-[18px] leading-[0.95] tracking-[-1.08px] mb-4"
            style={{ color: "rgba(128,96,62,0.76)" }}
          >
            Buy that which benefits you
          </p>

          {/* Horizontal product images */}
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar" style={{ marginRight: -19, paddingRight: 19 }}>
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white shrink-0" style={{ height: 237, width: 150 }} />
            ))}
          </div>

          {/* Divider */}
          <div className="mt-10 mb-8" style={{ height: 0.4, background: "#885926" }} />

          {/* Category filters */}
          <div className="flex justify-center gap-6 mb-3">
            {["Clothes", "Salafi pen"].map((c) => (
              <span key={c} className="font-['Playfair_Display',serif] font-normal text-[#867461] text-[18px] leading-[0.95] tracking-[-1.08px]">
                {c}
              </span>
            ))}
          </div>
          <div className="flex justify-center gap-5 mb-8">
            {["Urdu", "English", "Arabic"].map((l) => (
              <span key={l} className="font-['Playfair_Display',serif] font-normal text-[#867461] text-[18px] leading-[0.95] tracking-[-1.08px]">
                {l}
              </span>
            ))}
          </div>

          {/* 2-column gray product grid (3 rows) */}
          <div className="grid grid-cols-2 gap-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-[#f3f3f3]" style={{ height: 300 }} />
            ))}
          </div>

          {/* Shop now */}
          <div className="flex justify-center mt-10">
            <button className="bg-[#885926] text-white font-['Playfair_Display',serif] font-normal text-[22px] leading-[0.95] tracking-[-1.32px] h-[39px] px-[61px] flex items-center">
              Shop now
            </button>
          </div>
        </div>

        {/* ── MENU / FOOTER NAV ────────────────────────────────────── */}
        <div className="bg-[#885926] w-full px-[19px] py-10">
          <LogoMarkLarge light />
          <div className="mt-8">
            <p className="font-['Playfair_Display',serif] font-normal text-white text-[18px] leading-[0.95] tracking-[-1.08px] text-center mb-8">
              Pages
            </p>
            {/* Placeholder nav links */}
            <div className="space-y-4 mb-8 text-center">
              {["Home", "Shop", "About", "Contact"].map((page) => (
                <p
                  key={page}
                  className="font-['Playfair_Display',serif] font-normal text-[rgba(255,253,245,0.75)] text-[16px] leading-[0.95] tracking-[-0.96px]"
                >
                  {page}
                </p>
              ))}
            </div>
            <p className="font-['Playfair_Display',serif] font-normal text-white text-[18px] leading-[0.95] tracking-[-1.08px] text-center mb-6">
              Help
            </p>
            <div className="space-y-4 text-center">
              {["Shipping Info", "Returns", "FAQ", "WhatsApp Support"].map((h) => (
                <p
                  key={h}
                  className="font-['Playfair_Display',serif] font-normal text-[rgba(255,253,245,0.75)] text-[16px] leading-[0.95] tracking-[-0.96px]"
                >
                  {h}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* ── DARK TEAL FOOTER ─────────────────────────────────────── */}
        <div className="bg-[#0d282b] w-full px-[19px] pt-8 pb-12">
          {/* Additional Items carousel */}
          <SectionHeader title="Additional Items" viewAll light />

          {/* Carousel with prev/next buttons */}
          <div className="relative flex items-center gap-2 mb-10">
            <button className="bg-white rounded-full shadow flex items-center justify-center shrink-0" style={{ width: 15, height: 15 }}>
              <ChevronLeft size={8} className="text-[#1D1B20]" />
            </button>
            <div className="flex gap-3 overflow-x-auto no-scrollbar">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-[#f3f3f3] shrink-0" style={{ height: 201, width: 149 }} />
              ))}
            </div>
            <button className="bg-white rounded-full shadow flex items-center justify-center shrink-0" style={{ width: 15, height: 15 }}>
              <ChevronRight size={8} className="text-[#1D1B20]" />
            </button>
          </div>

          {/* FAQ */}
          <p className="font-['Playfair_Display',serif] font-normal text-[#dfaf23] text-[40px] leading-[0.95] tracking-[-2.4px] text-center mb-6">
            FAQ
          </p>

          <div className="space-y-[2px] mx-[23px]">
            {faqItems.map((q, i) => (
              <FaqItem
                key={i}
                question={q}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
