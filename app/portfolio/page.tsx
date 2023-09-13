import TechJourney from "@/components/Portfolio/TechJourney";
import Showcase from "@/components/Portfolio/Showcase";

export default function Portfolio() {
  return (
    <section className="px-4 py-9 sm:py-36">
      <h2 className="scroll-m-20 pb-4 text-4xl font-bold tracking-tight lg:text-5xl">
        Portfolio
      </h2>
      <TechJourney />
      <Showcase />
    </section>
  );
}
