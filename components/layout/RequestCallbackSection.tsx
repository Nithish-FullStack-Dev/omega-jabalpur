import Image from "next/image";
import RequestForm from "@/components/helpers/RequestForm";

const RequestCallbackSection = () => {
  return (
    <section className="w-full bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[700px]">
        {/* Left Image */}
        <div className="relative w-full h-[300px] lg:h-auto">
          <Image
            src="/images/callback.jpg"
            alt="Medical Team"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Right Form */}
        <div className="flex items-center justify-center px-6 py-14 lg:px-16">
          <div className="w-full max-w-lg">
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-2">
              Request a Call Back Today
            </h2>

            <p className="text-sm text-gray-500 mb-8">
              Fill in your details and our team will get in touch with you
              shortly.
            </p>

            {/* Form Component */}
            <RequestForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestCallbackSection;
