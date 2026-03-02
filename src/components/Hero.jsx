function Hero() {
  return (
    <section id="home">
      <div id="hero" className="relative flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div id="hero-bg"></div>

        {/* Overlay */}
        <div id="hero-overlay"></div>

        {/* Content */}
        <div
          id="hero-content"
          className="relative text-center px-3"
        >
          <p className="eyebrow mb-3">
            Welcome to the world's finest culinary collective
          </p>

          <h1 className="hero-title">
            Club <br />
            <em>Chefs</em>
          </h1>

          <p
            className="mx-auto mb-10"
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.68)",
              maxWidth: 460,
              lineHeight: 1.85,
              letterSpacing: "0.3px",
            }}
          >
            Where extraordinary culinary talent meets the art of living well.
            Discover the chefs who shape the world's most celebrated tables.
          </p>

          <a href="#our-chefs" className="btn-gold">
            Explore Chefs
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: "0.58rem",
              letterSpacing: "3px",
              color: "rgba(255,255,255,0.35)",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>

          <div className="scroll-line"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;