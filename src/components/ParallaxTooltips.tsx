import {useRef} from "react";
import {type Marker, useParallax} from "../lib/helpers.ts";


type Props = {
    title?: string;
    markers: Marker[];
};


export default function ParallaxTooltips({  title = "Details", markers }: Props) {
    const rootRef = useRef<HTMLElement>(null);
    useParallax(rootRef);

    return (
        <section id="scene-4" className="panel ps" ref={rootRef}>
            <div className="ps__wrap">
                {title && (
                    <h2 className="ps__title" data-speed="28">
                        {title}
                    </h2>
                )}


                <div className="ps__center" data-speed="16" aria-hidden="true">
                    <div className="planet">
                        <div className="planet__float">
                            <img className="planet__spin" src="/planet.svg" alt="planet"/>
                        </div>
                    </div>
                    <div className="ps__glow"/>
                </div>


                <ul className="ps__markers" aria-label="hotspots">
                    {markers.map((m) => (
                        <li
                            key={m.id}
                            className={`ps__marker ${m.side}`}
                            style={{ top: `calc(50% + ${m.offsetY ?? 0}px)` }}
                            data-speed={m.side === "left" ? -12 : 12}
                        >
                            <button className="ps__dot" aria-describedby={`tip-${m.id}`} aria-label={m.label} />
                            <div className="ps__tip" id={`tip-${m.id}`} role="tooltip">
                                <strong>{m.label}</strong>
                                <p>{m.text}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
