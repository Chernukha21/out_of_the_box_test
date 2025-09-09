import {type MutableRefObject, useLayoutEffect, useRef} from "react";
import { gsap } from "../lib/gsap";
import ParallaxTooltips from "./ParallaxTooltips.tsx";
import {markers} from "../lib/helpers.ts";
import type {Marker} from "../lib/helpers.ts";

type Props = { bgVideoRef: MutableRefObject<HTMLVideoElement> };

function Sections({ bgVideoRef }: Props) {
    const root = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const videoEl = bgVideoRef.current;
        if (!videoEl) return;

        const ctx = gsap.context(() => {
            gsap.set(videoEl, { transformOrigin: "center center", scale: 1 });
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: "#scene-1",
                        start: "top top",
                        end: "+=120%",
                        scrub: true,
                        pin: true,
                    },
                })
                .fromTo(
                    "#title-1",
                    { scale: 1, opacity: 1 },
                    { scale: 1.4, opacity: 0.25, ease: "none" },
                );

            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: "#scene-2",
                        start: "top top",
                        end: "+=150%",
                        scrub: true,
                        pin: false,
                    },
                })
                .to(videoEl, { scale: 1.3, ease: "none" });
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: "#scene-3",
                        start: "top top",
                        end: "+=100%",
                        scrub: true,
                        pin: true,
                    },
                })
                .from("#subtitle", { yPercent: 30, opacity: 0, ease: "none" }, 0)
                .from("#copy", { yPercent: 15, opacity: 0, ease: "none" }, 0.1);
        }, root);

        return () => ctx.revert();
    }, [bgVideoRef]);

    return (
        <div ref={root}>
            <section id="scene-1" className="panel center">
                <h1 id="title-1" className="title">
                    Out of the box systems
                    <br />
                    test task
                </h1>
            </section>

            <section id="scene-2" className="panel center">
                <h2 className="subtitle">Zooming background</h2>
            </section>

            <section id="scene-3" className="panel center">
                <div>
                    <h2 id="subtitle" className="subtitle">The Legacy</h2>
                    <p id="copy" className="copy">
                        Scroll-driven storytelling with cinematic transitions.
                    </p>
                </div>
            </section>

            <ParallaxTooltips
                title="Details"
                markers={markers as Marker[]}
            />
        </div>
    );
}

export default Sections