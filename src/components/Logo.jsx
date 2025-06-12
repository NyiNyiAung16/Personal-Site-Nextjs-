import getAbsoluteUrl from "@/utils/getAbsoluteUrl";
import Image from "next/image";

export default function Logo({logo}) {

    return (
        // <img src="/coding.svg" alt="logo" width={"50px"}/>
        <Image
            src={getAbsoluteUrl(logo?.url)}
            alt={logo.name}
            width={50}
            height={50}
        />
    )
}