import { createFileRoute } from "@tanstack/react-router";
import { motion, type Variants } from "motion/react";
import About from "@/components/site/About/About";

const containerVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			duration: 0.3,
		},
	},
};

const sectionVariants: Variants = {
	hidden: { opacity: 0, y: "20%", filter: "blur(3px)" },
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<motion.div initial="hidden" animate="show" variants={containerVariants}>
			<motion.section
				variants={sectionVariants}
				className="mx-auto w-full max-w-5xl space-y-5 p-4"
			>
				<div className="w-full space-y-2">
					<p className="leading-relaxed">
						Hi, I&apos;m Bilal. I&apos;m a web developer based in the
						Netherlands. I love crafting UI that sparks joy. I work comfortably
						in full-stack environments. <br /> I&apos;m currently working on a
						no-code trading algorithm builder where you can create your own
						trading algorithm and run it on your own portfolio.
					</p>
				</div>
			</motion.section>
			<motion.section
				variants={sectionVariants}
				className="mx-auto w-full max-w-5xl space-y-5 p-4"
			>
				<About />
			</motion.section>
		</motion.div>
	);
}
