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
