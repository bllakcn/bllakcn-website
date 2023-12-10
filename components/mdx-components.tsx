import { useMDXComponent } from "next-contentlayer/hooks";
import type { MDXComponents } from "mdx/types";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import FastSvg from "./Portfolio/TechStack/Fast";
import PythonSvg from "./Portfolio/TechStack/Python";
import { Chip } from "@nextui-org/chip";
import { IoAlertOutline, IoInformationOutline } from "react-icons/io5";
import { Badge } from "@nextui-org/badge";
import { cn } from "@/libs/utils";

const components: MDXComponents = {
  WarningComponent,
  InformationComponent,
  ImageComponent,
  a: ({ href, children }) => LinkComponent({ href, children }),
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

function LinkComponent({
  href,
  children,
}: {
  href: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <Link isExternal showAnchorIcon as={NextLink} href={href}>
      {children}
    </Link>
  );
}

function ImageComponent({
  src,
  alt,
  width,
  height,
  description,
  props,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  description: string;
  props: React.ComponentProps<typeof Image>;
}) {
  return (
    <>
      <Image
        as={NextImage}
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(description && "mb-0")}
        {...props}
      />
      <p className="mt-0">{description}</p>
    </>
  );
}

function WarningComponent({ content }: { content: string }) {
  return (
    <Badge
      placement="top-left"
      variant="solid"
      className="p-1"
      content={<IoAlertOutline size={15} />}
    >
      <Chip
        classNames={{ base: "pl-8 pr-5" }}
        className="h-auto whitespace-normal"
        variant="faded"
      >
        <p className="my-0 py-1">{content}</p>
      </Chip>
    </Badge>
  );
}

function InformationComponent({ content }: { content: string }) {
  return (
    <Badge
      placement="top-left"
      variant="solid"
      className="p-1"
      content={<IoInformationOutline size={15} />}
    >
      <Chip
        classNames={{ base: "pl-8 pr-5" }}
        className="h-auto whitespace-normal"
        variant="flat"
      >
        <p className="my-0 py-1">{content}</p>
      </Chip>
    </Badge>
  );
}
