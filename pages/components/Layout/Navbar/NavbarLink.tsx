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
      className={`py-4 sm:py-3 px-4 text-lg hover:text-neutral-50 flex gap-2 items-center justify-center`}
      href={link}
      passHref
    >
      <Icon />
      {content}
    </Link>
  );
}
