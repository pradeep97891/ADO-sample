/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse3Icon(props: Ellipse3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 109 136"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M108.559 122.58a67.993 67.993 0 01-58.3 11.065 68.008 68.008 0 01-44.79-38.927A68 68 0 0156.596.963l1.296 7.615a60.276 60.276 0 1046.06 107.802l4.607 6.2z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse3Icon;
/* prettier-ignore-end */
