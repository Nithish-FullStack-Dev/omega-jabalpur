"use client";

import { stats } from "../constants/WelcomeOmegaHospitals";

const WelcomeOmegaHospitals = () => {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-light-teal mb-14">
          Welcome To Omega Hospitals, Jabalpur
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-black text-[14px] leading-relaxed">
            <p>
              At Omega Hospitals Jabalpur, we bring world-class, multispecialty
              healthcare to the heart of Madhya Pradesh. As part of India's
              leading hospital network with 9 locations nationwide, we combine
              cutting-edge medical technology with compassionate, patient-first
              care.
            </p>

            <h4 className="font-semibold text-teal-600">
              Why families across Central India trust us:
            </h4>

            <p>
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

            <p>
              Our 170+ experienced doctors trained at institutions like AIIMS,
              CMC Vellore, and Tata Memorial Hospital work collaboratively
              across 25+ specialties to provide integrated, coordinated care
              tailored to your unique health needs.
            </p>

            <p>
              From preventive health checkups to complex surgeries and critical
              care, we're committed to delivering quality healthcare that's
              accessible, affordable, and always focused on you.
            </p>

            <button className="inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-white font-medium hover:bg-orange-600 transition">
              Learn More About Us →
            </button>
          </div>

          {/* RIGHT STATS */}
          <div className="relative flex flex-col w-full  mx-auto p-4">
            {stats.map((item, index) => {
              const Icon = item.icon;
              const isRightAligned = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex w-full ${
                    isRightAligned ? "justify-end" : "justify-start"
                  }`}
                >
                  {/* Card Container */}
                  <div
                    className={`relative w-full max-w-[850px] h-[120px] flex items-center overflow-hidden ${
                      isRightAligned
                        ? "border-t border-b border-r border-gray-200 rounded-tr-[30px] rounded-br-[30px]"
                        : "border-t border-b border-l border-gray-200 rounded-tl-[30px] rounded-bl-[30px]"
                    }

`}
                  >
                    {/* Teal Cap Background (Decorative) */}
                    <div
                      className={`absolute top-0 h-full w-[100px] bg-[#2E9FB3] z-0
              ${isRightAligned ? "right-0" : "left-0"}
            `}
                    >
                      {/* Dot Pattern Overlay */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_2px,transparent_2px)] bg-[length:20px_20px] opacity-60" />
                    </div>

                    {/* Content Wrapper */}
                    <div
                      className={`relative z-10 flex items-center h-full w-full gap-8 px-10
              ${isRightAligned ? "flex-row justify-end pr-[120px]" : "flex-row justify-start pl-30"}
            `}
                    >
                      {/* Index Number */}
                      <div className="text-[42px] font-normal text-black tracking-tight leading-none">
                        {item.id}
                      </div>

                      {/* Vertical Divider */}
                      <div className="h-[45px] w-[1px] bg-gray-300" />

                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <Icon
                          className="w-8 h-8 text-black"
                          strokeWidth={1.5}
                        />
                      </div>

                      {/* Text Content */}
                      <div
                        className={`flex flex-col ${isRightAligned ? "items-end text-right" : "items-start text-left"}`}
                      >
                        <p className="text-[#2E9FB3] font-bold text-[22px] leading-tight">
                          {item.value}
                        </p>
                        <p className="text-[17px] font-medium text-gray-900 leading-tight mt-1">
                          {item.title}
                        </p>
                        <p className="text-[14px] text-gray-500 mt-1">
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
