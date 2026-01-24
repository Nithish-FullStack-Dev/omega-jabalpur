"use client";

import { stats } from "../constants/WelcomeOmegaHospitals";

const WelcomeOmegaHospitals = () => {
  return (
    <section className="bg-[#f9fdfd] py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-teal-600 mb-14">
          Welcome To Omega Hospitals, Jabalpur
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT CONTENT */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
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
          <div className="space-y-5">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="relative flex items-center bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  {/* Left Teal Tab */}
                  <div className="absolute left-0 top-0 h-full w-14 bg-teal-500 rounded-r-xl" />

                  {/* Content */}
                  <div className="relative flex items-center gap-6 px-6 py-5 w-full">
                    {/* Index */}
                    <div className="text-xl font-semibold text-gray-900 min-w-[32px]">
                      {item.id}
                    </div>

                    {/* Divider */}
                    <div className="h-10 w-px bg-gray-300" />

                    {/* Icon */}
                    <Icon className="h-6 w-6 text-gray-800" />

                    {/* Text */}
                    <div>
                      <p className="text-teal-600 font-semibold text-lg">
                        {item.value}
                      </p>
                      <p className="text-sm font-medium text-gray-800">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">{item.subtitle}</p>
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
