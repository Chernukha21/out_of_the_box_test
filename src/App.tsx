import {useRef} from "react";
import VideoBg from "./components/VideoBg";
import Sections from "./components/Sections";


export default function App() {
    const bgVideoRef = useRef<HTMLVideoElement>(null); // общий ref

    return (
        <>
            <VideoBg videoRef={bgVideoRef} />
            <div style={{ position: "relative", zIndex: 1 }}>
                <Sections bgVideoRef={bgVideoRef} />
            </div>
        </>
    );
}