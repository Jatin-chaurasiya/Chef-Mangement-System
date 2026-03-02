import { useState } from "react";
import { favorites } from "../data/favorites";   
import { filterTabs } from "../data/tabs";     

function Favorites() {

  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? favorites
      : favorites.filter((f) => f.category === active);

  return (
    <section id="favorites">

      {/* Banner */}
      <div
        className="section-banner"
        style={{ height: 360 }}
      >
        <div
          className="section-banner-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1600&q=80')",
          }}
        ></div>

        <div className="section-banner-overlay"></div>

        <div className="section-banner-content text-center">
          <p className="eyebrow mb-3">
            Curated Selections
          </p>
          <h2 className="section-heading">
            Chef's <em>Favorites</em>
          </h2>
        </div>
      </div>

      {/* Content */}
      <div
        className="py-16 pb-24"
        style={{ background: "#0a0a0a" }}
      >
        <div className="container-xl px-4 px-lg-5">

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {filterTabs.map((t) => (
              <button
                key={t}
                className={`filter-tab ${
                  active === t ? "active" : ""
                }`}
                onClick={() => setActive(t)}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Gallery */}
          <div className="row g-3">

            {filtered.map((item) => (
              <div
                key={item.id}
                className="col-sm-6 col-lg-4"
              >
                <div className="gallery-item">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <div className="gallery-overlay"></div>

                  <div className="gallery-info">

                    <div
                      style={{
                        fontFamily:
                          "'Poppins',sans-serif",
                        fontSize: "0.57rem",
                        letterSpacing: "2.5px",
                        color: "#D4AF37",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      {item.difficulty} · {item.chef}
                    </div>

                    <div
                      style={{
                        fontFamily:
                          "'Cormorant Garamond',serif",
                        fontSize: "1.28rem",
                        fontWeight: 500,
                        color: "#fff",
                      }}
                    >
                      {item.title}
                    </div>

                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default Favorites;