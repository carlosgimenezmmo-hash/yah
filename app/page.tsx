"use client"

import { useState, useEffect } from "react"

const apps = [
  {
    nombre: "ViviendaYa",
    descripcion: "Comprá, alquilá y vendé propiedades con video real y ubicación verificada por GPS.",
    color: "#22C55E",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.2)",
    emoji: "🏠",
    href: "https://vivienda-ya.vercel.app",
    disponible: true,
  },
  {
    nombre: "RodadosYa",
    descripcion: "Comprá y vendé autos, motos y vehículos con video real.",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
    emoji: "🚗",
    href: "#",
    disponible: false,
  },
  {
    nombre: "CocinaYa",
    descripcion: "Recetas, productos y servicios gastronómicos.",
    color: "#F97316",
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.2)",
    emoji: "🍳",
    href: "#",
    disponible: false,
  },
]

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false)
  const [showInstall, setShowInstall] = useState(false)
  const [os, setOs] = useState("desktop")

  useEffect(() => {
    const ua = navigator.userAgent
    if (/iPad|iPhone|iPod/.test(ua)) setOs("ios")
    else if (/Android/.test(ua)) setOs("android")
    else setOs("desktop")
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div style={{ background: "#0a0a0a", color: "#fff", fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif", overflowX: "hidden" }}>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", background: scrolled ? "rgba(10,10,10,0.95)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none", transition: "all 0.3s" }}>
        <span style={{ fontSize: 24, fontWeight: 900, letterSpacing: -0.5 }}>Yah<span style={{ color: "#22C55E" }}>!</span></span>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <button onClick={() => window.open("https://vivienda-ya.vercel.app/feed", "_blank")} style={{ padding: "8px 16px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.12)", background: "transparent", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit", color: "rgba(255,255,255,0.7)" }}>
            🏠 ViviendaYa
          </button>
          <button onClick={() => setShowInstall(true)} style={{ padding: "8px 18px", borderRadius: 20, border: "none", background: "#22C55E", color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
            Descargar app
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "100px 24px 80px", textAlign: "center", background: "radial-gradient(ellipse at top, rgba(34,197,94,0.12) 0%, transparent 60%), #0a0a0a" }}>

        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.25)", borderRadius: 20, padding: "6px 16px", marginBottom: 32, fontSize: 13, fontWeight: 600, color: "#22C55E" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22C55E", display: "inline-block" }} />
          Video real · GPS verificado · Sin intermediarios
        </div>

        <h1 style={{ fontSize: "clamp(40px, 8vw, 80px)", fontWeight: 900, lineHeight: 1.05, letterSpacing: -2, margin: "0 0 24px", maxWidth: 820 }}>
          Comprá, vendé y alquilá<br />
          <span style={{ color: "#22C55E" }}>con video real</span>
        </h1>

        <p style={{ fontSize: "clamp(16px, 2.5vw, 19px)", color: "rgba(255,255,255,0.5)", maxWidth: 560, margin: "0 0 48px", lineHeight: 1.7 }}>
          Yah! es el ecosistema donde podés comprar, vender e intercambiar cualquier cosa — propiedades, autos, servicios — con video real y ubicación verificada por GPS.
        </p>

        {/* Botones de descarga */}
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center", marginBottom: 24 }}>

          {/* Google Play */}
          <div style={{ position: "relative" }}>
            <button style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 24px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)", cursor: "not-allowed", fontFamily: "inherit", opacity: 0.7 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-11.53-2.7-2.7L3.18 23.76zm16.7-10.93L17.1 11.2l-2.83 2.59 2.83 2.59 2.8-1.62c.8-.46.8-1.66-.02-1.93zM3.07.28C2.7.52 2.5.94 2.5 1.5v21c0 .56.2.98.57 1.22l.1.06 11.77-11.77v-.28L3.07.28zm9.8 9.52L3.18.24c-.35-.04-.69.03-.99.2l10.9 10.9 2.7-2.7-2.92-2.84z"/>
              </svg>
              <div style={{ textAlign: "left" }}>
                <p style={{ margin: 0, fontSize: 10, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Disponible en</p>
                <p style={{ margin: 0, fontSize: 16, color: "#fff", fontWeight: 700 }}>Google Play</p>
              </div>
            </button>
            <span style={{ position: "absolute", top: -8, right: -8, background: "#22C55E", color: "#fff", fontSize: 9, fontWeight: 800, padding: "2px 8px", borderRadius: 20 }}>PRÓXIMO</span>
          </div>

          {/* App Store */}
          <div style={{ position: "relative" }}>
            <button style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 24px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)", cursor: "not-allowed", fontFamily: "inherit", opacity: 0.7 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.18 1.32-2.16 3.93.03 3.1 2.72 4.12 2.75 4.13l-.04.06zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div style={{ textAlign: "left" }}>
                <p style={{ margin: 0, fontSize: 10, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>Disponible en</p>
                <p style={{ margin: 0, fontSize: 16, color: "#fff", fontWeight: 700 }}>App Store</p>
              </div>
            </button>
            <span style={{ position: "absolute", top: -8, right: -8, background: "#22C55E", color: "#fff", fontSize: 9, fontWeight: 800, padding: "2px 8px", borderRadius: 20 }}>PRÓXIMO</span>
          </div>

          {/* PWA */}
          <button onClick={() => setShowInstall(true)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 24px", borderRadius: 14, border: "1px solid rgba(34,197,94,0.3)", background: "rgba(34,197,94,0.08)", cursor: "pointer", fontFamily: "inherit" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <div style={{ textAlign: "left" }}>
              <p style={{ margin: 0, fontSize: 10, color: "#22C55E", fontWeight: 500 }}>Instalar ahora</p>
              <p style={{ margin: 0, fontSize: 16, color: "#fff", fontWeight: 700 }}>Versión Web</p>
            </div>
          </button>

        </div>

        <p style={{ color: "rgba(255,255,255,0.25)", fontSize: 13, margin: "0 0 72px" }}>
          La versión web ya está disponible. Las apps nativas llegan pronto.
        </p>

        {/* Mockup */}
        <div style={{ width: 260, height: 520, borderRadius: 36, background: "#111", boxShadow: "0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", padding: 20 }}>
            <div style={{ position: "absolute", top: 20, left: 20, right: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: 16 }}>Vivienda<span style={{ color: "#22C55E" }}>Ya</span></span>
              <span style={{ background: "rgba(34,197,94,0.9)", color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>📍 GPS VERIFICADO</span>
            </div>
            <div style={{ position: "absolute", top: "45%", left: "50%", transform: "translate(-50%, -50%)" }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "2px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 0, height: 0, borderTop: "12px solid transparent", borderBottom: "12px solid transparent", borderLeft: "20px solid #fff", marginLeft: 4 }} />
              </div>
            </div>
            <div style={{ width: "100%", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(10px)", borderRadius: 16, padding: 16, border: "1px solid rgba(255,255,255,0.08)" }}>
              <p style={{ color: "#fff", fontWeight: 800, fontSize: 22, margin: "0 0 4px" }}>USD 85.000</p>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, margin: "0 0 2px" }}>Palermo, Buenos Aires</p>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, margin: "0 0 14px" }}>3 amb. · 75 m² · A estrenar</p>
              <div style={{ width: "100%", height: 44, background: "#25D366", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <span style={{ fontSize: 16 }}>💬</span>
                <span style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>Contactar por WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EL PROBLEMA */}
      <section style={{ padding: "80px 24px", background: "#111" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, letterSpacing: -1, margin: "0 0 16px", color: "#fff" }}>
            ¿Cansado de los portales tradicionales?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17, margin: "0 0 56px", lineHeight: 1.6 }}>
            Fotos viejas. Ubicaciones inventadas. Intermediarios que no responden. Ya fue.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { problema: "Fotos trucadas o viejas", solucion: "Video grabado en el momento", icono: "📸" },
              { problema: "Ubicación inventada", solucion: "GPS verificado en tiempo real", icono: "📍" },
              { problema: "Intermediarios lentos", solucion: "Contacto directo por WhatsApp", icono: "⏳" },
              { problema: "Información incompleta", solucion: "Ves todo antes de llamar", icono: "❓" },
            ].map((item, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, padding: 24, textAlign: "left" }}>
                <span style={{ fontSize: 28, display: "block", marginBottom: 16 }}>{item.icono}</span>
                <p style={{ fontSize: 13, color: "#EF4444", fontWeight: 600, margin: "0 0 8px", textDecoration: "line-through" }}>{item.problema}</p>
                <p style={{ fontSize: 14, color: "#22C55E", fontWeight: 700, margin: 0 }}>✓ {item.solucion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <section style={{ padding: "80px 24px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, letterSpacing: -1, margin: "0 0 12px", color: "#fff" }}>
              Por qué Yah! es diferente
            </h2>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17, margin: 0 }}>Tres razones que cambian todo</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { icono: "🎥", titulo: "Video real, no fotos trucadas", descripcion: "Cada publicación tiene un video grabado en el lugar. Ves los espacios, la luz, el entorno. Sin filtros ni edición engañosa." },
              { icono: "📍", titulo: "Ubicación verificada por GPS", descripcion: "El sistema verifica que el video fue grabado donde dice estar. Terminamos con las publicaciones en ubicaciones falsas." },
              { icono: "💬", titulo: "Contacto directo, sin intermediarios", descripcion: "Hablás directo con el dueño o agente por WhatsApp. Sin formularios, sin esperas, sin comisiones ocultas." },
            ].map((d, i) => (
              <div key={i} style={{ padding: 32, borderRadius: 20, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}>
                <span style={{ fontSize: 44, display: "block", marginBottom: 20 }}>{d.icono}</span>
                <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 12px", color: "#fff" }}>{d.titulo}</h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, lineHeight: 1.6, margin: 0 }}>{d.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPS DEL ECOSISTEMA */}
      <section style={{ padding: "80px 24px", background: "#111" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "6px 16px", marginBottom: 32, fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.4)" }}>
            🚀 El ecosistema
          </div>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, letterSpacing: -1, margin: "0 0 16px", color: "#fff" }}>
            Una cuenta.<br /><span style={{ color: "#22C55E" }}>Todas las apps.</span>
          </h2>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 17, margin: "0 0 56px", maxWidth: 520, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
            Registrate una vez y accedé a todo el ecosistema Yah! a medida que lanzamos nuevas apps.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {apps.map((app) => (
              <div key={app.nombre} onClick={() => app.disponible && window.open(app.href, "_blank")} style={{ padding: 28, borderRadius: 20, border: `1px solid ${app.border}`, background: app.bg, cursor: app.disponible ? "pointer" : "default", position: "relative", textAlign: "left", transition: "transform 0.2s" }}>
                {app.disponible ? (
                  <span style={{ position: "absolute", top: 16, right: 16, background: app.color, color: "#fff", fontSize: 10, fontWeight: 800, padding: "3px 10px", borderRadius: 20 }}>DISPONIBLE</span>
                ) : (
                  <span style={{ position: "absolute", top: 16, right: 16, background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.3)", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>PRÓXIMAMENTE</span>
                )}
                <span style={{ fontSize: 36, display: "block", marginBottom: 12 }}>{app.emoji}</span>
                <h3 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 8px", color: app.color }}>{app.nombre}</h3>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, margin: 0, lineHeight: 1.5 }}>{app.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "100px 24px", background: "radial-gradient(ellipse at center, rgba(34,197,94,0.1) 0%, transparent 70%), #0a0a0a", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(32px, 6vw, 64px)", fontWeight: 900, letterSpacing: -2, color: "#fff", margin: "0 0 20px", lineHeight: 1.05 }}>
          Empezá hoy.<br /><span style={{ color: "#22C55E" }}>Es gratis.</span>
        </h2>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 18, margin: "0 0 48px", maxWidth: 460, marginLeft: "auto", marginRight: "auto", lineHeight: 1.6 }}>
          Publicá tu primera propiedad en video. Ves la diferencia desde el primer día.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>

          <div style={{ position: "relative" }}>
            <button style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 28px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", cursor: "not-allowed", fontFamily: "inherit", opacity: 0.6 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M3.18 23.76c.3.17.64.24.99.2l12.6-11.53-2.7-2.7L3.18 23.76zm16.7-10.93L17.1 11.2l-2.83 2.59 2.83 2.59 2.8-1.62c.8-.46.8-1.66-.02-1.93zM3.07.28C2.7.52 2.5.94 2.5 1.5v21c0 .56.2.98.57 1.22l.1.06 11.77-11.77v-.28L3.07.28zm9.8 9.52L3.18.24c-.35-.04-.69.03-.99.2l10.9 10.9 2.7-2.7-2.92-2.84z"/></svg>
              <div style={{ textAlign: "left" }}>
                <p style={{ margin: 0, fontSize: 10, color: "rgba(255,255,255,0.4)" }}>Próximamente en</p>
                <p style={{ margin: 0, fontSize: 15, color: "#fff", fontWeight: 700 }}>Google Play</p>
              </div>
            </button>
            <span style={{ position: "absolute", top: -8, right: -8, background: "#22C55E", color: "#fff", fontSize: 9, fontWeight: 800, padding: "2px 8px", borderRadius: 20 }}>PRONTO</span>
          </div>

          <div style={{ position: "relative" }}>
            <button style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 28px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.05)", cursor: "not-allowed", fontFamily: "inherit", opacity: 0.6 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.15-2.18 1.32-2.16 3.93.03 3.1 2.72 4.12 2.75 4.13l-.04.06zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div style={{ textAlign: "left" }}>
                <p style={{ margin: 0, fontSize: 10, color: "rgba(255,255,255,0.4)" }}>Próximamente en</p>
                <p style={{ margin: 0, fontSize: 15, color: "#fff", fontWeight: 700 }}>App Store</p>
              </div>
            </button>
            <span style={{ position: "absolute", top: -8, right: -8, background: "#22C55E", color: "#fff", fontSize: 9, fontWeight: 800, padding: "2px 8px", borderRadius: 20 }}>PRONTO</span>
          </div>

          <button onClick={() => setShowInstall(true)} style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 28px", borderRadius: 14, border: "none", background: "#22C55E", cursor: "pointer", fontFamily: "inherit", boxShadow: "0 4px 24px rgba(34,197,94,0.35)" }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            <div style={{ textAlign: "left" }}>
              <p style={{ margin: 0, fontSize: 10, color: "rgba(255,255,255,0.8)" }}>Disponible ahora</p>
              <p style={{ margin: 0, fontSize: 15, color: "#fff", fontWeight: 700 }}>Versión Web</p>
            </div>
          </button>

        </div>
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: 13 }}>
          Usá la versión web mientras llegan las apps nativas a las tiendas.
        </p>
      </section>

      {/* INSTALL MODAL */}
      {showInstall && (
        <div style={{ position: "fixed", inset: 0, zIndex: 100, display: "flex", alignItems: "flex-end", justifyContent: "center", background: "rgba(0,0,0,0.7)" }} onClick={() => setShowInstall(false)}>
          <div style={{ background: "#1a1a1a", borderRadius: "24px 24px 0 0", padding: "28px 24px 48px", width: "100%", maxWidth: 500, border: "1px solid rgba(255,255,255,0.08)" }} onClick={e => e.stopPropagation()}>
            <div style={{ width: 40, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.1)", margin: "0 auto 24px" }} />
            <h3 style={{ fontSize: 22, fontWeight: 900, margin: "0 0 8px", textAlign: "center", color: "#fff" }}>Instalar ViviendaYa</h3>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, textAlign: "center", margin: "0 0 28px" }}>Agregá la app a tu pantalla de inicio, sin pasar por ninguna tienda.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {(os === "ios"
                ? [{ paso: "1", texto: "Tocá el botón compartir", icono: "📤" }, { paso: "2", texto: 'Seleccioná "Agregar a pantalla de inicio"', icono: "➕" }, { paso: "3", texto: 'Tocá "Agregar" arriba a la derecha', icono: "✅" }]
                : os === "android"
                ? [{ paso: "1", texto: "Tocá los tres puntos arriba a la derecha", icono: "⋮" }, { paso: "2", texto: 'Seleccioná "Agregar a pantalla de inicio"', icono: "➕" }, { paso: "3", texto: 'Tocá "Agregar" para confirmar', icono: "✅" }]
                : [{ paso: "1", texto: "Abrí esta página en Chrome en tu celular", icono: "📱" }, { paso: "2", texto: "Tocá el menú del navegador", icono: "☰" }, { paso: "3", texto: 'Seleccioná "Agregar a pantalla de inicio"', icono: "✅" }]
              ).map(p => (
                <div key={p.paso} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 16px", background: "rgba(255,255,255,0.04)", borderRadius: 14, border: "1px solid rgba(255,255,255,0.06)" }}>
                  <span style={{ fontSize: 24 }}>{p.icono}</span>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 800, color: "#22C55E" }}>PASO {p.paso}</span>
                    <p style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#fff" }}>{p.texto}</p>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={() => setShowInstall(false)} style={{ width: "100%", marginTop: 24, padding: "16px", borderRadius: 14, border: "none", background: "#22C55E", color: "#fff", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ padding: "40px 24px", background: "#0a0a0a", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <span style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>Yah<span style={{ color: "#22C55E" }}>!</span></span>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <span onClick={() => window.open("https://vivienda-ya.vercel.app/feed", "_blank")} style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, cursor: "pointer" }}>ViviendaYa</span>
            <span onClick={() => window.open("https://vivienda-ya.vercel.app/planes", "_blank")} style={{ color: "rgba(255,255,255,0.4)", fontSize: 14, cursor: "pointer" }}>Planes</span>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 14 }}>Tres Arroyos, Buenos Aires</span>
          </div>
        </div>
      </footer>

    </div>
  )
}