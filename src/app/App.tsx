import { useState } from "react";
import svgPaths from "../imports/IPhone16114-1/svg-er0pvt7lmo";
import imgLogo from "../imports/IPhone16114-1/1f078f66de22c88e6a47117f073725c1cd3c2f37.png";
import imgLogo1 from "../imports/IPhone16114-1/ccf3dd809cdd1e0e30aa10dec48a2c7fd354e933.png";

// ─── SVG icons (exact Figma paths) ───────────────────────────

function HamburgerIcon() {
  // p22163d80: 3 lines spanning [26.5,20.5]→[42.5,32.5] in a 394×58 SVG
  // normalised: width=16, height=12
  return (
    <svg width="16" height="12" viewBox="26.5 20.5 16 12" fill="none">
      <path d={svgPaths.p22163d80} fill="#111111" />
    </svg>
  );
}

function SearchIcon() {
  // p1b26d480: magnifier spanning [54.5,20.5]→[66.5,32.5]
  return (
    <svg width="12" height="12" viewBox="54.5 20.5 12 12" fill="none">
      <path d={svgPaths.p1b26d480} fill="#111111" />
    </svg>
  );
}

function CartIcon() {
  // p3b9806e0: cart spanning [351.5,20.5]→[362.5,32.5]
  return (
    <svg width="11" height="12" viewBox="351.5 20.5 11 12" fill="none">
      <path d={svgPaths.p3b9806e0} fill="#111111" />
    </svg>
  );
}

function PersonIcon() {
  // p36724df0: person spanning [328.5,20.5]→[339.5,32.5]
  return (
    <svg width="11" height="12" viewBox="328.5 20.5 11 12" fill="none">
      <path d={svgPaths.p36724df0} fill="#111111" />
    </svg>
  );
}

// p243c3400: "M0 3.125L3.125 0L6.25 3.125H0Z" — triangle pointing UP
// In Figma all FAQ arrows are rotate(180deg) = pointing DOWN = closed state
function DropdownArrow({ open = false }: { open?: boolean }) {
  return (
    <svg
      width="6" height="3"
      viewBox="0 0 6.25 3.125"
      fill="none"
      style={{ display: "block", flexShrink: 0, transform: open ? "rotate(180deg)" : "none", transition: "transform 0.15s" }}
    >
      <path d={svgPaths.p243c3400} fill="#1D1B20" />
    </svg>
  );
}

function ForwardArrowIcon({ color = "#1D1B20" }: { color?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 6.66667 6.66667" fill="none">
      <path d={svgPaths.pe751d80} fill={color} />
    </svg>
  );
}

function BackArrowIcon({ color = "#1D1B20" }: { color?: string }) {
  return (
    <svg width="10" height="10" viewBox="0 0 6.66667 6.66667" fill="none" style={{ transform: "rotate(180deg)" }}>
      <path d={svgPaths.pe751d80} fill={color} />
    </svg>
  );
}

// Book Check: p2a2acd80 viewBox "0 0 17 19", checkmark pcc7f700 viewBox "0 0 7 4.586"
function BookCheckIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g transform="translate(3,2.5)">
        <svg width="17" height="19" viewBox="0 0 17 19" fill="none">
          <path d={svgPaths.p2a2acd80} stroke="#885926" strokeWidth="1" />
          <g transform="translate(3,6)">
            <svg width="7" height="5" viewBox="0 0 7 4.58579" fill="none">
              <path d={svgPaths.pcc7f700} stroke="#885926" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </g>
        </svg>
      </g>
    </svg>
  );
}

// Location: p71209c0 pin body, circle centre, p6d489c0 bottom ellipse
function LocationIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g transform="translate(2.5,1)">
        {/* Pin body: p71209c0 viewBox "0 0 16 17.8871" */}
        <svg width="19" height="19" viewBox="0 0 16 17.8871" fill="none">
          <path d={svgPaths.p71209c0} stroke="#885926" strokeWidth="1" />
        </svg>
      </g>
      {/* Inner circle: 8×8 at inset 33.33%/33.33% of 24 = left=8, top=6, w=8, h=8 */}
      <circle cx="12" cy="10" r="3.5" stroke="#885926" strokeWidth="1" />
      {/* Bottom ellipse: p6d489c0 viewBox "0 0 18 5.5" at bottom */}
      <g transform="translate(3,17)">
        <svg width="18" height="6" viewBox="0 0 18 5.50007" fill="none">
          <path d={svgPaths.p6d489c0} stroke="#885926" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </g>
    </svg>
  );
}

