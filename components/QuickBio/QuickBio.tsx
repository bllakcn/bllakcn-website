import { Link } from "@nextui-org/link";
import { IoArrowForward } from "react-icons/io5";
import NextLink from "next/link";

export default function QuickBio() {
  return (
    <section className="px-4 py-36 pt-0 sm:pt-36 relative">
      <div className="py-12 max-w-3xl">
        <h2 className="font-medium text-5xl pb-2">Quick Bio</h2>
        <h4 className="italic pb-6 text-lg">
          &quot;Architectural visionary turned self-taught web developer.&quot;
        </h4>
        <p className="text-lg pb-2">
          I love creating beautiful and functional websites that seemlessly
          enfolder accessibility. I am driven by motivation and results. I am a
          team player who thrives on challenges. I am always looking for new
          ways to learn and grow. I am excited to continue my journey as a
          full-stack developer.
          <br />
          <br />I enjoy photography, videography and coffee making in spare
          time.
        </p>
        <Link isBlock href="/portfolio" as={NextLink}>
          <p>Get to know more</p>
          <IoArrowForward size="16" className="pt-1" strokeWidth="2" />
        </Link>
      </div>
    </section>
  );
}
