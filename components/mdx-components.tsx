import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import FastSvg from "./Portfolio/TechStack/Fast";
import PythonSvg from "./Portfolio/TechStack/Python";

const components: MDXComponents = {
  ImageComponent,
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

function ImageComponent({
  src,
  alt,
  width,
  height,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
}) {
  return (
    <Image as={NextImage} src={src} alt={alt} width={width} height={height} />
  );
}
