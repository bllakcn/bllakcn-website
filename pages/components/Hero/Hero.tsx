// import CubeCanvas from "./Cube";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={`snap-center relative w-full h-screen`}>
      <div className="h-1/2 my-auto max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-9 ">
        <Image
          className="rounded-full h-auto w-36 md:w-1/6 max-w-xs"
          src={"/avatar.jpg"}
          alt="avatar"
          width={150}
          height={150}
        />
        <div className="flex flex-col gap-2 items-center font-medium text-5xl md:text-6xl">
          <h2>
            Hi, I&apos;m{" "}
            <span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-indigo-900">
              Bilal
            </span>
          </h2>
          <p className="text-2xl whitespace-nowrap font-mono text-neutral-500">
            &#47;&#47; I develop user interfaces
          </p>
        </div>
        {/* TODO: threejs */}
        {/* <CubeCanvas /> */}
      </div>
    </section>
  );
}
