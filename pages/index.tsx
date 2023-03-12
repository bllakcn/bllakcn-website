import styles from "./index.module.css";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <div className={`${styles.main} snap-y snap-mandatory`}>
      <Hero />
    </div>
  );
}
