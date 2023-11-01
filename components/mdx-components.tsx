import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";

const components: MDXComponents = {
  Image,
  a: ({ href, children }) => (
    <Link as={NextLink} href={href as string}>
      {children}
    </Link>
  ),
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
