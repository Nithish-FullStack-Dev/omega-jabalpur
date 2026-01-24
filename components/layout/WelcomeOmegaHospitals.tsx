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
                    className={`relative w-full max-w-[850px] min-h-[100px] lg:h-[120px] flex items-center overflow-hidden transition-all duration-300 ${isRightAligned ? "rounded-tr-[30px] lg:rounded-tr-[50px] rounded-br-[30px] lg:rounded-br-[50px] border-t border-b border-r border-gray-100 shadow-[10px_5px_20px_-5px_rgba(0,0,0,0.08)] lg:shadow-[20px_10px_40px_-10px_rgba(0,0,0,0.08)]" : "rounded-tl-[30px] lg:rounded-tl-[50px] rounded-bl-[30px] lg:rounded-bl-[50px] border-t border-b border-l border-gray-100 shadow-[-10px_5px_20px_-5px_rgba(0,0,0,0.08)] lg:shadow-[-20px_10px_40px_-10px_rgba(0,0,0,0.08)]"}`}
                  >
                    <div
                      className={`absolute top-0 h-full w-[80px] lg:w-[100px] bg-[#2E9FB3] z-0 ${isRightAligned ? "right-0" : "left-0"}`}
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_2px,transparent_2px)] bg-[length:20px_20px] opacity-60" />
                    </div>

                    <div
                      className={`relative z-10 flex items-center h-full w-full gap-4 lg:gap-8 px-4 lg:px-10 ${isRightAligned ? "flex-row justify-end pr-[90px] lg:pr-[120px]" : "flex-row justify-start pl-[90px] lg:pl-[120px]"}`}
                    >
                      <div className="text-3xl lg:text-[42px] font-normal text-black tracking-tight leading-none">
                        {item.id}
                      </div>

                      <div className="h-[35px] lg:h-[45px] w-[1px] bg-gray-300" />

                      <div className="flex-shrink-0">
                        <Icon
                          className="w-6 h-6 lg:w-8 lg:h-8 text-black"
                          strokeWidth={1.5}
                        />
                      </div>

                      <div
                        className={`flex flex-col ${isRightAligned ? "items-end text-right" : "items-start text-left"}`}
                      >
                        <p className="text-[#2E9FB3] font-bold text-lg lg:text-[22px] leading-tight">
                          {item.value}
                        </p>
                        <p className="text-[15px] lg:text-[17px] font-medium text-gray-900 leading-tight mt-1">
                          {item.title}
                        </p>
                        <p className="hidden sm:block text-[12px] lg:text-[14px] text-gray-500 mt-1">
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
