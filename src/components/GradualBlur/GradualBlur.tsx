// Component added by Ansh — github.com/ansh-dhanani (re-implemented for this project)
import { useEffect, useState, type CSSProperties } from "react";

type Curve = "linear" | "bezier" | "ease-in" | "ease-out";
type Position = "top" | "bottom" | "left" | "right";
type Target = "parent" | "page";

type Props = {
  /** "parent" → absolute inside nearest positioned ancestor. "page" → fixed to viewport. */
  target?: Target;
  position?: Position;
  /** Size of the blur band along the edge (e.g. "7rem", "120px"). */
  height?: string;
  /** Base blur strength in px; layers scale up from this. */
  strength?: number;
  /** Number of stacked blur layers. More = smoother fade, costlier paint. */
  divCount?: number;
  /** Easing curve for the per-layer band stops. */
  curve?: Curve;
  /** When true, blur scales 2^i across layers; otherwise linearly. */
  exponential?: boolean;
  /** Overall opacity of the blur overlay. */
  opacity?: number;
  /**
   * Fade the blur to 0 as the page approaches its bottom edge.
   * `true` uses a 200px ramp; pass a number to set the ramp distance in px.
   * Only takes effect when `target="page"`.
   */
  fadeAtBottom?: boolean | number;
  /**
   * Fade the blur to 0 when the page is scrolled near the top.
   * Same shape as `fadeAtBottom`. Only takes effect when `target="page"`.
   */
  fadeAtTop?: boolean | number;
};

const curveMap: Record<Curve, (t: number) => number> = {
  linear: (t) => t,
  bezier: (t) => t * t * (3 - 2 * t),
  "ease-in": (t) => t * t,
  "ease-out": (t) => 1 - (1 - t) * (1 - t),
};

const maskDirection: Record<Position, string> = {
  bottom: "to top",
  top: "to bottom",
  left: "to right",
  right: "to left",
};

export default function GradualBlur({
  target = "parent",
  position = "bottom",
  height = "6rem",
  strength = 2,
  divCount = 5,
  curve = "linear",
  exponential = false,
  opacity = 1,
  fadeAtBottom = false,
  fadeAtTop = false,
}: Props) {
  const ease = curveMap[curve];

  const [edgeFade, setEdgeFade] = useState(1);

  useEffect(() => {
    if (target !== "page" || (!fadeAtBottom && !fadeAtTop)) return;
    const bottomRamp =
      typeof fadeAtBottom === "number" ? fadeAtBottom : fadeAtBottom ? 200 : 0;
    const topRamp =
      typeof fadeAtTop === "number" ? fadeAtTop : fadeAtTop ? 200 : 0;

    let raf = 0;
    const update = () => {
      const scrollY = window.scrollY;
      const distanceToBottom =
        document.documentElement.scrollHeight -
        (scrollY + window.innerHeight);
      const bottomFade = bottomRamp
        ? Math.max(0, Math.min(1, distanceToBottom / bottomRamp))
        : 1;
      const topFade = topRamp
        ? Math.max(0, Math.min(1, scrollY / topRamp))
        : 1;
      setEdgeFade(Math.min(bottomFade, topFade));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [fadeAtBottom, fadeAtTop, target]);

  const wrapperStyle: CSSProperties = {
    position: target === "page" ? "fixed" : "absolute",
    pointerEvents: "none",
    zIndex: 50,
    opacity: opacity * edgeFade,
    transition: "opacity 120ms linear",
    ...(position === "bottom" && { bottom: 0, left: 0, right: 0, height }),
    ...(position === "top" && { top: 0, left: 0, right: 0, height }),
    ...(position === "left" && { top: 0, bottom: 0, left: 0, width: height }),
    ...(position === "right" && { top: 0, bottom: 0, right: 0, width: height }),
  };

  const dir = maskDirection[position];

  const layers = Array.from({ length: divCount }, (_, i) => {
    const tCur = ease((i + 1) / divCount);
    const tPrev = i === 0 ? 0 : ease(i / divCount);
    const blurAmount = exponential
      ? strength * Math.pow(2, i)
      : strength * (i + 1);

    const stopStart = (tPrev * 100).toFixed(2);
    const stopEnd = (tCur * 100).toFixed(2);
    const mask = `linear-gradient(${dir}, black ${stopStart}%, transparent ${stopEnd}%)`;

    const layerStyle: CSSProperties = {
      position: "absolute",
      inset: 0,
      backdropFilter: `blur(${blurAmount}px)`,
      WebkitBackdropFilter: `blur(${blurAmount}px)`,
      maskImage: mask,
      WebkitMaskImage: mask,
    };

    return <div key={i} style={layerStyle} />;
  });

  return (
    <div aria-hidden style={wrapperStyle}>
      {layers}
    </div>
  );
}
