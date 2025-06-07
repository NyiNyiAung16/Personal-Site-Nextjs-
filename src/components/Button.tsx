export default function Button({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <button className={`button ${className}`}>{children}</button>
    )
}