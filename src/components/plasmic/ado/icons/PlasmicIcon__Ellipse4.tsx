/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Ellipse4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Ellipse4Icon(props: Ellipse4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 80 123"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.415.994a68 68 0 0152.246 121.51l-4.619-6.191a60.279 60.279 0 0019.332-72.122A60.277 60.277 0 001.731 8.605L.415.995z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Ellipse4Icon;
/* prettier-ignore-end */
