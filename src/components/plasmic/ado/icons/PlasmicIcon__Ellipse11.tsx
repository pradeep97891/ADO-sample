/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse11Icon(props: Ellipse11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 142"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M33.596 141.435A81.497 81.497 0 01.482 66.653 81.5 81.5 0 0148.955.78L63.6 34.404a44.826 44.826 0 00-8.447 77.36l-21.557 29.671z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse11Icon;
/* prettier-ignore-end */
