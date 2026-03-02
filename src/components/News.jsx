import { news } from "../data/news";

function News() {
  return (
    <section id="news">

      <div className="section-banner" style={{ height: 340 }}>
        <div
          className="section-banner-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1495214783159-3503fd1b572d?w=1600&q=80')",
          }}
        />
        <div className="section-banner-overlay" />
        <div className="section-banner-content text-center">
          <p className="eyebrow mb-3">Latest Updates</p>
          <h2 className="section-heading">
            Club <em>News</em>
          </h2>
        </div>
      </div>

      <div className="section-alt py-20">
        <div className="container-xl px-4 px-lg-5">
          <div className="row g-4">

            {news.map((item) => (
              <div key={item.id} className="col-md-4">

                <div className="cc-card">

                  <div className="card-img-wrap">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="p-6">

                    <p
                      className="mb-3"
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: "0.6rem",
                        letterSpacing: "2.5px",
                        color: "#D4AF37",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.date}
                    </p>

                    <h4
                      className="mb-4"
                      style={{
                        fontFamily: "'Cormorant Garamond',serif",
                        fontSize: "1.42rem",
                        fontWeight: 400,
                        color: "var(--text)",       
                        lineHeight: 1.28,
                        transition: "color 0.45s",
                      }}
                    >
                      {item.title}
                    </h4>

                    <p
                      className="mb-6"
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: "0.82rem",
                        color: "var(--text-sub)",   
                        lineHeight: 1.8,
                        transition: "color 0.45s",
                      }}
                    >
                      {item.excerpt}
                    </p>

                    <button className="read-more-btn">
                      Read More <span>→</span>
                    </button>

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

export default News;