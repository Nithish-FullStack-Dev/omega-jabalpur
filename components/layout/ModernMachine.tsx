"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { slides } from "../constants/ModernMachine";
import gsap from "gsap";
import { ArrowRight, Download } from "lucide-react";

const TRANSITION_DURATION = 700;
const AUTO_PLAY_DELAY = 5000;

const ModernMachine = () => {
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  /* autoplay */
  useEffect(() => {
    if (isPaused) return;
    const i = setInterval(() => setCurrent((p) => p + 1), AUTO_PLAY_DELAY);
    return () => clearInterval(i);
  }, [isPaused]);

  /* loop edges */
  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrent(1);
      }, TRANSITION_DURATION);
    }

    if (current === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrent(slides.length);
      }, TRANSITION_DURATION);
    }
  }, [current]);

  /* gsap content fade */
  useEffect(() => {
    if (!containerRef.current) return;
    if (current === 0 || current === extendedSlides.length - 1) return;

    const ctx = gsap.context(() => {
      const active = containerRef.current!.children[current] as HTMLElement;
      const items = active.querySelectorAll("[data-animate]");

      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 20 },
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [current]);

  useEffect(() => {
    if (!isAnimating) requestAnimationFrame(() => setIsAnimating(true));
  }, [isAnimating]);

  const realIndex =
    current === 0
      ? slides.length - 1
      : current === extendedSlides.length - 1
        ? 0
        : current - 1;

  return (
    <section className="bg-white">
      {/* HEADER */}
      <div className="pt-8 md:pt-15 pb-6 md:pb-3.5 text-center relative z-20 bg-white px-4">
        <h2 className="text-[20px] md:text-[32px] font-bold text-[#2AA0AE] mb-3 md:mb-6">
          Modern Machines, Trusted Outcomes
        </h2>
        <p className="text-[#00000066] max-w-3xl mx-auto text-[13px] md:text-[14px] px-4">
          Omega Hospitals features advanced medical technology including
          high-precision imaging, robotic surgery systems and modern diagnostic
          tools.
        </p>
      </div>

      {/* CAROUSEL WRAPPER */}
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* BACKGROUND ELEMENTS - Hidden on mobile */}
        <div className="hidden lg:block absolute inset-0 bg-[linear-gradient(135deg,rgba(77,184,196,0.05),transparent_60%)]" />

        <div
          className="hidden lg:block absolute -left-[33%] top-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full
          bg-gradient-to-br from-[#CFEFF3] via-[#EAF7F9] to-white"
        />

        <div
          className="hidden lg:block absolute -left-[33%] top-1/2 -translate-y-1/2 w-[1200px] h-[1200px]
          rounded-full border-[28px] border-[#2AA0AE]"
        />

        {/* SLIDES */}
        <div
          ref={containerRef}
          className={`flex relative z-10 ${
            isAnimating ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedSlides.map((s, i) => (
            <div
              key={i}
              className="w-full shrink-0 flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-20 px-4 md:px-12 lg:px-24 py-8 lg:py-2"
            >
              {/* IMAGE - Centered on mobile, pulled into curve on desktop */}
              <div className="relative flex items-center justify-center w-full lg:w-[70%] h-[250px] md:h-[350px] lg:h-auto order-1 lg:order-1">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* CONTENT */}
              <div className="flex flex-col justify-between order-2 lg:order-2 items-center lg:items-start">
                <h3
                  data-animate
                  className="text-[18px] md:text-2xl lg:text-3xl font-bold text-[#F47B20] mb-3 md:mb-4 lg:mb-6 text-center lg:text-left"
                >
                  {s.title}
                </h3>

                <p
                  data-animate
                  className="text-[13px] md:text-sm lg:text-base text-gray-700 mb-4 md:mb-5 lg:mb-6 font-semibold text-center lg:text-left max-w-xl lg:max-w-none"
                >
                  {s.subtitle}
                </p>

                <ul
                  data-animate
                  className="space-y-2 md:space-y-2.5 lg:space-y-3 text-gray-600 text-[12px] md:text-sm lg:text-base mb-6 w-full max-w-xl lg:max-w-none"
                >
                  {s.points.map((p: string, idx: number) => (
                    <li
                      key={idx}
                      className="flex gap-2 md:gap-3 items-start text-left"
                    >
                      <span className="text-[#2AA0AE] font-bold text-base md:text-lg flex-shrink-0 mt-0.5">
                        ✱
                      </span>
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>

                <div
                  data-animate
                  className="mt-4 md:mt-6 lg:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4 w-full max-w-xl lg:max-w-none"
                >
                  <button className="bg-[#F47B20] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg flex items-center justify-center gap-2 text-sm md:text-base font-medium hover:bg-[#e36910] transition-colors">
                    Know More <ArrowRight size={16} className="md:w-5 md:h-5" />
                  </button>

                  <button className="bg-[#2AA0AE] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg flex items-center justify-center gap-2 text-sm md:text-base font-medium hover:bg-[#238a96] transition-colors">
                    <Download size={16} className="md:w-5 md:h-5" /> Download
                    PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP ARROWS - On the sides */}
        <button
          onClick={() => setCurrent((p) => p - 1)}
          className="hidden lg:flex absolute left-4 lg:left-10 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#2AA0AE] text-white z-20 items-center justify-center text-2xl hover:bg-[#238a96] transition-colors"
          aria-label="Previous slide"
        >
          ‹
        </button>

        <button
          onClick={() => setCurrent((p) => p + 1)}
          className="hidden lg:flex absolute right-4 lg:right-17 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#2AA0AE] text-white z-20 items-center justify-center text-2xl hover:bg-[#238a96] transition-colors"
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

      {/* MOBILE NAVIGATION - Arrows and Dots at bottom */}
      <div className="py-8 lg:hidden relative flex items-center flex-col justify-center gap-4">
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <button
            onClick={() => setCurrent((p) => p - 1)}
            className="flex w-10 h-10 rounded-full bg-[#2AA0AE] text-white z-20 items-center justify-center text-2xl hover:bg-[#238a96] transition-colors flex-shrink-0"
            aria-label="Previous slide"
          >
            ‹
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => setCurrent((p) => p + 1)}
            className="flex w-10 h-10 rounded-full bg-[#2AA0AE] text-white z-20 items-center justify-center text-2xl hover:bg-[#238a96] transition-colors flex-shrink-0"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>

        {/* DOTS */}
        <div className="flex space-x-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i + 1)}
              className={`h-2.5 rounded-full transition-all ${
                realIndex === i ? "w-6 bg-[#F47B20]" : "w-2.5 bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* DESKTOP DOTS - Only dots at bottom */}
      <div className="hidden lg:flex py-12 lg:py-20 relative items-center justify-center">
        <div className="flex space-x-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i + 1)}
              className={`h-3 rounded-full transition-all ${
                realIndex === i ? "w-8 bg-[#F47B20]" : "w-3 bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernMachine;
