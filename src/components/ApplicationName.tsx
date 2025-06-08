export default function ApplicationName({ className, name }: { className?: string; name?: string }) {
    return <h3 className={`font-bold text-2xl ${className}`} style={{ fontFamily: 'Archivo'}}>{name || 'Blogify'}</h3>
}