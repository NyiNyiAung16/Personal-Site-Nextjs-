import Link from "next/link";

export default function BaseLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`hover:text-[#636AE8FF] hover:font-semibold transition duration-300 ease-ixn-out ${className}`}
    >
      {children}
    </Link>
  );
}
