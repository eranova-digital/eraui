import React from "react";
import { ReactNode } from "react";

export function Button({children, icon}: {children: string, icon?: ReactNode}) {

    return (
        <button
            className="flex flex-row bg-primary-500 text-white py-2 px-4 rounded-md transition-all hover:bg-primary-600"
        >{(icon !== undefined && icon !== null) && 
        React.cloneElement(icon as React.ReactElement, {
            className: 'w-6 h-6 mr-2'
        })
        }{children}</button>
    )
}