import { mosaicImages } from "../data/mosaic";

function Stories() {
  return (
    <section className="section-dark py-24 overflow-hidden">
      <div className="container-xl px-4 px-lg-5">

        <div className="row g-2 mb-4">
          {mosaicImages.slice(0, 4).map((src, i) => (
            <div key={i} className="col-3">
              <img src={src} alt="" className="mosaic-img" />
            </div>
          ))}
        </div>

        <div className="text-center py-20 px-3 relative">

          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(212,175,55,0.05) 0%, transparent 68%)",
            }}
          />

          <p className="eyebrow mb-3 relative">
            Community · Stories · Passion
          </p>

          <h2
            className="relative mb-7 mx-auto"
            style={{
              fontFamily: "'Cormorant Garamond',serif",
              fontSize: "clamp(2.5rem,7vw,5.5rem)",
              fontWeight: 300,
              color: "var(--text)",
              lineHeight: 1.15,
              maxWidth: 680,
              transition: "color 0.45s",
            }}
          >
            Welcome to <em style={{ color: "#D4AF37" }}>Home</em>
            <br />
            Cooking Stories
          </h2>

          <p
            className="relative mx-auto mb-10"
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: "0.9rem",
              color: "var(--text-sub)",
              maxWidth: 500,
              lineHeight: 1.9,
              transition: "color 0.45s",
            }}
          >
            Thousands of home cooks, one shared passion. Share your recipes,
            your heritage, your kitchen triumphs and beautiful failures.
          </p>

          <a href="#" className="btn-ghost relative">
            Share Your Story
          </a>
        </div>

        <div className="row g-2 mt-4 pb-8">
          {mosaicImages.slice(4).map((src, i) => (
            <div key={i} className="col-3">
              <img src={src} alt="" className="mosaic-img" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stories;