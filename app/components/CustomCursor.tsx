'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isHoveringTitle, setIsHoveringTitle] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateCursor = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        // Check for hoverable elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Check if hovering over hero title
            if (target.classList.contains('hero-title') || target.closest('.hero-title')) {
                setIsHoveringTitle(true);
                setIsHovering(false);
                document.body.classList.add('cursor-over-title');
            } else if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-hover')
            ) {
                setIsHovering(true);
                setIsHoveringTitle(false);
                document.body.classList.remove('cursor-over-title');
            } else {
                setIsHovering(false);
                setIsHoveringTitle(false);
                document.body.classList.remove('cursor-over-title');
            }
        };

        window.addEventListener('mousemove', updateCursor);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <div
            className="fixed pointer-events-none z-[9999] transition-all duration-300 ease-out"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)',
            }}
        >
            <div
                className={`rounded-full border-2 transition-all duration-300 opacity-70 ${isHoveringTitle
                    ? 'w-20 h-20 bg-yellow border-yellow mix-blend-difference opacity-80'
                    : isHovering
                        ? 'w-12 h-12 bg-yellow border-yellow mix-blend-difference opacity-80'
                        : 'w-8 h-8 bg-transparent border-silver'
                    }`}
            />
        </div>
    );
}
