import { useState } from "react";
import { chefs } from "../data/chefs";
import ChefModal from "./ChefModal";

function ChefSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="our-chefs">
      {/* Banner */}
      <div className="section-banner" style={{ height: 400 }}>
        <div
          className="section-banner-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1572715376701-98568319fd0b?w=1600&q=80')",
            backgroundPosition: "center 30%",
          }}
        ></div>

        <div className="section-banner-overlay"></div>

        <div className="section-banner-content text-center">
          <p className="eyebrow mb-3">The Collective</p>
          <h2 className="section-heading">
            Meet Our <em>Chefs</em>
          </h2>
        </div>
      </div>

      {/* Cards */}
      <div className="py-20" style={{ background: "#0d0d0d" }}>
        <div className="container-xl px-4 px-lg-5">
          <div className="row g-4">
            {chefs.map((chef) => (
              <div key={chef.id} className="col-sm-6 col-xl-3">
                <div className="cc-card" onClick={() => setSelected(chef)}>
                  {/* Image */}
                  <div className="card-img-wrap relative">
                    <img src={chef.image} alt={chef.name} />

                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)",
                      }}
                    ></div>

                    <div className="specialty-badge">{chef.specialty}</div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h4
                      className="mb-1"
                      style={{
                        fontFamily: "'Cormorant Garamond',serif",
                        fontSize: "1.6rem",
                        fontWeight: 400,
                        color: "#fff",
                        lineHeight: 1.2,
                      }}
                    >
                      {chef.name}
                    </h4>

                    <p
                      className="mb-4"
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: "0.66rem",
                        color: "rgba(255,255,255,0.36)",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                      }}
                    >
                      {chef.title}
                    </p>

                    <p
                      className="mb-5"
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: "0.8rem",
                        color: "rgba(255,255,255,0.48)",
                        lineHeight: 1.72,
                      }}
                    >
                      {chef.bio.substring(0, 92)}…
                    </p>

                    <div className="flex items-center justify-between">
                      <span
                        style={{
                          fontFamily: "'Poppins',sans-serif",
                          fontSize: "0.62rem",
                          color: "rgba(255,255,255,0.28)",
                          letterSpacing: "1px",
                        }}
                      >
                        {chef.experience}
                      </span>

                      <button className="expand-btn">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ChefModal chef={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

export default ChefSection;
