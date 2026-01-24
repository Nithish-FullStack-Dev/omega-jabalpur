import { features } from "../constants/WhyOmega";

const WhyOmega = () => {
  return (
    <section className="bg-[#EFFBFC66] py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-[32px] font-bold text-light-teal">
            Why Omega Jabalpur
          </h2>
          <p className="mt-3 text-[#00000066] text-sm ">
            World-Class Care, Right Here in Jabalpur
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 py-8 px-6 text-center hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-teal-50 flex items-center justify-center">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-[16px] font-medium text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Highlight */}
              {item.highlight && (
                <p className="text-sm">
                  <span className="text-teal-600 font-semibold">
                    {item.highlight}
                  </span>{" "}
                  <span className="text-[#00000066]">{item.description}</span>
                </p>
              )}

              {/* Normal description */}
              {!item.highlight && (
                <p className="text-sm text-gray-400">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOmega;
