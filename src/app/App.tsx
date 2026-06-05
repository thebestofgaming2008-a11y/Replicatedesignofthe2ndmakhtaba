import { useState } from "react";
import imgLogo from "../imports/IPhone16114-1/1f078f66de22c88e6a47117f073725c1cd3c2f37.png";
import imgLogo1 from "../imports/IPhone16114-1/ccf3dd809cdd1e0e30aa10dec48a2c7fd354e933.png";

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 14l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 3h2l2.5 9h8l2-6H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9" cy="16" r="1" fill="currentColor" />
      <circle cx="15" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 18c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="14" height="14" viewBox="0 0 14 14" fill="none"
      style={{ transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <path d="M2 4l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "rgba(255,255,255,0.95)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(162,162,162,0.3)" }}>
      <div style={{ backgroundColor: "#885926", color: "white", fontSize: 11, textAlign: "center", padding: "6px 16px", letterSpacing: "-0.3px" }}>
        International order fees added on WhatsApp &nbsp;|&nbsp; INR ₹
      </div>
      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", height: 56, maxWidth: 640, margin: "0 auto" }}>
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu" style={{ color: "#111", background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex" }}>
          <MenuIcon />
        </button>
        <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", height: 36 }}>
          <img src={imgLogo} alt="Logo" style={{ height: "100%", width: "auto", objectFit: "contain" }} />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, color: "#111" }}>
          <button aria-label="Search" style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", display: "flex" }}><SearchIcon /></button>
          <button aria-label="Cart" style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", display: "flex" }}><CartIcon /></button>
          <button aria-label="Account" style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", display: "flex" }}><UserIcon /></button>
        </div>
      </div>
      {menuOpen && (
        <nav style={{ position: "absolute", left: 0, right: 0, backgroundColor: "white", borderBottom: "1px solid #eee", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", zIndex: 40 }}>
          <div style={{ maxWidth: 640, margin: "0 auto", padding: "8px 16px 16px" }}>
            {["Home", "Shop", "Aqeedah", "Hadith", "Fiqh", "Additional Items", "Help"].map((item) => (
              <a key={item} href="#" onClick={() => setMenuOpen(false)}
                style={{ display: "block", padding: "10px 0", borderBottom: "1px solid #f3f3f3", fontFamily: "'Playfair Display', serif", fontSize: 16, color: "#111", textDecoration: "none" }}>
                {item}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section style={{ backgroundColor: "#fffdf5", padding: "48px 24px 40px", textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
      <p style={{ fontFamily: "'Playfair Display', serif", color: "rgba(128,96,62,0.76)", fontSize: 16, marginBottom: 8, letterSpacing: "-0.5px" }}>
        Knowledge is better than wealth
      </p>
      <h1 style={{ fontFamily: "'Playfair Display', serif", color: "#885926", fontSize: "clamp(36px, 10vw, 52px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: "-2px", margin: "0 0 4px" }}>
        Finally afford
      </h1>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#885926", fontSize: "clamp(28px, 8vw, 44px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-1.5px", margin: "0 0 32px" }}>
        Beneficial knowledge
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "center" }}>
        <button style={{ backgroundColor: "#885926", color: "white", fontFamily: "'Playfair Display', serif", fontSize: 18, padding: "10px 40px", border: "none", cursor: "pointer", width: "100%", maxWidth: 280 }}>
          Shop now
        </button>
        <button style={{ backgroundColor: "transparent", color: "#885926", fontFamily: "'Playfair Display', serif", fontSize: 18, padding: "10px 40px", border: "1px solid #885926", cursor: "pointer", width: "100%", maxWidth: 280 }}>
          Browse add-ons
        </button>
      </div>
    </section>
  );
}

function FeaturesBar() {
  const features = [
    { icon: "📖", label: "High quality prints" },
    { icon: "🌍", label: "International shipping" },
    { icon: "💰", label: "Affordable prices" },
  ];
  return (
    <div style={{ backgroundColor: "white", borderTop: "1px solid rgba(162,162,162,0.3)", borderBottom: "1px solid rgba(162,162,162,0.3)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", maxWidth: 640, margin: "0 auto", padding: "12px 16px" }}>
        {features.map(({ icon, label }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, textAlign: "center" }}>
            <span style={{ fontSize: 20 }}>{icon}</span>
            <span style={{ fontFamily: "'Playfair Display', serif", color: "#885926", fontSize: 10, lineHeight: 1.3 }}>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function CategoryTabs() {
  const [active, setActive] = useState("Aqeedah");
  const tabs = ["Aqeedah", "Hadith", "Fiqh"];
  return (
    <section style={{ backgroundColor: "#885926" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActive(tab)}
              style={{ flex: 1, fontFamily: "'Playfair Display', serif", fontSize: 16, padding: "12px 0", background: "none", border: "none", borderBottom: active === tab ? "2px solid white" : "2px solid transparent", color: active === tab ? "white" : "rgba(255,253,245,0.6)", cursor: "pointer", transition: "color 0.15s" }}>
              {tab}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, padding: "16px 0 20px", overflowX: "auto", scrollbarWidth: "none" }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ flexShrink: 0, backgroundColor: "white", width: 110, height: 110, borderRadius: 2 }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OurPicks() {
  return (
    <section style={{ backgroundColor: "#885926", paddingBottom: 40 }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: 20, fontWeight: 400, margin: "0 0 4px" }}>Our picks</h2>
          <p style={{ fontFamily: "'Playfair Display', serif", color: "rgba(255,253,245,0.69)", fontSize: 14, margin: 0 }}>Learn what we recommend for you</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ backgroundColor: "white", borderRadius: 2, aspectRatio: "3/4" }} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
          <button style={{ border: "1px solid white", color: "#f3f3f3", fontFamily: "'Playfair Display', serif", fontSize: 16, padding: "6px 32px", background: "transparent", cursor: "pointer" }}>
            See all
          </button>
        </div>
      </div>
    </section>
  );
}

function AdditionalItems({ dark = false }: { dark?: boolean }) {
  const bg = dark ? "#0d282b" : "#fffdf5";
  const titleColor = dark ? "white" : "black";
  const subtitleColor = dark ? "rgba(255,253,245,0.7)" : "#867461";
  const linkColor = dark ? "white" : "black";
  const cardBg = dark ? "#f3f3f3" : "white";
  const cardBorder = dark ? "none" : "1px solid #eee";

  return (
    <section style={{ backgroundColor: bg, padding: "32px 0" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 4 }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: titleColor, fontSize: 24, fontWeight: 400, letterSpacing: "-0.8px", margin: 0 }}>Additional Items</h2>
          <a href="#" style={{ fontFamily: "'Playfair Display', serif", color: linkColor, fontSize: 11, textDecoration: "none" }}>View all</a>
        </div>
        {!dark && <p style={{ fontFamily: "'Playfair Display', serif", color: subtitleColor, fontSize: 14, margin: "0 0 20px" }}>Buy that which benefits you</p>}
        <div style={{ marginTop: dark ? 16 : 0, display: "flex", gap: 12, overflowX: "auto", scrollbarWidth: "none", paddingBottom: 4 }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} style={{ flexShrink: 0, backgroundColor: cardBg, width: 144, height: 200, borderRadius: 2, border: cardBorder }} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FilteredGrid() {
  const [activeCategory, setActiveCategory] = useState("Clothes");
  const [activeLang, setActiveLang] = useState("English");
  const categories = ["Clothes", "Salafi pen"];
  const languages = ["Urdu", "English", "Arabic"];

  const chipStyle = (active: boolean) => ({
    fontFamily: "'Playfair Display', serif",
    fontSize: 13,
    padding: "4px 14px",
    borderRadius: 20,
    border: active ? "1px solid #885926" : "1px solid #867461",
    backgroundColor: active ? "#885926" : "transparent",
    color: active ? "white" : "#867461",
    cursor: "pointer",
    transition: "all 0.15s",
  });

  return (
    <section style={{ backgroundColor: "#fffdf5", paddingBottom: 40 }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 16px" }}>
        <div style={{ borderTop: "1px solid rgba(136,89,38,0.3)", marginBottom: 20 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {categories.map(c => <button key={c} onClick={() => setActiveCategory(c)} style={chipStyle(activeCategory === c)}>{c}</button>)}
          </div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {languages.map(l => <button key={l} onClick={() => setActiveLang(l)} style={chipStyle(activeLang === l)}>{l}</button>)}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ backgroundColor: "#f3f3f3", borderRadius: 2, aspectRatio: "3/4" }} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
          <button style={{ backgroundColor: "#885926", color: "white", fontFamily: "'Playfair Display', serif", fontSize: 18, padding: "10px 40px", border: "none", cursor: "pointer" }}>
            Shop now
          </button>
        </div>
      </div>
    </section>
  );
}

function FooterMenu() {
  const pages = ["Home", "Shop", "About", "Blog", "Contact"];
  const help = ["FAQ", "Shipping", "Returns", "Track Order"];
  return (
    <section style={{ backgroundColor: "#885926", padding: "40px 0" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
          <img src={imgLogo1} alt="Logo" style={{ height: 56, objectFit: "contain" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: 18, fontWeight: 400, marginBottom: 12 }}>Pages</h3>
            {pages.map(p => <a key={p} href="#" style={{ display: "block", fontFamily: "'Playfair Display', serif", color: "rgba(255,253,245,0.7)", fontSize: 14, textDecoration: "none", marginBottom: 8 }}>{p}</a>)}
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "white", fontSize: 18, fontWeight: 400, marginBottom: 12 }}>Help</h3>
            {help.map(h => <a key={h} href="#" style={{ display: "block", fontFamily: "'Playfair Display', serif", color: "rgba(255,253,245,0.7)", fontSize: 14, textDecoration: "none", marginBottom: 8 }}>{h}</a>)}
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  { q: "How does checkout work?", a: "Add items to your cart, proceed to checkout, enter your shipping details and complete payment via our secure gateway." },
  { q: "Do you ship internationally?", a: "Yes! We ship worldwide. International orders may incur additional fees communicated via WhatsApp." },
  { q: "What payment methods do you accept?", a: "We accept major credit/debit cards and bank transfers. Contact us via WhatsApp for other options." },
  { q: "Can I return an item?", a: "Returns are accepted within 14 days of delivery for items in original condition." },
  { q: "How long does delivery take?", a: "Domestic: 3–5 business days. International: 7–21 business days depending on location." },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section style={{ backgroundColor: "#0d282b", paddingBottom: 48, paddingTop: 8 }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "0 16px" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: "#dfaf23", fontSize: 40, fontWeight: 400, textAlign: "center", letterSpacing: "-1.5px", marginBottom: 24 }}>FAQ</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} style={{ backgroundColor: "#f3f3f3", borderRadius: 2, overflow: "hidden" }}>
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: 8 }}>
                <span style={{ fontFamily: "'Playfair Display', serif", color: "black", fontSize: 16, lineHeight: 1.3 }}>{item.q}</span>
                <span style={{ flexShrink: 0, color: "#1D1B20" }}><ChevronIcon open={openIndex === i} /></span>
              </button>
              {openIndex === i && (
                <div style={{ padding: "0 16px 12px" }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", color: "#555", fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fffdf5" }}>
      <Header />
      <main>
        <Hero />
        <FeaturesBar />
        <CategoryTabs />
        <OurPicks />
        <AdditionalItems />
        <FilteredGrid />
        <FooterMenu />
        <AdditionalItems dark />
        <FAQ />
      </main>
      <footer style={{ backgroundColor: "#0d282b", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "20px 16px", textAlign: "center" }}>
        <p style={{ fontFamily: "'Playfair Display', serif", color: "rgba(255,253,245,0.5)", fontSize: 12, margin: 0 }}>
          &copy; {new Date().getFullYear()} Beneficial Knowledge Store. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
