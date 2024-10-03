"use client";
import Gradientbutton from "@/lib/ui/button";

export default function Contact() {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="absolute inset-0 bg-green-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          style={{ filter: "grayscale(1) contrast(1.2)", opacity: 0.4 }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-2 shadow-md">
          <h2 className="text-gray-900 text-xl font-bold mb-1  title-font">Get in Touch</h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Have questions about how our AI-driven platform can help optimize your farm's yield,
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-lg font-semibold text-gray-600">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-lg font-semibold text-gray-600">
              How can we assist you?
            </label>
            <textarea
              id="message"
              name="message"
            //   placeholder="Tell us about your farming challenges or questions regarding our platform..."
              className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <Gradientbutton text="Submit" cta="" className="w-full" />
          <p className="text-xs text-gray-500 mt-3">
            Your information is safe with us. We’ll get back to you soon to help you optimize your farm with AI.
          </p>
        </div>
      </div>
    </section>
  );
}
