"use client";

import MotionWrapper from "@/components/MotionWrapper";

export default function Template({ children }: { children: React.ReactNode }) {
    return <MotionWrapper>{children}</MotionWrapper>;
}
