import { Button } from "@nextui-org/button";
import NextLink from "next/link";
import { IoArrowBack} from "react-icons/io5"

export default function NotFound(){
  return (
    <div className="min-h-screen mx-auto flex justify-center items-center">
      <div className="flex flex-col gap-3 items-center justify-center p-10 ">
      <h2 className="font-bold text-xl">Not Found</h2>
      <p className="mb-2">Could not find requested resource.</p>
      <Button endContent={<IoArrowBack/>} variant="flat" as={NextLink} href="/">Return Home</Button>
    </div>
    </div>
  )
}