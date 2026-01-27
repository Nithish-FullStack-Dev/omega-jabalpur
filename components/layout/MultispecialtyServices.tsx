"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { services } from "../constants/MultispecialtyServices";

const MultispecialtyServices = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            data-aos="fade-up"
            data-aos-duration="1000"
            className="text-2xl md:text-[32px] font-bold text-light-teal"
          >
            Multispecialty Care Services
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="mt-2 text-sm text-[#00000066] sm:w-[46%] w-full mx-auto"
          >
            Comprehensive healthcare across 25+ specialties with expert doctors
            and advanced technology
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 bg-white p-10 shadow-sm transition hover:shadow-md"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay={index * 200}
            >
              <div className="flex items-center gap-3">
                <span className="mt-1 flex h-7.5 w-7.5 items-center justify-center rounded-md bg-orange-100 text-orange-500 text-sm font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="21"
                    viewBox="0 0 18 21"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.514 0.000134436C6.72977 0.0031312 6.93878 0.075844 7.10982 0.207414C7.28086 0.338984 7.40476 0.522352 7.463 0.730134L11.136 13.7901L13.064 8.64913C13.1354 8.45856 13.2633 8.29432 13.4306 8.17835C13.5978 8.06239 13.7965 8.00021 14 8.00013H17C17.2652 8.00013 17.5196 8.10549 17.7071 8.29303C17.8946 8.48056 18 8.73492 18 9.00013C18 9.26535 17.8946 9.5197 17.7071 9.70724C17.5196 9.89478 17.2652 10.0001 17 10.0001H14.693L11.936 17.3511C11.862 17.5485 11.7276 17.7175 11.5519 17.8339C11.3761 17.9503 11.1681 18.0082 10.9575 17.9993C10.7469 17.9904 10.5445 17.9153 10.3792 17.7845C10.2139 17.6537 10.0941 17.474 10.037 17.2711L6.45 4.51413L4.954 9.29813C4.89051 9.50151 4.76372 9.6793 4.59211 9.80557C4.42051 9.93185 4.21306 10 4 10.0001H1C0.734784 10.0001 0.48043 9.89478 0.292893 9.70724C0.105357 9.5197 0 9.26535 0 9.00013C0 8.73492 0.105357 8.48056 0.292893 8.29303C0.48043 8.10549 0.734784 8.00013 1 8.00013H3.265L5.545 0.702134C5.60933 0.495956 5.73869 0.316148 5.91372 0.189607C6.08875 0.0630661 6.30005 -0.00340598 6.516 0.000134436H6.514Z"
                      fill="#E56E1B"
                    />
                  </svg>
                </span>
                <h3 className="text-[16px] font-medium tracking-wide text-black">
                  {service.title}
                </h3>
              </div>

              <p className="mt-3 text-sm font-light text-black leading-relaxed">
                {service.description}
              </p>

              <div className="relative mt-6 w-full sm:w-auto overflow-hidden group">
                <span className="absolute inset-0 bg-accent scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 rounded-md"></span>
                <a className="relative z-10 inline-flex w-full items-center justify-between gap-2 px-4 py-2.5 text-sm font-normal border border-accent rounded-md sm:bg-transparent bg-accent sm:text-black text-white sm:group-hover:text-white transition-colors duration-300 group-hover:cursor-pointer">
                  <span>{service.linkText}</span>
                  <ArrowRight
                    size={16}
                    className="transition-all duration-300 ease-out group-hover:translate-x-1.5 sm:text-accent sm:group-hover:text-white text-white"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultispecialtyServices;
