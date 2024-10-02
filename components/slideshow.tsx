import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { useRef } from "react";
const OppoScroll = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      {/* <div className="bg-amber-100 text-black p-4 grid place-items-center">
        <FiArrowDown className="text-xl" />
      </div> */}
      <section id="features"ref={targetRef} className="flex bg-black text-white my-4">
        <Content content={items} />
        <Images content={items} scrollYProgress={scrollYProgress} />
      </section>
      {/* <div className="bg-amber-100 text-black p-4 grid place-items-center">
        <FiArrowUp className="text-xl" />
      </div> */}
    </>
  );
};

const Content = ({ content }: { content: typeof items }) => {
  return (
    <div className="w-full">
      {content.map(({ id, title, description }, idx) => (
        <div
          key={id}
          className={`p-8 h-screen flex flex-col space-y-4 ${
            idx % 2 ? "bg-green-100 text-black" : "bg-gray-300 text-black"
          }`}
        >
          <h3 className="text-xl md:text-3xl font-medium">{title}</h3>
          <p className="font-light text:lg md:text-xl w-full max-w-md ">{description}</p>
        </div>
      ))}
    </div>
  );
};

const Images = ({
  content,
  scrollYProgress,
}: {
  content: typeof items;
  scrollYProgress: MotionValue<number>;
}) => {
    const top = useTransform(
        scrollYProgress,
        [0, 1],
        [-((content.length - 1) * 100) + 'vh', '0vh']
      );

  return (
    <div className="h-screen overflow-hidden sticky top-0 w-full">
      <motion.div style={{ top }} className="absolute left-0 right-0">
        {[...content].reverse().map(({ img, id, title }) => (
          <img
            key={id}
            alt={title}
            className="h-screen w-full object-cover"
            src={img}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OppoScroll;

const items = [
  {
    id: 1,
    title: "Predictive Analytics for Maximizing Crop Yields",
    description:
      "Our platform harnesses the power of artificial intelligence and machine learning to provide accurate crop yield predictions. By analyzing environmental data, soil conditions, and satellite imagery, we help farmers forecast yields before planting begins. This allows for better financial planning, more efficient resource allocation, and reduced risk of over or under-production",
    img: "/Green black frog.jpg",
    
    Description:"Our platform harnesses the power of artificial intelligence and machine learning to provide accurate crop yield predictions. By analyzing environmental data, soil conditions, and satellite imagery, we help farmers forecast yields before planting begins. This allows for better financial planning, more efficient resource allocation, and reduced risk of over or under-"
  },

  {
    id: 2,
    title: "Smart Scheduling for Optimal Growth",
    description:
      " Our platform provides farmers with optimized planting schedules based on historical crop data, current weather patterns, and soil health metrics. This ensures crops are planted at the most ideal times to maximize growth and yield while reducing waste of seeds, water, and other inputs",
    img: "/Smart Scheduling Optimal Growth.jpg",
  },
  {
    id: 3,
    title: "Continuous Soil Condition Tracking",
    description:
      "Using a combination of IoT sensors and satellite data, we offer continuous soil health monitoring. Farmers can track key metrics such as moisture levels, nutrient content, and temperature in real-time. Alerts are sent when conditions deviate from optimal ranges, allowing timely interventions to preserve crop health.",
    img: "/Soil Condition Tracking.jpg",
  },
 
  
  {
    id: 4,
    title: "Efficient Water and Fertilizer Use",
    description:
      "We help farmers manage their water and fertilizer usage efficiently through AI-driven recommendations. By monitoring real-time usage and crop needs, our platform helps avoid over-watering and over-fertilization, saving resources and costs while promoting sustainable agricultural practices",
    img: "Efficient Water Fertilizer.jpg",
  },
  
  {
    id: 5,
    title: "Real-Time Pest and Disease Detection",
    description:
      "Our platform employs AI to analyze crop images and sensor data to detect early signs of pests and diseases. Farmers receive instant alerts and recommendations for treatment, helping to minimize crop damage and avoid costly losses.",
    img: "/Beetle on Leaf.jpg",
  },
  
  {
    id: 6,
    title: "Climate Adaptation Solutions",
    description:
      "We provide farmers with climate-adaptive farming solutions by predicting weather extremes and suggesting changes in planting techniques or crop types. This minimizes the risk of crop failure due to climate fluctuations.",
    img: "/Terrace Plantation Palm Trees.jpg",
  }
];