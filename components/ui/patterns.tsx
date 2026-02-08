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

// ============================================
// INDIAN MONUMENT PATTERNS
// ============================================

// Taj Mahal Silhouette - Iconic dome and minarets
export function TajMahalSilhouette({ className, size = 200 }: { className?: string; size?: number }) {
    return (
        <svg
            width={size}
            height={size * 0.8}
            viewBox="0 0 200 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Left minaret */}
            <path d="M25 160 L25 60 L30 55 L30 50 Q27.5 40 25 50 L25 55 L20 60 L20 160 Z" fill="currentColor" fillOpacity="0.3" />
            <circle cx="25" cy="38" r="5" fill="currentColor" fillOpacity="0.4" />

            {/* Right minaret */}
            <path d="M175 160 L175 60 L180 55 L180 50 Q177.5 40 175 50 L175 55 L170 60 L170 160 Z" fill="currentColor" fillOpacity="0.3" />
            <circle cx="175" cy="38" r="5" fill="currentColor" fillOpacity="0.4" />

            {/* Main dome */}
            <path d="M100 10 Q130 10 140 50 L140 80 L60 80 L60 50 Q70 10 100 10 Z" fill="currentColor" fillOpacity="0.5" />

            {/* Finial on dome */}
            <path d="M100 5 L102 10 L98 10 Z" fill="currentColor" fillOpacity="0.6" />
            <circle cx="100" cy="3" r="2" fill="currentColor" fillOpacity="0.6" />

            {/* Side domes */}
            <ellipse cx="55" cy="70" rx="15" ry="20" fill="currentColor" fillOpacity="0.35" />
            <ellipse cx="145" cy="70" rx="15" ry="20" fill="currentColor" fillOpacity="0.35" />

            {/* Main building base */}
            <rect x="45" y="80" width="110" height="80" fill="currentColor" fillOpacity="0.25" />

            {/* Central archway */}
            <path d="M85 160 L85 110 Q100 95 115 110 L115 160 Z" fill="currentColor" fillOpacity="0.15" />

            {/* Decorative arches */}
            <path d="M55 160 L55 130 Q65 120 75 130 L75 160 Z" fill="currentColor" fillOpacity="0.1" />
            <path d="M125 160 L125 130 Q135 120 145 130 L145 160 Z" fill="currentColor" fillOpacity="0.1" />

            {/* Platform */}
            <rect x="35" y="155" width="130" height="5" fill="currentColor" fillOpacity="0.2" />
        </svg>
    );
}

// Temple Gopuram - South Indian temple tower
export function TempleGopuram({ className, size = 120 }: { className?: string; size?: number }) {
    return (
        <svg
            width={size}
            height={size * 1.2}
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Top finial */}
            <ellipse cx="50" cy="8" rx="6" ry="4" fill="currentColor" fillOpacity="0.5" />
            <rect x="48" y="10" width="4" height="8" fill="currentColor" fillOpacity="0.4" />

            {/* Tier 1 */}
            <path d="M35 20 L50 12 L65 20 L65 30 L35 30 Z" fill="currentColor" fillOpacity="0.4" />

            {/* Tier 2 */}
            <path d="M30 32 L50 25 L70 32 L70 45 L30 45 Z" fill="currentColor" fillOpacity="0.35" />

            {/* Tier 3 */}
            <path d="M25 47 L50 38 L75 47 L75 62 L25 62 Z" fill="currentColor" fillOpacity="0.3" />

            {/* Tier 4 */}
            <path d="M20 64 L50 53 L80 64 L80 82 L20 82 Z" fill="currentColor" fillOpacity="0.25" />

            {/* Base */}
            <rect x="15" y="84" width="70" height="36" fill="currentColor" fillOpacity="0.2" />

            {/* Main entrance arch */}
            <path d="M40 120 L40 95 Q50 88 60 95 L60 120 Z" fill="currentColor" fillOpacity="0.1" />

            {/* Decorative elements on each tier */}
            {[25, 40, 55, 72].map((y, i) => (
                <g key={i}>
                    <circle cx="40" cy={y} r="2" fill="currentColor" fillOpacity="0.3" />
                    <circle cx="50" cy={y} r="2" fill="currentColor" fillOpacity="0.3" />
                    <circle cx="60" cy={y} r="2" fill="currentColor" fillOpacity="0.3" />
                </g>
            ))}
        </svg>
    );
}

