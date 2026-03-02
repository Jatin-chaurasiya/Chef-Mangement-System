import { notes } from "../data/notes";
import notes1 from "../assets/Images/notes1.jpg";

function Notes() {
  return (
    <section id="notes">

      <div className="section-banner" style={{ height: 340 }}>
        <div
          className="section-banner-bg"
          style={{
            backgroundImage:
              `url(${notes1})`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg,rgba(0,0,0,0.8) 0%,rgba(10,8,0,0.55) 100%)",
          }}
        />
        <div className="section-banner-content text-center">
          <p className="eyebrow mb-3">From the Kitchen</p>
          <h2 className="section-heading">
            Editor's <em>Notes</em>
          </h2>
        </div>
      </div>

      <div className="section-dark py-20">
        <div className="container-xl px-4 px-lg-5">
          <div className="row g-4">

            {notes.map((note) => (
              <div key={note.id} className="col-md-4">
                <div className="cursor-pointer">

                  <div
                    className="relative overflow-hidden rounded mb-5"
                    style={{ height: 200 }}
                  >
                    <img
                      src={note.image}
                      alt={note.title}
                      className="w-full h-full object-cover block transition-transform duration-500 hover:scale-110"
                    />
                  </div>

                  <div className="flex items-center gap-4 mb-3">
                    <span
                      style={{
                        fontFamily: "'Poppins',sans-serif",
                        fontSize: "0.58rem",
                        letterSpacing: "2.5px",
                        color: "#D4AF37",         
                        textTransform: "uppercase",
                      }}
                    >
                      {note.date}
                    </span>

                    <div
                      className="flex-1"
                      style={{
                        height: 1,
                        background: "var(--border)",
                        transition: "background 0.45s",
                      }}
                    />
                  </div>

                  {/* Title */}
                  <h4
                    className="mb-3"
                    style={{
                      fontFamily: "'Cormorant Garamond',serif",
                      fontSize: "1.52rem",
                      fontWeight: 400,
                      color: "var(--text)",    
                      lineHeight: 1.22,
                      transition: "color 0.45s",
                    }}
                  >
                    {note.title}
                  </h4>

                  {/* Excerpt */}
                  <p
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: "0.82rem",
                      color: "var(--text-sub)",   
                      lineHeight: 1.78,
                      transition: "color 0.45s",
                    }}
                  >
                    {note.excerpt}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>

    </section>
  );
}

export default Notes;