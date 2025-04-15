/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line1849IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line1849Icon(props: Line1849IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 990 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M1 1h988"}
        stroke={"currentColor"}
        strokeWidth={".848"}
        strokeLinecap={"round"}
      ></path>
    </svg>
  );
}

export default Line1849Icon;
/* prettier-ignore-end */