// Jharoka Window - Rajasthani arched window frame
export function JharokaWindow({ className, size = 150 }: { className?: string; size?: number }) {
    return (
        <svg
            width={size}
            height={size * 1.1}
            viewBox="0 0 150 165"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Outer frame */}
            <path
                d="M10 165 L10 60 Q10 20 75 10 Q140 20 140 60 L140 165"
                stroke="currentColor"
                strokeWidth="3"
                strokeOpacity="0.4"
                fill="none"
            />

            {/* Inner arch */}
            <path
                d="M25 165 L25 70 Q25 35 75 25 Q125 35 125 70 L125 165"
                stroke="currentColor"
                strokeWidth="2"
                strokeOpacity="0.3"
                fill="none"
            />

            {/* Decorative scalloped edge */}
            <path
                d="M30 65 Q40 55 50 65 Q60 55 75 65 Q90 55 100 65 Q110 55 120 65"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.35"
                fill="none"
            />

            {/* Central medallion */}
            <circle cx="75" cy="50" r="12" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.3" fill="none" />
            <circle cx="75" cy="50" r="6" fill="currentColor" fillOpacity="0.2" />

            {/* Side pillars */}
            <rect x="20" y="80" width="8" height="85" fill="currentColor" fillOpacity="0.15" rx="2" />
            <rect x="122" y="80" width="8" height="85" fill="currentColor" fillOpacity="0.15" rx="2" />

            {/* Pillar capitals */}
            <ellipse cx="24" cy="78" rx="6" ry="4" fill="currentColor" fillOpacity="0.2" />
            <ellipse cx="126" cy="78" rx="6" ry="4" fill="currentColor" fillOpacity="0.2" />

            {/* Jali pattern inside */}
            <g opacity="0.15">
                {[95, 115, 135].map((y) => (
                    <g key={y}>
                        {[45, 65, 85, 105].map((x) => (
                            <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="currentColor" />
                        ))}
                    </g>
                ))}
            </g>
        </svg>
    );
}

// Mehndi/Henna Pattern - Intricate curved design
export function MehndiPattern({ className, size = 100 }: { className?: string; size?: number }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Central flower */}
            <circle cx="50" cy="50" r="8" fill="currentColor" fillOpacity="0.3" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <path
                    key={angle}
                    d={`M50 50 Q${50 + 15 * Math.cos((angle * Math.PI) / 180)} ${50 + 15 * Math.sin((angle * Math.PI) / 180)} ${50 + 25 * Math.cos((angle * Math.PI) / 180)} ${50 + 25 * Math.sin((angle * Math.PI) / 180)}`}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                    fill="none"
                />
            ))}

            {/* Outer petals */}
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                <ellipse
                    key={i}
                    cx={50 + 30 * Math.cos((angle * Math.PI) / 180)}
                    cy={50 + 30 * Math.sin((angle * Math.PI) / 180)}
                    rx="8"
                    ry="12"
                    fill="currentColor"
                    fillOpacity="0.15"
                    transform={`rotate(${angle} ${50 + 30 * Math.cos((angle * Math.PI) / 180)} ${50 + 30 * Math.sin((angle * Math.PI) / 180)})`}
                />
            ))}

            {/* Swirl decorations */}
            <path d="M20 20 Q35 20 30 35" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="none" />
            <path d="M80 20 Q65 20 70 35" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="none" />
            <path d="M20 80 Q35 80 30 65" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="none" />
            <path d="M80 80 Q65 80 70 65" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="none" />

            {/* Dots pattern */}
            {[15, 85].map((x) => (
                [30, 50, 70].map((y) => (
                    <circle key={`${x}-${y}`} cx={x} cy={y} r="2" fill="currentColor" fillOpacity="0.2" />
                ))
            ))}
        </svg>
    );
}

