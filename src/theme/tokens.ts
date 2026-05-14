// All length tokens are emitted in `rem` (1rem = 16px).
export const rem = (px: number): string => `${px / 16}rem`;

// ─── Colors ─────────────────────────────────────────────────────────────────
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

// ─── Spacing scale ──────────────────────────────────────────────────────────
// Keys reflect the original px values from the design system; values are rem.
export const space = {
  0: "0",
  1: rem(1),
  2: rem(2),
  4: rem(4),
  6: rem(6),
  8: rem(8),
  10: rem(10),
  12: rem(12),
  16: rem(16),
  19: rem(19),
  20: rem(20),
  22: rem(22),
  24: rem(24),
  28: rem(28),
  32: rem(32),
  36: rem(36),
  40: rem(40),
  42: rem(42),
  48: rem(48),
  56: rem(56),
  64: rem(64),
  80: rem(80),
  96: rem(96),
  100: rem(100),
  120: rem(120),
  144: rem(144),
  145: rem(145),
  200: rem(200),
  257: rem(257),
} as const;

// ─── Radius ─────────────────────────────────────────────────────────────────
export const radius = {
  none: "0",
  sm: rem(16),
  md: rem(18),
  lg: rem(20),
  xl: rem(28),
  pill: rem(100),
  full: rem(999),
} as const;

// ─── Stroke ─────────────────────────────────────────────────────────────────
export const stroke = {
  s1: rem(1),
  s2: rem(2),
} as const;

// ─── Layout ─────────────────────────────────────────────────────────────────
// All widths/gutters in rem. Use directly (no `px` suffix needed).
export const layout = {
  canvasWidth: rem(1440),
  contentMax: rem(1376),
  contentMaxFlush: rem(1432),
  accordionList: rem(1368),
  gutter: rem(32),
  gutterSmall: rem(4),
  bentoGutter: rem(36),
  colNarrow: rem(341),
  colWide: rem(686),
  colText: rem(686),
  closingTextCol: rem(785),
  rowGap: rem(4),
  tagsCol: rem(336),
} as const;

// ─── Z-index ────────────────────────────────────────────────────────────────
export const zIndex = {
  base: 0,
  content: 1,
  overlay: 2,
  header: 100,
} as const;

// ─── Font family ────────────────────────────────────────────────────────────
export const fontFamily = {
  sans: '"Inter", system-ui, -apple-system, sans-serif',
  roboto: '"Roboto", system-ui, sans-serif',
  serif: '"Times New Roman", Times, serif',
} as const;

// ─── Font weight ────────────────────────────────────────────────────────────
export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
} as const;

// ─── Typography tokens ──────────────────────────────────────────────────────
type TypeToken = {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  fontWeight: number;
  fontFamily: string;
};

// `t(sizePx, lineHeightPx, letterSpacingPx, weight)` — emits rem-based values.
const t = (
  size: number,
  lh: number | string,
  ls: number | string,
  fw: number,
  family: string = fontFamily.sans,
): TypeToken => ({
  fontSize: rem(size),
  lineHeight: typeof lh === "number" ? rem(lh) : lh,
  letterSpacing: typeof ls === "number" ? rem(ls) : ls,
  fontWeight: fw,
  fontFamily: family,
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
  // Dedicated tokens
  theHowTitle: t(28, 36, 0, fontWeight.semibold),
  hero: t(104, 100, -5, fontWeight.semibold),
} as const;
