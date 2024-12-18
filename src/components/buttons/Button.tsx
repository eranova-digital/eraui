import React from "react";
import { ReactNode } from "react";

export function Button({children, prefix, suffix}: {children: string, prefix?: ReactNode, suffix?: ReactNode}) {

    return (
        <button
            className="flex flex-row bg-primary-500 text-white py-2 px-4 rounded-md transition-all hover:bg-primary-400
            active:bg-primary-600 active:scale-[98%]
            "
        >
        {(prefix !== undefined && prefix !== null) && 
            React.cloneElement(prefix as React.ReactElement, {
                className: 'w-5 h-5 mt-0.5 mr-2'
            })
        }
        {children}
        {(suffix !== undefined && suffix !== null) &&
            React.cloneElement(suffix as React.ReactElement, {
                className: 'w-5 h-5 mt-0.5 ml-2'
            })
        }
        </button>
    )
}