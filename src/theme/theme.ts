import { createTheme } from "@mui/material/styles";
import { colors, fontFamily } from "./tokens";

const theme = createTheme({
  palette: {
    primary: { main: colors.onLightPrimary, contrastText: colors.lightSurface },
    secondary: { main: colors.accent, contrastText: colors.darkBg },
    background: { default: colors.pageBg, paper: colors.lightSurface },
    text: {
      primary: colors.onLightPrimary,
      secondary: colors.onLightSecondary,
      disabled: colors.onLightQuaternary,
    },
  },
  typography: {
    fontFamily: fontFamily.sans,
  },
  shape: { borderRadius: 18 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": { boxSizing: "border-box" },
        "html, body": { margin: 0, padding: 0 },
        html: {
          background: colors.pageBg,
          color: colors.onLightPrimary,
          fontFamily: fontFamily.sans,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          textRendering: "optimizeLegibility",
        },
        body: { minWidth: 1440 },
        a: { color: "inherit", textDecoration: "none" },
        "img, svg": { display: "block", maxWidth: "100%" },
        button: {
          font: "inherit",
          color: "inherit",
          background: "none",
          border: 0,
          padding: 0,
          cursor: "pointer",
        },
        p: { margin: 0 },
        "h1, h2, h3, h4, h5, h6": { margin: 0, fontWeight: "inherit" },
        "::selection": { background: colors.accent, color: colors.darkBg },
      },
    },
  },
});

export default theme;
