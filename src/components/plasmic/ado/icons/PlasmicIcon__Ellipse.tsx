/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EllipseIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EllipseIcon(props: EllipseIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 163 107"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M159.011.315a81.503 81.503 0 01-40.33 97.71 81.504 81.504 0 01-73.88.245A81.5 81.5 0 013.823.83l8.824 2.803a72.243 72.243 0 10137.559-.457l8.805-2.86z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EllipseIcon;
/* prettier-ignore-end */
