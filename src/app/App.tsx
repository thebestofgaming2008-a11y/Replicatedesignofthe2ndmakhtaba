import { useState } from "react";
import svgPaths from "../imports/IPhone16114-1/svg-er0pvt7lmo";
import imgLogo from "../imports/IPhone16114-1/1f078f66de22c88e6a47117f073725c1cd3c2f37.png";
import imgLogo1 from "../imports/IPhone16114-1/ccf3dd809cdd1e0e30aa10dec48a2c7fd354e933.png";

// ── Exact SVG icons from Figma paths ─────────────────────────

// Hamburger – exact path from p22163d80, normalized from [26.5,20.5]–[42.5,32.5]
function HamburgerIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
      <path d="M0 0H16V1.333H0V0ZM0 5.333H16V6.667H0V5.333ZM0 10.667H16V12H0V10.667Z" fill="#111111" />
    </svg>
  );
}

// Search – exact from p1b26d480, normalised from [54.5,20.5]–[66.5,32.5]
function SearchIcon() {
  return (
    <svg width="12" height="12" viewBox="54.5 20.5 12 12" fill="none">
      <path d={svgPaths.p1b26d480} fill="#111111" />
    </svg>
  );
}

// Cart – exact from p3b9806e0, normalised from [351.5,20.5]–[362.5,32.5]
function CartIcon() {
  return (
    <svg width="11" height="12" viewBox="351.5 20.5 11 12" fill="none">
      <path d={svgPaths.p3b9806e0} fill="#111111" />
    </svg>
  );
}

// Person – exact from p36724df0, normalised from [328.5,20.5]–[339.5,32.5]
function PersonIcon() {
  return (
    <svg width="11" height="12" viewBox="328.5 20.5 11 12" fill="none">
      <path d={svgPaths.p36724df0} fill="#111111" />
    </svg>
  );
}

// Dropdown arrow (chevron) – exact from p243c3400: "M0 3.125L3.125 0L6.25 3.125H0Z"
// In Figma, all FAQ arrows are rotate(180deg) = pointing UP = "close" indicator
// Closed state = rotate(180deg) = up; Open state = rotate(0) = down (original triangle points down)
function DropdownArrow({ open = false }: { open?: boolean }) {
  return (
    <svg
      width="10" height="5" viewBox="0 0 6.25 3.125" fill="none"
      style={{
        transition: "transform 0.2s",
        transform: open ? "rotate(0deg)" : "rotate(180deg)",
        display: "block",
        flexShrink: 0,
      }}
    >
      <path d={svgPaths.p243c3400} fill="#1D1B20" />
    </svg>
  );
}

// Forward arrow – exact from pe751d80
function ForwardArrow({ color = "#1D1B20", size = 10 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 6.66667 6.66667" fill="none">
      <path d={svgPaths.pe751d80} fill={color} />
    </svg>
  );
}

// Back arrow (rotated forward arrow)
function BackArrow({ color = "#1D1B20", size = 10 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 6.66667 6.66667" fill="none" style={{ transform: "rotate(180deg)" }}>
      <path d={svgPaths.pe751d80} fill={color} />
    </svg>
  );
}

// Book Check Icon – p2a2acd80 + pcc7f700
function BookCheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 17 19" fill="none">
      <path d={svgPaths.p2a2acd80} stroke="#885926" strokeWidth="1" />
      <path d={svgPaths.pcc7f700} stroke="#885926" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

// Location Icon – p6d489c0 (ellipse bottom) + p71209c0 (pin body) + circle
function LocationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 18 22" fill="none">
      <path d={svgPaths.p71209c0} stroke="#885926" strokeWidth="1" />
      <circle cx="8" cy="8" r="3.5" stroke="#885926" strokeWidth="1" />
      <path d={svgPaths.p6d489c0} stroke="#885926" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

