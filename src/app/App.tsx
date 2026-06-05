import { useState } from "react";
import imgLogo from "../imports/IPhone16114-1/1f078f66de22c88e6a47117f073725c1cd3c2f37.png";
import imgLogo1 from "../imports/IPhone16114-1/ccf3dd809cdd1e0e30aa10dec48a2c7fd354e933.png";

// ── Exact SVG icons from Figma ────────────────────────────────

// Hamburger – viewBox 0 0 67 53, paths occupy [26.5,20.5]–[42.5,32.5]
function HamburgerIcon() {
  return (
    <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
      <path d="M0 0H16V1.33333H0V0ZM0 5.33333H16V6.66667H0V5.33333ZM0 10.6667H16V12H0V10.6667Z" fill="#111111" />
    </svg>
  );
}

// Search – viewBox subset of header SVG
function SearchIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="4.667" cy="4.667" r="4.167" stroke="#111111" strokeWidth="0.933" />
      <path d="M8 8l2.5 2.5" stroke="#111111" strokeWidth="0.933" strokeLinecap="round" />
    </svg>
  );
}

// Cart – from Figma path (centered around 357,20.5–32.5 → normalised)
function CartIcon() {
  return (
    <svg width="11" height="12" viewBox="0 0 11 12" fill="none">
      <path d="M5.5 0C4.135 0 3.014 1.0403 3.014 2.3077V2.7692H0.559L0.528 3.2022L0.031 11.5098L0 12H11L10.969 11.5094L10.472 3.2017L10.441 2.7692H7.986V2.3077C7.986 1.0403 6.865 0 5.5 0ZM5.5 0.9231C5.896 0.9231 6.275 1.069 6.555 1.3286C6.835 1.5883 6.992 1.9405 6.992 2.3077V2.7692H4.009V2.3077C4.009 1.9405 4.166 1.5883 4.446 1.3286C4.725 1.069 5.105 0.9231 5.5 0.9231ZM1.492 3.6923H3.014V5.0769H4.009V3.6923H6.992V5.0769H7.986V3.6923H9.509L9.944 11.0769H1.057L1.492 3.6923Z" fill="#111111" />
    </svg>
  );
}

// Person – from Figma path (centred around 334,20.5–32.5 → normalised)
function PersonIcon() {
  return (
    <svg width="11" height="12" viewBox="0 0 11 12" fill="none">
      <path d="M5.5 0C7.62 0 9.35 1.7155 9.35 3.8182C9.35 5.1327 8.674 6.3 7.648 6.9889C9.61 7.8235 11 9.7544 11 12H9.9C9.9 9.5836 7.936 7.6364 5.5 7.6364C3.063 7.6364 1.1 9.5836 1.1 12H0C0 9.7544 1.39 7.824 3.352 6.9884C2.828 6.6381 2.4 6.1659 2.103 5.6133C1.806 5.0606 1.651 4.4443 1.65 3.8182C1.65 1.7155 3.38 0 5.5 0ZM5.5 1.0909C3.975 1.0909 2.75 2.3056 2.75 3.8182C2.75 5.3307 3.975 6.5455 5.5 6.5455C7.025 6.5455 8.25 5.3307 8.25 3.8182C8.25 2.3056 7.025 1.0909 5.5 1.0909Z" fill="#111111" />
    </svg>
  );
}

// Chevron/dropdown arrow – from p243c3400: "M0 3.125L3.125 0L6.25 3.125H0Z"
function DropdownArrow({ open = false, color = "#1D1B20" }: { open?: boolean; color?: string }) {
  return (
    <svg
      width="10" height="6" viewBox="0 0 10 5" fill="none"
      style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "none", display: "block" }}
    >
      <path d="M0 0L5 5L10 0H0Z" fill={color} />
    </svg>
  );
}

