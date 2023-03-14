// import CubeCanvas from "./Cube";
import styles from "./Hero.module.css";
import Image from "next/image";
import Card from "../Card";
import { CardDetails } from "../CardDetails";

export default function Hero() {
  return (
    <section
      className={`snap-center pt-28 p-8 min-h-screen max-w-[100rem] mx-auto`}
    >
      <div className="min-w-min w-7/12 mx-auto sm:mx-0 flex flex-col gap-6">
        {/* TODO: threejs */}
        {/* <CubeCanvas /> */}
        <Card>
          <div className="flex flex-col sm:flex-row justify-start gap-8 items-center">
            <Image
              className="rounded-full h-auto w-36 max-w-xs border border-primary"
              src={"/avatar.jpg"}
              alt="avatar"
              width={150}
              height={150}
            />
            <div className="text-5xl font-normal">
              <h2>
                Hi, I&apos;m{" "}
                <span className="font-bold text-primary">Bilal</span>
              </h2>
              <p className="text-xl whitespace-nowrap font-normal italic text-neutral-500 px-1">
                &#47;&#47; I develop user interfaces
              </p>
            </div>
          </div>
        </Card>
        <CardDetails title={"About Me"}>
          <p>
            Architecture graduate freelancing in tech. Passionate about
            designing and developing that great{" "}
            <span
              className={`${styles.detailSpan} underline decoration-wavy decoration-primary underline-offset-2`}
            >
              user experience
            </span>
            .
          </p>
        </CardDetails>
      </div>
    </section>
  );
}
