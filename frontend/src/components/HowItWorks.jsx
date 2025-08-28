import React from "react";
// Import optimized, compressed images here
import DataVisualImg from "../assets/data-visual.jpg";
import RecycleBins from "../assets/recycle-bins.webp";
import Capture from "../assets/capture.jpg";
import Recycling from "../assets/recyling.jpeg";
import { Camera, BarChart3, List, MapPin } from "lucide-react";
import { motion } from "framer-motion";

// Abstract step component for better reusability and performance
const HowItWorksStep = ({ step }) => {
  // Animation variants can be defined once and passed down
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2, // Stagger children for smooth entry
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const IconComponent = step.icon;

  return (
    <motion.div
      className={`flex flex-col lg:flex-row items-center gap-12 ${
        step.reverse ? "lg:flex-row-reverse" : ""
      }`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Image Section */}
      <motion.div className="flex-1 w-full" variants={imageVariants}>
        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-white">
          <img
            src={step.image}
            alt={step.imageAlt}
            className="w-full h-64 md:h-80 object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="flex-1 w-full">
        <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
          <div className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full font-bold text-lg">
            {step.number}
          </div>
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full">
            <IconComponent size={24} />
          </div>
        </motion.div>

        <motion.h3
          className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
          variants={itemVariants}
        >
          Step {step.number}: {step.title}
        </motion.h3>

        <motion.p
          className="text-lg text-gray-600 leading-relaxed"
          variants={itemVariants}
        >
          {step.description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Capture",
      icon: Camera,
      description: "Take a photo of your waste item using your phone camera or upload an existing image. Make sure the item is clearly visible and well-lit for best results.",
      image: Capture,
      imageAlt: "Person taking photo of waste item with smartphone",
      reverse: false,
    },
    {
      number: 2,
      title: "Analyze",
      icon: BarChart3,
      description: "Our advanced AI analyzes your photo to identify the type of waste. It can recognize dozens of different materials and waste categories with high accuracy.",
      image: DataVisualImg,
      imageAlt: "AI analytics dashboard showing waste classification",
      reverse: true,
    },
    {
      number: 3,
      title: "Get Recommendations",
      icon: List,
      description: "Receive detailed recommendations on how to properly dispose of your item. Learn whether it should be recycled, composted, reused, or sent to landfill.",
      image: RecycleBins,
      imageAlt: "Colorful recycling bins in yellow, blue, red and green",
      reverse: false,
    },
    {
      number: 4,
      title: "Find Recycling Centers",
      icon: MapPin,
      description: "Locate nearby recycling facilities or drop-off points for your specific waste type. Get directions and information about operating hours.",
      image: Recycling,
      imageAlt: "Recycling facility with sorting equipment",
      reverse: true,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            How It Works
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform your environmental impact with our simple 4-step process
          </motion.p>
        </div>

        <div className="space-y-24">
          {steps.map((step) => (
            <HowItWorksStep key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;