// Madhubani Motif - Traditional Bihar folk art style
export function MadhubaniMotif({ className, type = "peacock", size = 80 }: { className?: string; type?: "peacock" | "fish" | "lotus"; size?: number }) {
    if (type === "peacock") {
        return (
            <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                {/* Body */}
                <ellipse cx="40" cy="55" rx="12" ry="18" fill="currentColor" fillOpacity="0.3" />
                {/* Neck */}
                <path d="M40 40 Q35 30 40 20" stroke="currentColor" strokeWidth="3" strokeOpacity="0.4" fill="none" />
                {/* Head */}
                <circle cx="40" cy="18" r="6" fill="currentColor" fillOpacity="0.35" />
                {/* Crest */}
                <path d="M40 12 L38 5 M40 12 L40 4 M40 12 L42 5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.4" />
                {/* Tail feathers */}
                {[-30, -15, 0, 15, 30].map((angle, i) => (
                    <g key={i} transform={`rotate(${angle} 40 55)`}>
                        <ellipse cx="40" cy="25" rx="4" ry="15" fill="currentColor" fillOpacity="0.2" />
                        <circle cx="40" cy="15" r="3" fill="currentColor" fillOpacity="0.3" />
                    </g>
                ))}
                {/* Eye */}
                <circle cx="42" cy="17" r="1.5" fill="currentColor" fillOpacity="0.5" />
            </svg>
        );
    }

    if (type === "fish") {
        return (
            <svg width={size} height={size * 0.5} viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
                {/* Body */}
                <ellipse cx="40" cy="20" rx="25" ry="12" fill="currentColor" fillOpacity="0.25" />
                {/* Tail */}
                <path d="M65 20 L80 8 L80 32 Z" fill="currentColor" fillOpacity="0.3" />
                {/* Fins */}
                <path d="M35 8 Q40 0 45 8" fill="currentColor" fillOpacity="0.2" />
                <path d="M35 32 Q40 40 45 32" fill="currentColor" fillOpacity="0.2" />
                {/* Scales pattern */}
                {[25, 35, 45, 55].map((x) => (
                    <path key={x} d={`M${x} 15 Q${x + 5} 20 ${x} 25`} stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" fill="none" />
                ))}
                {/* Eye */}
                <circle cx="22" cy="18" r="4" fill="currentColor" fillOpacity="0.4" />
                <circle cx="23" cy="17" r="1.5" fill="currentColor" fillOpacity="0.6" />
            </svg>
        );
    }

    // Lotus
    return (
        <svg width={size} height={size * 0.6} viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* Center petal */}
            <path d="M40 5 Q50 20 40 40 Q30 20 40 5" fill="currentColor" fillOpacity="0.35" />
            {/* Side petals */}
            <path d="M25 15 Q35 25 25 42 Q15 25 25 15" fill="currentColor" fillOpacity="0.25" transform="rotate(-20 25 28)" />
            <path d="M55 15 Q65 25 55 42 Q45 25 55 15" fill="currentColor" fillOpacity="0.25" transform="rotate(20 55 28)" />
            {/* Outer petals */}
            <path d="M12 25 Q22 32 12 45 Q5 32 12 25" fill="currentColor" fillOpacity="0.15" transform="rotate(-35 12 35)" />
            <path d="M68 25 Q78 32 68 45 Q60 32 68 25" fill="currentColor" fillOpacity="0.15" transform="rotate(35 68 35)" />
            {/* Center */}
            <circle cx="40" cy="30" r="5" fill="currentColor" fillOpacity="0.4" />
            {/* Decorative dots */}
            <circle cx="40" cy="15" r="1.5" fill="currentColor" fillOpacity="0.3" />
            <circle cx="28" cy="25" r="1" fill="currentColor" fillOpacity="0.25" />
            <circle cx="52" cy="25" r="1" fill="currentColor" fillOpacity="0.25" />
        </svg>
    );
}

// Paisley/Buta Pattern - Traditional teardrop shape
export function PaisleyButa({ className, size = 60 }: { className?: string; size?: number }) {
    return (
        <motion.svg
            width={size}
            height={size * 1.4}
            viewBox="0 0 60 84"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
            {/* Main paisley shape */}
            <path
                d="M30 5 Q55 15 50 45 Q45 70 30 80 Q15 70 10 45 Q5 15 30 5"
                fill="currentColor"
                fillOpacity="0.2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.35"
            />

            {/* Inner paisley */}
            <path
                d="M30 15 Q45 22 42 42 Q38 58 30 65 Q22 58 18 42 Q15 22 30 15"
                fill="currentColor"
                fillOpacity="0.15"
            />

            {/* Curl at top */}
            <path
                d="M30 8 Q38 12 35 20 Q32 28 25 25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.3"
                fill="none"
            />

            {/* Inner decorative elements */}
            <circle cx="30" cy="35" r="6" fill="currentColor" fillOpacity="0.25" />
            <circle cx="30" cy="35" r="3" fill="currentColor" fillOpacity="0.35" />

            {/* Dots along the curve */}
            {[20, 30, 40, 50, 60].map((y) => (
                <circle key={y} cx="30" cy={y} r="1.5" fill="currentColor" fillOpacity="0.3" />
            ))}

            {/* Side decorations */}
            <circle cx="22" cy="45" r="2" fill="currentColor" fillOpacity="0.2" />
            <circle cx="38" cy="45" r="2" fill="currentColor" fillOpacity="0.2" />
        </motion.svg>
    );
}

