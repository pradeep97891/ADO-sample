/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Fd761A3509IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Fd761A3509Icon(props: Fd761A3509IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M0 0h20v24H0V0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Fd761A3509Icon;
/* prettier-ignore-end */
