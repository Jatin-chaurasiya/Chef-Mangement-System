import { useState } from "react";
import { chefs } from "../data/chefs";
import ChefModal from "./ChefModal";
import bg1 from "../assets/images/bg1.jpg";

function ChefSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="our-chefs">

      <div className="section-banner" style={{ height: 400 }}>
        <div
          className="section-banner-bg"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundPosition: "center 30%",
          }}
        />
        <div className="section-banner-overlay" />
        <div className="section-banner-content text-center">
          <p className="eyebrow mb-3">The Collective</p>
          <h2 className="section-heading">
            Meet Our <em>Chefs</em>
          </h2>
        </div>
      </div>
      <div className="section-alt py-20">
        <div className="container-xl px-4 px-lg-5">
          <div className="row g-4">
            {chefs.map((chef) => (
              <div key={chef.id} className="col-sm-6 col-xl-3">
                <div className="cc-card" onClick={() => setSelected(chef)}>

                  <div className="card-img-wrap relative">
                    <img src={chef.image} alt={chef.name} />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)",
                      }}
                    />

                    <div className="specialty-badge">{chef.specialty}</div>
                  </div>

                  <div className="p-6">

                    <h4
                      className="mb-1"
                      style={{
                        fontFamily: "'Cormorant Garamond',serif",
                        fontSize: "1.6rem",
                        fontWeight: 400,
                        color: "var(--text)",    
                        lineHeight: 1.2,
                        transition: "color 0.45s",
                      }}
                    >
                      {chef.name}
                    </h4>

                    <p
                      className="mb-4"
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: "0.66rem",
                        color: "var(--text-muted)",
                        letterSpacing: "1.5px",
                        textTransform: "uppercase",
                        transition: "color 0.45s",
                      }}
                    >
                      {chef.title}
                    </p>

                    <p
                      className="mb-5"
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: "0.8rem",
                        color: "var(--text-sub)",   
                        lineHeight: 1.72,
                        transition: "color 0.45s",
                      }}
                    >
                      {chef.bio.substring(0, 92)}…
                    </p>

                    <div className="flex items-center justify-between">
                      <span
                        style={{
                          fontFamily: "'Poppins',sans-serif",
                          fontSize: "0.62rem",
                          color: "var(--text-muted)", 
                          letterSpacing: "1px",
                          transition: "color 0.45s",
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

      {selected && (
        <ChefModal chef={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

export default ChefSection;