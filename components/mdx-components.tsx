import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import FastSvg from "./Portfolio/TechStack/Fast";
import PythonSvg from "./Portfolio/TechStack/Python";

const components: MDXComponents = {
  Image,
  a: ({ href, children }) => (
    <Link as={NextLink} href={href as string}>
      {children}
    </Link>
  ),
  FastSvg,
  PythonSvg,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
