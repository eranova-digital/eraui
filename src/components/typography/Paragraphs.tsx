import { ReactNode } from "react";

export function P({children, className}: {children: ReactNode, className?: string}) {
    return (
        <p
            className={`text-neutral-700 font-medium leading-relaxed ${className}`}
        >{children}</p>
    )
}

export function Fineprint({children, className}: {children: ReactNode, className?: string}) {
    return (
        <p
        className={`text-neutral-700 font-medium leading-snug tracking-tight ${className}`}
        ><small>{children}</small></p>
    )
}