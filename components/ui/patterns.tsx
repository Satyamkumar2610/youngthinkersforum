"use client";

import { motion } from "framer-motion";

export function AipanDivider({ className }: { className?: string }) {
    return (
        <svg
            width="40"
            height="100%"
            viewBox="0 0 40 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            preserveAspectRatio="none opacity-20"
        >
            <path d="M20 0V400" stroke="currentColor" strokeWidth="2" />
            <circle cx="20" cy="20" r="4" fill="currentColor" />
            <circle cx="20" cy="60" r="4" fill="currentColor" />
            <circle cx="20" cy="100" r="4" fill="currentColor" />
            <circle cx="20" cy="140" r="4" fill="currentColor" />
            <circle cx="20" cy="180" r="4" fill="currentColor" />
            <circle cx="20" cy="220" r="4" fill="currentColor" />
            <circle cx="20" cy="260" r="4" fill="currentColor" />
            <circle cx="20" cy="300" r="4" fill="currentColor" />
            <circle cx="20" cy="340" r="4" fill="currentColor" />
            <circle cx="20" cy="380" r="4" fill="currentColor" />
        </svg>
    );
}

export function WarliBorder({ className }: { className?: string }) {
    return (
        <div className={`w-full overflow-hidden ${className}`}>
            <svg
                width="100%"
                height="40"
                viewBox="0 0 800 40"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-30"
            >
                {/* Repeating Triangles representing humans */}
                <pattern id="warliPattern" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
                    <path d="M20 10 L30 25 L10 25 Z" fill="currentColor" /> {/* Top Triangle */}
                    <path d="M20 30 L30 15 L10 15 Z" fill="currentColor" /> {/* Bottom Triangle - Hourglass shape */}
                    <circle cx="20" cy="8" r="3" fill="currentColor" /> {/* Head */}

                    <path d="M60 10 L70 25 L50 25 Z" fill="currentColor" />
                    <path d="M60 30 L70 15 L50 15 Z" fill="currentColor" />
                    <circle cx="60" cy="8" r="3" fill="currentColor" />

                    <circle cx="40" cy="20" r="2" fill="currentColor" />
                    <circle cx="80" cy="20" r="2" fill="currentColor" />
                    <path d="M0 20 H80" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
                <rect x="0" y="0" width="100%" height="40" fill="url(#warliPattern)" />
            </svg>
        </div>
    );
}

export function MandalaBackground({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle cx="250" cy="250" r="200" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
            <circle cx="250" cy="250" r="150" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
            <circle cx="250" cy="250" r="100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
            <path d="M250 50 L250 450" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
            <path d="M50 250 L450 250" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
            <path d="M108 108 L392 392" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
            <path d="M392 108 L108 392" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" />
            {/* Decorative Petals */}
            <path d="M250 100 Q300 150 250 200 Q200 150 250 100" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
            <path d="M250 400 Q300 350 250 300 Q200 350 250 400" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
            <path d="M100 250 Q150 200 200 250 Q150 300 100 250" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
            <path d="M400 250 Q350 200 300 250 Q350 300 400 250" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" />
        </svg>
    );
}

export function BlockPrintIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M12 2L14.5 9H9.5L12 2Z"
                fill="currentColor"
            />
            <circle cx="12" cy="15" r="3" fill="currentColor" />
            <path d="M12 22V18" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9 15H5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M19 15H15" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="5" cy="15" r="1" fill="currentColor" />
            <circle cx="19" cy="15" r="1" fill="currentColor" />
        </svg>
    );
}

// New: Animated Diya Component
export function AnimatedDiya({ className, size = 40 }: { className?: string; size?: number }) {
    return (
        <motion.svg
            width={size}
            height={size * 1.2}
            viewBox="0 0 40 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Base */}
            <ellipse cx="20" cy="40" rx="16" ry="6" fill="#D4AF37" />
            <ellipse cx="20" cy="38" rx="12" ry="4" fill="#C9A030" />

            {/* Oil */}
            <ellipse cx="20" cy="36" rx="10" ry="3" fill="#8B4513" />

            {/* Wick */}
            <rect x="19" y="28" width="2" height="8" fill="#333" />

            {/* Flame container */}
            <motion.g
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [1, 0.9, 1],
                }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* Outer flame */}
                <motion.path
                    d="M20 8C20 8 12 16 12 22C12 26.4183 15.5817 30 20 30C24.4183 30 28 26.4183 28 22C28 16 20 8 20 8Z"
                    fill="url(#flameGradient)"
                    animate={{
                        d: [
                            "M20 8C20 8 12 16 12 22C12 26.4183 15.5817 30 20 30C24.4183 30 28 26.4183 28 22C28 16 20 8 20 8Z",
                            "M20 6C20 6 11 15 11 22C11 27.5228 15.4772 32 21 31C25.5228 31 29 26.5228 29 21C29 15 20 6 20 6Z",
                            "M20 8C20 8 12 16 12 22C12 26.4183 15.5817 30 20 30C24.4183 30 28 26.4183 28 22C28 16 20 8 20 8Z",
                        ],
                    }}
                    transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                {/* Inner flame */}
                <circle cx="20" cy="22" r="4" fill="#FFF8DC">
                    <animate
                        attributeName="r"
                        values="3;4;3"
                        dur="0.4s"
                        repeatCount="indefinite"
                    />
                </circle>
            </motion.g>

            {/* Glow effect */}
            <motion.circle
                cx="20"
                cy="20"
                r="12"
                fill="url(#glowGradient)"
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    r: [10, 14, 10],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <defs>
                <radialGradient id="flameGradient" cx="50%" cy="80%" r="60%">
                    <stop offset="0%" stopColor="#FFF8DC" />
                    <stop offset="40%" stopColor="#FFD700" />
                    <stop offset="70%" stopColor="#FF8C00" />
                    <stop offset="100%" stopColor="#B22222" />
                </radialGradient>
                <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFD700" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#FFD700" stopOpacity="0" />
                </radialGradient>
            </defs>
        </motion.svg>
    );
}