// Book Open: 3 vertical lines + 4 arc curves (p2d8c5300)
function BookOpenIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      {/* Left spine */}
      <line x1="3.5" y1="6.5" x2="3.5" y2="17.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      {/* Centre spine */}
      <line x1="12" y1="6.5" x2="12" y2="17.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      {/* Right spine */}
      <line x1="20.5" y1="6.5" x2="20.5" y2="17.5" stroke="#885926" strokeWidth="1" strokeLinecap="round" />
      {/* Top-right arc: p2d8c5300 "M9 2.5C9 2.5 8 0.5 4.5 0.5C1 0.5 0.5 2.5 0.5 2.5" → place at right half top */}
      <g transform="translate(11.5,4.5)">
        <svg width="9" height="3" viewBox="0 0 9.50023 3.00012" fill="none">
          <path d={svgPaths.p2d8c5300} stroke="#885926" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </g>
      {/* Top-left arc (mirrored) */}
      <g transform="translate(3.5,4.5) scale(-1,1) translate(-9.5,0)">
        <svg width="9" height="3" viewBox="0 0 9.50023 3.00012" fill="none">
          <path d={svgPaths.p2d8c5300} stroke="#885926" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </g>
      {/* Bottom-right arc (flipped) */}
      <g transform="translate(11.5,20.5) scale(1,-1) translate(0,-3)">
        <svg width="9" height="3" viewBox="0 0 9.50023 3.00012" fill="none">
          <path d={svgPaths.p2d8c5300} stroke="#885926" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </g>
      {/* Bottom-left arc (mirrored + flipped) */}
      <g transform="translate(3.5,20.5) scale(-1,-1) translate(-9.5,-3)">
        <svg width="9" height="3" viewBox="0 0 9.50023 3.00012" fill="none">
          <path d={svgPaths.p2d8c5300} stroke="#885926" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </g>
    </svg>
  );
}

// ─── Notification Bar ─────────────────────────────────────────
// Figma: top=32, h=40, bg=#885926
// Text "International order fees...": top=46 within page = 14px from bar top, left=96, w=201, font=12px, tracking=-0.72px
// Currency info: top=42 = 10px from bar top, left=322

function NotificationBar() {
  return (
    <div style={{ backgroundColor: "#885926", height: 40, position: "relative", display: "flex", alignItems: "center" }}>
      {/* Centred text: left=96, right=393-(322-3)=74 → text occupies [96,322] centre=(96+201/2)=196.5 ≈ 197px from left in 393px */}
      <p style={{
        position: "absolute",
        left: 0, right: 0,
        textAlign: "center",
        fontFamily: "'Playfair Display', serif",
        fontSize: 12,
        letterSpacing: "-0.72px",
        lineHeight: 0.95,
        color: "white",
        margin: 0,
        whiteSpace: "nowrap",
      }}>
        International order fees added on whatspp
      </p>
      {/* Currency info: left=322 in 393px → right=393-322=71px from right */}
      <div style={{
        position: "absolute",
        right: 0,
        paddingRight: 10,
        display: "flex",
        alignItems: "center",
        gap: 3,
      }}>
        {/* Back arrow rotated -90deg */}
        <div style={{ transform: "rotate(-90deg)", display: "flex", alignItems: "center" }}>
          <svg width="8" height="10" viewBox="0 0 2.91667 4.58333" fill="none">
            <path d={svgPaths.p15944280} fill="white" />
          </svg>
        </div>
        <span style={{
          fontFamily: "'Playfair', serif",
          fontSize: 12,
          color: "white",
          lineHeight: 1,
          fontVariationSettings: '"opsz" 12, "wdth" 100',
        }}>INR</span>
        <span style={{ fontFamily: "'Philosopher', sans-serif", fontSize: 10, color: "white", marginLeft: 1 }}>₹</span>
      </div>
    </div>
  );
}

