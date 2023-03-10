import Link from "next/link";
import { IconType } from "react-icons/lib";

type NavbarLinkProps = {
  link: string;
  content: string;
  className?: string;
  Icon: IconType;
};

export default function NavbarLink({
  link,
  content,
  className,
  Icon,
}: NavbarLinkProps) {
  return (
    <Link
      className={`py-3 px-4 hover:text-neutral-50 flex gap-2 items-center ${className}`}
      href={link}
      passHref
    >
      <Icon />
      {content}
    </Link>
  );
}
