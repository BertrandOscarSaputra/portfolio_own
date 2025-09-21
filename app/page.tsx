import Galaxy from "./components/galaxy";

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl z-10">
        Welcome to My Portfolio
      </h1>
      <Galaxy
        mouseRepulsion={true}
        mouseInteraction={true}
        density={1.5}
        glowIntensity={0.5}
        saturation={0.8}
        hueShift={240}
      />
    </div>
  );
}
