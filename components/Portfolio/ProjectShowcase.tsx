import { Project } from "@/app/types/Portfolio";
import { Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { IoLogoGithub, IoArrowForwardCircleSharp } from "react-icons/io5";

export default function ProjectShowcase({
  title,
  description,
  image,
  github,
  link,
}: Project) {
  return (
    <Card>
      <CardHeader className="flex flex-col items-start">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="italic">{description}</p>
      </CardHeader>
      <CardBody className="p-1">
        <Image
          src={image}
          alt={title}
          className="relative justify-between rounded"
        />
      </CardBody>
      <CardFooter className="justify-between">
        <Link as={NextLink} href={github} isExternal>
          <IoLogoGithub size={46} />
        </Link>
        <Link
          as={NextLink}
          isBlock
          href={link}
          isExternal
          className="group gap-1"
        >
          <span className="opacity-0 transition-all group-hover:opacity-100">
            Try it out
          </span>
          <IoArrowForwardCircleSharp size={46} />
        </Link>
      </CardFooter>
    </Card>
  );
}
