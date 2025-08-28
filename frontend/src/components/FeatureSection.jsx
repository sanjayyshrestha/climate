import React, { useRef, useEffect, useState } from 'react';
import { FeatureCard } from "./FeatureCard";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export const FeaturesSection = () => {
    const navigate = useNavigate();
    const carouselRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);

    const features = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25C7.5 13.5 17 8 17 8Z" />
                </svg>
            ),
            title: "Reduce Your Impact",
            description: "Proper waste sorting can reduce your environmental footprint by up to 25%.",
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                </svg>
            ),
            title: "Smart Detection",
            description: "Our AI can identify dozens of waste types and provide specific disposal instructions.",
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" />
                    <path d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z" />
                </svg>
            ),
            title: "Track Progress",
            description: "Earn badges and see your positive environmental impact grow over time.",
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
            ),
            title: "Community Challenges",
            description: "Join local recycling challenges and compete with others to make a difference.",
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-6 0c1.66 0 2.99-1.34 2.99-3S11.66 5 10 5C8.34 5 7 6.34 7 8s1.34 3 3 3zm8.59 1.41C16.78 12.87 14.86 13 13 13c-1.86 0-3.78-.13-5.59-.59C5.12 11.95 3 13.56 3 16v3h18v-3c0-2.44-2.12-4.05-4.41-4.59z" />
                </svg>
            ),
            title: "Educational Resources",
            description: "Access a library of articles and guides on sustainable living and recycling best practices.",
        },
    ];

    useEffect(() => {
        if (carouselRef.current) {
            // Calculate the total width of all cards plus the gap
            const totalWidth = carouselRef.current.scrollWidth;
            setContainerWidth(totalWidth);
        }
    }, []);

    // Animation configuration
    const carouselVariants = {
        animate: {
            x: -containerWidth,
            transition: {
                x: {
                    duration: 80, // Increased from 40 to make it slower
                    ease: "linear",
                    repeat: Infinity,
                },
            },
        },
    };

    return (
        <section className="px-6 py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Use EcoPulse?</h2>

                {/* The main scrollable/draggable container */}
                <div className="relative overflow-hidden">
                    <motion.div
                        className="flex gap-8"
                        ref={carouselRef}
                        variants={carouselVariants}
                        animate="animate"
                        whileHover={{
                            // Slow down the animation on hover instead of stopping it
                            x: -containerWidth,
                            transition: {
                                x: {
                                    duration: 160, // 2x slower than normal speed
                                    ease: "linear",
                                    repeat: Infinity,
                                },
                            },
                        }}
                    >
                        {/* We need to duplicate the cards to create a seamless infinite loop */}
                        {[...features, ...features, ...features].map((feature, index) => (
                            <div
                                key={index}
                                className="min-w-[80%] md:min-w-0 md:w-1/3 flex-shrink-0"
                            >
                                <FeatureCard
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="text-center mt-12">
                    <p
                        onClick={() => { navigate('/howitworks'); window.scrollTo(0, 0) }}
                        className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium transition-colors cursor-pointer"
                    >
                        Learn how it works
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                            <path d="M5 12h14" />
                            <path d="M12 5l7 7-7 7" />
                        </svg>
                    </p>
                </div>
            </div>
        </section>
    );
};