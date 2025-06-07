import Image from "next/image";

export default function Loading() {
    return (
        <div className="max-w-full my-6">
            <Image
                src="/spinner.svg"
                alt="Loading"
                width={30}
                height={30}
                className="animate-spin block mx-auto"
            />
        </div>
    )
}