import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import { gsap } from "gsap";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import * as s from "./IntroScreen.styles";

gsap.registerPlugin(GSAPSplitText);

export default function IntroScreen() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);
  const hasAnimatedRef = useRef(false);
  const [hidden, setHidden] = useState(false);
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (document.fonts.status === "loaded") {
      setFontsReady(true);
    } else {
      document.fonts.ready.then(() => setFontsReady(true));
    }
  }, []);

  const handleComplete = () => {
    if (!wrapRef.current) return;
    gsap.to(wrapRef.current, {
      yPercent: -100,
      duration: 1.1,
      ease: "power3.inOut",
      delay: 0.4,
      onComplete: () => {
        (window as Window & { __introDone?: boolean }).__introDone = true;
        window.dispatchEvent(new Event("introdone"));
        setHidden(true);
      },
    });
  };

  useLayoutEffect(() => {
    if (!fontsReady || !textRef.current || hasAnimatedRef.current) return;
    hasAnimatedRef.current = true;

    const el = textRef.current as HTMLElement & {
      _introSplit?: GSAPSplitText;
    };

    if (el._introSplit) {
      try {
        el._introSplit.revert();
      } catch {
        /* noop */
      }
      el._introSplit = undefined;
    }

    const split = new GSAPSplitText(el, {
      type: "chars",
      charsClass: "intro-char",
      reduceWhiteSpace: false,
    });
    el._introSplit = split;

    gsap.set(el, { visibility: "visible", opacity: 1 });

    const tween = gsap.fromTo(
      split.chars,
      { opacity: 0, y: 140 },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
        ease: "power3.out",
        stagger: 0.07,
        onComplete: handleComplete,
      },
    );

    return () => {
      tween.kill();
      try {
        split.revert();
      } catch {
        /* noop */
      }
      el._introSplit = undefined;
    };
  }, [fontsReady]);

  if (hidden) return null;

  return (
    <Box ref={wrapRef} sx={s.wrap}>
      <h1
        ref={textRef}
        style={{
          ...s.logo,
          visibility: "hidden",
          opacity: 0,
        }}
      >
        dominika urbańczyk.
      </h1>
    </Box>
  );
}
