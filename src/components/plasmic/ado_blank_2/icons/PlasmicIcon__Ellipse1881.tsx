/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse1881IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse1881Icon(props: Ellipse1881IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1 1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.4.751C.62.751.797.583.797.376.798.168.62 0 .4 0 .18 0 0 .168 0 .376 0 .583.179.75.4.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse1881Icon;
/* prettier-ignore-end */