// Book Open Icon – constructed from Figma's 3 vertical lines + arc paths
function BookOpenIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Center spine */}
      <line x1="12" y1="6.5" x2="12" y2="17.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      {/* Left edge */}
      <line x1="3.5" y1="6.5" x2="3.5" y2="17.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      {/* Right edge */}
      <line x1="20.5" y1="6.5" x2="20.5" y2="17.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      {/* Top right arc */}
      <path d={svgPaths.p2d8c5300} stroke="#885926" strokeWidth="1" strokeLinecap="round" transform="translate(11.5 4.5)" />
      {/* Top left arc (mirrored) */}
      <path d={svgPaths.p2d8c5300} stroke="#885926" strokeWidth="1" strokeLinecap="round" transform="translate(3.5 4.5) scale(-1,1) translate(-9.5,0)" />
      {/* Bottom right arc */}
      <path d={svgPaths.p2d8c5300} stroke="#885926" strokeWidth="1" strokeLinecap="round" transform="translate(11.5 17.5) scale(1,-1) translate(0,-3)" />
      {/* Bottom left arc (mirrored) */}
      <path d={svgPaths.p2d8c5300} stroke="#885926" strokeWidth="1" strokeLinecap="round" transform="translate(3.5 17.5) scale(-1,-1) translate(-9.5,-3)" />
    </svg>
  );
}

// Currency info in notification bar
function CurrencyInfo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
      <div style={{ transform: "rotate(-90deg)", display: "flex" }}>
        <svg width="7" height="9" viewBox="0 0 2.91667 4.58333" fill="none">
          <path d={svgPaths.p15944280} fill="white" />
        </svg>
      </div>
      <span style={{ fontFamily: "'Playfair', serif", color: "white", fontSize: 12, fontVariationSettings: '"opsz" 12, "wdth" 100', lineHeight: 1.684, whiteSpace: "nowrap" }}>INR</span>
      <span style={{ fontFamily: "'Philosopher', 'Noto Sans', sans-serif", color: "white", fontSize: 10 }}>₹</span>
    </div>
  );
}

