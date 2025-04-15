/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse9IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse9Icon(props: Ellipse9IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 45"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M49.559 44.974A81.5 81.5 0 01.386 30.002L21.587.076A44.825 44.825 0 0048.632 8.31l.927 36.663z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse9Icon;
/* prettier-ignore-end */
