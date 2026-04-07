const placeholders = [
  {
    id: 1,
    name: "Instruktorius — [Vardas]",
    role: "[Specialybė: pvz. Buvęs snaiperiai]",
    bio: "[Aprašymas bus pridėtas netrukus]",
  },
  {
    id: 2,
    name: "Instruktorius — [Vardas]",
    role: "[Specialybė: pvz. Buvęs žvalgas]",
    bio: "[Aprašymas bus pridėtas netrukus]",
  },
  {
    id: 3,
    name: "Instruktorius — [Vardas]",
    role: "[Specialybė: pvz. Spec. operacijų karys]",
    bio: "[Aprašymas bus pridėtas netrukus]",
  },
];

export default function Instructors() {
  return (
    <section
      id="instruktoriai"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "var(--bg-elevated)" }}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: "linear-gradient(180deg, transparent, var(--sand), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p
            className="font-body text-xs uppercase tracking-military mb-4"
            style={{ color: "var(--sand)", letterSpacing: "0.2em" }}
          >
            / / &nbsp; Komanda
          </p>
          <h2
            className="font-display text-6xl md:text-8xl mb-6"
            style={{ color: "var(--ash)", letterSpacing: "0.06em" }}
          >
            MŪSŲ
            <br />
            <span style={{ color: "var(--sand)" }}>INSTRUKTORIAI</span>
          </h2>
          <p
            className="font-body text-lg max-w-xl"
            style={{ color: "var(--ash-dim)", lineHeight: 1.8 }}
          >
            Buvę snaiperiai, žvalgai ir spec. operacijų kariai — visi su realia lauko patirtimi.
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ backgroundColor: "rgba(200,169,110,0.12)" }}
        >
          {placeholders.map((person) => (
            <div
              key={person.id}
              className="flex flex-col"
              style={{ backgroundColor: "var(--bg-elevated)" }}
            >
              {/* Image placeholder */}
              <div
                className="relative w-full aspect-square flex items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: "rgba(255,255,255,0.03)",
                  borderBottom: "1px solid rgba(200,169,110,0.12)",
                }}
              >
                {/* Person silhouette SVG */}
                <svg
                  viewBox="0 0 80 80"
                  className="w-24 h-24"
                  fill="none"
                  style={{ opacity: 0.15 }}
                >
                  <circle cx="40" cy="28" r="16" fill="currentColor" style={{ color: "var(--sand)" }} />
                  <path
                    d="M8 72c0-17.673 14.327-32 32-32s32 14.327 32 32"
                    fill="currentColor"
                    style={{ color: "var(--sand)" }}
                  />
                </svg>
                <p
                  className="absolute bottom-4 font-body text-xs uppercase text-center"
                  style={{ color: "rgba(200,169,110,0.4)", letterSpacing: "0.15em" }}
                >
                  Nuotrauka bus pridėta
                </p>
              </div>

              {/* Info */}
              <div className="p-8">
                <h3
                  className="font-display text-2xl mb-1"
                  style={{ color: "var(--ash)", letterSpacing: "0.06em" }}
                >
                  {person.name}
                </h3>
                <p
                  className="font-body text-xs uppercase mb-4"
                  style={{ color: "var(--sand)", letterSpacing: "0.15em" }}
                >
                  {person.role}
                </p>
                <p
                  className="font-body text-base leading-relaxed"
                  style={{ color: "var(--ash-dim)" }}
                >
                  {person.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
