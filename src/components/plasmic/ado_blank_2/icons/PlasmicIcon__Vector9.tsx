/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector9Icon(props: Vector9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.401 10a5.001 5.001 0 003.536-8.536A5 5 0 003.401 5a5.006 5.006 0 005 5zm0-8.571c.948 0 1.856.376 2.525 1.046a3.567 3.567 0 010 5.05 3.567 3.567 0 01-5.05 0 3.567 3.567 0 01.001-5.049 3.575 3.575 0 012.524-1.047zm8.357 15.975a7.317 7.317 0 00-.421-1.262c-1.273-2.907-4.313-4.713-7.936-4.713-4.112 0-7.462 2.374-8.338 5.907A2.149 2.149 0 002.146 20H14.66a2.155 2.155 0 001.7-.824 2.076 2.076 0 00.398-1.772zm-1.518.886a.733.733 0 01-.578.281H2.146a.719.719 0 01-.696-.892c.725-2.929 3.45-4.822 6.95-4.822 3.046 0 5.584 1.478 6.625 3.857.144.329.258.67.341 1.02a.65.65 0 01-.13.556h.003z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector9Icon;
/* prettier-ignore-end */
