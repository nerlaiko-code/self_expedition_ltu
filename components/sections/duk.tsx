"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Kiek kainuoja veiklos?",
    a: "Kaina priklauso nuo žmonių skaičiaus, pasirinktų užsiėmimų ir nuo to, kiek laiko norite skirti veikloms. Susisiekite su mumis ir paruošime individualų pasiūlymą.",
  },
  {
    q: "Kokiomis progomis galima naudotis jūsų paslaugomis?",
    a: "Gimtadieniai, uždari renginiai, teambuilding'ai, bernvakariai, mergvakariai ir kitos progos/šventės.",
  },
  {
    q: "Ar veiklas vykdote tik vasarą?",
    a: "Ne. Veiklas vykdome visais metų laikais!",
  },
  {
    q: "Ar reikia turėti kažkokios patirties norint dalyvauti užsiėmimuose?",
    a: "Ne. Mūsų veiklos pritaikytos tiek pradedantiesiems tiek pažengusiems. Mūsų instruktorių kompetencija nenuvils net visiškai nieko nemokančio.",
  },
  {
    q: "Kiek žmonių gali dalyvauti?",
    a: "Veiklas organizuojame nuo 1 iki 50 žmonių grupėms arba pagal susitarimą.",
  },
  {
    q: "Kur vyksta jūsų veiklos?",
    a: "Kaišiadorių raj., bet galime prisitaikyti ir atvykti į jūsų sodybą / lokaciją.",
  },
  {
    q: "Kiek laiko trunka programa?",
    a: "Pasirinktinai, 2–48 val.",
  },
  {
    q: "Ar suteikiate įrangą?",
    a: "Taip, visą reikiamą įrangą gausite iš mūsų, jums tereikia turėti patogią aprangą.",
  },
  {
    q: "Ar galite išrašyti sąskaitą faktūrą?",
    a: "Taip.",
  },
  {
    q: "Ar reikia fizinio pasiruošimo?",
    a: "Nebūtina būti sportininku — bet turi norėti judėti. Dauguma mūsų veiklų pritaikytos žmonėms be specialaus sporto pagrindo. Instruktoriai padeda pritaikyti tempą pagal grupę. Tačiau žinok: tai nėra pasivaikščiojimas.",
  },
  {
    q: "Ar saugu? Kas atsitinka avariniu atveju?",
    a: "Saugumas — prioritetas. Visi instruktoriai turi pirmosios pagalbos sertifikatus. Veiklų vietose visada yra pirmosios pagalbos priemonės. Šaudymo veiklose naudojami licencijuoti ginklai, griežtai laikomasi taisyklių. Nematomos rizikos — minimalios, tikros adrenalino dozės — garantuotos.",
  },
  {
    q: "Kas atsitinka, jei oras blogas?",
    a: "Vyksta. Lietuviškas miškas neatsiklaus, koks oras lauke — ir mes irgi ne. Blogos orų sąlygos dažnai daro patirtį stipresnę. Tik tikrai ekstremalūs atvejai (audra, žaibai) gali pakeisti planą — tokiu atveju susitarsime iš anksto.",
  },
  {
    q: "Ar galiu dovanoti tai kaip dovaną?",
    a: "Taip — ir tai viena geriausių dovanų, kurias galima duoti. Bernvakariams, gimtadieniams, korporatyviniams renginiams. Susisiek su mumis ir paruošime dovanų paketą.",
  },
  {
    q: "Kaip vyksta registracija ir mokėjimas?",
    a: "Užpildyk registracijos formą — susisieksime per 24 val., suderinsime datą ir detales. Avansinis mokestis surenkami prieš renginį. Vietos ribotos — kuo anksčiau, tuo geriau.",
  },
];

export default function Duk() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="duk"
      className="relative py-28 overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Background texture */}
      <div className="grid-pattern absolute inset-0 opacity-40" />

      {/* Left accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-px"
        style={{ background: "linear-gradient(180deg, transparent, rgba(200,169,110,0.3), transparent)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p
              className="font-body text-xs uppercase tracking-military mb-3"
              style={{ color: "var(--sand)", letterSpacing: "0.2em" }}
            >
              / / &nbsp; Dažniausiai Užduodami Klausimai
            </p>
            <h2
              className="font-display text-6xl md:text-8xl"
              style={{ color: "var(--ash)", letterSpacing: "0.06em" }}
            >
              D.U.K.
            </h2>
          </div>
          <p
            className="font-body text-base max-w-sm"
            style={{ color: "var(--ash-dim)", lineHeight: 1.8 }}
          >
            Turite klausimų? Mes turime atsakymus. O jei ne — <span style={{ color: "var(--sand)" }}>rašykite tiesiai.</span>
          </p>
        </div>

        {/* FAQ list */}
        <div
          className="flex flex-col"
          style={{ borderTop: "1px solid rgba(200,169,110,0.15)" }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ borderBottom: "1px solid rgba(200,169,110,0.15)" }}
            >
              <button
                className="w-full flex items-start justify-between gap-6 py-7 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                {/* Number */}
                <span
                  className="font-display text-sm shrink-0 mt-1"
                  style={{ color: "rgba(200,169,110,0.35)", letterSpacing: "0.15em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Question */}
                <span
                  className="font-display text-xl md:text-2xl flex-1 transition-colors duration-200 group-hover:text-sand"
                  style={{
                    color: open === i ? "var(--sand)" : "var(--ash)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {faq.q}
                </span>

                {/* Toggle icon */}
                <span
                  className="shrink-0 mt-1 transition-transform duration-300"
                  style={{
                    color: "var(--sand)",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                    display: "inline-block",
                    fontSize: "1.5rem",
                    lineHeight: 1,
                    fontFamily: "monospace",
                  }}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: open === i ? "400px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.35s ease",
                }}
              >
                <p
                  className="font-body text-base leading-relaxed pb-8 pl-10"
                  style={{ color: "var(--ash-dim)" }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA below */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <p className="font-body text-base" style={{ color: "var(--ash-dim)" }}>
            Neradote atsakymo?
          </p>
          <a
            href="https://www.instagram.com/self_expedition_ltu/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn-ghost"
          >
            Rašykite mums →
          </a>
        </div>
      </div>
    </section>
  );
}
