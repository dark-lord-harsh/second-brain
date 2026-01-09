import gsap from "gsap";

gsap.to(".box", {
  x: 200,
  opacity: 1,
  rotation: 360,
  borderRadius: "50%",
  background: "#FF6f61",
  scale: 1.25,
  // gsap specific properties
  duration: 5,
  delay: 1,
  ease: 'power1.inOut',
  repeat: -1, // infinite times
  yoyo: true, // reverse the other property
  repeatDelay: 2
})