// New: Lotus Pattern
export function LotusPattern({ className, size = 60 }: { className?: string; size?: number }) {
    return (
        <svg
            width={size}
            height={size * 0.6}
            viewBox="0 0 100 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Center petal */}
            <path
                d="M50 5 Q60 25 50 45 Q40 25 50 5"
                fill="currentColor"
                fillOpacity="0.3"
            />
            {/* Left petals */}
            <path
                d="M35 15 Q45 30 35 50 Q25 30 35 15"
                fill="currentColor"
                fillOpacity="0.2"
                transform="rotate(-15 35 32)"
            />
            <path
                d="M20 25 Q30 38 20 55 Q10 38 20 25"
                fill="currentColor"
                fillOpacity="0.15"
                transform="rotate(-25 20 40)"
            />
            {/* Right petals */}
            <path
                d="M65 15 Q75 30 65 50 Q55 30 65 15"
                fill="currentColor"
                fillOpacity="0.2"
                transform="rotate(15 65 32)"
            />
            <path
                d="M80 25 Q90 38 80 55 Q70 38 80 25"
                fill="currentColor"
                fillOpacity="0.15"
                transform="rotate(25 80 40)"
            />
            {/* Center circle */}
            <circle cx="50" cy="35" r="5" fill="currentColor" fillOpacity="0.4" />
        </svg>
    );
}

// New: Rangoli Corner Decoration
export function RangoliCorner({ className, size = 80 }: { className?: string; size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Dots pattern */}
            <circle cx="10" cy="10" r="3" fill="currentColor" fillOpacity="0.3" />
            <circle cx="25" cy="10" r="2" fill="currentColor" fillOpacity="0.2" />
            <circle cx="40" cy="10" r="3" fill="currentColor" fillOpacity="0.3" />
            <circle cx="10" cy="25" r="2" fill="currentColor" fillOpacity="0.2" />
            <circle cx="10" cy="40" r="3" fill="currentColor" fillOpacity="0.3" />

            {/* Curved lines */}
            <path
                d="M5 5 Q40 5 40 40"
                stroke="currentColor"
                strokeWidth="1"
                strokeOpacity="0.2"
                fill="none"
            />
            <path
                d="M15 5 Q50 5 50 50"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeOpacity="0.15"
                fill="none"
            />

            {/* Decorative element */}
            <path
                d="M20 20 L25 15 L30 20 L25 25 Z"
                fill="currentColor"
                fillOpacity="0.25"
            />
        </svg>
    );
}

// New: Chakra Spinner
export function ChakraSpinner({ className, size = 50 }: { className?: string; size?: number }) {
    return (
        <motion.svg
            width={size}
            height={size}
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
            {/* Outer ring */}
            <circle cx="25" cy="25" r="22" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />

            {/* Spokes */}
            {Array.from({ length: 24 }).map((_, i) => (
                <line
                    key={i}
                    x1="25"
                    y1="5"
                    x2="25"
                    y2="10"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeOpacity="0.4"
                    transform={`rotate(${i * 15} 25 25)`}
                />
            ))}

            {/* Inner circle */}
            <circle cx="25" cy="25" r="8" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />

            {/* Center dot */}
            <circle cx="25" cy="25" r="3" fill="currentColor" fillOpacity="0.4" />
        </motion.svg>
    );
}

// New: Wave Divider
export function WaveDivider({
    className,
    color = "#B22222",
    flip = false,
}: {
    className?: string;
    color?: string;
    flip?: boolean;
}) {
    return (
        <div className={`w-full overflow-hidden leading-none ${flip ? 'rotate-180' : ''} ${className}`}>
            <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="w-full h-full"
                fill={color}
            >
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
            </svg>
        </div>
    );
}

// New: Scroll Indicator
export function ScrollIndicator({ className }: { className?: string }) {
    return (
        <motion.div
            className={`flex flex-col items-center ${className}`}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
            <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
                <motion.div
                    className="w-1.5 h-3 bg-current rounded-full"
                    animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
            <span className="text-xs mt-2 tracking-widest uppercase opacity-60">Scroll</span>
        </motion.div>
    );
}