// ─── Header Nav ───────────────────────────────────────────────
// Figma: top=72, h=57, bg=rgba(255,253,245,0.8), border-bottom 0.5px #A2A2A2
// Logo: left=151, w=92, h=45, top=75 (3px from nav top)
// Hamburger: left side. Search/Cart/Person: right side.

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50 }}>
      <NotificationBar />
      <div style={{
        backgroundColor: "rgba(255,253,245,0.8)",
        backdropFilter: "blur(4px)",
        borderBottom: "0.5px solid #A2A2A2",
        height: 57,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 14px",
        position: "relative",
      }}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", alignItems: "center" }}
        >
          <HamburgerIcon />
        </button>
        {/* Logo: exact 92×45 centred */}
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", width: 92, height: 45 }}>
          <img src={imgLogo} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
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
            <a key={item} href="#" onClick={() => setMenuOpen(false)} style={{
              display: "block",
              padding: "11px 16px",
              borderBottom: "0.5px solid rgba(162,162,162,0.3)",
              fontFamily: "'Playfair Display', serif",
              fontSize: 18,
              color: "#111",
              textDecoration: "none",
              letterSpacing: "-1.08px",
            }}>
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────
// Figma absolute positions (page-relative, header ends at top=129):
// "Finally afford": top=208 → paddingTop from section start = 208-129 = 79px
// left=93, w=210 → left margin = 93px in 393px canvas
// "Beneficial knowledge": top=245 → 245-208=37px below "Finally afford"
//   centred at left=197 (translateX(-50%))
// "Knowledge is better": top=307 → 307-245=62px below italic headline
//   left=80, w=229 → left padding = 80px
// Shop now btn: top=351 → 351-307=44px below subtitle, left=93, w=209, h=39
// "Browse add-ons": top=408 → 408-(351+39)=18px below button, left=125
// Section ends before features bar at top=542: 542-408=134px after "Browse add-ons"

