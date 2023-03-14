import Link from "next/link";
import { IconType } from "react-icons/lib";

type NavbarLinkProps = {
  link: string;
  content: string;
  Icon: IconType;
};

export default function NavbarLink({ link, content, Icon }: NavbarLinkProps) {
  return (
    <Link
      className={`py-4 sm:py-3 px-4 text-lg font-bold flex gap-2 items-center justify-center hover:text-primary`}
      href={link}
      passHref
    >
      <Icon className="stroke-2" />
      {content}
    </Link>
  );
}
