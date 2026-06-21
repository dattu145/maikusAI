import { useRef } from 'react';
import type { ReactNode, MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
    children: ReactNode;
    className?: string;
}

const TiltCard = ({ children, className = "" }: TiltCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0.5);
    const y = useMotionValue(0.5);

    const springConfig = { stiffness: 150, damping: 18, mass: 0.5 };
    const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), springConfig);
    const glowX = useTransform(x, [0, 1], ['0%', '100%']);
    const glowY = useTransform(y, [0, 1], ['0%', '100%']);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width);
        y.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        x.set(0.5);
        y.set(0.5);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: '1000px' }}
            className={`relative ${className}`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:opacity-100"
                style={{
                    background: `radial-gradient(circle at ${glowX.get()}% ${glowY.get()}%, rgba(0,240,255,0.15), transparent 60%)`,
                }}
            />
            {children}
        </motion.div>
    );
};

export default TiltCard;
