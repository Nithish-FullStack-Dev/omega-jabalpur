"use client";

import { ArrowRight } from "lucide-react";
import { cards } from "../constants/QuickActions";

const QuickActions = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            return (
              <div
                key={index}
                className={`group rounded-2xl border p-8 flex flex-col justify-between border-gray-100 bg-light-orange hover:border-accent  hover:bg-[#E56E1B0D] transition duration-300
                `}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 group-hover:border group-hover:border-accent transition duration-300">
                    {card.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm font-normal text-gray-600 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <ol className="space-y-2 text-sm font-normal text-gray-700 mb-8 list-decimal list-inside">
                    {card.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ol>
                </div>

                {/* Button */}
                <button
                  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-md px-6 py-2.5 text-white font-medium transition bg-accent `}
                >
                  {card.button}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition duration-300"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;
