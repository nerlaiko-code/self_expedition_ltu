export type Badge = "atrask" | "patirk" | "iveik" | "isgyvenk";

export interface Activity {
  id: string;
  title: string;
  subtitle: string; // front card teaser sentence
  description: string; // back card full description
  badge: Badge;
  icon: string; // SVG inner content (Lucide-style, stroke-width 2, round caps)
  image?: string;
}

export const BADGE_LABELS: Record<Badge, string> = {
  atrask: "Atrask",
  patirk: "Patirk",
  iveik: "Įveik",
  isgyvenk: "Išgyvenk",
};

export const BADGE_COLORS: Record<Badge, string> = {
  atrask: "#3a7a4a",      // forest green
  patirk: "#2a5f8a",      // steel blue
  iveik: "#b8762a",       // amber orange
  isgyvenk: "#8a3030",    // deep red
};

export const BADGE_TEXT_COLORS: Record<Badge, string> = {
  atrask: "#e8f5ee",
  patirk: "#e0eef8",
  iveik: "#fdf3e3",
  isgyvenk: "#f5e8e8",
};

// Order: Įveik (3) → Atrask+Išgyvenk (4) → Patirk (4) = 3-4-4 rows on desktop
export const activities: Activity[] = [
  // ── Row 1: Įveik ──────────────────────────────────────────────────────────
  {
    id: "zygis",
    title: "Orientaciniai Žygiai",
    subtitle: "Leiskis į žygį, kur svarbiausia – ne jėga, o sprendimai.",
    description:
      "Žygiai skirstomi į bazinį, pažengusių ir ekspertų lygius. Dalyviai ieško kontrolinių taškų, sprendžia užduotis ir varžosi dėl greičio bei tikslumo. Kai kuriose atkarpose orientacija vyksta be pagalbinių priemonių.",
    badge: "iveik",
    // Lucide: map
    icon: `<path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"/><path d="M15 5.764v15"/><path d="M9 3.236v15"/>`,
    image: "/materials/foto-1-10.jpg",
  },
  {
    id: "rapel",
    title: "Nusileidimas Virve",
    subtitle: "Žingsnis per kraštą – ir pasitikėjimas savimi išauga.",
    description:
      "Dalyviai išmoksta saugiai naudotis įranga, taisyklingai nusileisti virve nuo tilto ir kontroliuoti savo judėjimą. Viskas vyksta su instruktorių priežiūra.",
    badge: "iveik",
    // Lucide: anchor
    icon: `<circle cx="12" cy="5" r="3"/><path d="M12 22V8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>`,
    image: "/materials/IMG_4951.PNG",
  },
  {
    id: "perkela",
    title: "Perkėla per Vandens Kliūtį",
    subtitle: "Kai kelio nėra – susikurk jį pats.",
    description:
      "Komandoje įrengiama lynų perkėla per vandens kliūtį. Dalyviai mokosi naudoti karabinus, lynus ir įveikti kliūtis saugiai bei efektyviai.",
    badge: "iveik",
    // Lucide: waves
    icon: `<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>`,
    image: "/materials/IMG_3410.JPG",
  },

  // ── Row 2: Atrask (2) + Išgyvenk (2) ──────────────────────────────────────
  {
    id: "orientavimasis",
    title: "Orientavimosi Mokymai",
    subtitle: "Išmok orientuotis kaip profesionalas – tiek miške, tiek mieste.",
    description:
      "Šių mokymų metu dalyviai susipažins su pagrindiniais topografijos įgūdžiais. Išmoks skaityti žemėlapį, naudotis kompasu, nustatyti azimutą ir planuoti maršrutus tiek miškingoje, tiek urbanizuotoje vietovėje.",
    badge: "atrask",
    // Lucide: compass (provided by user)
    icon: `<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/>`,
    image: "/materials/foto-1-10.jpg",
  },
  {
    id: "pirmoji-pagalba",
    title: "Pirmosios Pagalbos Mokymai",
    subtitle: "Įgūdžiai, kurie gali išgelbėti gyvybę – bet kada, bet kur.",
    description:
      "Teorija ir praktika: kraujavimo stabdymas, traumos, CPR. Dalyviai dirba su realistiškomis situacijomis, kad gebėtų veikti stresinėse situacijose.",
    badge: "atrask",
    // Lucide: heart-pulse
    icon: `<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l1.5-1.5 2 3 1.5-2H20.78"/>`,
    image: "/materials/IMG_2445.JPG",
  },
  {
    id: "nelaisve",
    title: "Nelaisvės Išgyvenimo Mokymai",
    subtitle: "Tikras išbandymas – ne kūnui, o protui.",
    description:
      "Streso valdymas, rutina, komunikacija ir sprendimų priėmimas ribotomis sąlygomis. Simuliacijos su kontroliuojamu diskomfortu.",
    badge: "isgyvenk",
    // Lucide: lock
    icon: `<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>`,
    image: "/materials/IMG_5846.JPG",
  },
  {
    id: "bernvakaris",
    title: "Bernvakaris / Mergvakaris",
    subtitle: "Ne vakarėlis – istorija, kurią prisiminsit visą gyvenimą.",
    description:
      "Miškas, ugnis, išbandymai ir patirtys, kurios suartina. Tikras bernvakaris be klišių.",
    badge: "isgyvenk",
    // Lucide: flame
    icon: `<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>`,
    image: "/materials/IMG_3112.JPG",
  },

  // ── Row 3: Patirk ──────────────────────────────────────────────────────────
  {
    id: "isgyvenimas",
    title: "Išgyvenimo Įgūdžiai",
    subtitle: "Be komforto zonos – tik tu ir gamta.",
    description:
      "Pastogės statymas, vandens išgavimas ir filtravimas, ugnies įkūrimas. Dalyviai viską išbando praktiškai realiomis sąlygomis.",
    badge: "patirk",
    // Lucide: tent
    icon: `<path d="M3.5 21 14 3"/><path d="M20.5 21 10 3"/><path d="M15.5 21 12 15l-3.5 6"/><path d="M2 21h20"/>`,
    image: "/materials/IMG_2435.JPG",
  },
  {
    id: "saudymas-pistoletu",
    title: "Šaudymas Pistoletu",
    subtitle: "Susikaupimas, kontrolė ir tikslumas viename šūvyje.",
    description:
      "Bazinis ir pažengusių lygis: sauga, laikysena, šaudymas iš skirtingų pozicijų, tikslumo lavinimas su instruktoriaus priežiūra.",
    badge: "patirk",
    // Lucide: crosshair
    icon: `<circle cx="12" cy="12" r="10"/><line x1="22" x2="18" y1="12" y2="12"/><line x1="6" x2="2" y1="12" y2="12"/><line x1="12" x2="12" y1="6" y2="2"/><line x1="12" x2="12" y1="22" y2="18"/>`,
    image: "/materials/IMG_2868.JPG",
  },
  {
    id: "saudymas-automatinis",
    title: "Šaudymas Automatiniu Ginklu",
    subtitle: "Valdyk jėgą, kuri reikalauja disciplinos.",
    description:
      "Sauga, ginklo pažinimas, trumpų serijų kontrolė, atatrankos valdymas ir tikslumo palaikymas.",
    badge: "patirk",
    // Lucide: target
    icon: `<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>`,
    image: "/materials/IMG_4528.JPG",
  },
  {
    id: "teambuilding",
    title: "Teambuilding",
    subtitle: "Stipri komanda – tai ne atsitiktinumas.",
    description:
      "Komunikacija streso sąlygomis, misijų planavimas, rolių paskirstymas. Programa pritaikoma pagal jūsų tikslus.",
    badge: "patirk",
    // Lucide: users
    icon: `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
    image: "/materials/IMG_3410.JPG",
  },
];
