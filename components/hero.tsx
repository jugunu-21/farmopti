import Gradientbutton from "@/lib/ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Optimizing Farming Through AI
        </span>
        <h3 className="text-2xl md:text-4xl font-semibold">
          Revolutionize Crop Yield Prediction and Resource Optimization
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Harnessing AI and machine learning to predict crop yields, optimize planting schedules, and monitor soil health. Real-time insights for farmers to optimize water usage, fertilizers, and planting practices.
        </p>
        {/* <button className="bg-indigo-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-indigo-600 active:scale-95">
          Start Optimizing Today
        </button> */}
        <Gradientbutton text=" Start Optimizing Today" cta="contact" className=""/>
      </div>
      <ShuffleGrid />
    </section>
  );
};


const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/Agriculture-Protest-City-(1).jpg",
  },
  {
    id: 2,
    src: "/Agriculture Protest City.jpg",
  },
  {
    id: 3,
    src: "/Elderly Men Plantation B&W.jpg",
  },
  {
    id: 4,
    src: "/Farmers JakeHeinemann.jpg",
  },
  {
    id: 5,
    src: "/Farmers Photos Erikscheel.jpg",
  },
  {
    id: 6,
    src: "/New Tech Farmers Photo (1).jpg",
  },
  {
    id: 7,
    src: "/New Tech Farmers Photo.jpg",
  },
  {
    id: 8,
    src: "/New Tech Farmers Quang Nguyen Vinh.jpg",
  },
  {
    id: 9,
    src: "/Farmers Field Photo by Cristian Rojas.jpg",
  },
  {
    id: 10,
    src: "/Farmers Field Radwanmenzer.jpg",
  },
  {
    id: 11,
    src: "/Farmers Photos Dodogr8.jpg",
  },
  {
    id: 12,
    src: "/Farmers Photos Kelly.jpg",
  },
  {
    id: 13,
    src: "/Satisfied Farmer Fields (1).jpg",
  },
  {
    id: 14,
    src: "/Money Crops by Michelle Spollen.jpg",
  },
  {
    id: 15,
    src: "/Jean Wimmerlin from Unsplash.jpg",
  },
  {
    id: 16,
    src: "/Satisfied Farmer Fields.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${encodeURIComponent(sq.src)})`,
        backgroundSize: "cover",
      }}
    >
       {/* <img
            
            alt={sq.src}
            className="h-screen w-full object-cover"
            src={sq.src}
          /> */}
    </motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;