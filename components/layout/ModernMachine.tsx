"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { slides } from "../constants/ModernMachine";
import gsap from "gsap";

const TRANSITION_DURATION = 700;
const AUTO_PLAY_DELAY = 5000;

const ModernMachine = () => {
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, AUTO_PLAY_DELAY);

    return () => clearInterval(interval);
  }, [isPaused]);

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
  }, [current, extendedSlides.length]);

  useEffect(() => {
    if (!containerRef.current) return;
    if (current === 0 || current === extendedSlides.length - 1) return;

    const ctx = gsap.context(() => {
      const activeSlide = containerRef.current!.children[
        current
      ] as HTMLElement;
      const items = activeSlide.querySelectorAll("[data-animate]");

      gsap.fromTo(
        items,
        { autoAlpha: 0 },
        { autoAlpha: 1, stagger: 0.08, duration: 0.6 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [current]);

  useEffect(() => {
    if (!isAnimating) {
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
    }
  }, [isAnimating]);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  const realIndex =
    current === 0
      ? slides.length - 1
      : current === extendedSlides.length - 1
      ? 0
      : current - 1;

  return (
    <section className="relative w-full">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images/modern-machines/machinaery-carousel.jpg')",
        }}
      />

      <div
        className="relative w-[90%] mx-auto overflow-hidden group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={containerRef}
          className={`flex h-full ${
            isAnimating ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-14"
            >
              <div className="flex items-center justify-center">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={520}
                  height={360}
                  className="object-contain"
                  priority
                />
              </div>

              <div data-animate className="flex flex-col">
                <h3 className="text-2xl md:text-3xl font-bold text-[#e56e1b]">
                  {slide.title}
                </h3>

                {slide.subtitle && (
                  <p data-animate className="mt-2 text-sm text-slate-600">
                    {slide.subtitle}
                  </p>
                )}

                <ul data-animate className="mt-6 space-y-3">
                  {slide.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-700">
                      <span className="text-teal-500 mt-1">✱</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-slate-100"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-slate-100"
        >
          ›
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx + 1)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                realIndex === idx
                  ? "bg-[#e56e1b] w-6"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernMachine;
