import React from "react";


const LearnMorePage = () => {
  return (
    <div className="space-y-20 py-16 px-6 bg-gray-50">
      <AiDrivenPlanting />
      <DataPrivacy />
      <SeamlessIntegration />
      <TrustedByFarmers />
    </div>
  );
};

export default  LearnMorePage



const AiDrivenPlanting = () => {
  return (
    <div id="ai-driven-planting" className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">AI-Driven Planting Schedules</h2>
      <p className="text-lg text-gray-700 leading-7">
        Our platform uses advanced AI algorithms to optimize planting schedules,
        helping farmers make data-driven decisions for better yield. By analyzing real-time data
        such as soil moisture, temperature, and environmental conditions, we ensure that every 
        decision is backed by science.
      </p>
      <ul className="list-disc ml-6 mt-4 text-gray-700">
        <li>Analyze soil health and moisture levels for optimal planting conditions</li>
        <li>Predict ideal planting and harvesting windows to maximize yield</li>
        <li>Reduce the use of water and fertilizers through precise scheduling</li>
        <li>Real-time alerts and notifications for schedule adjustments</li>
      </ul>
      <h3 className="text-2xl font-bold mt-8">Case Study: Increasing Corn Yield in Midwest USA</h3>
      <p className="mt-4 text-gray-700">
        A corn farm in the Midwest utilized our platform to optimize planting schedules based 
        on soil moisture and weather forecasts. This resulted in a 15% increase in yield and 
        a 10% reduction in water usage. The farm was also able to harvest earlier than expected, 
        avoiding a late-season drought.
      </p>
      <h3 className="text-2xl font-bold mt-8">FAQs</h3>
      <ul className="list-disc ml-6 mt-4 text-gray-700">
        <li>How does the platform determine the best planting time?</li>
        <p className="ml-4">The system analyzes environmental and soil data in real-time, along with historical trends, to suggest the ideal planting window.</p>
        <li>Can I customize planting schedules for different crops?</li>
        <p className="ml-4">Yes, the platform can be tailored for specific crops based on the farmer’s requirements and regional climate conditions.</p>
      </ul>
    </div>
  );
};






const DataPrivacy = () => {
  return (
    <div id="data-privacy" className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Data Privacy & Security</h2>
      <p className="text-lg text-gray-700 leading-7">
        We take your data security seriously. Our platform ensures that all data you share, from soil
        health to yield reports, is encrypted end-to-end and stored securely. We follow strict 
        security protocols to protect your privacy while offering you the power of precision farming.
      </p>
      <ul className="list-disc ml-6 mt-4 text-gray-700">
        <li>Data is encrypted at rest and in transit using AES-256 encryption</li>
        <li>We comply with GDPR and other data privacy regulations worldwide</li>
        <li>Regular security audits and vulnerability assessments</li>
        <li>Multi-factor authentication for account security</li>
      </ul>
      <h3 className="text-2xl font-bold mt-8">Your Data, Your Control</h3>
      <p className="mt-4 text-gray-700">
        You own your data. Our platform offers full transparency and control over what data is 
        collected and how it's used. You can export your data at any time, ensuring that your 
        valuable insights are always in your hands.
      </p>
      <h3 className="text-2xl font-bold mt-8">FAQs</h3>
      <ul className="list-disc ml-6 mt-4 text-gray-700">
        <li>How is my data protected?</li>
        <p className="ml-4">We use industry-leading encryption standards and comply with global regulations to keep your data secure.</p>
        <li>Can I choose what data is shared?</li>
        <p className="ml-4">Yes, you have full control over the data you choose to share or keep private within the platform.</p>
      </ul>
    </div>
  );
};



const SeamlessIntegration = () => {
  return (
    <div id="seamless-integration" className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Seamless Integration</h2>
      <p className="text-lg text-gray-700 leading-7">
        Our platform is designed to integrate effortlessly with the tools you’re already using, 
        enabling you to bring in external data and export insights without any hassle. Whether 
        you’re using a drone for aerial imaging or a weather station for real-time data, our 
        platform can plug into it seamlessly.
      </p>
      <ul className="list-disc ml-6 mt-4 text-gray-700">
        <li>Integrate with existing hardware like IoT sensors and weather stations</li>
        <li>Data import/export capabilities for smooth transitions</li>
        <li>Compatible with popular farm management software</li>
        <li>API support for custom integrations</li>
      </ul>
      <h3 className="text-2xl font-bold mt-8">Benefits of Integration</h3>
      <p className="mt-4 text-gray-700">
        By integrating all your tools into a single platform, you can automate workflows and 
        reduce manual data entry. This improves accuracy and frees up more time for making 
        strategic decisions, leading to more efficient farm management.
      </p>
      <h3 className="text-2xl font-bold mt-8">FAQs</h3>
      <ul className="list-disc ml-6 mt-4 text-gray-700">
        <li>What tools does your platform integrate with?</li>
        <p className="ml-4">We integrate with various sensors, weather stations, and third-party farm management software like FarmLogs, Trimble, and more.</p>
        <li>Is custom integration possible?</li>
        <p className="ml-4">Yes, we offer API support for custom integrations to fit your unique needs.</p>
      </ul>
    </div>
  );
};



const TrustedByFarmers = () => {
  return (
    <div id="trusted-by-farmers" className="max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6">Trusted by Farmers</h2>
      <p className="text-lg text-gray-700 leading-7">
        Our platform is trusted by farmers across the globe for its reliability and impact on
        farm operations. From small-scale farmers to large agricultural operations, our AI solutions
        help increase productivity while reducing resource waste.
      </p>
      <ul className="list-disc ml-6 mt-4 text-gray-700">
        <li>Over 10,000 farms worldwide use our platform</li>
        <li>Proven results: 20% average increase in crop yield</li>
        <li>Constant updates based on farmer feedback</li>
        <li>Active community of farmers sharing tips and success stories</li>
      </ul>
      <h3 className="text-2xl font-bold mt-8">Success Story: Organic Farm in California</h3>
      <p className="mt-4 text-gray-700">
        An organic farm in California adopted our platform and saw significant improvements in
        water usage efficiency. Using real-time soil moisture data, they reduced water waste by 
        25% and improved the health of their crops, leading to a higher yield.
      </p>
      <h3 className="text-2xl font-bold mt-8">FAQs</h3>
      <ul className="list-disc ml-6 mt-4 text-gray-700">
        <li>What results have farmers seen using your platform?</li>
        <p className="ml-4">Farmers have reported increased yields, reduced waste, and more efficient operations, with an average improvement of 20% in overall productivity.</p>
        <li>Is there a community for farmers using your platform?</li>
        <p className="ml-4">Yes, we have a thriving community where farmers can exchange tips, insights, and success stories.</p>
      </ul>
    </div>
  );
};






