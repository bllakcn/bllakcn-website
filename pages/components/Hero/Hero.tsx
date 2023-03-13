// import CubeCanvas from "./Cube";
import Image from "next/image";
import Card from "../Card";

export default function Hero() {
  return (
    <section
      className={`snap-center relative w-full min-h-screen flex justify-center items-start sm:justify-between`}
    >
      {/* TODO: threejs */}
      {/* <CubeCanvas /> */}
      <Card>
        <div className="flex flex-col sm:flex-row justify-start gap-8 items-center">
          <Image
            className="rounded-full h-auto w-36 max-w-xs border border-cyan-600"
            src={"/avatar.jpg"}
            alt="avatar"
            width={150}
            height={150}
          />
          <div className="text-5xl font-normal">
            <h2>
              Hi, I&apos;m{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 to-indigo-900">
                Bilal
              </span>
            </h2>
            <p className="text-xl whitespace-nowrap font-normal italic text-neutral-500 px-1">
              &#47;&#47; I develop user interfaces
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}
