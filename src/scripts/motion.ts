import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  const revealLines = gsap.utils.toArray<HTMLElement>("[data-reveal-line]");
  const revealItems = gsap.utils.toArray<HTMLElement>("[data-animate]");
  const swatches = gsap.utils.toArray<HTMLElement>("[data-swatch-row] span");

  gsap.set(revealLines, { yPercent: 110 });
  gsap.set(revealItems, { autoAlpha: 0, y: 28 });
  gsap.set(swatches, { scaleX: 0, transformOrigin: "left center" });

  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .to(revealLines, { yPercent: 0, duration: 1.1, stagger: 0.08 })
    .to(".hero [data-animate]", { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.08 }, "-=0.72");

  revealItems
    .filter((item) => !item.closest(".hero"))
    .forEach((item) => {
      gsap.to(item, {
        autoAlpha: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 86%",
          once: true
        }
      });
    });

  gsap.to(".hero-media", {
    yPercent: 8,
    scale: 1.04,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });

  swatches.forEach((swatch, index) => {
    gsap.to(swatch, {
      scaleX: 1,
      duration: 0.8,
      delay: index * 0.06,
      ease: "power3.out",
      scrollTrigger: {
        trigger: swatch,
        start: "top 84%",
        once: true
      }
    });
  });
}