// Indian Arch Border - Decorative section divider
export function IndianArchBorder({ className }: { className?: string }) {
    return (
        <div className={`w-full overflow-hidden ${className}`}>
            <svg
                width="100%"
                height="50"
                viewBox="0 0 800 50"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <pattern id="archPattern" x="0" y="0" width="100" height="50" patternUnits="userSpaceOnUse">
                    {/* Scalloped arch */}
                    <path
                        d="M0 50 L0 25 Q25 0 50 25 Q75 0 100 25 L100 50"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeOpacity="0.3"
                        fill="none"
                    />
                    {/* Decorative dots */}
                    <circle cx="25" cy="15" r="2" fill="currentColor" fillOpacity="0.2" />
                    <circle cx="50" cy="25" r="3" fill="currentColor" fillOpacity="0.25" />
                    <circle cx="75" cy="15" r="2" fill="currentColor" fillOpacity="0.2" />
                </pattern>
                <rect x="0" y="0" width="100%" height="50" fill="url(#archPattern)" />
            </svg>
        </div>
    );
}

// Monument Skyline - Collection of monuments for backgrounds
export function MonumentSkyline({ className }: { className?: string }) {
    return (
        <motion.svg
            width="100%"
            height="200"
            viewBox="0 0 1200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            preserveAspectRatio="xMidYMax slice"
        >
            {/* India Gate style arch */}
            <g transform="translate(100, 40)">
                <rect x="0" y="60" width="15" height="100" fill="currentColor" fillOpacity="0.2" />
                <rect x="85" y="60" width="15" height="100" fill="currentColor" fillOpacity="0.2" />
                <path d="M0 60 L0 30 L50 10 L100 30 L100 60 L70 60 L70 40 Q50 25 30 40 L30 60 Z" fill="currentColor" fillOpacity="0.25" />
            </g>

            {/* Temple silhouette */}
            <g transform="translate(350, 50)">
                <path d="M40 150 L40 80 L50 70 L60 80 L60 150 Z" fill="currentColor" fillOpacity="0.15" />
                <path d="M30 150 L30 100 L50 60 L70 100 L70 150 Z" fill="currentColor" fillOpacity="0.2" />
                <circle cx="50" cy="55" r="8" fill="currentColor" fillOpacity="0.25" />
            </g>

            {/* Qutub Minar style tower */}
            <g transform="translate(550, 20)">
                <path d="M30 180 L25 180 L28 0 L32 0 L35 180 Z" fill="currentColor" fillOpacity="0.2" />
                {[30, 60, 90, 120, 150].map((y) => (
                    <ellipse key={y} cx="30" cy={y} rx="8" ry="3" fill="currentColor" fillOpacity="0.15" />
                ))}
            </g>

            {/* Taj style dome */}
            <g transform="translate(700, 60)">
                <path d="M50 140 L50 70 L20 70 L20 140 Z" fill="currentColor" fillOpacity="0.15" />
                <path d="M70 140 L70 70 L100 70 L100 140 Z" fill="currentColor" fillOpacity="0.15" />
                <ellipse cx="60" cy="50" rx="30" ry="25" fill="currentColor" fillOpacity="0.2" />
                <circle cx="60" cy="25" r="5" fill="currentColor" fillOpacity="0.25" />
            </g>

            {/* Hawa Mahal style facade */}
            <g transform="translate(900, 30)">
                {[0, 25, 50, 75].map((x) => (
                    <g key={x}>
                        {[0, 35, 70, 105].map((y) => (
                            <path
                                key={`${x}-${y}`}
                                d={`M${x + 5} ${y + 35} L${x + 5} ${y + 15} Q${x + 12} ${y + 5} ${x + 20} ${y + 15} L${x + 20} ${y + 35} Z`}
                                fill="currentColor"
                                fillOpacity="0.15"
                            />
                        ))}
                    </g>
                ))}
            </g>

            {/* Ground line */}
            <rect x="0" y="195" width="1200" height="5" fill="currentColor" fillOpacity="0.1" />
        </motion.svg>
    );
}
