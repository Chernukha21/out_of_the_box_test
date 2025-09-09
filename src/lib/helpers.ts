import {type MutableRefObject,  useEffect} from "react";

export function useParallax(root:MutableRefObject<HTMLElement | null>) {
    useEffect(() => {
        const el = root.current;
        if (!el) return;

        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reduced) return;

        const items = Array.from(el.querySelectorAll<HTMLElement>("[data-speed]"));
        let raf = 0;

        const onScroll = () => {
            if (raf) return;
            raf = requestAnimationFrame(() => {
                const rect = el.getBoundingClientRect();
                const vh = window.innerHeight || 1;
                // нормализованный прогресс секции в пределах экрана (-1..1)
                const progress = 1 - Math.min(Math.max(rect.top / vh, -1), 1);
                items.forEach((node) => {
                    const speed = parseFloat(node.dataset.speed || "0");
                    node.style.transform = `translate3d(0, ${progress * speed}px, 0)`;
                });
                raf = 0;
            });
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("scroll", onScroll);
            items.forEach((n) => (n.style.transform = ""));
        };
    }, [root]);
}

export const markers = [
    { id: "a", label: "Vibranium Core", text: "High-energy component with inertial stabilization matrix.", side: "left",  offsetY: -90 },
    { id: "b", label: "Adaptive Mesh",   text: "Elastic nano-fibers dynamically responding to motion vectors.", side: "right", offsetY: -20 },
    { id: "c", label: "Kinetic Shield",  text: "Distributes impact energy across the surface through waveforms.", side: "left",  offsetY: 70 },
    { id: "d", label: "Holo Layer",      text: "Sub-surface projection for UI and telemetry feedback.", side: "right", offsetY: 150 },
]

export type Marker = {
    id: string;
    label: string;
    text: string;
    side: "left" | "right";
    offsetY?: number;
};
