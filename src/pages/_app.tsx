import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import GradualBlur from "@/components/GradualBlur";
import { LocaleProvider } from "@/i18n";
import "@/styles/globals.scss";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Dominika Urbańczyk — UX Design Lead & Educator</title>
        <meta
          name="description"
          content="Portfolio of Dominika Urbańczyk: UX design, leadership and education."
        />
        <meta name="viewport" content="width=1440" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LocaleProvider>
        <div
          className={inter.variable}
          style={{ fontFamily: "var(--font-inter)" }}
        >
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
    </>
  );
}
