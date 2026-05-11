export type Locale = "pl" | "en";

export type Messages = {
  header: {
    experience: string;
    contact: string;
    getCv: string;
    languageSwitchLabel: string;
  };
  hero: {
    tab: string;
    headline: string;
    statusOnMarket: string;
    role: string;
  };
  workHistory: {
    eyebrow: string;
    headline: { line1: string; line2: string };
    aside: string;
    work: {
      eyebrow: string;
      company: string;
      period: string;
      lead: string;
      note: string;
    };
  };
  showreel: {
    stats: Array<{ number: string; plus: string; label: string; index: string }>;
  };
  theHow: {
    eyebrow: string;
    headline: string;
    expanded: {
      id: string;
      title: string;
      lead: string;
      bullets: string[];
      focusLabel: string;
      tags: string[];
    };
    collapsed: Array<{ id: string; title: string }>;
  };
  loconiIntro: {
    eyebrow: string;
    secondary: string;
    lead: string;
    note: string;
  };
  bento: {
    caseStudyLabel: string;
    caseStudyDetail: string;
    roleLabel: string;
    roleValue: string;
    title: string;
    cta: string;
    year: string;
    intro: string;
    stats: Array<{ value: string; label: string }>;
    quote: string;
    author: string;
  };
  selectedWorkIntro: {
    eyebrow: string;
    secondary: string;
    lead: string;
    note: string;
  };
  workshops: {
    eyebrow: string;
    lead: string;
    intro: string;
    cards: Array<{ title: string; body: string }>;
  };
  testimonials: {
    eyebrow: string;
    headlineMain: string;
    headlineAsterisk: string;
    asideAsterisk: string;
    asideText: string;
    score: {
      labels: string[];
      ratingQuestion: string;
      quote: string;
      author: string;
      source: string;
    };
    studentCircle: { quote: string; source: string };
    linkedinBig: { quote: string; source: string };
    helion: { source: string; quote: string };
    hrLinkedin: { quote: string; source: string };
  };
  closing: {
    eyebrow: string;
    lines: Array<{ dark: string; muted: string }>;
  };
  footer: {
    email: string;
    linkedinLabel: string;
    signoff: string;
    copyright: string;
  };
};
