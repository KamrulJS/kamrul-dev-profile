function imageReveal() {
  const revealContainers = document.querySelectorAll(".reveal");

  revealContainers.forEach((container) => {
    let clipPath;

    // Left to right
    if (container.classList.contains("reveal--left")) {
      clipPath = "inset(0 0 0 100%)";
    }
    // Right to left
    if (container.classList.contains("reveal--right")) {
      clipPath = "inset(0 100% 0 0)";
    }
//     Top to bottom
    if (container.classList.contains("reveal--top")) {
      clipPath = "inset(0 0 100% 0)";
    }
    // Bottom to top
    if (container.classList.contains("reveal--bottom")) {
      clipPath = "inset(100% 0 0 0)";
    }

    const image = container.querySelector("img");

    // Animation trigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        //markers: true, // Turn on to show trigger markers
        toggleActions: "restart none none reset"
      }
    });

    // Animation timeline
    tl.set(container, { autoAlpha: 1 });
    tl.from(container, {
      clipPath,
      duration: 1.5,
      delay: 0.8,
      ease: Power4.easeInOut
    });
    if (container.classList.contains("reveal--overlay")) {
      tl.from(image, { clipPath, duration: 0.6, ease: Power4.easeOut });
    }
    tl.from(image, {
      scale: 1.3,
      duration: 1.5,
      delay: -1,
      ease: Power2.easeOut
    });
  });

  ScrollTrigger.refresh();
}

imageReveal();