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
  technologies,
}: Project) {
  return (
    <Card>
      <CardHeader className="flex flex-col items-start">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="italic">{description}</p>
      </CardHeader>
      <CardBody className="h-full p-1">
        <Image
          src={image}
          alt={title}
          className="relative h-full justify-between rounded object-cover"
        />
      </CardBody>
      <CardFooter className="justify-between">
        <Link as={NextLink} href={github} isExternal>
          <IoLogoGithub size={42} />
        </Link>
        <div className="flex gap-2">
          {technologies.map((Tech, index) => (
            <Tech
              className="h-10 w-10 saturate-0 transition-all hover:saturate-100"
              key={index}
            />
          ))}
        </div>
        <Link as={NextLink} href={link} isExternal>
          <IoArrowForwardCircleSharp size={42} />
        </Link>
      </CardFooter>
    </Card>
  );
}
