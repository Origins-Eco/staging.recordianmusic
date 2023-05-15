gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Scroll Smoother

let smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
  smooth: 2,
  normalizeScroll: true, // prevents address bar from showing/hiding on most devices, solves various other browser inconsistencies
  ignoreMobileResize: true, // skips ScrollTrigger.refresh() on mobile resizes from address bar showing/hiding
  effects: true,
  preventDefault: true,
});