import React, { useState } from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'
const LOGO_SPECTRUM = "/images/logo-transparent.png";
const LOGO_PYRAMID = "/images/pyramid-logo.png";

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

interface ProgramCardProps {
  variant: "spectrum" | "pyramid";
  logoSrc: string;
  logoAlt: string;
  eyebrowFront: string;
  title: string;
  tagline: string;
  eyebrowBack: string;
  about: string;
  chips: string[];
  bullets: string[];
  isFlipped: boolean;
  onToggle: () => void;
  visitPath: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  variant,
  logoSrc,
  logoAlt,
  eyebrowFront,
  title,
  tagline,
  eyebrowBack,
  about,
  chips,
  bullets,
  isFlipped,
  onToggle,
  visitPath,
}) => {
  const label =
    variant === "spectrum"
      ? "Spectrum. Press to view IIT-JEE and NEET programmes."
      : "Pyramid. Press to view Spoken English and professional development programmes.";

  return (
    <div className="col-12 col-md-6">
      <div className={`card-flip card--${variant} ${isFlipped ? "is-flipped" : ""}`}>
        <div
          className="card-inner"
          role="button"
          tabIndex={0}
          aria-pressed={isFlipped}
          aria-label={label}
          onClick={onToggle}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onToggle();
            }
          }}
        >
          {/* FRONT */}
          <div className="card-face card-front">
            <img className="card-logo" src={logoSrc} alt={logoAlt} />
            <p className="face-eyebrow">{eyebrowFront}</p>
            <h2 className="card-title">{title}</h2>
            <p className="card-tagline">{tagline}</p>
            <span className="flip-hint mt-auto">
              Explore {title}
              <ArrowIcon />
            </span>
          </div>

          {/* BACK */}
          <div className="card-face card-back">
            <div className="back-head d-flex align-items-center justify-content-between">
              <h2 className="mb-0">{title} programmes</h2>
              <span
                className="close-btn"
                aria-hidden="true"
                onClick={(e) => {
                  e.stopPropagation();
                  onToggle();
                }}
              >
                <CloseIcon />
              </span>
            </div>

            <p className="back-about">{about}</p>

            <div className="chip-row d-flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>

            <ul className="back-list list-unstyled">
              {bullets.map((bullet) => (
                <li key={bullet} className="d-flex align-items-start">
                  <CheckIcon />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

           <Link
  to={visitPath}
  className="cta mt-auto"
  onClick={(e) => e.stopPropagation()}
>
  Visit {title}
  <ArrowIcon />
</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const LandingPage: React.FC = () => {
  const [spectrumFlipped, setSpectrumFlipped] = useState(false);
  const [pyramidFlipped, setPyramidFlipped] = useState(false);

  return (
    <section className="hero-band">
      {/* Intro */}
      <div className="container">
        <div className="intro text-center mx-auto">
          <p className="intro__eyebrow">One Franchise &middot; Two Disciplines</p>
          <h1>
            Academic coaching and spoken English training, under one roof in{" "}
            <span>Vellore</span>.
          </h1>
          <p>
            Spectrum and Pyramid operate side by side as a single franchise.
            Select a programme below to view details.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4 g-lg-5 cards-wrap justify-content-center">
          <ProgramCard
            variant="spectrum"
            logoSrc={LOGO_SPECTRUM}
            logoAlt="Spectrum Tution Point"
            eyebrowFront="Academic Coaching &middot; Est. 2006"
            title="Spectrum"
            tagline="IIT-JEE and NEET coaching for Vellore's science stream, built around structured teaching and regular assessment."
            eyebrowBack=""
            about="Coaching Vellore's science stream since 2006, with structured classroom teaching, weekly test series, and rank-focused mentoring built around the IIT-JEE and NEET syllabus."
            chips={["IIT-JEE", "NEET", "Since 2006"]}
            bullets={[
              "IIT-JEE — Foundation & Advanced batches",
              "NEET — Physics, Chemistry & Biology",
              "Weekly test series with rank analysis",
              "Small batches with doubt-clearing sessions",
            ]}
            isFlipped={spectrumFlipped}
            visitPath="/spectrum"
            onToggle={() => setSpectrumFlipped((v) => !v)}
          />

          <ProgramCard
            variant="pyramid"
            logoSrc={LOGO_PYRAMID}
            logoAlt="Pyramid Academy"
            eyebrowFront="Spoken English &amp; Career Skills"
            title="Pyramid"
            tagline="Spoken English and professional development programmes for students and working professionals."
            eyebrowBack=""
            about="Training students and professionals in spoken English and workplace communication, structured across clear levels, plus focused programmes for professionals and young learners."
            chips={["Basic", "Advance", "Power Programs"]}
            bullets={[
              "Spoken English — Basic level",
              "Spoken English — Advance level",
              "Power Programs for working professionals",
              "Foundational Programs for young learners",
            ]}
            isFlipped={pyramidFlipped}
            visitPath="/pyramid"
            onToggle={() => setPyramidFlipped((v) => !v)}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
