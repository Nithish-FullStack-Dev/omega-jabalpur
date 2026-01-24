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
          <h2 className="text-2xl md:text-3xl font-semibold text-teal-600">
            Multispecialty Care Services
          </h2>
          <p className="mt-2 text-sm text-gray-500 max-w-2xl mx-auto">
            Comprehensive healthcare across 25+ specialties with expert doctors
            and advanced technology
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-md bg-orange-100 text-orange-500 text-sm font-semibold">
                  ⚡
                </span>
                <h3 className="text-sm font-semibold tracking-wide text-gray-900">
                  {service.title}
                </h3>
              </div>

              <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-orange-500 hover:underline"
                >
                  {service.linkText}
                  <ArrowRight size={16} />
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