// ── Header ───────────────────────────────────────────────────

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "#fffdf5" }}>
      {/* Notification bar – exact: h-[40px], bg #885926 */}
      <div style={{
        backgroundColor: "#885926",
        color: "white",
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        position: "relative",
      }}>
        <div style={{ flex: 1, textAlign: "center" }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 12, letterSpacing: "-0.72px" }}>
            International order fees added on whatspp
          </span>
        </div>
        <CurrencyInfo />
      </div>
      {/* Nav bar – exact: h-[57px], bg rgba(255,253,245,0.8), border bottom #A2A2A2 0.5px */}
      <div style={{
        backgroundColor: "rgba(255,253,245,0.8)",
        borderBottom: "0.5px solid #A2A2A2",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 14px",
        height: 57,
      }}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", alignItems: "center" }}
        >
          <HamburgerIcon />
        </button>
        {/* Logo: exact h-[45px] w-[92px] centered */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", height: 45, width: 92 }}>
          <img src={imgLogo} alt="Logo" style={{ height: "100%", width: "100%", objectFit: "contain" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: 2 }}>
            <SearchIcon />
          </button>
          <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: 2 }}>
            <CartIcon />
          </button>
          <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", padding: 2 }}>
            <PersonIcon />
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav style={{
          position: "absolute", left: 0, right: 0,
          backgroundColor: "#fffdf5",
          borderBottom: "0.5px solid #A2A2A2",
          zIndex: 40,
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}>
          {["Home", "Shop", "Aqeedah", "Hadith", "Fiqh", "Additional Items", "Help"].map((item) => (
            <a
              key={item} href="#"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "11px 16px",
                borderBottom: "0.5px solid rgba(162,162,162,0.3)",
                fontFamily: "'Playfair Display', serif",
                fontSize: 18,
                color: "#111",
                textDecoration: "none",
                letterSpacing: "-1.08px",
              }}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

// ── Hero ─────────────────────────────────────────────────────
// Figma: "Finally afford" top 208, "Beneficial knowledge" top 245
// "Knowledge is better" top 307, ShopNow top 351, "Browse add-ons" top 408

function Hero() {
  return (
    <section style={{ backgroundColor: "#fffdf5", paddingTop: 36, paddingBottom: 0, textAlign: "center" }}>
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        color: "#885926",
        fontSize: 40,
        fontWeight: 400,
        lineHeight: 0.95,
        letterSpacing: "-2.4px",
        margin: "0 auto 0",
        width: 210,
      }}>
        Finally afford
      </h1>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: "italic",
        color: "#885926",
        fontSize: 42,
        fontWeight: 400,
        lineHeight: 0.95,
        letterSpacing: "-2.52px",
        margin: "0 0 20px",
        whiteSpace: "nowrap",
      }}>
        Beneficial knowledge
      </h2>
      <p style={{
        fontFamily: "'Playfair Display', serif",
        color: "rgba(128,96,62,0.76)",
        fontSize: 18,
        lineHeight: 0.95,
        letterSpacing: "-1.08px",
        margin: "0 auto 20px",
        width: 229,
      }}>
        Knowledge is better than wealth
      </p>
      {/* Shop now button: exact 209×39px */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <button style={{
          backgroundColor: "#885926",
          color: "white",
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: "-1.32px",
          padding: 0,
          border: "none",
          cursor: "pointer",
          width: 209,
          height: 39,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          Shop now
        </button>
        <button style={{
          backgroundColor: "transparent",
          color: "#885926",
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: "-1.32px",
          padding: "6px 0",
          border: "none",
          cursor: "pointer",
        }}>
          Browse add-ons
        </button>
      </div>
    </section>
  );
}

// ── Features Bar ──────────────────────────────────────────────
// Figma: bg-white, h-[46px], border 0.5px rgba(162,162,162,0.39)
// Icons at top 546 (relative to section start ~542), text at top 570
// Icon positions: left 68px, 200px, 314.5px (in 393px space)
// Text: "High quality prints" centred at 82px, "International shipping" at 200px, "affordable prices" at 314.5px

function FeaturesBar() {
  return (
    <div style={{
      backgroundColor: "white",
      borderTop: "0.5px solid rgba(162,162,162,0.39)",
      borderBottom: "0.5px solid rgba(162,162,162,0.39)",
      height: 46,
      display: "flex",
      alignItems: "center",
    }}>
      <div style={{ display: "flex", width: "100%", alignItems: "center" }}>
        {/* Feature 1: centred at ~82/393 = 20.9% */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <BookCheckIcon />
          <span style={{ fontFamily: "'Playfair Display', serif", color: "#885926", fontSize: 10, letterSpacing: "-0.6px", lineHeight: 0.95, whiteSpace: "nowrap" }}>
            High quality prints
          </span>
        </div>
        {/* Feature 2: centred at ~200/393 = 50.9% */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <LocationIcon />
          <span style={{ fontFamily: "'Playfair Display', serif", color: "#885926", fontSize: 10, letterSpacing: "-0.6px", lineHeight: 0.95, whiteSpace: "nowrap" }}>
            International shipping
          </span>
        </div>
        {/* Feature 3: centred at ~314.5/393 = 80% */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <BookOpenIcon />
          <span style={{ fontFamily: "'Playfair Display', serif", color: "#885926", fontSize: 10, letterSpacing: "-0.6px", lineHeight: 0.95, whiteSpace: "nowrap" }}>
            affordable prices
          </span>
        </div>
      </div>
    </div>
  );
}

// ── Category Tabs + Cards ─────────────────────────────────────
// Figma: bg #885926, tab labels at left 48/171/295 in 393px space
// Cards: top 676, left 26, width 107, height 122; next at left 142, 258, 374
// Gap between 26→142 = 116, card width 107, so gap = 9px
// Pagination: 2 forward arrows at ~182px and 202px

function CategorySection() {
  const [active, setActive] = useState("Aqeedah");
  const tabs = ["Aqeedah", "Hadith", "Fiqh"];
  return (
    <section style={{ backgroundColor: "#885926", borderTop: "0.5px solid #A2A2A2" }}>
      {/* Tab row: exact positions from Figma */}
      <div style={{ display: "flex", padding: "0 0" }}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            style={{
              flex: 1,
              fontFamily: "'Playfair Display', serif",
              fontSize: 18,
              fontWeight: 400,
              letterSpacing: "-1.08px",
              lineHeight: 0.95,
              padding: "13px 0 11px",
              background: "none",
              border: "none",
              borderBottom: active === tab ? "2px solid white" : "2px solid transparent",
              color: active === tab ? "white" : "rgba(255,253,245,0.6)",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Horizontal scroll: cards 107×122 */}
      <div style={{
        display: "flex",
        gap: 9,
        padding: "12px 26px 18px",
        overflowX: "auto",
        scrollbarWidth: "none",
      }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} style={{ flexShrink: 0, backgroundColor: "white", width: 107, height: 122 }} />
        ))}
      </div>
      {/* Pagination arrows – exact: left arrow at 182px, right at 202px (in 393px → ~46%/51%) */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 10, paddingBottom: 16 }}>
        <div style={{
          backgroundColor: "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <BackArrow color="#FEF7FF" size={10} />
        </div>
        <div style={{
          backgroundColor: "transparent",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <ForwardArrow color="#FEF7FF" size={10} />
        </div>
      </div>
    </section>
  );
}

// ── Our Picks ─────────────────────────────────────────────────
// Figma: cards at left 19 & 200, width 174, height 300
// Gap: 200 - (19 + 174) = 7px
// "Our picks" top 881, "Learn what..." top 903
// See all: bg transparent, border 0.4px white, h 28px, w 107px, left 143px

function OurPicks() {
  return (
    <section style={{ backgroundColor: "#885926", paddingBottom: 52 }}>
      <div style={{ padding: "0 19px" }}>
        {/* Heading */}
        <div style={{ textAlign: "center", paddingTop: 16, marginBottom: 14 }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            color: "white",
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: "-1.2px",
            lineHeight: 0.95,
            margin: "0 0 4px",
          }}>
            Our picks
          </h2>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            color: "rgba(255,253,245,0.69)",
            fontSize: 18,
            letterSpacing: "-1.08px",
            lineHeight: 0.95,
            margin: 0,
            whiteSpace: "nowrap",
          }}>
            Learn what we recommend for you
          </p>
        </div>
        {/* 2-column grid: gap 7px, each card 174px wide in 393-38=355px container */}
        <div style={{ display: "grid", gridTemplateColumns: "174px 174px", gap: "8px 7px", justifyContent: "center" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ backgroundColor: "white", height: 300 }} />
          ))}
        </div>
        {/* See all: border 0.4px white, h 28, w 107 */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
          <button style={{
            border: "0.4px solid white",
            color: "#f3f3f3",
            fontFamily: "'Playfair Display', serif",
            fontSize: 18,
            letterSpacing: "-1.08px",
            lineHeight: 0.95,
            height: 28,
            width: 107,
            background: "transparent",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            See all
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Additional Items (cream background) ───────────────────────
// Figma: bg #fffdf5, "Additional Items" left 19px, "View all" left 339px
// "Buy that which benefits you" centred at 116.5px (left), text-[#867461]
// Product images: w 150, h 237, at left 19/179/339

function AdditionalItemsCream() {
  return (
    <section style={{ backgroundColor: "#fffdf5", paddingTop: 24, paddingBottom: 0 }}>
      <div style={{ padding: "0 19px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 2 }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            color: "black",
            fontSize: 25,
            fontWeight: 400,
            letterSpacing: "-1.5px",
            lineHeight: 0.95,
            margin: 0,
            whiteSpace: "nowrap",
          }}>
            Additional Items
          </h2>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            color: "black",
            fontSize: 10,
            letterSpacing: "-0.3px",
            lineHeight: 1.53,
            whiteSpace: "nowrap",
          }}>
            View all
          </span>
        </div>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          color: "#867461",
          fontSize: 18,
          letterSpacing: "-1.08px",
          lineHeight: 0.95,
          margin: "0 0 16px",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}>
          Buy that which benefits you
        </p>
        {/* Horizontal scroll: 150×237 cards, gap ~10px matching left 19→179=160, 179-150=29 but 10px gap */}
        <div style={{ display: "flex", gap: 10, overflowX: "auto", scrollbarWidth: "none", paddingBottom: 24 }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ flexShrink: 0, backgroundColor: "white", width: 150, height: 237 }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Filters + Filtered Grid ───────────────────────────────────
// Figma: divider line left 30px width 334px, stroke #885926 0.4px
// Category: "Clothes" / "Salafi pen", gap 16px, centred at ~126px + offset
// Language: "Urdu"/"English"/"Arabic", gap 18px, centred at ~109px
// Cards: bg #f3f3f3, w 174, h 300, same grid as Our Picks
// Shop now button: bg #885926, 209×39, centred

function FilteredGrid() {
  const [activeCategory, setActiveCategory] = useState("Clothes");
  const [activeLang, setActiveLang] = useState("English");
  const categories = ["Clothes", "Salafi pen"];
  const languages = ["Urdu", "English", "Arabic"];

  return (
    <section style={{ backgroundColor: "#fffdf5", paddingBottom: 52 }}>
      {/* Divider: left 30px in section, width 334px (section is 393px wide) */}
      <div style={{ margin: "18px 11px 14px", borderTop: "0.4px solid #885926" }} />
      <div style={{ padding: "0 19px" }}>
        {/* Category filter */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 8 }}>
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 18,
                letterSpacing: "-1.08px",
                lineHeight: 0.95,
                color: activeCategory === c ? "#885926" : "#867461",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontWeight: activeCategory === c ? 700 : 400,
                whiteSpace: "nowrap",
              }}
            >
              {c}
            </button>
          ))}
        </div>
        {/* Language filter */}
        <div style={{ display: "flex", justifyContent: "center", gap: 18, marginBottom: 18 }}>
          {languages.map(l => (
            <button
              key={l}
              onClick={() => setActiveLang(l)}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 18,
                letterSpacing: "-1.08px",
                lineHeight: 0.95,
                color: activeLang === l ? "#885926" : "#867461",
                background: "none",
                border: "none",
                cursor: "pointer",
                fontWeight: activeLang === l ? 700 : 400,
                whiteSpace: "nowrap",
              }}
            >
              {l}
            </button>
          ))}
        </div>
        {/* Grid: same as Our Picks but #f3f3f3 */}
        <div style={{ display: "grid", gridTemplateColumns: "174px 174px", gap: "8px 7px", justifyContent: "center" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ backgroundColor: "#f3f3f3", height: 300 }} />
          ))}
        </div>
        {/* Shop now */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
          <button style={{
            backgroundColor: "#885926",
            color: "white",
            fontFamily: "'Playfair Display', serif",
            fontSize: 22,
            fontWeight: 400,
            letterSpacing: "-1.32px",
            lineHeight: 0.95,
            padding: 0,
            border: "none",
            cursor: "pointer",
            width: 209,
            height: 39,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Footer Menu ───────────────────────────────────────────────
// Figma: bg #885926, h 408px
// Logo: left 19px, top ~4090, h 66, w 135
// "Pages" centred at left 221px (from left of 393px) top ~4090
// "Help" centred at left 217.5px top ~4270 (180px below Pages)

function FooterMenu() {
  return (
    <section style={{ backgroundColor: "#885926", minHeight: 408, padding: "48px 19px 0" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        {/* Logo: exact 135×66 */}
        <div style={{ width: 135, height: 66, flexShrink: 0 }}>
          <img
            src={imgLogo1}
            alt="Logo"
            style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "left center" }}
          />
        </div>
        {/* Pages heading */}
        <p style={{
          fontFamily: "'Playfair Display', serif",
          color: "white",
          fontSize: 18,
          letterSpacing: "-1.08px",
          lineHeight: 0.95,
          margin: 0,
          textAlign: "center",
        }}>
          Pages
        </p>
      </div>
      {/* Help heading – 180px below logo row */}
      <p style={{
        fontFamily: "'Playfair Display', serif",
        color: "white",
        fontSize: 18,
        letterSpacing: "-1.08px",
        lineHeight: 0.95,
        margin: "180px 0 0",
        textAlign: "center",
      }}>
        Help
      </p>
    </section>
  );
}

// ── Footer Carousel (dark bg) ─────────────────────────────────
// Figma: bg #0d282b, h 797px total
// "Additional Items" left 115px, "View all" left 348px
// Cards: bg #f3f3f3, w 149, h 201, at left -42/122/286
// Prev/Next circle buttons: 15px, at left 12 and 366, top 4608
// Arrow inside: 10px, at left 15/369

function FooterCarousel() {
  return (
    <section style={{ backgroundColor: "#0d282b", padding: "24px 0" }}>
      <div style={{ padding: "0 19px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 14 }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            color: "white",
            fontSize: 25,
            fontWeight: 400,
            letterSpacing: "-1.5px",
            lineHeight: 0.95,
            margin: 0,
            whiteSpace: "nowrap",
          }}>
            Additional Items
          </h2>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            color: "white",
            fontSize: 10,
            letterSpacing: "-0.3px",
            lineHeight: 1.53,
            whiteSpace: "nowrap",
          }}>
            View all
          </span>
        </div>
        {/* Scrollable cards with prev/next buttons overlaid */}
        <div style={{ position: "relative" }}>
          {/* Prev circle button */}
          <div style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: "white",
            borderRadius: "50%",
            width: 15,
            height: 15,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 1px 0px rgba(0,0,0,0.25)",
            cursor: "pointer",
          }}>
            <BackArrow color="#1D1B20" size={8} />
          </div>
          {/* Card strip */}
          <div style={{
            display: "flex",
            gap: 10,
            overflowX: "auto",
            scrollbarWidth: "none",
            paddingBottom: 4,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} style={{ flexShrink: 0, backgroundColor: "#f3f3f3", width: 149, height: 201 }} />
            ))}
          </div>
          {/* Next circle button */}
          <div style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            backgroundColor: "white",
            borderRadius: "50%",
            width: 15,
            height: 15,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 1px 0px rgba(0,0,0,0.25)",
            cursor: "pointer",
          }}>
            <ForwardArrow color="#1D1B20" size={8} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────
