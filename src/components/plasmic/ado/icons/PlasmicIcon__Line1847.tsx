/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line1847IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line1847Icon(props: Line1847IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 67 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M1 1h64.906"}
        stroke={"currentColor"}
        strokeWidth={"1.697"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Line1847Icon;
/* prettier-ignore-end */
