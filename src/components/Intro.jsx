function Intro() {
  return (

    <section id="recipes" className="section-alt py-28">
      <div className="container-xl px-4 px-lg-5">
        <div className="row align-items-center g-5">

          {/* ── LEFT CONTENT ── */}
          <div className="col-lg-6" style={{ animationDelay: "0.2s" }}>

            <p className="eyebrow mb-3">Our Philosophy</p>

            <h2
              className="mb-7"
              style={{
                fontFamily: "'Cormorant Garamond',serif",
                fontSize: "clamp(2.4rem,5vw,4.2rem)",
                fontWeight: 300,
                color: "var(--text)",        
                lineHeight: 1.12,
                transition: "color 0.45s",
              }}
            >
              Make Every{" "}
              <em style={{ color: "#D4AF37", fontStyle: "italic" }}>
                Cooking
              </em>
              <br />
              Time a Moment
            </h2>

            <p
              className="mb-10 max-w-[500px]"
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontSize: "0.9rem",
                color: "var(--text-sub)",    
                lineHeight: 1.95,
                transition: "color 0.45s",
              }}
            >
              We believe that food is more than sustenance — it's a language, a
              memory, a cultural inheritance. Club Chefs curates the most
              extraordinary culinary talents to inspire your kitchen, your
              palate, and your imagination. Every recipe tells a story. Every
              chef carries a world.
            </p>

            <div className="flex gap-3 flex-wrap items-center mb-12">

              <a href="#our-chefs" className="btn-ghost">
                Meet the Chefs
              </a>

              <div className="flex items-center gap-3">
                <div
                  className="w-[46px] h-[46px] rounded-full flex items-center justify-center cursor-pointer"
                  style={{
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.28)",
                    color: "#D4AF37",
                    fontSize: "0.85rem",
                  }}
                >
                  ▶
                </div>

                <span
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: "0.7rem",
                    color: "var(--text-muted)",
                    letterSpacing: "1px",
                    transition: "color 0.45s",
                  }}
                >
                  Watch our story
                </span>
              </div>
            </div>

            <div
              className="pt-8"
              style={{
                borderTop: "1px solid var(--border)", 
                transition: "border-color 0.45s",
              }}
            >
              <div className="row g-3">
                {[
                  ["48+", "World-Class Chefs"],
                  ["320+", "Signature Recipes"],
                  ["12", "Michelin Stars"],
                ].map(([n, l]) => (
                  <div key={l} className="col-4">

                    <div className="stat-num">{n}</div>

                    <div className="stat-label mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="col-lg-6">
            <div className="relative">
              <div
                className="absolute top-[-18px] left-[-18px] w-[52%] h-[52%] rounded"
                style={{
                  border: "1px solid rgba(212,175,55,0.18)",
                  zIndex: 0,
                }}
              />

              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=800&q=85"
                alt="Chef at work"
                className="w-full block relative z-[1] rounded"
                style={{ height: 520, objectFit: "cover" }}
              />

              <div className="gold-accent-card">
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond',serif",
                    fontSize: "2.6rem",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    lineHeight: 1,
                  }}
                >
                  15+
                </div>
                <div
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: "0.62rem",
                    fontWeight: 600,
                    color: "rgba(0,0,0,0.6)",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    marginTop: 5,
                  }}
                >
                  Years of Excellence
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Intro;