function Hero() {
  return (
    <section style={{ backgroundColor: "#fffdf5", paddingTop: 79, paddingBottom: 112 }}>
      {/* "Finally afford": left=93, w=210 */}
      <p style={{
        fontFamily: "'Playfair Display', serif",
        color: "#885926",
        fontSize: 40,
        fontWeight: 400,
        lineHeight: 0.95,
        letterSpacing: "-2.4px",
        margin: 0,
        paddingLeft: 93,
        width: 210 + 93,
        boxSizing: "border-box",
      }}>
        Finally afford
      </p>
      {/* "Beneficial knowledge": 37px below, centred at 197px */}
      <p style={{
        fontFamily: "'Playfair Display', serif",
        fontStyle: "italic",
        color: "#885926",
        fontSize: 42,
        fontWeight: 400,
        lineHeight: 0.95,
        letterSpacing: "-2.52px",
        margin: 0,
        marginTop: 37,
        textAlign: "center",
        whiteSpace: "nowrap",
      }}>
        Beneficial knowledge
      </p>
      {/* Subtitle: 62px below italic headline, left=80, w=229 */}
      <p style={{
        fontFamily: "'Playfair Display', serif",
        color: "rgba(128,96,62,0.76)",
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 0.95,
        letterSpacing: "-1.08px",
        margin: 0,
        marginTop: 62,
        paddingLeft: 80,
        width: 229 + 80,
        boxSizing: "border-box",
        whiteSpace: "nowrap",
      }}>
        Knowledge is better than wealth
      </p>
      {/* Shop now: 44px below subtitle, left=93, w=209, h=39 */}
      <div style={{ paddingLeft: 93, marginTop: 44 }}>
        <button style={{
          backgroundColor: "#885926",
          color: "white",
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: "-1.32px",
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
      {/* "Browse add-ons": 18px below button bottom, left=125 */}
      <p style={{
        fontFamily: "'Playfair Display', serif",
        color: "#885926",
        fontSize: 22,
        fontWeight: 400,
        lineHeight: 0.95,
        letterSpacing: "-1.32px",
        margin: 0,
        marginTop: 18,
        paddingLeft: 125,
        cursor: "pointer",
        whiteSpace: "nowrap",
      }}>
        Browse add-ons
      </p>
    </section>
  );
}

// ─── Features Bar ─────────────────────────────────────────────
// Figma: top=542, h=46, bg=white, border-top+bottom 0.5px rgba(162,162,162,0.39)
// Icon container: top=546 (4px from bar top), left=68, gap=93px, icons 24×24
//   Icon1 left=68, Icon2 left=68+24+93=185, Icon3 left=185+24+93=302
// Labels at top=570 (28px from bar top), centred at left=82, 200, 314.5

function FeaturesBar() {
  // In 393px canvas: icon centres at 68+12=80, 185+12=197, 302+12=314
  // Label centres at 82, 200, 314.5 (slightly different due to text centering)
  // Using flex with precise pixel positions
  return (
    <div style={{
      backgroundColor: "white",
      borderTop: "0.5px solid rgba(162,162,162,0.39)",
      borderBottom: "0.5px solid rgba(162,162,162,0.39)",
      height: 46,
      position: "relative",
    }}>
      {/* Render icons + labels at exact left positions */}
      {/* Icon 1 + label at left=68 */}
      <div style={{ position: "absolute", left: 68, top: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <BookCheckIcon />
        {/* label centred at left=82 → relative to icon left=68: 82-68=14px, but label is centred so use transform */}
        <span style={{
          fontFamily: "'Playfair Display', serif",
          color: "#885926",
          fontSize: 10,
          letterSpacing: "-0.6px",
          lineHeight: 0.95,
          whiteSpace: "nowrap",
          display: "block",
          marginTop: 0,
          transform: "translateX(-2px)",
        }}>
          High quality prints
        </span>
      </div>
      {/* Icon 2 + label at left=185 */}
      <div style={{ position: "absolute", left: 185, top: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <LocationIcon />
        <span style={{
          fontFamily: "'Playfair Display', serif",
          color: "#885926",
          fontSize: 10,
          letterSpacing: "-0.6px",
          lineHeight: 0.95,
          whiteSpace: "nowrap",
          display: "block",
          transform: "translateX(3px)",
        }}>
          International shipping
        </span>
      </div>
      {/* Icon 3 + label at left=302 */}
      <div style={{ position: "absolute", left: 302, top: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <BookOpenIcon />
        <span style={{
          fontFamily: "'Playfair Display', serif",
          color: "#885926",
          fontSize: 10,
          letterSpacing: "-0.6px",
          lineHeight: 0.95,
          whiteSpace: "nowrap",
          display: "block",
          transform: "translateX(0px)",
        }}>
          affordable prices
        </span>
      </div>
    </div>
  );
}

// ─── Category Section ─────────────────────────────────────────
// Figma: within brown container (top=588)
// Labels: top=649 → 649-588=61px from section top, left=48/171/295
// Cards: top=676 → 676-588=88px from section top, left=26/142/258/374, w=107, h=122
//   gap between cards: 142-26-107=9px
// Pagination: top=827 → 827-588=239px from section top, centred arrows at left=182 and 202
//   827-(676+122) = 29px below cards bottom
// Section ends where Our Picks heading starts: 881-588=293px from section top

function CategorySection() {
  const categories = ["Aqeedah", "Hadith", "Fiqh"];
  // Labels left positions in 393px canvas: 48, 171, 295
  // In our 393px section (left=0): same values
  return (
    <section style={{ backgroundColor: "#885926", borderTop: "0.5px solid #A2A2A2", position: "relative" }}>
      {/* Category labels: top=61px from section top */}
      {/* Cards: top=88px from section top */}
      {/* Using a horizontal scroll strip */}
      <div style={{ paddingTop: 61 }}>
        {/* Label row — positioned relative to card strip */}
        <div style={{ position: "relative", height: 0 }}>
          <span style={{
            position: "absolute", left: 48, top: 0,
            fontFamily: "'Playfair Display', serif",
            fontSize: 18, fontWeight: 400, letterSpacing: "-1.08px", lineHeight: 0.95,
            color: "white", whiteSpace: "nowrap",
          }}>Aqeedah</span>
          <span style={{
            position: "absolute", left: 171, top: 0,
            fontFamily: "'Playfair Display', serif",
            fontSize: 18, fontWeight: 400, letterSpacing: "-1.08px", lineHeight: 0.95,
            color: "white", whiteSpace: "nowrap",
          }}>Hadith</span>
          <span style={{
            position: "absolute", left: 295, top: 0,
            fontFamily: "'Playfair Display', serif",
            fontSize: 18, fontWeight: 400, letterSpacing: "-1.08px", lineHeight: 0.95,
            color: "white", whiteSpace: "nowrap",
          }}>Fiqh</span>
        </div>
        {/* Cards strip: paddingTop=27 (676-649=27px below labels), left=26, gap=9 */}
        <div style={{
          display: "flex",
          gap: 9,
          paddingTop: 27,
          paddingLeft: 26,
          overflowX: "auto",
          scrollbarWidth: "none",
        }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ flexShrink: 0, backgroundColor: "white", width: 107, height: 122 }} />
          ))}
        </div>
      </div>
      {/* Pagination: 29px below cards, centred arrows */}
      {/* Top = 88+122+29 = 239px from section top */}
      <div style={{
        paddingTop: 29,
        paddingBottom: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}>
        <BackArrowIcon color="#FEF7FF" />
        <ForwardArrowIcon color="#FEF7FF" />
      </div>
    </section>
  );
}

// ─── Our Picks ────────────────────────────────────────────────
// Figma (within brown container, continuing from category section):
// "Our picks": left=158, w=78, h=19, font=20px, tracking=-1.2px
//   In brown container it's at y=881-588=293px from section start
//   But section is continuous — category section ends at 293px mark
//   → Our picks starts directly after category section ends
//   Category section padding: 61+27+122+29+16 = 255px...
//   Figma top of "Our picks"=881, category section top=588 → 293px within brown bg
//   Our picks heading is 293px from start of brown bg, category section took 255px → gap = 38px
//   Actually let's just use paddingTop=38 on this section (within same brown bg)
// "Learn what...": top=903 → 903-881=22px below heading
// Cards start: top=938 → 938-903=35px below subtitle
//   left=19, right col left=200, w=174, h=300, gap=7px
// Row gap: 1343-(938+300)=105px
// See all: top=2088, left=143, w=107, h=28
//   2088-(1748+300)=40px below last card
// Brown section ends at 2159: 2159-(2088+28)=43px after button

function OurPicks() {
  return (
    <section style={{ backgroundColor: "#885926", paddingTop: 38 }}>
      {/* "Our picks" heading: left=158, w=78 */}
      <p style={{
        fontFamily: "'Playfair Display', serif",
        color: "white",
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 0.95,
        letterSpacing: "-1.2px",
        margin: 0,
        paddingLeft: 158,
        whiteSpace: "nowrap",
      }}>
        Our picks
      </p>
      {/* "Learn what...": 22px below, centred at left=197 */}
      <p style={{
        fontFamily: "'Playfair Display', serif",
        color: "rgba(255,253,245,0.69)",
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 0.95,
        letterSpacing: "-1.08px",
        margin: 0,
        marginTop: 22,
        textAlign: "center",
        whiteSpace: "nowrap",
      }}>
        Learn what we recommend for you
      </p>
      {/* Cards grid: 35px below subtitle, left=19, cols at 19 and 200 (gap=7px) */}
      <div style={{ paddingLeft: 19, paddingRight: 19, marginTop: 35 }}>
        {/* Row 1 */}
        <div style={{ display: "flex", gap: 7 }}>
          <div style={{ width: 174, height: 300, backgroundColor: "white", flexShrink: 0 }} />
          <div style={{ width: 174, height: 300, backgroundColor: "white", flexShrink: 0 }} />
        </div>
        {/* Row 2: gap=105px */}
        <div style={{ display: "flex", gap: 7, marginTop: 105 }}>
          <div style={{ width: 174, height: 300, backgroundColor: "white", flexShrink: 0 }} />
          <div style={{ width: 174, height: 300, backgroundColor: "white", flexShrink: 0 }} />
        </div>
        {/* Row 3: gap=105px */}
        <div style={{ display: "flex", gap: 7, marginTop: 105 }}>
          <div style={{ width: 174, height: 300, backgroundColor: "white", flexShrink: 0 }} />
          <div style={{ width: 174, height: 300, backgroundColor: "white", flexShrink: 0 }} />
        </div>
      </div>
      {/* See all: 40px below last card, left=143, w=107, h=28 */}
      <div style={{ paddingLeft: 143, marginTop: 40 }}>
        <button style={{
          border: "0.4px solid white",
          color: "#f3f3f3",
          fontFamily: "'Playfair Display', serif",
          fontSize: 18,
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: "-1.08px",
          width: 107,
          height: 28,
          background: "transparent",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
          See all
        </button>
      </div>
      {/* 43px padding to end of brown section */}
      <div style={{ paddingBottom: 43 }} />
    </section>
  );
}

// ─── Additional Items (cream) ─────────────────────────────────
// Figma: cream section starts at top=2159
// "Additional Items": top=2223 → 2223-2159=64px from section top, left=19, font=25px, tracking=-1.5px, color=black
// "View all": top=2257, left=339, font=10px, tracking=-0.3px, lineHeight=1.53, color=black
//   2257-2223=34px below heading
// Subtitle "Buy that which benefits you": top=2253, left=116.5 (centred), font=18px, tracking=-1.08px, color=#867461
//   2253-2223=30px below heading
// White cards: top=2288, w=150, h=237
//   left=19, 179, 339 → gap=179-(19+150)=10px
//   2288-2253=35px below subtitle
// Section ends at 2615 (start of content section): 2615-(2288+237)=90px after cards

function AdditionalItemsCream() {
  return (
    <section style={{ backgroundColor: "#fffdf5", paddingTop: 64 }}>
      {/* Heading row: "Additional Items" left=19, "View all" left=339 */}
      <div style={{ position: "relative", paddingLeft: 19, paddingRight: 19 }}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          color: "black",
          fontSize: 25,
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: "-1.5px",
          margin: 0,
          whiteSpace: "nowrap",
        }}>
          Additional Items
        </p>
        {/* "View all" at left=339 in 393px canvas → right side, absolute */}
        <span style={{
          position: "absolute",
          right: 19, /* 393-339-19(padding)=35 → but using right=19 in padded container */
          top: 34, /* 2257-2223=34px below heading top */
          fontFamily: "'Playfair Display', serif",
          color: "black",
          fontSize: 10,
          letterSpacing: "-0.3px",
          lineHeight: 1.53,
          whiteSpace: "nowrap",
        }}>
          View all
        </span>
        {/* Subtitle: 30px below heading top, centred at left=116.5 in 393px */}
        <p style={{
          fontFamily: "'Playfair Display', serif",
          color: "#867461",
          fontSize: 18,
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: "-1.08px",
          margin: 0,
          marginTop: 30,
          textAlign: "center",
          whiteSpace: "nowrap",
        }}>
          Buy that which benefits you
        </p>
      </div>
      {/* Cards: 35px below subtitle, left=19, gap=10, w=150, h=237 */}
      <div style={{
        display: "flex",
        gap: 10,
        paddingLeft: 19,
        marginTop: 35,
        overflowX: "auto",
        scrollbarWidth: "none",
      }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} style={{ flexShrink: 0, backgroundColor: "white", width: 150, height: 237 }} />
        ))}
      </div>
      {/* 90px below cards to end of section */}
      <div style={{ paddingBottom: 90 }} />
    </section>
  );
}

// ─── Filtered Grid ────────────────────────────────────────────
// Figma: content section bg #fffdf5, top=2615
// Divider line: top=2723 → 2723-2615=108px from section top, left=30, w=334, stroke=#885926, 0.4px
// Category filter: top=2655 → 2655-2615=40px from section top
//   left=126, gap=16px, items: "Clothes"/"Salafi pen", font=18px, tracking=-1.08px, color=#867461
// Language filter: top=2684 → 2684-2655=29px below category filter
//   left=109, gap=18px, items: "Urdu"/"English"/"Arabic"
// Cards start: top=2767 → 2767-2684=83px below language filter
//   left=19, right col left=200, w=174, h=300, bg=#f3f3f3, gap=7px
// Row gaps: 88px each
// Shop now: top=3931 → 3931-2615=1316px from section top
//   left=92, w=209, h=39
//   3931-(3543+300)=88px after last card
// Section ends at 4042: 4042-(3931+39)=72px after button

function FilteredGrid() {
  const [activeCategory, setActiveCategory] = useState("Clothes");
  const [activeLang, setActiveLang] = useState("English");
  const categories = ["Clothes", "Salafi pen"];
  const languages = ["Urdu", "English", "Arabic"];

  return (
    <section style={{ backgroundColor: "#fffdf5" }}>
      {/* Category filter: top=40px from section top, left=126, gap=16 */}
      <div style={{ paddingTop: 40 }}>
        <div style={{
          paddingLeft: 126,
          display: "flex",
          gap: 16,
        }}>
          {categories.map(c => (
            <button key={c} onClick={() => setActiveCategory(c)} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 18,
              fontWeight: activeCategory === c ? 700 : 400,
              letterSpacing: "-1.08px",
              lineHeight: 0.95,
              color: activeCategory === c ? "#885926" : "#867461",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              whiteSpace: "nowrap",
            }}>{c}</button>
          ))}
        </div>
        {/* Language filter: 29px below category, left=109, gap=18 */}
        <div style={{
          paddingLeft: 109,
          display: "flex",
          gap: 18,
          marginTop: 29,
        }}>
          {languages.map(l => (
            <button key={l} onClick={() => setActiveLang(l)} style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 18,
              fontWeight: activeLang === l ? 700 : 400,
              letterSpacing: "-1.08px",
              lineHeight: 0.95,
              color: activeLang === l ? "#885926" : "#867461",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              whiteSpace: "nowrap",
            }}>{l}</button>
          ))}
        </div>
      </div>
      {/* Divider: 108px from section top = top 40+labels_height+divider_pos
          Actually divider at page top=2723, category at 2655, difference=68px
          But section starts at 2615, category at 40px from section top = 2655 ✓
          Divider at 2723 = 2723-2615=108px from section top
          Labels height is roughly 17px (18px font * 0.95 lineHeight)
          So divider should appear AFTER language filter: 40+17+29+17=103px, then divider at 108px = 5px after language */}
      <div style={{
        marginTop: 5,
        marginLeft: 30,
        width: 334,
        borderTop: "0.4px solid #885926",
      }} />
      {/* Cards: 83px below language filter top = 83-17(lang height)=66px below language bottom
          page: 2767-2684=83px below language top, lang height~17px → 66px below lang bottom
          But from divider: 2767-2723=44px below divider */}
      <div style={{ paddingLeft: 19, paddingRight: 19, marginTop: 44 }}>
        {/* Row 1 */}
        <div style={{ display: "flex", gap: 7 }}>
          <div style={{ width: 174, height: 300, backgroundColor: "#f3f3f3", flexShrink: 0 }} />
          <div style={{ width: 174, height: 300, backgroundColor: "#f3f3f3", flexShrink: 0 }} />
        </div>
        {/* Row 2: gap=88px */}
        <div style={{ display: "flex", gap: 7, marginTop: 88 }}>
          <div style={{ width: 174, height: 300, backgroundColor: "#f3f3f3", flexShrink: 0 }} />
          <div style={{ width: 174, height: 300, backgroundColor: "#f3f3f3", flexShrink: 0 }} />
        </div>
        {/* Row 3: gap=88px */}
        <div style={{ display: "flex", gap: 7, marginTop: 88 }}>
          <div style={{ width: 174, height: 300, backgroundColor: "#f3f3f3", flexShrink: 0 }} />
          <div style={{ width: 174, height: 300, backgroundColor: "#f3f3f3", flexShrink: 0 }} />
        </div>
      </div>
      {/* Shop now: 88px below last card, left=92, w=209, h=39 */}
      <div style={{ paddingLeft: 92, marginTop: 88 }}>
        <button style={{
          backgroundColor: "#885926",
          color: "white",
          fontFamily: "'Playfair Display', serif",
          fontSize: 22,
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: "-1.32px",
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
      {/* 72px to end of section */}
      <div style={{ paddingBottom: 72 }} />
    </section>
  );
}

