import type { Messages } from "../types";

export const en: Messages = {
  header: {
    experience: "Experience",
    contact: "Contact",
    getCv: "Get CV",
    languageSwitchLabel: "Choose language",
  },
  hero: {
    tab: "For anyone",
    headline:
      "Hi there, I design things that work and teach others how to do the same.",
    statusOnMarket: "On the market. Bring it on.",
    role: "UX Design Lead & Educator",
  },
  workHistory: {
    eyebrow: "Experience",
    headline: { line1: "Where", line2: "I’ve been" },
    aside:
      "My experience rests on three pillars: designing digital products, leading design teams, and sharing knowledge. Each one has shaped how I work — realistic, collaborative, and focused on solutions that actually ship.",
    work: {
      eyebrow: "UX Design Lead",
      company: "Telewizja Polska S.A.",
      period: "2021–current",
      lead:
        "One of the largest media organisations in Poland. Shifting priorities, many stakeholders, zero stable process. I joined as a designer; a year later I was leading the team — balancing the business, users, and what we could realistically deliver.",
      note: "Over three years the team supported a broad portfolio of digital products — from the VOD platform, through sports services, to brand-new product concepts.",
    },
  },
  showreel: {
    stats: [
      { number: "10", plus: "+", label: "designers on the team", index: "01" },
      { number: "160", plus: "+", label: "digital products", index: "02" },
      { number: "45", plus: "+", label: "deployments", index: "03" },
    ],
  },
  theHow: {
    eyebrow: "My role",
    headline: "The how.",
    expanded: {
      id: "01",
      title: "Leadership",
      lead: "I joined an environment with no structured process — decisions shifted day to day. My job was to give the team stability and direction.",
      bullets: [
        "Coordinating design work across many parallel initiatives — prioritising tasks with limited room to reshape the project grids.",
        "Recruiting and onboarding new designers — from the hiring process through onboarding to day-to-day support.",
      ],
      focusLabel: "Focus",
      tags: ["Team 10+", "Recruitment", "Onboarding", "Prioritisation", "Coordination"],
    },
    collapsed: [
      { id: "02", title: "Product & Design" },
      { id: "03", title: "Stakeholder collaboration & Design operations" },
    ],
  },
  loconiIntro: {
    eyebrow: "UX Designer",
    secondary: "Loconi",
    lead: "From research, through workshops, to every pixel in the interface.",
    note: "Beyond leading the team, I designed. Loconi is the project where I walked the full end-to-end process.",
  },
  bento: {
    caseStudyLabel: "Case study",
    caseStudyDetail: "Operating system redesign",
    roleLabel: "Role",
    roleValue: "UX Designer",
    title: "Loconi",
    cta: "VIEW CASE STUDY",
    year: "2024 – 2026",
    intro:
      "Redesign of a logistics company’s operating system. From a survey of 53 users to a production rollout.",
    stats: [
      { value: "40%", label: "faster to create an order" },
      { value: "50%", label: "fewer steps in the invoice process" },
    ],
    quote:
      "“...it turned out a forwarder creates an order 40% faster in the new OS 2.0 vs OS 1.0. Brawo us...”",
    author: "Product Owner / Technical Project Manager – IT department",
  },
  selectedWorkIntro: {
    eyebrow: "...and there’s more",
    secondary: "Selected work",
    lead: "Not every project deserves a case study. But each one taught me something new.",
    note: "Every one of these projects had its own users, its own constraints, and its own challenges.",
  },
  workshops: {
    eyebrow: "Approach",
    lead: "I believe design gets better when you share what you know.",
    intro:
      "I run training and workshops for universities, public institutions, and companies — from 2-hour sessions to 16-day programmes. Because design grows when the whole team grows.",
    cards: [
      {
        title: "UX & Design Thinking",
        body: "Running training across the full UX and Design Thinking process — from research, through ideation, to prototyping and testing. Formats from short academic workshops (2–4h) to multi-day training programmes (up to 16 days).",
      },
      {
        title: "Product Workshop",
        body: "Running multi-day product workshops — validating ideas, defining requirements, and shaping direction together with business teams.",
      },
      {
        title: "Design Tools",
        body: "Figma training for people outside design — business analysts, public-sector staff. Democratising design tools in organisations that hadn’t used them before.",
      },
      {
        title: "Online Course",
        body: "Co-author of the video course “Design Thinking. Myślenie projektowe w praktyce”, published by Grupa Helion S.A. Combines theory and practice and is continuously available for sale.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Proof",
    headlineMain: "Not my words.",
    headlineAsterisk: "*",
    asideAsterisk: "*",
    asideText: " theirs",
    score: {
      labels: ["Trainer’s expertise", "Connection with the group"],
      ratingQuestion: "*What would you suggest the trainer\ncould do to improve this?",
      quote: "“I have no notes for the trainer, it was outstanding...”",
      author: "Training participant — NobleProg",
      source: "*Ratings and comments from evaluation surveys",
    },
    studentCircle: {
      quote:
        "“...it was amazing! In three hours we went through the entire 5-step process, learned techniques, tools, and skills — personas, empathy maps, value proposition canvas. Thank you so much for that wonderful time...”",
      source: "UX & Information Architecture Student Circle — University of Warsaw",
    },
    linkedinBig: {
      quote:
        "“Big THANK YOU to Dominika Urbańczyk for sharing her professional knowledge in UX Design...”",
      source: "UX training participant — LinkedIn",
    },
    helion: {
      source: "Course review — Helion",
      quote:
        "“The course is nicely laid out graphically, which makes it easy to follow the process and understand what flows from what...”",
    },
    hrLinkedin: {
      quote:
        "“...I wanted to get familiar with the process, but also use the knowledge and skills in my work and HR projects. And I definitely came away satisfied — mission completed. Thank you for the discussions, case studies, and knowledge you shared so openly...”",
      source: "UX training participant — LinkedIn",
    },
  },
  closing: {
    eyebrow: "Approach",
    lines: [
      { dark: "Built ", muted: "to ship." },
      { dark: "Built ", muted: "with people." },
      { dark: "Built ", muted: "with care." },
    ],
  },
  footer: {
    email: "d.urbanczyk26@gmail.com",
    linkedinLabel: "Linkedin",
    signoff: "Say hi. Pączek’s listening too.",
    copyright:
      "© 2026 Dominika Urbańczyk. Built with 🩶 and Pączek’s supervision (and occasional accidents on the carpet 💩)",
  },
};
