"use client";

import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

export default function HomeHero() {
  const doctorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!doctorRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        doctorRef.current,
        {
          clipPath: "inset(0 0 100% 0)",
        },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden ">
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-15">
        <Image
          src="/images/home/background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Decorative dots */}
      <div className="absolute top-0 left-0 hidden lg:block">
        <Image
          src="/images/home/dots.png"
          alt="Dots"
          width={120}
          height={120}
        />
      </div>

      {/* Decorative plus */}
      <div className="absolute bottom-0 left-0 hidden lg:block">
        <Image src="/images/home/plus.png" alt="Plus" width={80} height={80} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="hidden lg:grid lg:grid-cols-2 grid-cols-1">
          {/* LEFT CONTENT (padding stays here) */}
          <div className="py-20 lg:py-28">
            {/* 1. Main Heading - MASKED REVEAL */}
            <div className="overflow-hidden">
              <h1
                data-aos="slide-up"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
                className="w-full sm:text-[41px] text-sm font-black leading-tight text-gray-800"
              >
                WORLD CLASS MEDICAL CARE
              </h1>
            </div>

            {/* 3. Sub Heading (Middle) - APPEARS LAST for emphasis */}
            <div className="overflow-hidden">
              <p
                data-aos="slide-down"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
                className="w-full sm:text-[41px] text-sm font-black leading-tight text-gray-800"
              >
                NOW IN{" "}
                <span className="sm:text-[70px] text-[24px] text-[#E56E1B] sm:letter-spacing-[7px] sm:pl-20px font-black">
                  JABALPUR
                </span>
              </p>
            </div>

            {/* 2. Description (Bottom) - APPEARS SECOND */}
            <div className="overflow-hidden mt-6">
              <p
                data-aos="slide-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease-out-cubic"
                className="max-w-[75%] text-2xl font-bold text-black"
              >
                Expert Cancer Care, Cardiology, Neurology &amp; 25+ Specialties
              </p>
            </div>

            {/* Footer Elements - Fade in after text is settled */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["profile1", "profile2", "profile3"].map((img, idx) => (
                  <div
                    data-aos="zoom-in"
                    data-aos-delay={800 + idx * 100}
                    data-aos-duration="800"
                    key={img}
                    className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#E56E1B]"
                  >
                    <Image
                      src={`/images/home/${img}.jpg`}
                      alt={img}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="overflow-hidden">
                <div
                  data-aos="slide-up"
                  data-aos-delay="1000"
                  data-aos-duration="800"
                >
                  <p className="text-xl font-semibold text-accent">52L +</p>
                  <p className="text-sm text-black">Trusted Patients</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE (anchored to bottom) */}
          <div className="relative">
            <div
              ref={doctorRef}
              style={{ clipPath: "inset(0 0 100% 0)" }}
              className="absolute bottom-0 right-0 w-full flex justify-end"
            >
              <Image
                src="/images/home/doctor.png"
                alt="Doctors"
                width={560}
                height={760}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col relative">
          {/* LEFT CONTENT (padding stays here) */}
          <div className="py-10 flex flex-col items-center text-center px-4">
            <h1
              data-aos="fade-up"
              data-aos-delay="0"
              className="w-[60%] sm:text-[16px] text-sm font-black leading-relaxed text-gray-800"
            >
              WORLD CLASS MEDICAL CARE NOW IN{" "}
              <span className="text-[24px] text-[#E56E1B] font-black pl-1.25">
                JABALPUR
              </span>
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-6 max-w-[75%] text-[16px] font-bold text-black"
            >
              Expert Cancer Care, Cardiology, Neurology &amp; 25+ Specialties
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-10 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {["profile1", "profile2", "profile3"].map((img) => (
                  <div
                    key={img}
                    className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#E56E1B]"
                  >
                    <Image
                      src={`/images/home/${img}.jpg`}
                      alt={img}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div>
                <p className="text-xl font-semibold text-accent">52L +</p>
                <p className="text-sm text-black">Trusted Patients</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE (anchored to bottom) */}
          <div className="relative">
            <Image
              src="/images/home/doctor.png"
              alt="Doctors"
              width={560}
              height={760}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