// ─── Footer Menu ──────────────────────────────────────────────
// Figma: bg=#885926, top=4042, h=408
// Logo: top=4090 → 4090-4042=48px from section top, left=19, w=135, h=66
// "Pages": top=4090, left=221 (centred via -translateX-1/2), font=18px, tracking=-1.08px, color=white
//   Same top as logo = 48px from section top
// "Help": top=4270 → 4270-4042=228px from section top
//   4270-4090=180px below "Pages"
// Section ends at 4450: 4450-4042=408px total height
//   4450-(4270+~17)=163px below "Help"

function FooterMenu() {
  return (
    <section style={{ backgroundColor: "#885926", paddingTop: 48, height: 408, boxSizing: "border-box" }}>
      {/* Logo + Pages on same row at top=48px */}
      <div style={{ position: "relative", paddingLeft: 19 }}>
        {/* Logo: w=135, h=66, left=19 */}
        <div style={{ width: 135, height: 66 }}>
          <img src={imgLogo1} alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "left center" }} />
        </div>
        {/* "Pages": centred at left=221 in 393px canvas */}
        <p style={{
          position: "absolute",
          left: 221,
          top: 0,
          transform: "translateX(-50%)",
          fontFamily: "'Playfair Display', serif",
          color: "white",
          fontSize: 18,
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: "-1.08px",
          margin: 0,
          whiteSpace: "nowrap",
        }}>
          Pages
        </p>
      </div>
      {/* "Help": 180px below "Pages" top = 48+180=228px from section top */}
      <p style={{
        fontFamily: "'Playfair Display', serif",
        color: "white",
        fontSize: 18,
        fontWeight: 400,
        lineHeight: 0.95,
        letterSpacing: "-1.08px",
        margin: 0,
        marginTop: 180,
        textAlign: "center",
      }}>
        Help
      </p>
    </section>
  );
}

