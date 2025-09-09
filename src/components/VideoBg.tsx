import type { MutableRefObject } from "react";

type Props = { videoRef: MutableRefObject<HTMLVideoElement | null> }; // ✅

export default function VideoBg({ videoRef }: Props) {
    return (
        <div className="video-bg">
            <video
                ref={videoRef}
                className="bg-video"
                autoPlay
                muted
                loop
                playsInline

            >
                <source src="/video_bg.mp4" type="video/mp4" />
            </video>
            <div className="bg-overlay" />
        </div>
    );
}