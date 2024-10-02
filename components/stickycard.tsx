import { MotionValue, useScroll, motion, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { IconType } from "react-icons";
import {
  FiArrowRight,
  FiAward,
  FiCalendar,
  FiCopy,
  FiDatabase,
} from "react-icons/fi";

export const StickyCards = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <>
      <div ref={ref} className="relative">
        {CARDS.map((c, idx) => (
          <Card
            key={c.id}
            card={c}
            scrollYProgress={scrollYProgress}
            position={idx + 1}
          />
        ))}
      </div>
      {/* <div className="h-screen " /> */}
    </>
  );
};

interface CardProps {
  position: number;
  card: CardType;
  scrollYProgress: MotionValue;
}

const Card = ({ position, card, scrollYProgress }: CardProps) => {
  const scaleFromPct = (position - 1) / CARDS.length;
  const y = useTransform(scrollYProgress, [scaleFromPct, 1], [0, -CARD_HEIGHT]);

  const isOddCard = position % 2;

  return (
    <motion.div
      style={{
        height: CARD_HEIGHT,
        y: position === CARDS.length ? undefined : y,
        background: isOddCard ? "lightgreen" : "white",
        color: isOddCard ? "black" : "black",
      }}
      className="sticky top-0 flex w-full  origin-top flex-col items-center justify-center px-4"
    >
      <card.Icon className="mb-4 text-4xl" />
      <h3 className="mb-6 text-center text-4xl font-semibold md:text-6xl">
        {card.title}
      </h3>
      <p className="mb-8 max-w-lg text-center text-sm md:text-base">
        {card.description}
      </p>
      <a
        href={card.routeTo}
        className={`flex items-center gap-2 rounded px-6 py-4 text-base font-medium uppercase text-black transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 md:text-lg ${
          card.ctaClasses
        } ${
          isOddCard
            ? "shadow-[4px_4px_0px_white] hover:shadow-[8px_8px_0px_white]"
            : "shadow-[4px_4px_0px_black] hover:shadow-[8px_8px_0px_black]"
        }`}
      >
        <span>Learn more</span>
        <FiArrowRight />
      </a>
    </motion.div>
  );
};

const CARD_HEIGHT = 500;

type CardType = {
  id: number;
  Icon: IconType;
  title: string;
  description: string;
  ctaClasses: string;
  routeTo: string;
};

const CARDS: CardType[] = [
  {
    id: 1,
    Icon: FiCalendar,
    title: "AI-Driven Planting Schedules",
    description:
      "Our platform optimizes your planting schedules based on real-time data to help you achieve the best crop yields.",
    ctaClasses: "bg-green-300",
    routeTo: "#",
  },
  {
    id: 2,
    Icon: FiDatabase,
    title: "Data Privacy & Security",
    description:
      "We prioritize your data security. All your environmental, soil, and yield data are protected with advanced encryption.",
    ctaClasses: "bg-blue-300",
    routeTo: "#",
  },
  {
    id: 3,
    Icon: FiCopy,
    title: "Seamless Integration",
    description:
      "Use our platform with your existing tools to easily integrate your data and streamline your operations.",
    ctaClasses: "bg-purple-300",
    routeTo: "#",
  },
  {
    id: 4,
    Icon: FiAward,
    title: "Trusted by Farmers",
    description:
      "Farmers around the world trust our AI solutions to increase efficiency, reduce waste, and improve sustainability.",
    ctaClasses: "bg-yellow-300",
    routeTo: "#",
  },
];