// Figma: bg #0d282b, "FAQ" left 161px, text-[#dfaf23], size 40px
// Dropdown containers: left 42, width 309, height 41, bg #f3f3f3
// Question text: left 56, size 20, tracking -1.2
// Dropdown icons: left 330, size 15×15, all rotate(180deg) = chevron up
// Questions spaced 46px apart (5035-4989=46)

const FAQ_ITEMS = [
  "How does checkout work?",
  "How does checkout work?",
  "How does checkout work?",
  "How does checkout work?",
  "How does checkout work?",
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section style={{ backgroundColor: "#0d282b", paddingBottom: 80 }}>
      <div style={{ padding: "0 42px" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          color: "#dfaf23",
          fontSize: 40,
          fontWeight: 400,
          textAlign: "center",
          letterSpacing: "-2.4px",
          lineHeight: 0.95,
          margin: "0 0 26px",
          paddingTop: 26,
        }}>
          FAQ
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {FAQ_ITEMS.map((q, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#f3f3f3",
                overflow: "hidden",
                minHeight: 41,
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 14px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  height: 41,
                }}
              >
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "black",
                  fontSize: 20,
                  fontWeight: 400,
                  letterSpacing: "-1.2px",
                  lineHeight: 0.95,
                  whiteSpace: "nowrap",
                }}>
                  {q}
                </span>
                <DropdownArrow open={openIndex === i} />
              </button>
              {openIndex === i && (
                <div style={{ padding: "0 14px 14px" }}>
                  <p style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#555",
                    fontSize: 14,
                    lineHeight: 1.6,
                    margin: 0,
                  }}>
                    Add items to your cart, proceed to checkout, enter your shipping details and complete payment via our secure gateway.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── App ───────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ backgroundColor: "#d6d0c8", minHeight: "100vh", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 430, backgroundColor: "#fffdf5" }}>
        <Header />
        <main>
          <Hero />
          <FeaturesBar />
          <CategorySection />
          <OurPicks />
          <AdditionalItemsCream />
          <FilteredGrid />
          <FooterMenu />
          <FooterCarousel />
          <FAQ />
        </main>
      </div>
    </div>
  );
}
