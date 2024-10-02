import { motion } from "framer-motion";

const ScrollingTestimonials = () => {
  return (
    <div className=" py-12">
      <div className="mb-8 px-4">
  <h3 className="text-slate-900 text-2xl sm:text-4xl font-semibold text-center">
    What Our Users Are Saying......
  </h3>
  <p className="text-center text:sm sm:text-lg text-slate-900 mt-2 max-w-lg mx-auto">
    Discover how Farmopti  has transformed the way farmers manage their crops, optimize resources, and improve sustainability. Our AI-driven insights are helping agricultural businesses around the world.
  </p>
</div>
      <div className="p-4 overflow-x-hidden relative">
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-900 to-transparent" />

        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
          <TestimonialList list={testimonials.top} duration={125} />
        </div>
        <div className="flex items-center mb-4">
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
          <TestimonialList list={testimonials.middle} duration={75} reverse />
        </div>
        <div className="flex items-center">
          <TestimonialList list={testimonials.bottom} duration={275} />
          <TestimonialList list={testimonials.bottom} duration={275} />
          <TestimonialList list={testimonials.bottom} duration={275} />
        </div>

        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-slate-900 to-transparent" />
      </div>
    </div>
  );
};

const TestimonialList = ({
  list,
  reverse = false,
  duration = 50,
}: {
  list: typeof testimonials.top;
  reverse?: boolean;
  duration?: number;
}) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {list.map((t) => {
        return (
          <div
            key={t.id}
            className="shrink-0 w-[500px] grid grid-cols-[7rem,_1fr] rounded-lg overflow-hidden relative"
          >
            <img src={t.img} className="w-full h-44 object-cover" />
            <div className="bg-green-100 text-black p-4">
              <span className="block font-semibold text-lg mb-1">{t.name}</span>
              <span className="block mb-3 text-sm font-medium">{t.title}</span>
              <span className="block text-sm text-black">{t.info}</span>
            </div>
            <span className="text-7xl absolute top-2 right-2 text-black">
              "
            </span>
          </div>
        );
      })}
    </motion.div>
  );
};

const testimonials = {
  top: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=703&q=80",
      name: "Jessica Brown",
      title: "CEO at FarmSynergy",
      info: "Using this platform has completely revolutionized how we manage our crop cycles. The AI insights saved us time and increased our yield by 30% this season!",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
      name: "Paul Anderson",
      title: "Co-Founder of GreenFields",
      info: "The soil health monitoring features helped us pinpoint nutrient deficiencies before they became major issues. It's a game-changer for precision farming.",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1670588776139-da93b47afc6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Cynthia James",
      title: "Founder of AgriTech Innovators",
      info: "The crop yield predictions have been incredibly accurate, helping us make better planting decisions. We're thrilled with the results!",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      name: "Danielle Wilson",
      title: "Managing Partner at SmartFarm Solutions",
      info: "The platform's AI-driven recommendations helped us save water and reduce waste by 25%. It’s incredibly efficient and easy to use!",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Peter Harrison",
      title: "Head of Operations at FutureFarms",
      info: "Since we started using the platform, our planting schedules have been optimized to perfection. The insights provided are invaluable!",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Lauren Bailey",
      title: "CEO at HarvestFuture",
      info: "Thanks to the AI tools, we’ve cut down fertilizer use while boosting overall output. The sustainability benefits have been remarkable!",
    },
  ],
  middle: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Alex Freeman",
      title: "Operations Lead at EcoGrowth",
      info: "The real-time insights have taken our farming to the next level. We’ve increased efficiency while reducing operational costs.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Claudia Olsen",
      title: "Sustainability Manager at PureHarvest",
      info: "The soil health data helps us stay ahead of potential problems, making our farming practices more sustainable.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      name: "Max Quinn",
      title: "Founder of AgriLabs",
      info: "The data-driven insights allow us to adjust planting schedules and make smarter decisions. It's become a crucial tool for our farm.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
      name: "Jeff Richards",
      title: "CFO at AgriFuture",
      info: "Being able to predict yields and adjust resources accordingly has helped us save thousands of dollars in wasted materials.",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      name: "Kevin King",
      title: "Lead Agronomist at BioFarms",
      info: "The platform’s accuracy in predicting weather patterns and soil conditions is truly impressive. It’s become an essential part of our toolkit.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Andrea Bell",
      title: "CEO at CropInnovations",
      info: "The AI tools helped us optimize water usage, reduce fertilizer waste, and improve overall sustainability on our farms.",
    },
  ],
  bottom: [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      name: "Danny Green",
      title: "CEO at PrecisionAg",
      info: "We've drastically improved our efficiency and reduced resource waste by 20%, thanks to this platform's precision farming tools.",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1620932934088-fbdb2920e484?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      name: "Ian Davies",
      title: "Director at GreenLeaf Farms",
      info: "The platform has transformed our farm management. It helps us track every detail from soil health to crop yields with pinpoint accuracy.",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
      name: "Max Q.",
      title: "Head of GreenFarm",
      info: "The AI models used by AgriBot provided the insights we needed to optimize planting schedules and increase efficiency.",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
      name: "Jeff R.",
      title: "CTO of GrowersPlus",
      info: "Their data-driven approach has revolutionized our farming operations. We now make decisions based on real-time data!",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1625504615927-c14f4f309b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80",
      name: "Kevin K.",
      title: "Founder of CropTech",
      info: "AgriBot’s real-time insights reduced our pesticide use, leading to more sustainable farming practices and savings.",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1589729132389-8f0e0b55b91e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      name: "Andrea B.",
      title: "Agronomist at EarthGrow",
      info: "Using AgriBot has been a game-changer in managing soil health and reducing wastage. Highly recommend their platform!",
    },
  ]
}
export default ScrollingTestimonials;