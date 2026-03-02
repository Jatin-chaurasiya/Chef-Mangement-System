import { notes } from "../data/notes";   // ✅ correct file

function Notes() {
  return (
    <section id="notes">

      {/* Banner */}
      <div
        className="section-banner"
        style={{ height: 340 }}
      >
        <div
          className="section-banner-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1600&q=80')",
          }}
        ></div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg,rgba(0,0,0,0.8) 0%,rgba(10,8,0,0.55) 100%)",
          }}
        ></div>

        <div className="section-banner-content text-center">
          <p className="eyebrow mb-3">
            From the Kitchen
          </p>
          <h2 className="section-heading">
            Editor's <em>Notes</em>
          </h2>
        </div>
      </div>

      {/* Content */}
      <div
        className="py-20"
        style={{ background: "#0a0a0a" }}
      >
        <div className="container-xl px-4 px-lg-5">

          <div className="row g-4">

            {notes.map((note) => (
              <div
                key={note.id}
                className="col-md-4"
              >
                <div className="cursor-pointer">

                  {/* Image */}
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

                  {/* Date Line */}
                  <div className="flex items-center gap-4 mb-3">
                    <span
                      style={{
                        fontFamily:
                          "'Poppins',sans-serif",
                        fontSize: "0.58rem",
                        letterSpacing: "2.5px",
                        color: "#D4AF37",
                        textTransform: "uppercase",
                      }}
                    >
                      {note.date}
                    </span>

                    <div
                      className="flex-1 h-[1px]"
                      style={{
                        background:
                          "rgba(255,255,255,0.07)",
                      }}
                    ></div>
                  </div>

                  {/* Title */}
                  <h4
                    className="mb-3"
                    style={{
                      fontFamily:
                        "'Cormorant Garamond',serif",
                      fontSize: "1.52rem",
                      fontWeight: 400,
                      color: "#fff",
                      lineHeight: 1.22,
                    }}
                  >
                    {note.title}
                  </h4>

                  {/* Text */}
                  <p
                    style={{
                      fontFamily:
                        "'Poppins',sans-serif",
                      fontSize: "0.82rem",
                      color:
                        "rgba(255,255,255,0.42)",
                      lineHeight: 1.78,
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