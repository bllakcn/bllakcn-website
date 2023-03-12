import CubeCanvas from "./Cube";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.hero} relative w-full h-screen`}>
      <div className="h-1/2 my-auto max-w-7xl mx-auto flex flex-row items-center justify-center gap-5 ">
        <CubeCanvas />
        <div className="font-bold text-3xl">
          <h2>
            Hi, I&apos;m{" "}
            <span className="text-sky-600 font-extrabold">Bilal</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
