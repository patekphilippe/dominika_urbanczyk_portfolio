import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import { gsap } from "gsap";
import SplitText from "@/components/SplitText";
import * as s from "./IntroScreen.styles";

export default function IntroScreen() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const handleComplete = () => {
    if (!wrapRef.current) return;
    gsap.to(wrapRef.current, {
      yPercent: -100,
      duration: 1.1,
      ease: "power3.inOut",
      delay: 0.4,
      onComplete: () => {
        document.body.style.overflow = "";
        (window as Window & { __introDone?: boolean }).__introDone = true;
        window.dispatchEvent(new Event("introdone"));
        setHidden(true);
      },
    });
  };

  if (hidden) return null;

  return (
    <Box ref={wrapRef} sx={s.wrap}>
      <SplitText
        text="dominika urbańczyk."
        tag="h1"
        splitType="chars"
        delay={70}
        duration={0.2}
        from={{ opacity: 0, y: 140 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0}
        rootMargin="0px"
        waitForIntro={false}
        onLetterAnimationComplete={handleComplete}
        style={s.logo}
      />
    </Box>
  );
}
