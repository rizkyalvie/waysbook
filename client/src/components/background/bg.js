import left from "../../assets/background/left.png";
import right from "../../assets/background/right.png";

export default function Background() {
  return (
    <div
      style={{
        width: "100%",
        height: "35rem",
        backgroundColor: "white",
        position: "absolute",
        left: "0",
        top: "0",
        display: "flex",
        gap: "30rem",
      }}
    >
      <img
        style={{ opacity: "30%", width: "40rem", height: "40rem", objectFit:'cover' }}
        src={left}
        alt=""
      />
      <img
        style={{ opacity: "30%", width: "20rem", height: "20rem" }}
        src={right}
        alt=""
      />
    </div>
  );
}