// ─── Footer Carousel ─────────────────────────────────────────
// Figma: bg=#0d282b, top=4450, h=797 (includes FAQ)
// "Additional Items" heading: top=4482 → 4482-4450=32px from section top
//   left=115, font=25px, tracking=-1.5px, color=white
// "View all": top=4506 → 4506-4450=56px from section top (24px below heading)
//   left=348, font=10px, tracking=-0.3px, lineHeight=1.53, color=white
// Cards: top=4528 → 4528-4450=78px from section top (22px below "view all")
//   w=149, h=201, bg=#f3f3f3
//   left positions: -42 (off-screen), 122, 286 in 393px canvas
//   gap: 122-(-42+149)=15px; 286-(122+149)=15px
//   In scroll view: first visible card at 122px, prev card at -42px
//   → paddingLeft=19, cards at left=19 with gap=15 would give: 19, 19+149+15=183, 183+149+15=347
//   But Figma shows left=122 as first VISIBLE card (left=-42 is scrolled left off-screen)
//   → show 3 cards starting at left=19 in our flow (the -42 card is behind prev button area)
// Prev button: top=4608 → 4608-4450=158px from section top, left=12, size=15
// Next button: top=4608, left=366, size=15
//   Cards vertical center: 4528+100.5=4628.5, button center: 4608+7.5=4615.5 ≈ close to card mid

