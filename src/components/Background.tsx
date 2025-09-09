
const Background = () => {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 0,
                overflow: "hidden",
            }}
        >
            <img
                src="/bg.svg"
                alt=""
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "radial-gradient(80% 60% at 50% 50%, rgba(0,0,0,.0), rgba(0,0,0,.55))",
                }}
            />
        </div>
    );
};

export default Background;