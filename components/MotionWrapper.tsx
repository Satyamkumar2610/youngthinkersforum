"use client";

import { motion } from "framer-motion";

export interface MotionWrapperProps {
    /** The child elements to animate smoothly */
    children: React.ReactNode;
    /** Optional Tailwind classes for styling */
    className?: string;
}

/**
 * A wrapper component that applies a fade-in and slide-up animation.
 */
export default function MotionWrapper({
    children,
    className,
}: MotionWrapperProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
