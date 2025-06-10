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
      className={`link hover:link-primary no-underline ${className}`}
    >
      {children}
    </Link>
  );
}
