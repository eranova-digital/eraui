import clsx from "clsx";
import React, { CSSProperties, ReactNode } from "react";

// Common props for all headings
interface HeadingProps {
  /**
   * Content inside the heading element.
   */
  children: ReactNode;

  /**
   * Toggles the font weight to `font-black` if `true`, otherwise uses `font-semibold`.
   * @default false
   */
  bold?: boolean;

  /**
   * Custom CSS class for additional styling.
   */
  className?: string;

  /**
   * Inline styles for the heading element.
   */
  style?: CSSProperties;

  /**
   * A colored accent line.
   */
  accent?: string;

  /**
   * Preserve the case of the child <sub> element. If false, <sub> will use `uppercase`.
   */
  subtitlePreserveCase?: boolean
}

// Utility function to calculate the sub font size based on the heading size
const calculateSubSize = (size: string): string => {
  const sizeMap: { [key: string]: string } = {
    "6xl": "3xl", // text-5xl -> text-3xl for <sub>
    "5xl": "2xl", // text-5xl -> text-3xl for <sub>
    "4xl": "xl", // text-4xl -> text-2xl for <sub>
    "3xl": "base",  // text-3xl -> text-lg for <sub>
    "2xl": "sm",  // text-3xl -> text-lg for <sub>
    "xl": "xs",  // text-3xl -> text-lg for <sub>
  };
  return sizeMap[size] || "base"; // default to "base" if unknown
};
const calculateSubMargin = (size: string): string => {
    const marginMap: { [key: string]: string } = {
      "6xl": "3", // text-5xl -> text-3xl for <sub>
      "5xl": "2", // text-5xl -> text-3xl for <sub>
      "4xl": "1.5", // text-4xl -> text-2xl for <sub>
      "3xl": "1",  // text-3xl -> text-lg for <sub>
      "2xl": "0.5",  // text-3xl -> text-lg for <sub>
      "xl": "0",  // text-3xl -> text-lg for <sub>
    };
    return marginMap[size] || "0"; // default to "base" if unknown
  };

// Generic Heading component
const H: React.FC<HeadingProps & { size: string, as: keyof JSX.IntrinsicElements }> = ({
  children,
  bold = false,
  className,
  style,
  accent,
  subtitlePreserveCase,
  size,
  as: Tag = "h1",
}) => {
  const subFontSize = calculateSubSize(size); // Get sub font size
  const subTopMargin = calculateSubMargin(size); // Get sub padding

  // Render the heading with possible <sub> elements
  return (
    <div
        className={clsx(`flex flex-row`)}
    >
        {accent && 
        <div
            className={clsx(`w-2 mr-4 mt-0.5 rounded-sm ${accent}`)}
        />
        }
        <Tag
          className={clsx(`text-neutral-900 text-nowrap text-${size} ${bold ? 'font-black' : 'font-semibold'} ${className} block`)}
          style={style}
        >
          {React.Children.map(children, (child) => {
            if (typeof child === "string") return child;

            // If the child is a <sub> element, apply the dynamic sub-size class
            if (React.isValidElement(child) && child.type === "sub") {
                return React.cloneElement(child as React.ReactElement<HTMLSpanElement>, {  // Cast child to React.ReactElement
                    className: clsx(`bottom-0 leading-none ${!bold && `mt-${subTopMargin}`} text-neutral-700 tracking-wide text-${subFontSize} ${bold ? 'font-semibold' : 'font-black'} ${child.props.className || ''} ${subtitlePreserveCase ? '' : 'uppercase'} block`), // Apply sub size class
                });
            }
            return child;
          })}
        </Tag>
    </div>
  );
};

// Specific Heading components using the generic Heading component
export const H1: React.FC<HeadingProps> = (props) => <H {...props} size="6xl" as="h1" />;
export const H2: React.FC<HeadingProps> = (props) => <H {...props} size="5xl" as="h2" />;
export const H3: React.FC<HeadingProps> = (props) => <H {...props} size="4xl" as="h3" />;
export const H4: React.FC<HeadingProps> = (props) => <H {...props} size="3xl" as="h4" />;
export const H5: React.FC<HeadingProps> = (props) => <H {...props} size="2xl" as="h5" />;
export const H6: React.FC<HeadingProps> = (props) => <H {...props} size="xl" as="h6" />;
