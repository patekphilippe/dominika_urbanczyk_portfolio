export const colors = {
  accent: "#d2ff37",

  pageBg: "#f6f6f6",
  footerBg: "#f5f5f5",

  darkBg: "#161616",
  darkSurface: "#090909",
  darkCard: "#131312",
  darkOutline: "#464749",

  onDarkPrimary: "#ffffff",
  onDarkSecondary: "#e7e8ea",
  onDarkTertiary: "#d6d8da",
  onDarkQuaternary: "#b7b8bb",

  lightSurface: "#ffffff",
  onLightPrimary: "#090909",
  onLightSecondary: "#27272c",
  onLightTertiary: "#464749",
  onLightQuaternary: "#78797b",

  iconMore: "#b7b8bb",
  iconScore: "#fb9826",
} as const;

export const layout = {
  canvasWidth: 1440,
  contentMax: 1376,
  gutter: 32,
  colNarrow: 341,
  colWide: 686,
  colText: 686,
} as const;

export const radius = {
  xl: 28,
} as const;

export const stroke = {
  s1: "1px",
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
} as const;

export const fontFamily = {
  sans: '"Inter", system-ui, -apple-system, sans-serif',
  roboto: '"Roboto", system-ui, sans-serif',
  serif: '"Times New Roman", Times, serif',
} as const;

type TypeToken = {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  fontWeight: number;
  fontFamily: string;
};

const t = (
  size: number,
  lh: number | string,
  ls: number | string,
  fw: number
): TypeToken => ({
  fontSize: `${size}px`,
  lineHeight: typeof lh === "number" ? `${lh}px` : lh,
  letterSpacing: typeof ls === "number" ? `${ls}px` : ls,
  fontWeight: fw,
  fontFamily: fontFamily.sans,
});

export const type = {
  displayLarge: t(57, 64, -0.25, fontWeight.semibold),
  displayMedium: t(45, 52, 0, fontWeight.semibold),
  displaySmall: t(36, 44, 0, fontWeight.semibold),
  headlineLarge: t(32, 40, 0, fontWeight.semibold),
  headlineMedium: t(28, 36, 0, fontWeight.regular),
  headlineMediumEmph: t(28, 36, 0, fontWeight.semibold),
  headlineSmall: t(24, 32, 0, fontWeight.regular),
  headlineSmallEmph: t(24, 32, 0, fontWeight.semibold),
  titleLarge: t(22, 28, 0, fontWeight.semibold),
  titleMedium: t(16, 24, 0.15, fontWeight.medium),
  titleMediumEmph: t(16, 24, 0.15, fontWeight.semibold),
  titleSmall: t(14, 20, 0.1, fontWeight.medium),
  bodyLarge: t(16, 24, 0.5, fontWeight.regular),
  bodyMedium: t(14, 20, 0.25, fontWeight.regular),
  bodyMediumEmph: t(14, 20, 0.25, fontWeight.semibold),
  bodySmall: t(12, 16, 0.4, fontWeight.regular),
  bodySmallEmph: t(12, 16, 0.4, fontWeight.semibold),
  labelLarge: t(14, 20, 0.1, fontWeight.medium),
  labelMedium: t(12, 16, 0.5, fontWeight.medium),
  labelSmall: t(11, 16, 0.5, fontWeight.medium),
  hero: t(104, 100, -5, fontWeight.semibold),
} as const;
