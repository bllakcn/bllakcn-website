import Link from "next/link";
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
  SlEnvolope,
  SlPaperPlane,
} from "react-icons/sl";

export default function SocialMedia() {
  return (
    <div className="pl-3 w-full">
      <div className="flex gap-2 justify-start items-baseline p-2">
        <SlPaperPlane className="" />
        <h3 className="tracking-widest">contact me</h3>
      </div>
      <ul className="flex gap-2 opacity-90 px-4 py-2">
        <li>
          <Link href="https://www.instagram.com/bllakcn/" target="_blank">
            <SlSocialInstagram className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/bllakcn" target="_blank">
            <SlSocialTwitter className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/ahmet-bilal-akcan-545259133/"
            target="_blank"
          >
            <SlSocialLinkedin className="w-5 h-5" />
          </Link>
        </li>
        <li>
          <Link href="mailto:bllakcn35@gmail.com" target="_blank">
            <SlEnvolope className="w-5 h-5" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
