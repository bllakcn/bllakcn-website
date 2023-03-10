import Link from "next/link";

type NavbarLinkProps = {
  link: string;
  content: string;
  className?: string;
};

export default function NavbarLink({
  link,
  content,
  className,
}: NavbarLinkProps) {
  return (
    <Link
      className={`py-2 px-4 hover:text-neutral-50 ${className}`}
      href={link}
    >
      {content}
    </Link>
  );
}
