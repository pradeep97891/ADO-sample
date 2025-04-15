/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse1880IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse1880Icon(props: Ellipse1880IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 2 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.665 1.254c.367 0 .665-.281.665-.627S1.032 0 .665 0C.298 0 0 .28 0 .627c0 .346.298.627.665.627z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse1880Icon;
/* prettier-ignore-end */
