import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import { AppCacheProvider } from "@mui/material-nextjs/v16-pagesRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import GradualBlur from "@/components/GradualBlur";
import IntroScreen from "@/components/IntroScreen";
import { LocaleProvider } from "@/i18n";
import theme from "@/theme/theme";
import "@/styles/globals.scss";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "auto";
    }
  }, []);

  return (
    <AppCacheProvider {...props}>
      <Head>
        <title>Dominika Urbańczyk — UX Design Lead & Educator</title>
        <meta
          name="description"
          content="Portfolio of Dominika Urbańczyk: UX design, leadership and education."
        />
        <meta name="viewport" content="width=1440" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocaleProvider>
          <div
            className={inter.variable}
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <IntroScreen />
            <Component {...pageProps} />
          </div>
        </LocaleProvider>
        <GradualBlur
          target="page"
          position="bottom"
          height="4rem"
          strength={1.5}
          divCount={2}
          curve="bezier"
          exponential
          opacity={1}
          fadeAtBottom
          fadeAtTop
        />
      </ThemeProvider>
    </AppCacheProvider>
  );
}
