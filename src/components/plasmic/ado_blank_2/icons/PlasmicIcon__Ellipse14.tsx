/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse14Icon(props: Ellipse14IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 9"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.02 8.046c2.22 0 4.02-1.801 4.02-4.023C8.04 1.801 6.24 0 4.02 0A4.022 4.022 0 000 4.023c0 2.222 1.8 4.023 4.02 4.023z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse14Icon;
/* prettier-ignore-end */
