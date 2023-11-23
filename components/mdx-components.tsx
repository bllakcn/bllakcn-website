import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import FastSvg from "./Portfolio/TechStack/Fast";
import PythonSvg from "./Portfolio/TechStack/Python";
import { Chip } from "@nextui-org/chip";
import { IoAlertOutline } from "react-icons/io5";
import { Badge } from "@nextui-org/badge";

const components: MDXComponents = {
  WarningComponent,
  ImageComponent,
  a: ({ href, children }) => (
    <Link as={NextLink} href={href as string} target="_blank">
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

function WarningComponent({ children }: { children: React.ReactNode }) {
  return (
    <Badge
      placement="top-left"
      variant="faded"
      className="p-1"
      content={<IoAlertOutline size={20} />}
    >
      <Chip classNames={{ base: "pl-8 pr-5" }} variant="faded">
        {children}
      </Chip>
    </Badge>
  );
}