// Forward arrow – pe751d80 normalised
function ForwardArrow({ color = "#FEF7FF" }: { color?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 6.667 6.667" fill="none">
      <path d="M5.073 3.75H0V2.917H5.073L2.74 0.583L3.333 0L6.667 3.333L3.333 6.667L2.74 6.083L5.073 3.75Z" fill={color} />
    </svg>
  );
}

// Book-check icon (features bar) – p2a2acd80 + pcc7f700
function BookCheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M16.5 9.5V14.5C16.5 16.386 16.5 17.328 15.914 17.914C15.328 18.5 14.386 18.5 12.5 18.5H3C1.619 18.5 0.5 17.381 0.5 16M16.5 9.5V4.5C16.5 2.614 16.5 1.672 15.914 1.086C15.328 0.5 14.386 0.5 12.5 0.5H4.5C2.614 0.5 1.672 0.5 1.086 1.086C0.5 1.672 0.5 2.614 0.5 4.5V16M16.5 9.5C16.5 11.386 16.5 12.328 15.914 12.914C15.328 13.5 14.386 13.5 12.5 13.5H3C1.619 13.5 0.5 14.619 0.5 16" stroke="#885926" strokeWidth="1" />
      <path d="M4 10.5L5.293 11.793C5.683 12.183 6.317 12.183 6.707 11.793L10 8.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

// Location icon (features bar)
function LocationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M19.5 10C19.5 16.018 13.012 19.403 11.425 20.276C11.157 20.424 10.843 20.424 10.575 20.276C8.988 19.403 2.5 16.018 2.5 10C2.5 5.5 6.634 2.5 11 2.5C15 2.5 19.5 5.5 19.5 10Z" stroke="#885926" strokeWidth="1" />
      <circle cx="11" cy="10" r="3.5" stroke="#885926" strokeWidth="1" />
      <path d="M2.636 17.5C5.15 18.962 8.032 19.5 11 19.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

// Book-open icon (features bar)
function BookOpenIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 3.5V20.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      <path d="M3.5 3.5V20.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      <path d="M20.5 3.5V20.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      <path d="M12 4.5C12 4.5 11 2.5 7.5 2.5C4 2.5 3.5 4.5 3.5 4.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      <path d="M12 4.5C12 4.5 13 2.5 16.5 2.5C20 2.5 20.5 4.5 20.5 4.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      <path d="M12 19.5C12 19.5 11 21.5 7.5 21.5C4 21.5 3.5 19.5 3.5 19.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      <path d="M12 19.5C12 19.5 13 21.5 16.5 21.5C20 21.5 20.5 19.5 20.5 19.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

