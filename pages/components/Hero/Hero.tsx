// import CubeCanvas from "./Cube";
import Image from "next/image";
import Card from "../Card";

export default function Hero() {
  return (
    <section className={`snap-center relative w-full h-screen`}>
      {/* TODO: threejs */}
      {/* <CubeCanvas /> */}
      <Card>
        <div className="flex flex-row justify-start gap-4 items-center">
          <Image
            className="rounded-full h-auto w-36 md:w-1/6 max-w-xs"
            src={"/avatar.jpg"}
            alt="avatar"
            width={150}
            height={150}
          />
          <div className="text-4xl font-bold">
            <h2>
              Hi, I&apos;m{" "}
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-indigo-900">
                Bilal
              </span>
            </h2>
            <p className="text-2xl whitespace-nowrap font-medium font-mono text-neutral-500 px-1">
              &#47;&#47; I develop user interfaces
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}
