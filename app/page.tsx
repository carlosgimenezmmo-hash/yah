"use client"

import { useState, useEffect } from "react"

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div style={{ background: "#fff", color: "#0a0a0a", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", overflowX: "hidden" }}>

      {/* BARRA DE NAVEGACION */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(255,255,255,0.95)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none", transition: "all 0.3s" }}>
        <span style={{ fontSize: 22, fontWeight: 900, letterSpacing: -0.5 }}>Yah<span style={{ color: "#22C55E" }}>!</span></span>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button onClick={() => window.open("https://vivienda-ya.vercel.app", "_blank")} style={{ padding: "8px 18px", borderRadius: 20, border: "1px solid rgba(34,197,94,0.4)", background: "transparent", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", color: "#16a34a" }}>🏠 Abrir Web</button>
          <button onClick={() => window.open("/ViviendaYa.apk", "_blank")} style={{ padding: "8px 18px", borderRadius: 20, border: "none", background: "#22C55E", color: "#fff", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>📲 Instalar App</button>
        </div>
      </nav>

      {/* SECCION PRINCIPAL */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "100px 24px 60px", textAlign: "center", background: "linear-gradient(180deg, #f0fdf4 0%, #fff 60%)" }}>
        <h1 style={{ fontSize: "clamp(40px, 8vw, 80px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, margin: "0 0 24px", maxWidth: 800 }}>
          Vivienda<span style={{ color: "#22C55E" }}>Ya</span>
        </h1>
        <p style={{ fontSize: "clamp(16px, 2.5vw, 20px)", color: "#6B7280", maxWidth: 560, margin: "0 0 40px", lineHeight: 1.6 }}>
          El primer marketplace inmobiliario en video. Compra, alquila o vende propiedades con ubicación real verificada por GPS.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 60 }}>
          <button onClick={() => window.open("https://vivienda-ya.vercel.app/feed", "_blank")} style={{ padding: "16px 32px", borderRadius: 14, border: "none", background: "#22C55E", color: "#fff", fontSize: 17, fontWeight: 800, cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 24px rgba(34,197,94,0.35)" }}>Ver propiedades</button>
          <button onClick={() => window.open("/ViviendaYa.apk", "_blank")} style={{ padding: "16px 32px", borderRadius: 14, border: "1px solid rgba(34,197,94,0.4)", background: "rgba(34,197,94,0.06)", color: "#16a34a", fontSize: 17, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", display: "flex", alignItems: "center", gap: 8 }}>
            📲 Descargar App
          </button>
        </div>
      </section>

      {/* PIE DE PAGINA */}
      <footer style={{ padding: "40px 24px", background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontSize: 20, fontWeight: 900, color: "#fff" }}>Yah<span style={{ color: "#22C55E" }}>!</span></span>
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 14 }}>Tres Arroyos, Buenos Aires</span>
        </div>
      </footer>

    </div>
  )
}