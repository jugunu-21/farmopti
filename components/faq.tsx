import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

function BasicFAQ() {
  return (
    <div id="faq" className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-center text-2xl md:text-4xl font-semibold">
          Frequently asked questions
        </h3>
        <Question title="What does your platform offer?" defaultOpen>
          <div>
            Our platform uses AI and machine learning models to predict crop
            yields, optimize planting schedules, and monitor soil health. We
            provide real-time insights by processing environmental, soil, and
            satellite data to help farmers optimize water usage, fertilizers,
            and planting practices.
          </div>
        </Question>
        <Question title="How does the AI predict crop yields?">
          <div>
            Our AI models analyze vast datasets, including weather patterns,
            historical yield data, and soil health metrics, to predict crop
            yields with high accuracy. These predictions help farmers plan their
            resources more effectively and make data-driven decisions.
          </div>
        </Question>
        <Question title="How does the platform optimize planting schedules?">
          <div>
            By considering factors like soil conditions, moisture levels,
            weather forecasts, and historical planting data, our platform
            recommends the ideal planting times to maximize yield and reduce
            resource wastage.
          </div>
        </Question>
        <Question title="How does the platform help with soil health monitoring?">
          <div>
            The platform processes soil data in real time, providing insights
            into nutrient levels, moisture content, and overall soil health.
            This helps farmers make informed decisions about irrigation and
            fertilization to maintain soil fertility and sustainability.
          </div>
        </Question>
        <Question title="What are the sustainability benefits?">
          <div>
            Our platform reduces waste by optimizing water and fertilizer usage,
            minimizing the environmental impact of farming operations. By
            improving efficiency, we help farmers contribute to sustainable
            agricultural practices while increasing productivity.
          </div>
        </Question>
      </div>
    </div>
  );
}

const Question = ({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: JSX.Element;
  defaultOpen?: boolean;
}) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
  variants={{
    open: {
      rotate: "180deg",
      color: "rgb(34, 197, 94)", // Green color
    },
    closed: {
      rotate: "0deg",
      color: "#030617", // Original color when closed
    },
  }}
>
  <FiChevronDown className="text-2xl" />
</motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-800"
      >
        <div ref={ref}>{children}</div>
      </motion.div>
    </motion.div>
  );
};

export { BasicFAQ };
