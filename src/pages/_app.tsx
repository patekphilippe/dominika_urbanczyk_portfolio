import { useEffect } from "react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import { AppCacheProvider } from "@mui/material-nextjs/v16-pagesRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import GradualBlur from "@/components/GradualBlur";
import IntroScreen from "@/components/IntroScreen";
import { LocaleProvider } from "@/i18n";
import theme from "@/theme/theme";
import "@/styles/globals.scss";
import "locomotive-scroll/dist/locomotive-scroll.css";

gsap.registerPlugin(ScrollTrigger);

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

  useEffect(() => {
    const locomotive = new LocomotiveScroll({
      lenisOptions: {
        smoothWheel: true,
        duration: 1.0,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        wheelMultiplier: 1,
        touchMultiplier: 2,
        syncTouch: false,
      },
      scrollCallback: () => ScrollTrigger.update(),
      autoStart: true,
    });

    (
      window as Window & {
        __locomotive?: { stop: () => void; start: () => void };
      }
    ).__locomotive = locomotive as unknown as {
      stop: () => void;
      start: () => void;
    };

    const onRefresh = () => locomotive.resize();
    ScrollTrigger.addEventListener("refresh", onRefresh);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refresh", onRefresh);
      locomotive.destroy();
      delete (window as Window & { __locomotive?: unknown }).__locomotive;
    };
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
