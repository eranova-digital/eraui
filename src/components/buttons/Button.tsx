import clsx from "clsx";
import React from "react";
import { ReactNode } from "react";

interface ButtonProps {
    /**
    * Content inside the button.
    */
    children?: string,

    /**
    * Icon to the left of the content.
    */
    prefix?: ReactNode,

    /**
    * Icon to the right of the content.
    */
    suffix?: ReactNode,

    /**
    * Icon to the right of the content.
    */
    icon?: ReactNode

    /**
    * Background color for the button.
    * @default bg-primary-500
    */
    color?: string
}

export function Button({children, prefix, suffix, icon, color = "bg-primary-500"}: ButtonProps) {
    const hoverColorClass = `${color.split('-')[0]}-${color.split('-')[1]}-${Number(color.split('-')[2])-100}`;
    const activeColorClass = `${color.split('-')[0]}-${color.split('-')[1]}-${Number(color.split('-')[2])+100}`;

    return (
        <button
            className={clsx(`
            flex flex-row ${color} text-white py-2 px-4 rounded-md transition-all hover:${hoverColorClass}
            active:${activeColorClass} active:scale-[98%]    
            `)}
        >
        {children && 
        <>
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
            {(suffix === undefined && icon !== undefined && icon !== null) &&
                React.cloneElement(icon as React.ReactElement, {
                    className: 'w-5 h-5 mt-0.5 ml-2'
                })
            }
        </>
        }
        {!children && 
        React.cloneElement(icon as React.ReactElement, {
            className: 'w-5 h-5 mt-0.5'
        })
        }
        </button>
    )
}