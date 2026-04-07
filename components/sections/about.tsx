export default function About() {
  return (
    <section
      id="apie"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "var(--bg-elevated)" }}
    >
      {/* Left accent bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: "linear-gradient(180deg, transparent, var(--sand), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <div>
          <p
            className="font-body text-xs uppercase tracking-military mb-4"
            style={{ color: "var(--sand)", letterSpacing: "0.2em" }}
          >
            / / &nbsp; Apie mus
          </p>
          <h2
            className="font-display text-5xl md:text-7xl mb-8"
            style={{ color: "var(--ash)", letterSpacing: "0.06em" }}
          >
            ORGANIZUOJAME
            <br />
            <span style={{ color: "var(--sand)" }}>AKTYVIAS FIZINES</span>
            <br />
            VEIKLAS GAMTOJE
          </h2>
          <p
            className="font-body text-lg leading-relaxed mb-6"
            style={{ color: "var(--ash-dim)" }}
          >
            Orientacinio žygio mokymai, išgyvenimas ekstremaliose situacijose, pirmoji pagalba, nusileidimai nuo tilto, šaudymai su įvairiais ginklais, nelaisvės išgyvenimo mokymai.
          </p>
          <p
            className="font-body text-lg leading-relaxed"
            style={{ color: "var(--ash-dim)" }}
          >
            Visi instruktoriai su realia patirtimi — buvę snaiperiai, žvalgai, spec. operacijų kariai. Mūsų instruktoriai sudėlios programą, kuri atitiks jūsų grupės tikslą — ar tai būtų komandiškumo stiprinimas, ištvermės išbandymas, ar tiesiog kokybiškai praleistas laikas gamtoje.
          </p>

          {/* Divider with accent */}
          <div className="mt-10 flex items-center gap-4">
            <div className="h-px flex-1" style={{ backgroundColor: "var(--sand-dim)" }} />
            <span
              className="font-display text-lg tracking-military"
              style={{ color: "var(--sand)" }}
            >
              LTU
            </span>
            <div className="h-px flex-1" style={{ backgroundColor: "var(--sand-dim)" }} />
          </div>
        </div>

        {/* Visual side */}
        <div className="relative">
          <div
            className="relative w-full aspect-[4/5] overflow-hidden"
            style={{ border: "1px solid rgba(200,169,110,0.25)" }}
          >
            <img
              src="/materials/foto-1-8.jpg"
              alt="Self Expedition — komandinis iššūkis"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ filter: "contrast(1.15) brightness(0.82) saturate(0.0)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(45,74,30,0.3) 0%, transparent 60%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
