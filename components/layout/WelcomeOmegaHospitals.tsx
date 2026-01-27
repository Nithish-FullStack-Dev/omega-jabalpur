"use client";

import { ArrowRight } from "lucide-react";
import { stats } from "../constants/WelcomeOmegaHospitals";

const WelcomeOmegaHospitals = () => {
  return (
    <section className="bg-secondary py-12 lg:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-center text-2xl md:text-3xl font-semibold text-light-teal mb-10 lg:mb-14"
        >
          Welcome To Omega Hospitals, Jabalpur
        </h2>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
          <div className="space-y-6 text-black text-[14px] leading-relaxed">
            <p data-aos="fade-right" data-aos-duration="1000">
              At Omega Hospitals Jabalpur, we bring world-class, multispecialty
              healthcare to the heart of Madhya Pradesh. As part of India's
              leading hospital network with 9 locations nationwide, we combine
              cutting-edge medical technology with compassionate, patient-first
              care.
            </p>
            <h4
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="200"
              className="font-semibold text-teal-600"
            >
              Why families across Central India trust us:
            </h4>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              Located conveniently in Jabalpur, we eliminate the need for
              patients to travel to distant metro cities for advanced treatment.
              Whether you need cancer care, cardiac surgery, neurology,
              orthopedics, or everyday medical services, you'll find{" "}
              <span className="text-teal-600 font-medium">
                expert specialists, modern infrastructure, and 24/7 emergency
                support
              </span>{" "}
              right here at home.
            </p>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              Our 170+ experienced doctors trained at institutions like AIIMS,
              CMC Vellore, and Tata Memorial Hospital work collaboratively
              across 25+ specialties to provide integrated, coordinated care
              tailored to your unique health needs.
            </p>
            <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              From preventive health checkups to complex surgeries and critical
              care, we're committed to delivering quality healthcare that's
              accessible, affordable, and always focused on you.
            </p>
            <button
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="1000"
              className="group/btn inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-white font-medium hover:bg-accent/85 transition"
            >
              Learn More About Us{" "}
              <ArrowRight
                size={18}
                className="group-hover/btn:translate-x-1 transition duration-300"
              />
            </button>
          </div>

          <div className="relative flex flex-col w-full mx-auto p-2 lg:p-4">
            {stats.map((item, index) => {
              const Icon = item.icon;
              const isRightAligned = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex w-full ${isRightAligned ? "justify-end" : "justify-start"}`}
                  data-aos={isRightAligned ? "fade-left" : "fade-right"}
                  data-aos-duration="1000"
                  data-aos-delay={index * 200}
                >
                  <div
                    className={`relative w-full max-w-212.5 min-h-25 lg:h-30 flex items-center overflow-hidden transition-all duration-300 ${isRightAligned ? "rounded-tr-[24px] rounded-br-[24px] shadow-[10px_5px_20px_-5px_rgba(0,0,0,0.08)] lg:shadow-[20px_10px_40px_-10px_rgba(0,0,0,0.08)]" : "rounded-tl-[24px] rounded-bl-[24px] shadow-[-10px_5px_20px_-5px_rgba(0,0,0,0.08)] lg:shadow-[-20px_10px_40px_-10px_rgba(0,0,0,0.08)]"}`}
                  >
                    {/* Custom offset borders */}
                    <span
                      className={`absolute top-0 h-px bg-gray-200 ${
                        isRightAligned
                          ? "left-[10%] right-0"
                          : "left-0 right-[10%]"
                      }`}
                    />

                    <span
                      className={`absolute bottom-0 h-px bg-gray-200 ${
                        isRightAligned
                          ? "left-[10%] right-0"
                          : "left-0 right-[10%]"
                      }`}
                    />

                    <span
                      className={`absolute top-[10%] bottom-[10%] w-px bg-gray-200 ${
                        isRightAligned ? "right-0" : "left-0"
                      }`}
                    />

                    <div
                      className={`absolute overflow-hidden top-0 h-full w-14 bg-[#2E9FB3] z-0 ${isRightAligned ? "right-0 rounded-br-[24px] rounded-tr-[24px]" : "left-0 rounded-bl-[24px] rounded-tl-[24px]"}`}
                    >
                      <div className="absolute inset-0 grid grid-rows-6 grid-cols-3 place-items-center pointer-events-none opacity-15 overflow-hidden">
                        {Array.from({ length: 18 }).map((_, i) => (
                          <span
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i % 2 === 0 ? "bg-white/70" : "bg-black/20"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div
                      className={`relative z-10 flex items-center h-full w-full gap-4 lg:gap-8 ${isRightAligned ? "flex-row justify-end pr-22.5 lg:pr-30" : "flex-row justify-start pl-22.5 lg:pl-30"}`}
                    >
                      <div className="text-[24px] font-medium text-black tracking-tight leading-none">
                        {item.id}
                      </div>

                      <div className="h-8.75 lg:h-11.25 w-px bg-gray-300" />

                      <div className="shrink-0">
                        <Icon
                          className="w-4 h-4 text-black"
                          strokeWidth={1.5}
                        />
                      </div>

                      <div
                        className={`flex flex-col ${isRightAligned ? "items-end text-right" : "items-start text-left"}`}
                      >
                        <p className="text-[#299FB0] font-bold text-[24px] leading-tight">
                          {item.value}
                        </p>
                        <p className="text-[15px] font-medium text-gray-900 leading-tight mt-1">
                          {item.title}
                        </p>
                        <p className="hidden sm:block text-[12px] text-gray-500 mt-1">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeOmegaHospitals;
