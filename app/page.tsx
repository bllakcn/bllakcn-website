import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { compareDesc, format, parseISO } from "date-fns";
import HeroSection from "@/components/HeroSection/HeroSection";
import CVSection from "@/components/CVSection/CVSection";

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );
  return (
    <>
      <HeroSection />
      <CVSection />
    </>
    // <div className="prose dark:prose-invert">
    //   {allPosts.map((post) => (
    //     <article key={post._id}>
    //       <Link href={post.slug}>
    //         <h2>{post.title}</h2>
    //       </Link>
    //       <time
    //         dateTime={post.date}
    //         className="mb-2 block text-xs text-content4 dark:text-content4-dark"
    //       >
    //         {format(parseISO(post.date), "MMMM d, yyyy")}
    //       </time>
    //       {post.description && <p>{post.description}</p>}
    //     </article>
    //   ))}
    // </div>
  );
}