function FooterCarousel() {
  return (
    <section style={{ backgroundColor: "#0d282b", paddingTop: 32 }}>
      {/* Heading: left=115, relative to 393px canvas */}
      <div style={{ position: "relative", paddingLeft: 19, paddingRight: 19 }}>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          color: "white",
          fontSize: 25,
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: "-1.5px",
          margin: 0,
          paddingLeft: 115 - 19, /* 96px */
          whiteSpace: "nowrap",
        }}>
          Additional Items
        </p>
        {/* "View all": 24px below heading, left=348 */}
        <p style={{
          position: "absolute",
          right: 19,
          top: 24,
          fontFamily: "'Playfair Display', serif",
          color: "white",
          fontSize: 10,
          letterSpacing: "-0.3px",
          lineHeight: 1.53,
          margin: 0,
          whiteSpace: "nowrap",
        }}>
          View all
        </p>
      </div>
      {/* Card strip: 22px below "view all" = 56+22=78px from section top → 78-32(paddingTop)=46px below heading area */}
      <div style={{ position: "relative", marginTop: 22 }}>
        {/* Prev button: left=12, top=158-78=80px from card area top → vertically centred on cards */}
        <div style={{
          position: "absolute",
          left: 12,
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
          <svg width="8" height="8" viewBox="0 0 6.66667 6.66667" fill="none" style={{ transform: "rotate(180deg)" }}>
            <path d={svgPaths.pe751d80} fill="#1D1B20" />
          </svg>
        </div>
        {/* Cards: paddingLeft=19+12+card_visible_area. First visible at 122px in 393 canvas.
            We show 3 cards, gap=15, w=149: positions 19, 19+149+15=183, 183+149+15=347 */}
        <div style={{
          display: "flex",
          gap: 15,
          paddingLeft: 34, /* enough to clear prev button (12+15+7=34) */
          paddingRight: 34,
          overflowX: "auto",
          scrollbarWidth: "none",
        }}>
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} style={{ flexShrink: 0, backgroundColor: "#f3f3f3", width: 149, height: 201 }} />
          ))}
        </div>
        {/* Next button: left=366, right=393-366-15=12 from right */}
        <div style={{
          position: "absolute",
          right: 12,
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
          <svg width="8" height="8" viewBox="0 0 6.66667 6.66667" fill="none">
            <path d={svgPaths.pe751d80} fill="#1D1B20" />
          </svg>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────
// Figma: bg=#0d282b (continues from carousel section)
// "FAQ": top=4913, left=161, font=40px, tracking=-2.4px, color=#dfaf23
//   4913-4450=463px from dark section top
//   4913-(4528+201)=184px below cards bottom
// FAQ containers: left=42, w=309, h=41, bg=#f3f3f3
//   top=4989 → 4989-4913=76px below FAQ heading
//   gaps: 5035-4989=46px between starts, 5035-(4989+41)=5px between items
// Question text: left=56, font=20px, tracking=-1.2px, color=black
//   top=4999 → 4999-4989=10px from container top (centred in 41px)
// Dropdown icon: left=330, size=15

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
    <section style={{ backgroundColor: "#0d282b", paddingBottom: 60 }}>
      {/* "FAQ": 184px below carousel cards, centred at left=161+some text width/2 */}
      {/* In 393px canvas left=161, text "FAQ" at ~40px font, width~80px → centre at 161+40=201 ≈ centred */}
      <p style={{
        fontFamily: "'Playfair Display', serif",
        color: "#dfaf23",
        fontSize: 40,
        fontWeight: 400,
        lineHeight: 0.95,
        letterSpacing: "-2.4px",
        margin: 0,
        paddingTop: 184,
        textAlign: "center",
        whiteSpace: "nowrap",
      }}>
        FAQ
      </p>
      {/* FAQ items: 76px below heading, left=42, w=309 */}
      {/* In our 393px container: paddingLeft=42, paddingRight=393-42-309=42 ✓ */}
      <div style={{ paddingLeft: 42, paddingRight: 42, marginTop: 76 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {FAQ_ITEMS.map((q, i) => (
            <div key={i} style={{ backgroundColor: "#f3f3f3", overflow: "hidden" }}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{
                  width: "100%",
                  height: 41,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  /* question text at left=56 within 393, container at left=42 → offset=14px */
                  paddingLeft: 14,
                  paddingRight: 14, /* icon at left=330 in 393 → right edge=330+15=345, right=393-345=48, within container 48-42=6 → paddingRight~14 */
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "black",
                  fontSize: 20,
                  fontWeight: 400,
                  lineHeight: 0.95,
                  letterSpacing: "-1.2px",
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
                    Add items to your cart, proceed to checkout, enter your shipping details and complete payment.
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

// ─── App ─────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ backgroundColor: "#d6d0c8", minHeight: "100vh", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: 393, backgroundColor: "#fffdf5" }}>
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
