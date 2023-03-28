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
      <div className="flex gap-4 justify-start items-baseline p-2">
        <SlPaperPlane className="" />
        <h3 className="tracking-widest">contact me</h3>
      </div>
      <ul className="flex gap-2 opacity-90 p-2 items-center">
        <li>
          <Link href="https://www.instagram.com/bllakcn/" target="_blank">
            <SlSocialInstagram className="text-4xl p-1" />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/bllakcn" target="_blank">
            <SlSocialTwitter className="text-4xl p-1" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/ahmet-bilal-akcan-646269133/"
            target="_blank"
          >
            <SlSocialLinkedin className="text-4xl p-1" />
          </Link>
        </li>
        <li>
          <Link href="mailto:bllakcn36@gmail.com" target="_blank">
            <SlEnvolope className="text-4xl p-1" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
