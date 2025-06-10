import Link from "next/link";

export default function ApplicationName({ className, name }: { className?: string; name: string }) {
    return (
        <Link href="/" className="link no-underline">
            <h3 className={`font-bold text-2xl ${className}`} style={{ fontFamily: 'Archivo'}}>{name}</h3>
        </Link>
    )
}