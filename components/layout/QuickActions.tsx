"use client";

import { ArrowRight } from "lucide-react";
import { cards } from "../constants/QuickActions";

const QuickActions = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl border p-8 flex flex-col justify-between
                ${
                  card.highlight
                    ? "border-orange-400 bg-orange-50"
                    : "border-gray-100 bg-white"
                }`}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100">
                    {card.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <ol className="space-y-2 text-sm text-gray-700 mb-8 list-decimal list-inside">
                    {card.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ol>
                </div>

                {/* Button */}
                <button
                  className={`mt-auto inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-white font-medium transition
                  ${
                    card.highlight
                      ? "bg-orange-500 hover:bg-orange-600"
                      : "bg-orange-500 hover:bg-orange-600"
                  }`}
                >
                  {card.button}
                  <ArrowRight size={18} />
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