// ── Header ───────────────────────────────────────────────────

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "rgba(255,253,245,0.97)", backdropFilter: "blur(4px)" }}>
      {/* Notification bar */}
      <div style={{ backgroundColor: "#885926", color: "white", fontFamily: "'Playfair Display', serif", fontSize: 12, textAlign: "center", padding: "5px 16px", letterSpacing: "-0.72px" }}>
        International order fees added on whatspp &nbsp;|&nbsp; <span style={{ fontFamily: "'Playfair', serif" }}>INR</span> ₹
      </div>
      {/* Nav bar */}
      <div style={{ backgroundColor: "rgba(255,253,245,0.8)", borderBottom: "0.5px solid #A2A2A2", position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 14px", height: 57 }}>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", alignItems: "center" }}>
          <HamburgerIcon />
        </button>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", height: 45 }}>
          <img src={imgLogo} alt="Logo" style={{ height: "100%", width: "auto", objectFit: "contain" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", padding: 2 }}><SearchIcon /></button>
          <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", padding: 2 }}><CartIcon /></button>
          <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", padding: 2 }}><PersonIcon /></button>
        </div>
      </div>
      {menuOpen && (
        <nav style={{ position: "absolute", left: 0, right: 0, backgroundColor: "#fffdf5", borderBottom: "0.5px solid #A2A2A2", zIndex: 40, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}>
          {["Home", "Shop", "Aqeedah", "Hadith", "Fiqh", "Additional Items", "Help"].map((item) => (
            <a key={item} href="#" onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "11px 16px", borderBottom: "0.5px solid rgba(162,162,162,0.3)", fontFamily: "'Playfair Display', serif", fontSize: 18, color: "#111", textDecoration: "none", letterSpacing: "-1.08px" }}>
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

// ── Hero ─────────────────────────────────────────────────────

function Hero() {
  return (
    <section style={{ backgroundColor: "#fffdf5", paddingTop: 40, paddingBottom: 0, textAlign: "center" }}>
      <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#885926", fontSize: 40, fontWeight: 400, lineHeight: 0.95, letterSpacing: "-2.4px", margin: "0 auto 4px", maxWidth: 210 }}>
        Finally afford
      </h1>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#885926", fontSize: 42, fontWeight: 400, lineHeight: 0.95, letterSpacing: "-2.52px", margin: "0 0 20px", whiteSpace: "nowrap" }}>
        Beneficial knowledge
      </h2>
      <p style={{ fontFamily: "'Playfair Display', serif", color: "rgba(128,96,62,0.76)", fontSize: 18, lineHeight: 0.95, letterSpacing: "-1.08px", margin: "0 auto 20px", maxWidth: 229 }}>
        Knowledge is better than wealth
      </p>
      {/* Shop now button */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <button style={{ backgroundColor: "#885926", color: "white", fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 400, lineHeight: 0.95, letterSpacing: "-1.32px", padding: "9px 0", border: "none", cursor: "pointer", width: 209, display: "block" }}>
          Shop now
        </button>
        <button style={{ backgroundColor: "transparent", color: "#885926", fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 400, lineHeight: 0.95, letterSpacing: "-1.32px", padding: "6px 0", border: "none", cursor: "pointer" }}>
          Browse add-ons
        </button>
      </div>
    </section>
  );
}

// ── Features Bar ──────────────────────────────────────────────

function FeaturesBar() {
  return (
    <div style={{ backgroundColor: "white", borderTop: "0.5px solid rgba(162,162,162,0.39)", borderBottom: "0.5px solid rgba(162,162,162,0.39)", marginTop: 8 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around", padding: "11px 8px", gap: 0 }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
          <BookCheckIcon />
          <span style={{ fontFamily: "'Playfair Display', serif", color: "#885926", fontSize: 10, letterSpacing: "-0.6px", textAlign: "center" }}>High quality prints</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
          <LocationIcon />
          <span style={{ fontFamily: "'Playfair Display', serif", color: "#885926", fontSize: 10, letterSpacing: "-0.6px", textAlign: "center" }}>International shipping</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
          <BookOpenIcon />
          <span style={{ fontFamily: "'Playfair Display', serif", color: "#885926", fontSize: 10, letterSpacing: "-0.6px", textAlign: "center" }}>affordable prices</span>
        </div>
      </div>
    </div>
  );
}

// ── Category Tabs + Cards ─────────────────────────────────────

function CategorySection() {
  const [active, setActive] = useState("Aqeedah");
  const tabs = ["Aqeedah", "Hadith", "Fiqh"];
  return (
    <section style={{ backgroundColor: "#885926", borderTop: "0.5px solid #A2A2A2" }}>
      {/* Tab row */}
      <div style={{ display: "flex", padding: "0 0" }}>
        {tabs.map((tab) => (
          <button key={tab} onClick={() => setActive(tab)}
            style={{
              flex: 1, fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 400, letterSpacing: "-1.08px",
              padding: "12px 0 10px", background: "none", border: "none",
              borderBottom: active === tab ? "2px solid white" : "2px solid transparent",
              color: active === tab ? "white" : "rgba(255,253,245,0.6)", cursor: "pointer"
            }}>
            {tab}
          </button>
        ))}
      </div>
      {/* Horizontal scroll cards */}
      <div style={{ display: "flex", gap: 10, padding: "12px 16px 18px", overflowX: "auto", scrollbarWidth: "none" }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ flexShrink: 0, backgroundColor: "white", width: 107, height: 122 }} />
        ))}
      </div>
      {/* Pagination dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, paddingBottom: 14 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ transform: "rotate(180deg)" }}><ForwardArrow color="#FEF7FF" /></div>
        </div>
        <div><ForwardArrow color="#FEF7FF" /></div>
      </div>
    </section>
  );
}

// ── Our Picks ─────────────────────────────────────────────────

function OurPicks() {
  return (
    <section style={{ backgroundColor: "#885926", paddingBottom: 36 }}>
      <div style={{ padding: "0 19px" }}>
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: 20, fontWeight: 400, letterSpacing: "-1.2px", margin: "0 0 2px" }}>Our picks</h2>
          <p style={{ fontFamily: "'Playfair Display', serif", color: "rgba(255,253,245,0.69)", fontSize: 18, letterSpacing: "-1.08px", margin: 0 }}>
            Learn what we recommend for you
          </p>
        </div>
        {/* 2-column grid, 3 rows */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 7px" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ backgroundColor: "white", height: 300 }} />
          ))}
        </div>
        {/* See all button */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
          <button style={{ border: "0.4px solid white", color: "#f3f3f3", fontFamily: "'Playfair Display', serif", fontSize: 18, letterSpacing: "-1.08px", padding: "4px 0", width: 107, background: "transparent", cursor: "pointer" }}>
            See all
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Additional Items (cream background) ───────────────────────

function AdditionalItemsCream() {
  return (
    <section style={{ backgroundColor: "#fffdf5", padding: "24px 0 0" }}>
      <div style={{ padding: "0 19px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 2 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "black", fontSize: 25, fontWeight: 400, letterSpacing: "-1.5px", margin: 0 }}>Additional Items</h2>
          <span style={{ fontFamily: "'Playfair Display', serif", color: "black", fontSize: 10, letterSpacing: "-0.3px", lineHeight: 1.53 }}>View all</span>
        </div>
        <p style={{ fontFamily: "'Playfair Display', serif", color: "#867461", fontSize: 18, letterSpacing: "-1.08px", margin: "0 0 16px", textAlign: "center" }}>
          Buy that which benefits you
        </p>
        {/* Horizontal scroll */}
        <div style={{ display: "flex", gap: 10, overflowX: "auto", scrollbarWidth: "none", paddingBottom: 4 }}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} style={{ flexShrink: 0, backgroundColor: "white", width: 150, height: 237 }} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Filters + Filtered Grid ───────────────────────────────────

function FilteredGrid() {
  const [activeCategory, setActiveCategory] = useState("Clothes");
  const [activeLang, setActiveLang] = useState("English");
  const categories = ["Clothes", "Salafi pen"];
  const languages = ["Urdu", "English", "Arabic"];

  return (
    <section style={{ backgroundColor: "#fffdf5", paddingBottom: 36 }}>
      <div style={{ padding: "0 19px" }}>
        {/* Divider */}
        <div style={{ borderTop: "0.4px solid #885926", margin: "18px 11px 14px" }} />
        {/* Category filter */}
        <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 6 }}>
          {categories.map(c => (
            <button key={c} onClick={() => setActiveCategory(c)}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, letterSpacing: "-1.08px", color: activeCategory === c ? "#885926" : "#867461", background: "none", border: "none", cursor: "pointer", fontWeight: activeCategory === c ? 700 : 400 }}>
              {c}
            </button>
          ))}
        </div>
        {/* Language filter */}
        <div style={{ display: "flex", justifyContent: "center", gap: 18, marginBottom: 18 }}>
          {languages.map(l => (
            <button key={l} onClick={() => setActiveLang(l)}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, letterSpacing: "-1.08px", color: activeLang === l ? "#885926" : "#867461", background: "none", border: "none", cursor: "pointer", fontWeight: activeLang === l ? 700 : 400 }}>
              {l}
            </button>
          ))}
        </div>
        {/* 2-column grid, 3 rows */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 7px" }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ backgroundColor: "#f3f3f3", height: 300 }} />
          ))}
        </div>
        {/* Shop now */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
          <button style={{ backgroundColor: "#885926", color: "white", fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 400, letterSpacing: "-1.32px", padding: "9px 0", border: "none", cursor: "pointer", width: 209 }}>
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Footer / Menu Section ─────────────────────────────────────

function FooterMenu() {
  return (
    <section style={{ backgroundColor: "#885926", padding: "32px 0" }}>
      <div style={{ padding: "0 19px" }}>
        {/* Logo left, Pages right */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <div style={{ height: 66, width: 135 }}>
            <img src={imgLogo1} alt="Logo" style={{ height: "100%", width: "100%", objectFit: "contain", objectPosition: "left center" }} />
          </div>
          <div>
            <p style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: 18, letterSpacing: "-1.08px", margin: "0 0 16px", textAlign: "center" }}>Pages</p>
          </div>
        </div>
        {/* Help heading */}
        <p style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: 18, letterSpacing: "-1.08px", margin: "44px 0 0", textAlign: "center" }}>Help</p>
      </div>
    </section>
  );
}

// ── Footer Carousel (dark bg) ─────────────────────────────────

function FooterCarousel() {
  return (
    <section style={{ backgroundColor: "#0d282b", padding: "24px 0" }}>
      <div style={{ padding: "0 19px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: 25, fontWeight: 400, letterSpacing: "-1.5px", margin: 0 }}>Additional Items</h2>
          <span style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: 10, letterSpacing: "-0.3px", lineHeight: 1.53 }}>View all</span>
        </div>
        {/* Prev / Next buttons */}
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", gap: 10, overflowX: "auto", scrollbarWidth: "none", padding: "0 0 4px" }}>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} style={{ flexShrink: 0, backgroundColor: "#f3f3f3", width: 149, height: 201 }} />
            ))}
          </div>
          {/* Prev button */}
          <div style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", backgroundColor: "white", borderRadius: "50%", width: 15, height: 15, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 1px 0px rgba(0,0,0,0.25)", cursor: "pointer" }}>
            <div style={{ transform: "rotate(180deg)" }}><ForwardArrow color="#1D1B20" /></div>
          </div>
          {/* Next button */}
          <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", backgroundColor: "white", borderRadius: "50%", width: 15, height: 15, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0px 1px 0px rgba(0,0,0,0.25)", cursor: "pointer" }}>
            <ForwardArrow color="#1D1B20" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ── FAQ ───────────────────────────────────────────────────────

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
    <section style={{ backgroundColor: "#0d282b", paddingBottom: 48 }}>
      <div style={{ padding: "0 42px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#dfaf23", fontSize: 40, fontWeight: 400, textAlign: "center", letterSpacing: "-2.4px", margin: "0 0 20px" }}>
          FAQ
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {FAQ_ITEMS.map((q, i) => (
            <div key={i} style={{ backgroundColor: "#f3f3f3", height: openIndex === i ? "auto" : 41, overflow: "hidden" }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", background: "none", border: "none", cursor: "pointer", height: 41 }}>
                <span style={{ fontFamily: "'Playfair Display', serif", color: "black", fontSize: 20, fontWeight: 400, letterSpacing: "-1.2px", lineHeight: 0.95 }}>{q}</span>
                <DropdownArrow open={openIndex === i} />
              </button>
              {openIndex === i && (
                <div style={{ padding: "0 14px 12px" }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", color: "#555", fontSize: 14, lineHeight: 1.6, margin: 0 }}>
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
