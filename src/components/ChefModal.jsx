import { useEffect } from "react";

function ChefModal({ chef, onClose }) {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="modal-backdrop-custom" onClick={onClose}>
      <div
        className="modal-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <div className="row g-0">

          {/* Image */}
          <div className="col-md-5">
            <img
              src={chef.image}
              alt={chef.name}
              className="w-full block"
              style={{
                height: 400,
                objectFit: "cover",
              }}
            />
          </div>

          {/* Content */}
          <div className="col-md-7">
            <div className="p-10">

              <p className="eyebrow mb-2">
                {chef.specialty}
              </p>

              <h3
                className="mb-1"
                style={{
                  fontFamily: "'Cormorant Garamond',serif",
                  fontSize: "2.4rem",
                  fontWeight: 400,
                  color: "#fff",
                  lineHeight: 1.1,
                }}
              >
                {chef.name}
              </h3>

              <p
                className="mb-6"
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "1.5px",
                }}
              >
                {chef.title}
              </p>

              <p
                className="mb-7"
                style={{
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "0.87rem",
                  color: "rgba(255,255,255,0.58)",
                  lineHeight: 1.88,
                }}
              >
                {chef.bio}
              </p>

              <p
                className="eyebrow mb-2"
                style={{
                  fontSize: "0.6rem",
                  letterSpacing: "3px",
                }}
              >
                Awards & Recognition
              </p>

              {chef.awards.map((a) => (
                <div key={a} className="award-item">
                  ✦ &nbsp;{a}
                </div>
              ))}

              <span
                className="inline-block mt-6"
                style={{
                  padding: "4px 14px",
                  background: "rgba(212,175,55,0.1)",
                  border: "1px solid rgba(212,175,55,0.28)",
                  borderRadius: 20,
                  fontFamily: "'Poppins',sans-serif",
                  fontSize: "0.62rem",
                  color: "#D4AF37",
                  letterSpacing: "1.5px",
                }}
              >
                {chef.experience} experience
              </span>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ChefModal;